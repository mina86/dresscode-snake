/** @license
 * Snake game framework.
 * Copyright Google, Inc. All rights reserved.
 * Written by Michal Nazarewicz <mina86@mina86.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


var game = {};


/**
 * Szerokość planszy, innymi słowy, liczba pól w kierunku poziomym.
 * @const {number}
 */
var WIDTH = 40;

/**
 * Wysokość planszy, innymi słowy, liczba pól w kierunku pionowym.
 * @const {number}
 */
var HEIGHT = 30;


/**
 * Kierunek kawałka ciała węża potrzebne przy wywołaniach funkcji
 * game.drawSnakeHead, game.drawSnakeBody oraz game.drawSnakeTail.
 * @enum {string}
 */
var Direction = {
    /** Wąż porusza się z prawej na lewą stronę: ← */
    LEFT: 'l',
    /** Wąż porusza się z lewej na prawą stronę. → */
    RIGHT: 'r',
    /** Wąż porusza się z dołu na górę: ↑ */
    UP: 'u',
    /** Wąż porusza się z góry na dół: ↓ */
    DOWN: 'd',

    /** Wąż porusza się z dołu w lewo: ↰ */
    LEFT_FROM_DOWN: 'ld',
    /** Wąż porusza się z góry w lewo: ↲ */
    LEFT_FROM_UP: 'lu',
    /** Wąż porusza się z dołu w prawo: ↱*/
    RIGHT_FROM_DOWN: 'rd',
    /** Wąż porusza się z góry w prawo: ↳ */
    RIGHT_FROM_UP: 'ru',

    /** Wąż porusza się z lewej w górę: ⬏ */
    UP_FROM_LEFT: 'ul',
    /** Wąż porusza się z lewej w dół: ⬎ */
    DOWN_FROM_LEFT: 'dl',
    /** Wąż porusza się z lewej w górę: ⬑ */
    UP_FROM_RIGHT: 'ur',
    /** Wąż porusza się z lewej w dół: ⬐ */
    DOWN_FROM_RIGHT: 'dr',

    /* Synonimy */

    /** To samo co UP. */
    UP_FROM_DOWN: 'ud',
    /** To samo co DOWN. */
    DOWN_FROM_UP: 'du',
    /** To samo co LEFT. */
    LEFT_FROM_RIGHT: 'lr',
    /** To samo co RIGHT. */
    RIGHT_FROM_LEFT: 'rl',
};


/**
 * Funkcja zwraca liczbę całkowitą z zadanego przedziału.  Przedział jest
 * otwarty z prawej strony, np. random(10, 20) zwróci liczbę całkowitą
 * niemniejszą niż 10 ale mniejszą niż 20.
 * @param {number} n Lewa granica zakresu.
 * @param {number} m Prawa granica zakresu.
 * @return {number} Całkowita liczba losowa k taka, że n ≤ k < m.
 */
var random = function(n, m) {
    return n + ((Math.random() * (m - n)) >>> 0);
};

/**
 * Funkcja zwraca losowy punkt z obszaru gry.  Punkt jest zwracany jako obiekt
 * z polem x oraz y.  Współrzędna x jest z zakresu [0, WIDTH), a y z zakresu [0,
 * HEIGHT).
 * @return {{x:number, y:number}} Losowa współrzędna.
 */
var randomPoint = function() {
    return {x: random(0, WIDTH), y: random(0, HEIGHT)};
};


(function() {
    /** Początkowe opóźnienie. @const {number} */
    var START_TIMEOUT = 1000;

    /** Minimalne opóźnienie.  @const {number} */
    var MIN_TIMEOUT = 100;

    /** Colours for all the objects. @enum {string} */
    var Color = {
        SNAKE: '#aa00ff',
        EYE: '#2196f3',
        GRASS: '#c8e6c9',
        GRID: '#388e3c',
        APPLE: '#f44336',
        STONE: '#424242'
    };

    /** Canvas to draw on.  @const (!HTMLCanvasElement} */
    var canvas = document.getElementById('canvas');
    if (!canvas || !canvas.getContext) {
        alert('Twoja przeglądarka nie obsługuje elementu CANVAS.');
        return;
    }
    /** Context used for drawing.  @const {!CanvasRenderingContext2D} */
    var ctx = canvas.getContext('2d');

    /** H1 element on top of the page.  @const {!HTMLElement} */
    var headerElement = document.getElementById('title');

    /** Scores block on the bottom of the page.  @const {!HTMLElement} */
    var scoresElement = document.getElementById('scores');

    /** Element displaying score value.  @const {!HTMLElement} */
    var scoreElement = document.getElementById('score');

    /** Weather the game is running.  @type {boolean} */
    var running = false;

    /** Called after timeout.  Schedules next timeout if game is still on. */
    var nextMove = function nextMoveInternal() {
        game.timeout = Math.max(game.timeout * 0.97, MIN_TIMEOUT);
        game.nextMove();
        if (running) {
            window.setTimeout(nextMove, game.timeout);
        }
    };

    /** Size of a single box including one of the grid lines. @type {number} */
    var box_size = 10;

    /** Resizes canvas element to the biggest possible size. */
    var resizeCanvas = function resizeCanvas() {
        var r = headerElement.getBoundingClientRect();
        var top = Math.ceil(r.bottom);
        var bottom = Math.floor(scoreElement.getBoundingClientRect().top);
        var width = Math.floor(r.right) - Math.ceil(r.left) - 1;
        var height = bottom - top - 1;
        box_size = Math.max(Math.min(Math.floor((width / WIDTH)),
                                     Math.floor((height / HEIGHT))),
                            2);
        canvas.width = width = WIDTH * box_size + 1;
        canvas.height = height = HEIGHT * box_size + 1;
        canvas.style.top = String(
            top + Math.floor((bottom - top - height) / 2)
        ) + 'px';
        canvas.style.left = String(
            r.left + Math.floor((r.right - r.left - width) / 2)
        ) + 'px';
    };

    window.onresive = resizeCanvas;

    /**
     * Sets displayed score.
     * @param {number} value New score to dispaly.
     */
    game.setScore = function setScore(value) {
        scoreElement.firstChild.nodeValue = String(value);
    };

    /** Starts the game. */
    game.startGame = function startGame() {
        if (running) {
            alert('Gra ciągle trwa.');
            return;
        }

        var el = document.getElementById('welcome');
        if (el) {
            /** @type {!Node} */ (el.parentNode).removeChild(el);
        }

        canvas.style.display = 'block';
        scoresElement.style.display = 'block';
        resizeCanvas();

        game.timeout = START_TIMEOUT;
        game.setScore(1);
        clearBoard();
        game.prepareBoard();

        window.setTimeout(nextMove, game.timeout);

        running = true;
    };

    /** Stops the game when it’s over. */
    game.stopGame = function stopGame() {
        if (running) {
            running = false;
            alert('Wynik: ' + scoreElement.firstChild.nodeValue);
        }
    };

    /** Clears the board and draws the grid. */
    var clearBoard = function clearBoard() {
        var w = (WIDTH + 1) * box_size;
        var h = (HEIGHT + 1) * box_size;
        ctx.fillStyle = Color.GRASS;
        ctx.fillRect(0, 0, w, h);
        ctx.beginPath();
        ctx.strokeStyle = Color.GRID;
        for (var x = 0; x <= WIDTH; ++x) {
            ctx.moveTo(x * box_size + 0.5, 0 + 0.5);
            ctx.lineTo(x * box_size + 0.5, h + 0.5);
        }
        for (var y = 0; y <= HEIGHT; ++y) {
            ctx.moveTo(0 + 0.5, y * box_size + 0.5);
            ctx.lineTo(w + 0.5, y * box_size + 0.5);
        }
        ctx.stroke();
    };

    /**
     * Draws an apple in given cell.
     * @param {{x:number, y:number}} p Grid coordinate of the apple to draw.
     */
    game.drawApple = function drawApple(p) {
        game.drawGrass(p);
        var r = box_size / 2;
        ctx.beginPath();
        ctx.fillStyle = Color.APPLE;
        ctx.arc(p.x * box_size + r, p.y * box_size + r,
                r, 0, Math.PI * 2, false);
        ctx.fill();
    };

    /**
     * Draws a stone in given cell.
     * @param {{x:number, y:number}} p Grid coordinate of the stone to draw.
     */
    game.drawStone = function drawStone(p) {
        game.drawGrass(p);
        ctx.fillStyle = Color.STONE;
        ctx.fillRect(p.x * box_size + 1, p.y * box_size + 1,
                     box_size - 1, box_size - 1);
    };

    /**
     * Draws grass in (i.e. clears) given cell.
     * @param {{x:number, y:number}} p Grid coordinate of the cell to clear.
     */
    game.drawGrass = function drawGrass(p) {
        var x = p.x * box_size;
        var y = p.y * box_size;
        ctx.strokeWidth = '1px';
        ctx.strokeStyle = Color.GRID;
        ctx.fillStyle = Color.GRASS;
        ctx.fillRect(x, y, box_size + 1, box_size + 1);

        ctx.beginPath();
        x += 0.5;
        y += 0.5;
        ctx.moveTo(x, y);
        ctx.lineTo(x + box_size, y);
        ctx.lineTo(x + box_size, y + box_size);
        ctx.lineTo(x, y + box_size);
        ctx.closePath();
        ctx.stroke();
    };

    /**
     * Mapping from one-letter direction to two-letter one.
     * @const {!Object<Direction, Direction>}
     */
    var fullDirection = {
        'l': 'lr',
        'r': 'rl',
        'u': 'ud',
        'd': 'du'
    };

    /**
     * Draws snake’s body parts.
     *
     *        x1     x1+s    x2-s     x2
     *  y1    +-------*-------*-------+
     *        |                       |
     *  y1+s  *       *       *       *
     *        |                       |
     *  y2-s  *       *       *       *
     *        |                       |
     *  y2    +-------*-------*-------+
     *
     * @param {{x:number, y:number}} p Grid coordinate of the head.
     * @param {...} var_args Parts to draw, can be 'l', 'r', 'u' or 'd'
     *     for part touching left, right, up or down edge of the grid.
     * @return {!Array<number>} Cztery współrzędne małego kwadratu w środku
     *     pola.
     */
    var drawBodyPart = function(p, var_args) {
        game.drawGrass(p);

        var x1 = p.x * box_size, y1 = p.y * box_size;
        var x2 = x1 + box_size + 1, y2 = y1 + box_size + 1;
        var s = (box_size - 1) / 4;

        ctx.beginPath();
        ctx.fillStyle = Color.SNAKE;

        var rect = function(x1, y1, x2, y2) {
            ctx.rect(x1, y1, x2 - x1, y2 - y1);
        };

        for (var i = 1; (p = arguments[i]); ++i) {
            switch (p) {
            case Direction.LEFT:  rect(x1    , y1 + s, x2 - s, y2 - s); break;
            case Direction.RIGHT: rect(x1 + s, y1 + s, x2    , y2 - s); break;
            case Direction.UP:    rect(x1 + s, y1    , x2 - s, y2 - s); break;
            case Direction.DOWN:  rect(x1 + s, y1 + s, x2 - s, y2    ); break;
            }
        }

        ctx.fill();

        return [x1 + s, y1 + s, x2 - s, y2 - s];
    };

    /**
     * Draws snake’s head including cute eyes. :]
     * @param {{x:number, y:number}} p Grid coordinate of the head.
     * @param {Direction} dir Snake’s direction.
     */
    game.drawSnakeHead = function drawSnakeHead(p, dir) {
        dir = fullDirection[dir] || dir;
        var rect = drawBodyPart(p, dir.charAt(1));
        var s = (rect[2] - rect[0]) / 3;
        dir = /** @type {Direction} */ (dir.charAt(0));

        ctx.beginPath();
        ctx.fillStyle = Color.EYE;

        var eye = function(dx, dy) {
            ctx.arc(rect[0] + dx * s, rect[1] + dy * s, s * 0.5,
                    0, Math.PI * 2, false);
        };

        if (dir == 'u' || dir == 'l') eye(1, 1);
        if (dir == 'u' || dir == 'r') eye(2, 1);
        if (dir == 'd' || dir == 'l') eye(1, 2);
        if (dir == 'd' || dir == 'r') eye(2, 2);

        ctx.fill();
    };

    /**
     * Draws snake’s body part.
     * @param {{x:number, y:number}} p Grid coordinate of the stone to body.
     * @param {Direction} dir Snake’s body part’s direction.
     */
    game.drawSnakeBody = function drawSnakeBody(p, dir) {
        dir = fullDirection[dir] || dir;
        drawBodyPart(p, dir.charAt(0), dir.charAt(1));
    };

    /**
     * Draws snake’s tail.
     * @param {{x:number, y:number}} p Grid coordinate of the tail.
     * @param {Direction} dir Snake’s tail direction.
     */
    game.drawSnakeTail = function drawSnakeTail(p, dir) {
        drawBodyPart(p, dir.charAt(0));
    };

    /* Handles the key events controlling the game. */
    window.onkeyup = function kepUpHandler(ev) {
        if (!running) {
            game.startGame();
            return true;
        }

        ev = ev || window.event;
        switch (ev.keyCode || ev.which) {
        case 37: // left arrow
        case 65: // ‘a’
        case 83: // ‘s’
        case 79: // ‘o’
            game.turnLeft();
            return false;

        case 39: // right arrow
        case 68: // ‘d’
        case 70: // ‘f’
        case 69: // ‘e’
        case 85: // ‘u’
            game.turnRight();
            return false;
        }

        return true;
    };
})();

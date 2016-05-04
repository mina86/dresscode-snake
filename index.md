**Start:** 5 maja 2016

**Termin nadsyłania rozwiązań:** 30 maja 2016

**Czas, który będzie Ci potrzebny na rozwiązanie całego zadania**: 16 godzin

Po tygodniach ciężkiej, aczkolwiek (mamy nadzieję :) ) ciekawej
i inspirującej pracy, czas na trochę rozrywki!  Wybór nie jest może
największy, ale co powiesz na [partyjkę
Węża](http://mina86.github.io/dresscode-snake/demo/snake.html)?

Pewnie już się domyślasz, co jest kolejnym zadaniem.  Tym razem Twoim
celem będzie napisanie gry Wąż.  W tym celu będziesz musiała
zastosować metodologię [programowania
zdarzeniowego](https://pl.wikipedia.org/wiki/Programowanie_sterowane_zdarzeniami)—czyli
w prostszych słowach: napiszesz kod, który umie zareagować na
"zdarzenia" niezależne od niego—np. po naciśnięciu przez użytkownika
danego klawisza wykona określoną czynność.

## Co to jest wąż?

Otóż wąż to jedna z najprostszych—a jednocześnie kiedyś najbardziej
popularnych—gier komputerowych (nie wierzysz? zapytaj rodziców).
W grze gracz steruje długim i cienkim stworzeniem (podobnym do węża),
które porusza się po planszy, zbierając jedzenie.  Wąż stara się NIE
uderzyć własną głową o rozstawione na planszy przeszkody, a także
o kawałek własnego ogona (w przeciwnym razie gra się kończy).  Problem
w tym, że im więcej wąż „zje”, tym szybciej się porusza, a także tym
dłuższy robi się jego ogon, i tym trudniej nim sterować—zresztą
[przekonaj się
sama](http://mina86.github.io/dresscode-snake/demo/snake.html) :-)

W naszym przykładzie wężem steruje się za pomocą klawiszy strzałek
(lewo, prawo).

## Co będzie Ci potrzebne

Swoją grę będziesz pisać w języku JavaScript i będziesz potrzebować
solidnej znajomości jego podstaw.  Dlatego, jeśli nie przerobiłaś przy
okazji poprzednich zadań kursu JavaScript, zachęcamy Cię do zrobienia
tego teraz.  **Zarezerwuj sobie na to co najmniej 5 godzin.**
Konkretne sekcje kursów, które Ci się przydadzą, wymieniliśmy na [tej
stronie](http://mina86.github.io/dresscode-sorting/).

## Zadanie

Aby ułatwić Ci zadanie, przygotowaliśmy szkielet rozwiązania w postaci
trzech plików.  Pobierz na swój komputer następujące pliki:

 *  [`snake.html`](http://mina86.github.io/dresscode-snake/files/snake.html),
 *  [`snake-framework.js`](http://mina86.github.io/dresscode-snake/files/snake-framework.js) oraz
 *  [`snake.js`](http://mina86.github.io/dresscode-snake/files/snake.js).

### `snake.js`

**Twoim zadaniem będzie uzupełnienie pliku** `snake.js`.  W tej chwili
znajdziesz w nim definicje czterech funkcji, które będą pomagać wężowi
„poruszać się”.  W naszym pliku te funkcje są puste—napisanie ich
treści należy do Ciebie.

 *  Funkcja `game.prepareBoard` (czyli po angielsku „przygotuj
    planszę”) będzie wykonywana na samym początku każdej gry.  Jej
    celem jest przygotowanie planszy („wyzerowanie stanu gry”).  Aby
    przygotować planszę, powinnaś ustawić i narysować na niej węża,
    jabłka oraz kamienie.  Rysować możesz, korzystając z gotowych
    funkcji `game.draw...` opisanych poniżej.

 *  Funkcje `game.turnLeft` oraz `game.turnRight` (czyli po angielsku
    „skręć w lewo” i „skręć w prawo”) będą wykonywane za każdym razem,
    gdy gracz wciśnie przycisk skrętu (strzałkę) w lewo lub w prawo.
    Uwaga: samo wciśnięcie klawisza nie powoduje jeszcze ruchu węża.

    Funkcja `game.turnLeft` i `game.turnRight` powinna tylko „obrócić”
    głowę węża—narysować ją tak, by wskazywała w odpowiednią stronę.

    Dopiero funkcja `game.nextMove` (czyli „wykonaj następny ruch”)
    będzie poruszać węża.

    **Uwaga**: Twoim zadaniem będzie napisać funkcje tak, aby troszkę
    ułatwić graczom grę, gdy będą naciskać klawisze bardzo szybko.  Na
    przykład w przypadku szybkiego dwukrotnego skrętu w lewo wąż nie
    powinien „zawracać w miejscu”, ale najpierw skręcić o jedno
    „oczko” w lewo, i dopiero tam wykonać kolejny zakręt.  Chodzi
    o to, aby wąż nie „zjadał” zbyt łatwo samego siebie.

 *  Funkcja `game.nextMove` (czyli „wykonaj następny ruch”) będzie
    wykonywana za każdym razem, kiedy ma nastąpić ruch węża.  Funkcja
    powinna sprawdzać, czy w efekcie ruchu wąż uderza w kamień lub
    swoje własne ciało (co kończy grę), czy może zjada jabłko (co go
    wydłuża i zwiększa liczbę punktów).

    Aby zmienić wygląd planszy, powinnaś wołać funkcje `game.draw...`
    (czyli „narysuj ...”), które uaktualniają wygląd planszy.


### `snake-framework.js`

Pliku `snake-framework.js` nie musisz zmieniać—choć możesz oczywiście
do niego zajrzeć, aby zobaczyć jak napisane są poszczególne funkcje.
Ten plik zawiera funkcje i zmienne pomocne przy implementacji gry Wąż.

TODO: Opis współrzędnych oraz faktu, że framework korzysta z obiektów
      z dwoma polami–x oraz y–do reprezentacji współrzędnej.

 *  Zmienne `WIDTH` i `HEIGHT` określają odpowiednie szerokość
    i wysokość planszy do gry.  Należy pamiętać, że układ
    współrzędnych zaczyna się od punktu `(0, 0)` co oznacza, że
    możliwe współrzędne X są od zera do `WIDTH - 1` (włącznie), a Y—od
    zera do `HEIGHT - 1`.

 *  Funkcja `random` zwraca losową liczbę całkowita z podanego
    zakresu.  Przykładowo, `random(0, 1)’ zwróci zero lub jeden,
    a wywołanie `random(1, 6)` symuluje rzut kostką.

 *  Funkcja `randomPoint` zwraca losową współrzędna z planszy do gry.

    Przy wykorzystaniu tej funkcji do wyboru miejsca dla nowego jabłka
    lub kamienia, należy pamiętać, że losowa pozycja może być już
    zajęta przez jakiś obiekt na planszy.  Czy to smaczne jabłko,
    złowieszczy kamień, czy w końcu samego węża.

    Przykładowo, wywołanie `randomPoint()` może zwrócić `{x: 11,
    y:23}`.

 *  Funkcja `game.setScore` przyjmuje jeden argument, który staje się
    nowym wynikiem gracza.  Uaktualnia ona liczbę punktów wyświetlaną
    na stronie.

    Przykładowe wywołanie to `game.setScore(10)`, które ustawia liczbę
    punktów na 10.

 *  Funkcja `game.stopGame` kończy grę i wyświetla aktualny wynik.
    Powinna zostać wywołana wewnątrz `game.nextMove` jeżeli wąż
    „zderzy” się z kamieniem lub samym sobą.

    Funkcja nie przyjmuje argumentów, ani nie zwraca żadnej wartości,
    więc jej wywołanie to zwykłe `game.stopGame()`.

 *  Funkcje `game.drawApple`, `game.drawStone` i `game.drawGrass`
    rysują odpowiednio jabłko, kamień lub trawę na podanej
    współrzędnej.

    Ta ostatnia może służyć do „wyczyszczenia” pola, które było zajęte
    przez węża, jabłko lub kamień, ale obecnie jest puste.

    Funkcje te są potrzebne przy przygotowywaniu planszy poprzez
    `game.prepareBoard` oraz przy uaktualnianiu planszy wewnątrz
    `game.nextMove`.

    Przykładowo, sekwencja:

        game.drawApple({ x: 0, y: 0 });
        game.drawApple({ x: 10, y: 10 });
        game.drawStone({ x: 0, y: HEIGHT - 1});
        game.drawStone({ x: WIDTH - 1, y: HEIGHT - 1});

    Narysuje jabłko w lewym górnym rogu oraz na pozycji punkcie
    `(10, 10)`, a także kamień w lewym dolnym i prawym dolnym rogu.

 *  Funkcje `game.drawSnakeHead`, `game.drawSnakeBody` oraz
    `game.drawSnakeTail` rysują poszczególne części węża–głowę,
    fragment ciała oraz ogon.

    Przyjmują one dwa argumenty.  Pierwszy określa pozycję danego
    fragmentu węża, a drugi jego kształt.  Ponieważ wąż wije się
    w różnych kierunkach, jego ciało może przyjmować kształt różnych
    wygibasów.

    Kształt ten jest określany poprzez jedną z poniższych wartości:

     *  `Direction.LEFT_FROM_RIGHT` lub `Direction.LEFT`—wąż porusza
        się z prawej na lewą stronę: ←
     *  `Direction.RIGHT_FROM_LEFT` lub `Direction.RIGHT`—wąż porusza
        się z lewej na prawą stronę: →
     *  `Direction.UP_FROM_DOWN` lub `Direction.UP`—wąż porusza się
        z dołu na górę: ↑
     *  `Direction.DOWN_FROM_UP` lub `Direction.DOWN`—wąż porusza się
        z góry na dół: ↓
     *  `Direction.LEFT_FROM_DOWN`—wąż porusza się z dołu w lewo: ↰
     *  `Direction.LEFT_FROM_UP`— porusza się z góry w lewo: ↲
     *  `Direction.RIGHT_FROM_DOWN`— porusza się z dołu w prawo: ↱
     *  `Direction.RIGHT_FROM_UP`— porusza się z góry w prawo: ↳
     *  `Direction.UP_FROM_LEFT`— porusza się z lewej w górę: ⬏
     *  `Direction.DOWN_FROM_LEFT`— porusza się z lewej w dół: ⬎
     *  `Direction.UP_FROM_RIGHT`— porusza się z lewej w górę: ⬑
     *  `Direction.DOWN_FROM_RIGHT`— porusza się z lewej w dół: ⬐

    Przykładowo, sekwencja:

        game.drawSnakeHead({ x: 10, y: 10 }, Direction.UP_FROM_DOWN);
        game.drawSnakeBody({ x: 10, y: 11 }, Direction.UP_FROM_RIGHT);
        game.drawSnakeBody({ x: 11, y: 11 }, Direction.LEFT_FROM_RIGHT);
        game.drawSnakeBody({ x: 12, y: 11 }, Direction.LEFT_FROM_RIGHT);
        game.drawSnakeBody({ x: 13, y: 11 }, Direction.LEFT_FROM_DOWN);
        game.drawSnakeBody({ x: 13, y: 12 }, Direction.UP_FROM_DOWN);
        game.drawSnakeTail({ x: 13, y: 13 }, Direction.UP_FROM_DOWN);

    Narysuje węża w kształcie pokazanym na poniższym obrazku:

    ![Przykładowy wąż](snake-draw-example.png)

### `snake.html`

Plik `snake.html` to prosty dokument HTML, który definiuje przestrzeń,
na której rysowana będzie plansza do gry i ruchy węża, a także
element, w którym wyświetlany będzie aktualny wynik gry.

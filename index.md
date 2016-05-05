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
„zdarzenia” niezależne od niego—np. po naciśnięciu przez użytkownika
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
tego teraz.  Do tego zadania kursy najlepiej będzie przerobić
w całości (a nie tylko wybrane sekcje).  Jeśli znasz język angielski
(na poziomie VI klasy szkoły podstawowej powinno wystarczyć), polecamy
Ci kurs [CodeCademy](https://www.codecademy.com/learn/javascript).
Jeśli wolisz kurs w języku polskim, polecamy kurs [Khan
Academy](https://pl.khanacademy.org/computing/computer-programming/programming).
Kurs jest dostępny po polsku—jeśli wyświetla Ci się po angielsku,
poszukaj opcji zmiany języka!
**Kursy są obszerne, dlatego zarezerwuj sobie na to co najmniej 8 godzin.**

Powinnaś też znać pojęcie: układ współrzędnych (a dokładnie—co to
„współrzędna X” i „współrzędna Y”).  Jeśli nie wiesz co to, nie martw
się—[ten krótki
film](https://pl.khanacademy.org/math/cc-sixth-grade-math/cc-6th-negative-number-topic/cc-6th-coordinate-plane/v/the-coordinate-plane)
wszystko Ci wyjaśni.

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
    funkcji `game.draw…` opisanych poniżej.

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

    Aby zmienić wygląd planszy, powinnaś wołać funkcje `game.draw…`
    (czyli „narysuj …”), które uaktualniają wygląd planszy.

### `snake-framework.js`

Pliku `snake-framework.js` nie musisz zmieniać—choć możesz oczywiście
do niego zajrzeć, aby zobaczyć jak działają poszczególne funkcje.  Ten
plik zawiera funkcje i zmienne pomocne przy pisaniu gry Wąż.

**Uwaga:** Nasz kod traktuje planszę jako układ współrzędnych—dlatego
aby narysować na niej głowę / ogon węża, kamień, lub wyczyścić pole,
powinnaś przekazać do odpowiedniej funkcji współrzędne x i y do odpowiedniej
czynności. Poniżej zobaczysz przykłady, jak to robić.

 *  Zmienne `WIDTH` i `HEIGHT` określają odpowiednio szerokość
    i wysokość planszy do gry.  Należy pamiętać, że układ
    współrzędnych zaczyna się od punktu `(0, 0)`—co oznacza, że
    możliwe współrzędne X są od zera do `WIDTH - 1` (włącznie),
    a Y—od zera do `HEIGHT - 1`.

 *  Funkcja `random` (po angielsku: „losowy”, „wylosowany”) zwraca
    losową liczbę całkowitą z podanego zakresu.  Przykładowo,
    `random(0, 1)` zwróci zero lub jeden, a wywołanie `random(1, 6)`
    symuluje rzut kostką.

 *  Funkcja `randomPoint` (po angielsku: „losowy punkt”) zwraca losowe
    miejsce (losową parę współrzędnych x i y) z planszy do gry.

    Przy wykorzystaniu tej funkcji do wyboru miejsca dla nowego jabłka
    lub kamienia, należy pamiętać, że wylosowane pole może być już
    zajęte przez jakiś obiekt na planszy.  Czy przez to smaczne jabłko,
    złowieszczy kamień, czy w końcu samego węża.

    Przykładowo, wywołanie funkcji `randomPoint()` może zwrócić wynik
    w postaci `{ x: 11, y: 23 }`.

 *  Funkcja `game.setScore` (po angielsku „ustaw nowy wynik gracza”)
    przyjmuje jeden argument, który staje się nowym wynikiem gracza.
    Funkcja uaktualnia liczbę punktów wyświetlaną na stronie.

    Przykładowe użycie tej funkcji wygląda tak: `game.setScore(10)`—w ten
    sposób ustawimy liczbę punktów na 10.

 *  Funkcja `game.stopGame` (po angielsku „zatrzymaj grę”) kończy grę
    i wyświetla aktualny wynik.  Ta funkcja powinna zostać użyta
    wewnątrz `game.nextMove`, gdy wąż „zderzy” się z kamieniem lub samym sobą.

    Ta funkcja nie przyjmuje argumentów, ani nie zwraca żadnej wartości,
    więc aby jej użyć, należy po prostu napisać `game.stopGame()`.

 *  Funkcje `game.drawApple` (po angielsku „narysuj jabłko”), `game.drawStone`
    („narysuj kamień”) i `game.drawGrass` („narysuj trawę”) rysują odpowiednio
    jabłko, kamień lub trawę w miejscu o podanych współrzędnych.

    Funkcja `game.drawGrass` może służyć do „wyczyszczenia” pola,
    które było zajęte przez węża, jabłko lub kamień, ale obecnie jest
    puste.

    Wszystkie te funkcje będą Ci są potrzebne przy przygotowywaniu planszy
    (w Twojej funkcji `game.prepareBoard`), a także przy uaktualnianiu
    wyglądu planszy (wewnątrz Twojej funkcji `game.nextMove`).

    Przykładowo, poniższy kod:

        game.drawApple({ x: 0, y: 0 });
        game.drawApple({ x: 10, y: 10 });
        game.drawStone({ x: 0, y: HEIGHT - 1 });
        game.drawStone({ x: WIDTH - 1, y: HEIGHT - 1 });

    narysuje jabłko w lewym górnym rogu planszy, kolejne jabłko w punkcie
    `(10, 10)`, a następnie kamień w lewym dolnym i prawym dolnym rogu planszy.

 *  Funkcje `game.drawSnakeHead` (po angielsku „narysuj głowę węża”),
    `game.drawSnakeBody` („narysuj ciało węża”) oraz `game.drawSnakeTail`
    („narysuj ogon węża”) rysują poszczególne części węża: głowę,
    fragment ciała oraz ogon.

    Każda z tych funkcji przyjmuje po dwa argumenty.  Pierwszy argument
    określa pozycję danego fragmentu węża (w postaci współrzędnych x i y),
    a drugi argument—jego kształt.  Ponieważ wąż wije się w różnych kierunkach,
    jego ciało może przyjmować kształt różnych wygibasów.

    Kształt ten będziesz określać przez jedną z poniższych wartości:

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

    Przykładowo, taki kod:

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

Plik `snake.html` to dokument HTML, który definiuje przestrzeń,
na której rysowana będzie plansza do gry i ruchy węża, a także
element, w którym wyświetlany będzie aktualny wynik gry.
Nie musisz go zmieniać.

## Wszystko jasne?

Jeśli masz jakieś wątpliwości, chcesz się dowiedzieć więcej o tym, jak
działa kod, albo po prostu przydałaby Ci się podpowiedź w jakimś fragmencie zadania,
to pamiętaj, że chętnie Ci pomożemy. Czekamy na Twoje pytania na naszym forum
[WebMuses Youth](https://plus.google.com/u/0/communities/116917969489436061702), a także
pod adresem mailowym dresscode-pl@google.com

**Powodzenia, trzymamy za Ciebie kciuki!**

zespół DressCode

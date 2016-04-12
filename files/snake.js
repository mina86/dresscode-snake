/**
 * Funkcja wołana na początku gry.
 *
 * Jej celem jest przygotowanie planszy, ustawienie głowy węża na odpowiednim
 * miejscu (być może losowym?), ustawienie jabłek i kamieni w losowych
 * miejscach.  Wszystkim tym przygotowaniom powinny towarzyszyć wywołania
 * funkcji game.draw* tak aby elementy gry zostały naniesione na planszę.
 */
game.prepareBoard = function prepareBoard() {
    /* TODO */
};


/**
 * Funkcja wołana, gdy gracz chce skręcić węża w lewo.  Nie powinna ona poruszyć
 * wężem, a jedynie zapisać intencję gracza i uaktualnić grafikę tak, aby głowa
 * węża wskazywała w odpowiednią stronę.
 *
 * Dopiero funkcja game.nextMove powinna poruszyć węża.
 *
 * Uwaga: należy poprawnie obsłużyć niemożliwe kombinacje takie jak próba
 * dwukrotnego skrętu w lewo, które zazwyczaj powodowałyby obrót węża o 180
 * stopni i tym samym kolizje z jego własnym ciałem.
 */
game.turnLeft = function turnLeft() {
    /* TODO */
};


/**
 * Jak game.turnLeft tylko funkcja jest wołana, gdy użytkownik chce skręcić
 * w prawo.
 */
game.turnRight = function turnRight() {
    /* TODO */
};


/**
 * Funkcja wołana, gdy wąż wykonuje pojedynczy ruch.
 *
 * Jej celem jest sprawdzenie, czy w efekcie wąż uderza w kamień lub swoje
 * własne ciało (co kończy grę), czy może zjada jabłko (co zwiększa liczbę
 * punktów i go wydłuża).  ‘Uderzenie’ w koniec planszy może być obsługiwane
 * albo poprzez przenosić głowę węża na przeciwną stronę (tj. plansza niejako
 * owija się) lub poprzez zakończenie gry.
 *
 * Wszystkim zmianom na planszy powinny, oczywiście, towarzyszyć wywołania
 * funkcji game.draw*, które uaktualniają wygląd planszy.
 */
game.nextMove = function nextMove() {
    /* TODO */
};

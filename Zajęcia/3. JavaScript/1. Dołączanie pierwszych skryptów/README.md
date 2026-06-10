# Dołączanie pierwszych skryptów

### Czym jest JavaScript?

JavaScript (JS) to język programowania wykorzystywany do dodawania logiki i interaktywności na stronach internetowych. Dzięki niemu strona może reagować na działania użytkownika, wykonywać obliczenia oraz wyświetlać różnego rodzaju komunikaty.

## Konsola deweloperska w przeglądarce

Podczas nauki programowania jednym z najważniejszych narzędzi jest **konsola przeglądarki**. Umożliwia ona wyświetlanie informacji generowanych przez skrypty JavaScript.

Konsolę można otworzyć najczęściej za pomocą klawisza **F12**, a następnie przejść do zakładki **Console**.

Programiści wykorzystują konsolę do:

- sprawdzania wyników działania programu,
- wyszukiwania błędów,
- wyświetlania komunikatów informacyjnych,
- testowania fragmentów kodu.

## Dołączanie JavaScript do strony internetowej

Dodawanie kodu JavaScript jest realizowane przez znacznik `<script>`. **Należy go zawsze umieszczać tuż przed zamknięciem znacznika `<body>`**, aby działał prawidłowo w każdym przypadku. Robi się tak, ponieważ skrypt może odwoływać się do znaczników HTML, które muszą znaleźć się przed nim. Umieszcznie znacznika na samym końcu treści strony poprawia również wydajność.

### Skrypt wewnętrzny

Kod JavaScript można umieścić bezpośrednio w pliku HTML pomiędzy znacznikami `<script>`.

Takie rozwiązanie jest wygodne podczas nauki lub w przypadku bardzo prostych stron.

#### Zalety

- wszystkie pliki znajdują się w jednym miejscu,
- łatwe przygotowanie prostych przykładów.

#### Wady

- przy większych projektach kod staje się trudniejszy do organizacji,
- utrudniona jest ponowna wykorzystanie skryptów.


### Skrypt zewnętrzny

Kod JavaScript można umieścić w osobnym pliku z rozszerzeniem `.js`, a następnie dołączyć go do dokumentu HTML.

Jest to najczęściej stosowany sposób pracy podczas tworzenia stron internetowych.

#### Zalety

- lepsza organizacja projektu,
- łatwiejsze zarządzanie kodem,
- możliwość wykorzystania jednego skryptu na wielu stronach.

## Komentarze w JavaScript

Komentarze służą do opisywania działania programu i nie są wykonywane przez przeglądarkę.

Poznano dwa rodzaje komentarzy:
- Komentarz liniowy - służy do dodawania krótkich notatek w pojedynczej linii.
- Komentarz blokowy - pozwala tworzyć dłuższe opisy obejmujące wiele linii tekstu

## Obiekt console

Obiekt `console` umożliwia wyświetlanie komunikatów w konsoli przeglądarki. Przykłady:
- console.log() - służy do wyświetlania standardowych informacji i wyników działania programu, najczęściej wykorzystywana funkcja podczas nauki JavaScript
- console.warn() - służy do wyświetlania ostrzeżeń, komunikaty tego typu są zwykle wyróżniane w konsoli i zwracają uwagę programisty na potencjalny problem.

## Funkcja alert()

Funkcja `alert()` wyświetla okno dialogowe z komunikatem dla użytkownika.

Po pojawieniu się komunikatu użytkownik musi go zaakceptować, aby kontynuować pracę ze stroną.

Funkcja ta jest często wykorzystywana podczas nauki JavaScript do prezentowania wyników działania programu.

## Zmienne i stałe

Programy przechowują dane za pomocą zmiennych i stałych.

Dzięki nim można zapamiętywać wartości i wykorzystywać je później w różnych miejscach programu.

### const

Słowo kluczowe `const` służy do tworzenia **stałych**.

Po przypisaniu wartości nie można jej później zastąpić inną wartością.

Stałe stosuje się do przechowywania danych, które nie powinny zmieniać się podczas działania programu.

#### Przykłady zastosowań

- liczby wykorzystywane w obliczeniach,
- ustawienia programu,
- wartości konfiguracyjne.

### let

Słowo kluczowe `let` służy do tworzenia **zmiennych**.

W przeciwieństwie do `const`, wartość zmiennej może być zmieniana w trakcie działania programu.

Zmienne wykorzystuje się wtedy, gdy przechowywane dane mogą ulegać zmianom.

#### Przykłady zastosowań

- komunikaty wyświetlane użytkownikowi,
- wyniki obliczeń,
- liczniki i punkty w grze.


W nowoczesnym JavaScript zaleca się:

1. Domyślnie używać `const`.
2. Korzystać z `let` tylko wtedy, gdy wartość będzie zmieniana.

### var

`var` jest starszym sposobem deklarowania zmiennych w JavaScript.

Przed wprowadzeniem `let` i `const` był podstawowym narzędziem do przechowywania danych.

Obecnie spotyka się go głównie w starszych projektach i materiałach edukacyjnych.

W nowoczesnych aplikacjach zaleca się stosowanie `let` oraz `const`, ponieważ zapewniają bardziej przewidywalne działanie programu.
# Zadanie: Strona „Menu restauracji – wersja responsywna”
Celem zadania jest przećwiczenie tworzenia **responsywnych elementów strony** przy użyciu HTML i CSS.
W zadaniu wykorzystasz:
- szerokości procentowe i jednostki elastyczne,
- `max-width`,
- `inline-block`,
- media queries,
- klasy z zewnętrznej biblioteki (Bootstrap),
- ukrywanie elementów w zależności od szerokości ekranu.
---
## 1. Pasek informacyjny
Na samej górze strony dodaj wąski pasek z informacją:
**„Darmowa dostawa od 50 zł”**
Pasek:
- zajmuje całą szerokość strony,
- ma inne tło niż reszta strony,
- tekst jest wyśrodkowany.
---
## 2. Sekcja powitalna
Dodaj sekcję z nazwą restauracji oraz krótkim opisem.
Sekcja:
- nie zajmuje całej szerokości strony (jest ograniczona maksymalną szerokością),
- jest wyśrodkowana,
- zawiera większy tekst nagłówka.
---
## 3. Lista kategorii (inline-block)
Dodaj listę kategorii menu:
- Pizza
- Burgery
- Sałatki
- Napoje

Elementy kategorii:
- wyświetlają się obok siebie,
- mają stałą szerokość (np. około 120–150 px),
- posiadają obramowanie i odstępy.
---
## 4. Responsywność kategorii (media queries)
Dostosuj zachowanie kategorii:
### Dla szerokości mniejszej niż 700 px:
- elementy zaczynają przechodzić do kolejnego wiersza,
- odległości między nimi się zmniejszają.
### Dla szerokości mniejszej niż 400 px:
- każdy element zajmuje całą szerokość,
- elementy ustawiają się jeden pod drugim.
---
## 5. Sekcja „Polecane dania” (Bootstrap)
Dodaj sekcję z trzema polecanymi daniami.
W tej sekcji:
- każde danie jest wyświetlone w formie karty,
- wygląd (tło, odstępy, obramowanie) ustaw przy użyciu własnej klasy CSS.
Każde danie zawiera:
- nazwę,
- krótki opis, który znika przy szerokości ekranu mniejszej niż 700px.
---
## 6. Baner promocyjny
Dodaj szeroki baner z tekstem:
**„Weekendowa promocja -20%”**
Baner:
- zajmuje określoną część szerokości okna (nie kontenera),
- ma wyraźne tło,
- zmienia swoją szerokość razem z oknem przeglądarki.
---
## 7. Zdjęcie restauracji
Dodaj zdjęcie:
- dopasowuje się do szerokości swojego kontenera,
- nie wychodzi poza jego granice,
- zachowuje proporcje.
---
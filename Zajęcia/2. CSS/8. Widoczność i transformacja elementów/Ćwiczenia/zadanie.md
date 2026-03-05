# Zadanie: Strona „Dzień Otwarty Szkoły”

Celem zadania jest przećwiczenie właściwości CSS:

* `z-index`
* `opacity`
* `visibility`
* `transform`

Wykonaj prostą stronę informacyjną o **Dniu Otwartym szkoły**.

---

## 1. Baner wydarzenia (opacity)

Dodaj na górze strony **duże zdjęcie** z napisem:

**Dzień Otwarty Szkoły**

**Wymagania:**

* zdjęcie zajmuje **całą szerokość strony**
* na zdjęciu znajduje się **półprzezroczysta warstwa**
* użyj właściwości `opacity`

---

## 2. Komunikat (visibility)

Dodaj dwa komunikaty:

* „Zapraszamy wszystkich uczniów i rodziców”
* „Zmiana godziny rozpoczęcia wydarzenia”

Drugi komunikat powinien być **ukryty** przy użyciu:

```css
visibility: hidden;
```

---

## 3. Atrakcje wydarzenia (transform)

Utwórz **3 karty atrakcji**:

* Warsztaty programowania
* Pokaz robotów
* Konkurs wiedzy

**Karty:**

* mają obramowanie
* są ustawione obok siebie
* po najechaniu myszką (`:hover`) karta powinna się **lekko powiększyć** (zastosuj funkcję scale(1.1) w odpowiednim atrybucie)

---

## 4. Zdjęcia z poprzednich edycji (z-index)

Dodaj **3 zdjęcia**, które:

* częściowo **nachodzą na siebie**
* są ustawione przy pomocy `position: absolute`

Ustaw wartości `z-index`, aby:

* jedno zdjęcie było **na wierzchu**
* jedno **pośrodku**
* jedno **na spodzie**

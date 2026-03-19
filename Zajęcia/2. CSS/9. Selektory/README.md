# Selektory w CSS

## Omówienie sposobów wybierania elementów HTML do stylowania za pomocą CSS.

---

## **Selektory CSS**
- Selektory określają, **które elementy HTML mają zostać ostylowane**.
- Dzięki nim możemy precyzyjnie wskazać elementy na stronie.

---

## 1. **Selektor elementu**
- Wybiera wszystkie elementy danego typu.

**Przykład - nadanie koloru dla wszystkich elementów p:**
p {
    color: lightgrey;
}

**Cechy:**
- działa globalnie na wszystkie elementy tego typu
- ma niską specyficzność (łatwo go nadpisać)

---

## 2. **Selektor identyfikatora – `#id`**
- Wybiera element o konkretnym identyfikatorze.

**Przykład - nadanie marginesu wewnętrzenego dla elementu z id "my-button":**
#my-button {
    padding: 12px;
}

**Cechy:**
- identyfikator powinien być unikalny na stronie
- wysoka specyficzność (trudno go nadpisać)
- używany do elementów, które występują na stronie tylko raz

---

## 3. **Selektor klasy – `.class`**
- Wybiera wszystkie elementy z daną klasą.

**Przykład - nadanie obramowania dla wszystkich elementów z klasą "my-box":**
.my-box {
    border: 1px solid white;
}

**Cechy:**
- można używać wielokrotnie na stronie
- element może mieć wiele klas
- jedna klasa może zostać użyta wielokrotnie, co umożliwia wielokrotne wykorzystanie stylów
- najczęściej stosowany selektor

---

## 4. **Selektor potomka i dziecka**
- Pozwalają wybierać elementy na podstawie ich położenia w strukturze HTML.

**Selektor potomka (spacja):**
.parent p

- wybiera wszystkie `p` wewnątrz `.parent` (na dowolnym poziomie)

**Selektor dziecka (`>`):**
.parent > p

- wybiera tylko elementy `p`, które są **bezpośrednimi dziećmi** elementu `.parent`

**Cechy:**
- umożliwiają precyzyjne stylowanie struktury strony
- ważne przy zagnieżdżonych elementach

---

## 5. **Grupowanie selektorów**
- Pozwala stosować te same style do wielu elementów.

**Przykład - ustawienie obramowania dla elementów tabeli:**
.my-table, .my-table td, .my-table th {
    border: 1px solid lightblue;
}

**Cechy:**
- skraca kod
- poprawia czytelność

---

## 6. **Selektor atrybutu**
- Wybiera elementy na podstawie ich atrybutów.

**Przykład - nadanie ciemnego tła dla wszystkich kontrolek input typu "text":**
input[type="text"] {
    background-color: lightgray;
}

**Cechy:**
- bardzo przydatny przy różnych typach inputów

---

## 7. **Pseudoklasy – `:hover`, `:focus`, itd.**
- Pozwalają na wybór elementu na podstawie jego **stanu**.

**Poznane pseudoklasy:**
- `:hover` – po najechaniu myszką
- `:focus` – gdy element jest aktywny (np. input)
- `:active` – w trakcie kliknięcia
- `:visited` – odwiedzony link
- `:link` – nieodwiedzony link

**Przykłady:**
- **zmiana wyglądu kursora myszy po najechaniu na element o klasie "my-link"**
.my-link:hover {
    cursor: grab;
}

- **zmiana koloru tła dla elementu o klasie "my-textarea", w którym ustawimy kursor do wpisywania tekstu**
.my-textarea:focus {
    background-color: bisque;
}

**Cechy:**
- umożliwiają interaktywność
- najczęściej stosowane podczas określenia stylu po najechaniu kursorem na element

---

## 8. **Pseudoelementy – `::before`, `::after`, itd.**
- Pozwalają stylować **części elementu lub dodawać treść**.

**Poznane pseudoelementy:**
- `::first-letter` – pierwsza litera
- `::first-line` – pierwsza linia
- `::before` – przed elementem
- `::after` – po elemencie

**Przykłady:**
- **zmiana rozmiaru pierwszej litery dla elementu o klasie "my-post"**
.my-post::first-letter {
    font-size: 36px;
}

- **dodanie czerwonej gwiazdki na końcu elementu label o klasie "required"**
label.required::after {
    content: " *";
    color: red;
}

**Cechy:**
- nie wymagają zmian w HTML
- często używane do dekoracji i dodatkowych oznaczeń

---

## 9. **Selektor uniwersalny – `*`**
- Wybiera **wszystkie elementy na stronie**.

**Przykład: - usunięcie marginesu dla wszystkich elementów na stronie**
* {
    margin: 0;
}

**Cechy:**
- działa globalnie na każdy element
- bardzo niska specyficzność
- często używany do resetowania stylów przeglądarki

---
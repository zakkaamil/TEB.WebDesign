# Style list i tabel w CSS

## Omówienie właściwości CSS poznanych na lekcji dotyczącej stylowania list oraz tabel.

---

## 1. **Style list – `list-style`**

### **Typ punktora listy – `list-style-type`**
- Określa wygląd punktora (znaku) listy.
- Najczęściej stosowany do list uporządkowanych (`ol`) i nieuporządkowanych (`ul`).
- Przykładowe wartości:
  - `disc` – kółko (wartość domyślna)
  - `square` – kwadrat
  - `decimal` – numeracja (1, 2, 3…)
  - `none` – brak punktora
- Przykłady:
  - `list-style-type: square`
  - `list-style-type: decimal`
  - `list-style-type: none`

---

### **Obraz jako punktor – `list-style-image`**
- Pozwala ustawić własny obraz jako punktor listy.
- Wartość to ścieżka do pliku graficznego.
- Przykład:
  - `list-style-image: url("punktor.png")`

---

### **Położenie punktora – `list-style-position`**
- Określa, czy punktor znajduje się wewnątrz czy na zewnątrz obszaru tekstu.
- Dostępne wartości:
  - `outside` – punktor na zewnątrz (domyślnie)
  - `inside` – punktor wewnątrz obszaru tekstu
- Przykłady:
  - `list-style-position: outside`
  - `list-style-position: inside`

---

### **Skrócony zapis – `list-style`**
- Pozwala ustawić typ, pozycję i obraz punktora w jednej linii.
- Przykład:
  - `list-style: none`

---

## 2. **Listy jako menu poziome**

### **Usuwanie domyślnych stylów listy**
- Aby stworzyć poziome menu z listy, musimy nadpisać domyślne style aplikowane na listę. Należy zrobić to zarówno dla listy oraz jej elementów, zgodnie z kodem z lekcji.

---

## 3. **Style tabel w CSS**

### **Obramowanie tabeli – `border`**
- Ustawia styl dla obramowania tabeli.
- Aby objął wszystkie komórki tabeli, należy go zastosować dla elementów `table`, `th`, `td` 
- Przykład:
  - `border: 1px solid green`

### **Położenie podpisu tabeli – `caption-side`**
- Określa, gdzie wyświetlany jest tytuł tabeli (`caption`).
- Dostępne wartości:
  - `top` – nad tabelą (domyślnie)
  - `bottom` – pod tabelą
- Przykład:
  - `caption-side: bottom`

---

### **Łączenie obramowań – `border-collapse`**
- Określa sposób łączenia obramowań komórek tabeli.
- Dostępne wartości:
  - `separate` – obramowania oddzielne (domyślnie)
  - `collapse` – obramowania połączone (pojedyncza linia)
- Przykład:
  - `border-collapse: collapse`

---

### **Układ tabeli – `table-layout`**
- Określa sposób obliczania szerokości kolumn.
- Dostępne wartości:
  - `auto` – automatyczne dopasowanie na podstawie rozmiaru zawartości w komórkach (domyślnie)
  - `fixed` – stały układ kolumn, 
- Przykład:
  - `table-layout: fixed`

---

### **Odstępy między komórkami – `border-spacing`**
- Ustawia odstępy między komórkami tabeli (działa przy `border-collapse: separate`).
- Przykład:
  - `border-spacing: 20px`

---

### **Szerokość tabeli – `width` i `height`**
- Określa wysokość i szerokość całej tabeli.
- Przykład:
  - `width: 200px`

---

## 4. **Tworzenie "zwijanego tekstu"**
- W przypadku, gdy tekst nie mieści się w kontenerze, powszechną praktyką jest ustawienie kilku właściwości tak, aby wyświetliła się tylko część teksu zakończona znakami "...".

### **Zawijanie tekstu – `white-space`**
- Określa, czy tekst może się zawijać.
- Przykładowa wartość:
  - `nowrap` – brak zawijania tekstu

---

### **Ukrywanie nadmiaru tekstu – `overflow`**
- Określa, co zrobić z tekstem, który nie mieści się w elemencie.
- Przykładowa wartość:
  - `hidden` – ukrywa nadmiar tekstu

---

### **Wielokropek na końcu tekstu – `text-overflow`**
- Wyświetla `...`, gdy tekst nie mieści się w elemencie.
- Działa razem z `overflow: hidden` oraz `white-space: nowrap`.
- Przykład:
  - `text-overflow: ellipsis`

---
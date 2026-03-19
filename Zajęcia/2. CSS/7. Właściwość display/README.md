# Właściwość `display` w CSS

## Omówienie właściwości CSS poznanych na lekcji dotyczącej sposobu wyświetlania elementów na stronie.

---

## **Właściwość `display`**
- Określa, **jak element jest renderowany (wyświetlany)** na stronie.
- Decyduje o:
  - tym, czy element zajmuje całą dostępną szerokość
  - czy ustawia się obok innych elementów
  - jak reaguje na `width`, `height`, `margin`, `padding`

---

## 1. **Elementy liniowe – `display: inline`**
- Element zajmuje tylko tyle miejsca, ile wynika z jego zawartości, np. długości umieszczonego tekstu.
- Ustawia się **obok innych elementów** (w jednej linii).

**Przykłady elementów, które domyślnie zachowują się w ten sposób:**
- `span`
- `a`
- `b`, `i`

**Cechy:**
- brak możliwości ustawienia `width` i `height`
- działa tylko poziomy układ (linia)
- `margin-top` i `margin-bottom` działają ograniczenie

---

## 2. **Elementy blokowe – `display: block`**
- Element zajmuje **całą dostępną szerokość**.
- Każdy element zaczyna się **od nowej linii**.

**Przykłady elementów, które domyślnie zachowują się w ten sposób:**
- `div`
- `p`
- `h1`, `h2`, itd.
- `section`

**Cechy:**
- można ustawiać `width` i `height`
- układ pionowy (jeden pod drugim)
- pełna kontrola nad marginesami

---

## 3. **Pośrednia wartość – `display: inline-block`**
- Łączy cechy `inline` i `block`.

**Działanie:**
- element ustawia się **obok innych (jak inline)**
- ale można ustawić:
  - `width`
  - `height`
  - `margin` we wszystkich kierunkach

**Cechy:**
- często używany do budowania prostych układów (np. kafelki)
- lepsza kontrola niż przy `inline`

---

## 4. **Nowoczesny układ – `display: flex`**
- Tworzy tzw. **kontener flex**.
- Wprowadza podział na:
  - **kontener (rodzic)**
  - **elementy wewnętrzne (dzieci)**

**Działanie:**
- elementy układają się w jednym kierunku:
  - poziomo (**row** – domyślnie)
  - pionowo (**column**)

**Najważniejsze właściwości:**
- `justify-content` – wyrównanie w poziomie
- `align-items` – wyrównanie w pionie
- `gap` – odstępy między elementami

**Cechy:**
- bardzo łatwe centrowanie elementów
- duża kontrola nad rozmieszczeniem
- idealne do layoutów w jednym kierunku

---

## 5. **Zaawansowany układ – `display: grid`**
- Tworzy **siatkę (grid)** do rozmieszczania elementów.
- Pozwala układać elementy w:
  - wierszach
  - kolumnach (jednocześnie)

**Działanie:**
- definiujemy strukturę siatki:
  - `grid-template-columns`
  - `grid-template-rows`

**Przykład:**
- `grid-template-columns: 1fr 3fr 1fr;`

**Cechy:**
- pełna kontrola nad układem strony
- możliwość tworzenia złożonych layoutów
- działa w dwóch kierunkach (poziom + pion)

---

## **Podsumowanie**
- `display` określa, **jak element zachowuje się w układzie strony**.
- Najważniejsze wartości:
  - `inline` – elementy w linii
  - `block` – elementy jeden pod drugim
  - `inline-block` – elementy w linii z zachowaniem możliwości manipulacji wymiarami elementów
  - `flex` – nowoczesny układ, bardzo dobry do rozmieszczania elementów w jednym wymiarze, np. wyśrodkowanie elementu
  - `grid` – nowoczesny układ w dwóch kierunkach, używany do projektowania skomplikowanych układów stron

---
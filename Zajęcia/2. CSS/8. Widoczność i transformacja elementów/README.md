# Widoczność i transformacja elementów w CSS

## Omówienie właściwości CSS pozwalających kontrolować widoczność oraz przekształcenia elementów na stronie.

---

## **Widoczność i warstwy elementów**
- CSS pozwala kontrolować:
  - czy element jest widoczny
  - jak bardzo jest przezroczysty
  - który element znajduje się „na wierzchu”
  - jak element jest przekształcany (obracany, skalowany itd.)

---

## 1. **Kolejność nakładania – `z-index`**
- Określa, **który element znajduje się wyżej (na wierzchu)**, gdy elementy na siebie nachodzą.

**Cechy:**
- kontrola widoczności nakładających się elementów
- większa wartość `z-index` → element jest bardziej "na wierzchu"
- mniejsza wartość → element jest "głębiej"
- działa tylko dla elementów z `position` innym niż `static`
  - np. `relative`, `absolute`, `fixed`
- często używany przy menu, popupach, overlayach

---

## 2. **Przezroczystość – `opacity`**
- Określa, **stopień przezroczystości elementu**.

**Zakres wartości:**
- `1` → element w pełni widoczny
- `0` → element całkowicie niewidoczny
- wartości pośrednie, np. `0.5` → półprzezroczysty

**Cechy:**
- działa na cały element (łącznie z jego zawartością)
- element nadal zajmuje miejsce na stronie
- nadal można wchodzić z nim w interakcje (np. kliknąć)

---

## 3. **Widoczność – `visibility`**
- Określa, czy element jest widoczny, bez usuwania go z układu strony.

**Najważniejsze wartości:**
- `visible` → element widoczny
- `hidden` → element niewidoczny

**Cechy:**
- element nadal zajmuje swoje miejsce
- nie jest widoczny i nie można w niego kliknąć
- różni się od `display: none` (który usuwa element z układu)

---

## 4. **Transformacje – `transform`**
- Pozwala **zmieniać wygląd elementu bez wpływu na układ strony**.

**Najczęstsze funkcje:**
- `rotate()` – obrót
- `rotateX()`, `rotateY()` – obrót w konkretnej płaszczyźnie
- `scale()` – skalowanie (powiększanie/pomniejszanie)
- `translate()` – przesunięcie

**Przykłady:**
- `transform: rotate(45deg);` - obrót o 45 stopni
- `transform: scale(1.5);` - powiększenie o 1.5 raza
- `transform: translateX(50px);` - przesunięcie w prawo o 50px

**Cechy:**
- element pozostaje w swoim miejscu w układzie
- transformacja działa tylko wizualnie
- można łączyć wiele transformacji:
  - `transform: rotate(45deg) translateX(20px);`

---

## **Najczęstsze zastosowania**
- `z-index` → nakładanie elementów (np. menu nad treścią)
- `opacity` → efekty wizualne (np. przy hover)
- `visibility` → ukrywanie elementów bez zmiany layoutu
- `transform` → animacje, efekty, interakcje

---
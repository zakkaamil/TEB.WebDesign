# Responsywność w CSS i Bootstrap

## Omówienie technik tworzenia responsywnych układów stron internetowych z użyciem CSS oraz frameworka Bootstrap.

---

## **Responsywność stron internetowych**
- Responsywność oznacza, że strona **dostosowuje swój wygląd do rozmiaru ekranu** (telefon, tablet, komputer). Dotyczy to szczególnie jego szerokości. 
- Taki efekt możemy uzyskać poprzez użycie technik:
  - elastyczne jednostki (`%`, `vw`)
  - układy oparte o inline-block lub flex/grid
  - media queries
  - frameworki CSS (np. Bootstrap)

---

## 1. **Układ oparty o `inline-block`**
- Elementy mogą być ustawione obok siebie dzięki `display: inline-block`.

**Przykład:**
.custom-card {
    display: inline-block;
    width: 25%;
}

**Cechy:**
- umożliwia układ „kart”
- elementy zachowują się jak bloki, ale stoją obok siebie
- wymaga kontrolowania szerokości i marginesów

---

## 2. **Kontener strony**
- Kontener ogranicza szerokość treści i centruje ją na stronie.

**Przykład:**
.custom-container {
    width: 90%;
    margin: 0 auto;
}

**Cechy:**
- `width: 90%` → dopasowanie do szerokości ekranu
- `margin: 0 auto` → wyśrodkowanie
- często stosowany w layoutach responsywnych

---

## 3. **Responsywne obrazy**
- Obrazy można dopasować do szerokości rodzica.

**Przykład:**
.map {
    width: 100%;
}

**Cechy:**
- obraz automatycznie skaluje się do szerokości kontenera
- zapobiega wychodzeniu poza ekran
- podstawowa technika responsywności

---

## 4. **Jednostki względne**
- Pozwalają tworzyć elastyczne layouty.

### **`vw` (viewport width)**
- 1vw = 1% szerokości okna przeglądarki

**Przykład:**
.box-vw {
    width: 50vw;
}

### **`%` (procent)**
- odnosi się do rozmiarów rodzica elementu

**Przykład:**
.box-percent {
    width: 50%;
}

**Cechy:**
- `vw` → zależne od całego ekranu
- `%` → zależne od elementu nadrzędnego

---

## 5. **Media queries – podstawa responsywności**
- Media queries to mechanizm CSS pozwalający na **stosowanie różnych stylów w zależności od cech urządzenia**, najczęściej szerokości ekranu.
- Umożliwiają tworzenie tzw. **breakpointów**, czyli punktów zmiany układu strony.

---

### **Przykład: styl dla ekranu o szerokości mniejszej lub równej 576px**
```css
@media (max-width: 576px) {
    .custom-card {
        width: 90%;
    }
}
```

---

## **Zastosowanie media queries:**
- ukrywanie elementów na małych ekranach
- zmiana szerokości kart
- poprawa czytelności na telefonach

---

## 6. **Bootstrap – system siatki (grid)**
- Bootstrap to framework CSS ułatwiający tworzenie responsywnych stron. Efekt responsywności uzyskujemy w nim przy użyciu predefiniowanych klas.

**Przykład:**
```html
<div class="container">
    <div class="row">
        <div class="col-md-4">Karta</div>
    </div>
</div>
```

**Cechy:**
- automatyczna responsywność
- 12-kolumnowy system
- łatwe tworzenie układów z niewielkim wykorzystaniem kodu CSS

---
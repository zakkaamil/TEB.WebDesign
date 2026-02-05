# Pozycjonowanie elementów w CSS

## Omówienie właściwości CSS poznanych na lekcji dotyczącej pozycjonowania elementów na stronie.

---

## 1. **Właściwość `position`**
- Określa sposób pozycjonowania elementu w dokumencie HTML.
- Wpływa na to, **względem czego** element jest przesuwany oraz **jak jest interpretowana jego oryginalna przestzeń** w układzie strony.
- Najczęściej używana razem z właściwościami:
  - `top`
  - `right`
  - `bottom`
  - `left`

---

## 2. **Pozycjonowanie statyczne – `position: static`**
- Wartość **domyślna** dla wszystkich elementów HTML.
- Elementy są rozmieszczane zgodnie z naturalnym przepływem dokumentu.
- Właściwości `top`, `right`, `bottom`, `left` są **ignorowane**.
- Element **zachowuje swoje miejsce** w układzie strony.

**Cechy:**
- brak możliwości przesuwania
- brak wpływu na inne elementy

---

## 3. **Pozycjonowanie względne – `position: relative`**
- Element jest przesuwany **względem swojego pierwotnego położenia**.
- Działa w połączeniu z `top`, `right`, `bottom`, `left`.
- **Oryginalne miejsce elementu zostaje zachowane** w układzie strony.

**Cechy:**
- element wizualnie się przesuwa
- inne elementy zachowują się tak, jakby nadal był w starym miejscu
- często używany jako punkt odniesienia dla elementów `absolute`

---

## 4. **Pozycjonowanie absolutne – `position: absolute`**
- Element jest usuwany z normalnego przepływu dokumentu.
- Jest pozycjonowany względem:
  - **najbliższego przodka z `position` innym niż `static`**,  
  - a jeśli go nie ma — względem całej strony (okna przeglądarki).
- Działa w połączeniu z `top`, `right`, `bottom`, `left`.

**Cechy:**
- nie zajmuje miejsca w układzie strony
- może nachodzić na inne elementy
- często używany do precyzyjnego pozycjonowania

---

## 5. **Pozycjonowanie absolutne wewnątrz kontenera**
- Jeśli element `absolute` znajduje się wewnątrz elementu nadrzędnego,
  który ma ustawione najczęściej `position: relative`, to:
  - pozycjonowanie odbywa się **względem tego kontenera**, a nie całej strony.
- Jest to bardzo częsty i poprawny wzorzec w CSS.

**Cechy:**
- lepsza kontrola nad układem
- brak „uciekania” elementów po stronie

---

## 6. **Pozycjonowanie stałe – `position: fixed`**
- Element jest pozycjonowany **względem okna przeglądarki**.
- **Nie zmienia swojego położenia podczas przewijania strony (scrolla)**.
- Działa w połączeniu z `top`, `right`, `bottom`, `left`.
- Element jest usuwany z normalnego przepływu dokumentu.

**Cechy:**
- idealne do menu, banerów, przycisków „powrót do góry”
- zawsze widoczny na ekranie

---

## 7. **Właściwości przesunięcia – `top`, `right`, `bottom`, `left`**
- Określają przesunięcie elementu w danym kierunku.
- Działają tylko wtedy, gdy `position` ma wartość:
  - `relative`
  - `absolute`
  - `fixed`
- Nie działają przy `position: static`.

**Przykłady:**
- `top: 20px`
- `right: 50%`
- `bottom: 4rem`
- `left: 10px`

---

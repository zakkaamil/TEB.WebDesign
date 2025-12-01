# Dołączanie stylów do strony

###  Podsumowanie sposobów dołączania stylów CSS, które zostały zaprezentowane w plikach
- **style-lokalne.html**
- **style-wewnetrzne.html**
- **style-zewnetrzne.html** oraz **style.css**

### 1. Style lokalne (inline)
- Styl dodawany bezpośrednio wewnątrz znacznika HTML
- Obowiązuje tylko dla jednego elementu
- Jego szerokie używanie nie jest dobrą praktyką. Stosowany głównie do szybkich lub jednostkowych zmian.
- Stosowanie zgodnie ze wzorem `<znacznik style="atrybut: wartość;" />`


### 2. Style wewnętrzne (znacznik `<style>`)
- Dołączane w sekcji `<head>` dokumentu HTML, wewnątrz znacznika `<style>`
- Kod umieszczony wewnątrz znacznika `<style>` jest kodem CSS.
- Zdefiniowane style są przyporządkowane do elementów HTML przy pomocy selektorów 
- Stosowanie zgodnie ze wzorem `selektor { atrybut: wartość; }`


### 3. Style zewnętrzne (osobny plik .css)

-   Styl umieszczony w osobnym pliku CSS
-   Najbardziej czytelna i uniwersalna metoda
-   Pozwala używać jednego arkusza stylów na wielu stronach
- W pliku CSS stosowanie zgodnie ze wzorem `selektor { atrybut: wartość; }`
- Aby dołączyć plik CSS do strony HTML, w sekcji `<head>` należy użyć zapisu `<link rel="stylesheet" href="nazwa_pliku.css" />`

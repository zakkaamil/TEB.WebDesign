# Formularze HTML

Materiał został podzielony na 2 części. 
- Plik **podstawowe_kontrolki.html** - zawiera definicję formularza z bazowymi kontrolkami, które są najczęściej wykorzystywane podczas tworzenia stron.
- Plik **formularze_rozszerzenie.html** - prezentuje dodatkowe kontrolki oraz pokazuje atrybuty, które możemy użyć w połączeniu z większością elementów na formularzach.

### Lista z opisem znaczników HTML, które pojawiają się w pliku **tabele.html**

- **`<form>`** – otwiera formularz, pozwala użytkownikowi na wypełnienie i wysłanie danych. Typowe atrybuty:
  - `action` – adres serwera lub mail do wysłania danych.
  - `method` – metoda przesyłania danych (np. `post`, `get`).
  - `enctype` – sposób kodowania danych (np. `multipart/form-data` w przypadku, gdy na formularzu jest kontrolka do dodawania plików).

- **`<label>`** – etykieta przypisana do konkretnej kontrolki formularza, ułatwia obsługę i poprawia dostępność. Atrybut `for` musi odpowiadać `id` kontrolki.

- **`<input>`** – podstawowy element do wprowadzania danych, z wieloma typami i atrybutami:
  - `type` – definiuje rodzaj pola, np.:
    - `text` – pole tekstowe.
    - `password` – pole na hasło, ukrywa wpis.
    - `date` – wybór daty.
    - `number` – pole liczbowe.
    - `radio` – przycisk opcji (wybór jednej opcji spośród grupy).
    - `checkbox` – pole wyboru (akceptacja/opcja tak/nie).
    - `email` – pole na adres e-mail z walidacją.
    - `file` – pole do przesłania pliku.
    - `color` – wybór koloru.
    - `reset` – przycisk resetujący formularz.
    - `submit` – przycisk wysyłający formularz.
  - `name` – nazwa pola, pod którą dane są przesyłane. Musi być zawsze zdefiniowana dla kontrolki.
  - `id` – unikalny identyfikator, tutaj używany do powiązania z `<label>`, ale możemy wykorzystać go w dowolnej kontrolce HTML.
  - `value` – domyślna wartość pola.
  - `size` – szerokość pola tekstowego (w znakach).
  - `maxlength` – maksymalna liczba znaków do wpisania.
  - `placeholder` – przykładowy tekst podpowiedzi wewnątrz pola.
  - `disabled` – blokuje możliwość edycji pola.
  - `readonly` – pole tylko do odczytu, użytkownik nie może zmienić wartości.
  - `required` – wymusza wypełnienie pola.
  - `pattern` – wzór (wyrażenie regularne) do walidacji wartości np. kod pocztowy `[0-9]{2}-[0-9]{3}`.
  - `autofocus` – automatycznie ustawia kursor na to pole po załadowaniu strony.

- **`<textarea>`** – wielowierszowe pole tekstowe:
  - Atrybuty `cols` i `rows` określają szerokość i wysokość w znakach/wierszach.

- **`<select>`** – rozwijana lista wyboru:
  - Atrybut `name` i `id` jak w `<input>`.
  - `multiple` – pozwala na wielokrotny wybór opcji.
  - Zawiera elementy `<option>` definiujące poszczególne opcje:
    - `value` – wartość przesyłana po wybraniu opcji.
    - Atrybut `selected` ustawia domyślnie wybraną opcję.
  - Może zawierać `<optgroup>` — grupę opcji z etykietą `label` dla lepszej organizacji.

- **`<datalist>`** – lista podpowiedzi dla pola tekstowego `<input list="id_datalist">`:
  - Zawiera listę `<option>` z podpowiadanymi wartościami.

- **`<fieldset>`** – grupa kontrolek formularza z obramowaniem i legendą.
  
- **`<legend>`** – tytuł grupy `fieldset`.

- **`<button>`** – przycisk z możliwością różnych typów:
  - `type="submit"` – wysyła formularz.
  - `type="reset"` – czyści formularz.
  - `type="button"` – zwykły przycisk, z którym można powiązać zdarzenia JS.


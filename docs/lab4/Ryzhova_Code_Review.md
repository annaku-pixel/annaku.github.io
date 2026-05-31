# Рижова  -> Куцевич

| № | Файл і рядок | Проблема | Категорія | Рекомендація |
|---|--------------|----------|-----------|--------------|
| 1 | program_code\main.js (21) | Використано число 500 без пояснення | Magic Number | Винести 500 у константу MAX_TEXT_LENGTH |
| 2 | program_code\main.js (28) | formatPunctuation() виконує кілька різних задач | Long Method / SRP | Розбити функцію на менші допоміжні |
| 3 | program_code\main.js (28) | Повторюваний ланцюжок replace() | Code Duplication / Readability | Винести нормалізацію розділових знаків в окрему функцію |
| 4 | program_code\main.js (50) | generateMessage() має захардкоджені значення tone | Magic Strings | Винести значення у константи або словник |
| 5 | program_code\main.js (50) | generateMessage() використовує if/else для вибору шаблону | Simplify Conditional | Замінити if/else на словник шаблонів |
| 6 | program_code\main.js (54) | Можливе дублювання привітання у результаті | Input normalization / Business logic issue | Перевіряти, чи текст не починається з привітання |

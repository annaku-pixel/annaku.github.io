# Куцевич -> Рижова

| № | Файл і рядок | Проблема | Категорія | Рекомендація |
|---|--------------|----------|-----------|--------------|
| 1 | program_code\main.js (80) | copyResult() залежить від navigator.clipboard без fallback | Reliability / Defensive coding | Додати перевірку на існування navigator.clipboard та fallback |
| 2 | program_code\main.js (85) | copyResult() асинхронна, але викликається без await | Async handling issue | Зробити handler async та викликати await copyResult(...) |
| 3 | program_code\main.js (65) | saveToHistory() змінює дані й одразу оновлює інтерфейс | SRP | Розділити логіку збереження й оновлення UI |
| 4 | program_code\main.js (70) | renderHistory() не перевіряє існування historyList | Defensive coding | Додати guard clause: if (!historyList) return |
| 5 | program_code\tests\main.test.js (96) | Немає перевірки на кілька елементів в історії | Test completeness | Додати тест з кількома викликами saveToHistory |

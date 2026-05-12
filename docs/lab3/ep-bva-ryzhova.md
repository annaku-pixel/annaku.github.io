# EP та BVA – Рижова

| Тест-кейс | Вхідні дані | Очікуваний результат | Техніка | Статус |
|---|---|---|---|---|
| TC-04 | inputText("a".repeat(500)) | рядок довжиною 500 | BVA | pass |
| TC-05 | inputText("a".repeat(501)) | Error "Text is too long" | BVA | pass |
| TC-07 | formatPunctuation("привіт, СВІТ") | "Привіт, світ" | EP | pass |
| TC-10 | generateMessage("я вивчив фігму", "professional") | "Вітаю, я вивчив фігму" | EP, позитивний | pass |
| TC-11 | saveToHistory("Тест") | history містить 1 елемент | EP | pass |
| TC-12 | copyResult("") | Error "Немає тексту для копіювання" | EP, негативний | pass |

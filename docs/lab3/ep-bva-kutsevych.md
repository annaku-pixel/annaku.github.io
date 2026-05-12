# EP та BVA – Куцевич

| Тест-кейс | Вхідні дані | Очікуваний результат | Техніка | Статус |
|---|---|---|---|---|
| TC-01 | inputText("  hello  ") | "hello" | EP, позитивний | pass |
| TC-02 | inputText(123) | TypeError | EP, негативний | pass |
| TC-03 | inputText("   ") | Error "Text cannot be empty" | EP, негативний | pass |
| TC-06 | formatPunctuation("ти вивчив фігму. тепер вмієш") | "Ти вивчив фігму. Тепер вмієш" | EP | pass |
| TC-08 | generateMessage("я вивчив фігму", "formal") | "Добрий день, я вивчив фігму" | EP, позитивний | pass |
| TC-09 | generateMessage("я вивчив фігму", "friendly") | "Привіт! Я вивчив фігму" | EP, позитивний | pass |

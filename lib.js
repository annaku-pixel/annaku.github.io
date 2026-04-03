function checkPalindrome() {
    let input = prompt("Enter text to check if it's a palindrome:");
    if (input === null) {
        console.log("Input cancelled.");
        return;
    }

    let cleaned = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let reversed = cleaned.split('').reverse().join('');

    if (cleaned === reversed && cleaned.length > 0) {
        console.log(`"${input}" is a palindrome.`);
    } else {
        console.log(`"${input}" is not a palindrome.`);
    }
}


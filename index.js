let characters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

let passwordEl = document.getElementById("password-el");

function generatePassword() {
    passwordEl.textContent = generator();
}

function generator() {
    let randomCharacter = [];
    for (let i = 0; i <= 12; i++) {
        let randomIndex = Math.floor( Math.random() * characters.length );
        randomCharacter += characters[randomIndex];
    }
    return randomCharacter;
}


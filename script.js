//создаем переменную со словами и с помощью math.random выдаем игроку слово на выбор
let words = [
    "слон",
    "язык",
    "дождливый",
    "рыцарь",
    "человек"
];

let playWord = words[Math.floor(Math.random() * words.length)];

//создаем массив с ответом и заполняем его пропусками букв
let answerArray = [];
for (let i = 0; i < playWord.length; i++) {
    answerArray[i] = "_";
}

let lettersForAnswer = playWord.length;

//игровой цикл

while(lettersForAnswer > 0) {
    alert(answerArray.join(" "));
    
    let guessLetter = prompt("Введите букву или нажмите 'отмена' для выхода из игры.");
    
    if (guessLetter === null) {
        break;
    }
    
    else if (guessLetter.length != 1) {
        alert("Введите только одну букву.");
    }
    
    else {
        for(let j = 0; j < playWord.length; j++) {
            if (playWord[j] === guessLetter) {
                answerArray[j] = guessLetter;
                lettersForAnswer--;
             }
            }
        }
    }

if (lettersForAnswer == 0) {
                
    alert(answerArray.join(" "));
    
    let elementOnWin = document.createElement('h1');
    elementOnWin.innerHTML = "Ты маладес! Было загадано слово " + playWord + "!";
    document.body.appendChild(elementOnWin);
    
    let img = document.createElement('img');
    img.src = 'https://memepedia.ru/wp-content/uploads/2017/12/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%86%D0%B8%D1%8F2.jpg';
    document.body.appendChild(img);
}

else {
    let elementOnFinish = document.createElement('h1');
    elementOnFinish.innerHTML = "Game over!";
    document.body.appendChild(elementOnFinish);
    
    let imgOnFinish = document.createElement('img');
    imgOnFinish.src = 'https://www.publy.ru/wp-content/uploads/2018/10/post_5bb5cc1ba38d5.jpeg';
    document.body.appendChild(imgOnFinish);
}



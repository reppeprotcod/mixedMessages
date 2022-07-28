import {createMessage} from "./message.js";

const btnGet = document.getElementById("btnGet");

const first = ["Пусть это классное утро положит отличное начало успешному и плодотворному дню!", "Шлю и тебе заряд бодрости, настроения хорошего кучу, целую тебя крепко-крепко, мой любимый солнечный лучик!", 
"Встретить бы с тобой рассвет и увидеть, как от восходящее солнца играет в твоих глазах!", "В жизни ты — моя награда. С добрым утром, моя милая."];
const second = ["Люблю.", "Целую.", "Обнимаю.", "Улыбнись.", "Чмок."];

const getMessage = () => {
    let mes = createMessage(first, second);
    console.log(mes);
    alert(mes);
}

btnGet.addEventListener('click', getMessage);

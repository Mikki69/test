let block = document.querySelector(".block");
let openmenu = document.querySelector(".open_menu_bg");
let body = document.querySelector("body");
let container = document.querySelector(".container");
let buttons = document.querySelectorAll('.button');
let buttontext = document.querySelectorAll('.button_text');
let textquestion = document.querySelector('.text_question');
let emoji = document.querySelectorAll('.emoji');
let ticks = document.querySelectorAll('.after_tick');
let blockticks = document.querySelectorAll('.block_tick');
let number = document.querySelector('.number');
let circle = document.querySelector('.circle');
let youranswers = document.querySelector('.block_your_answers'); 
let que = document.querySelectorAll('.que'); 
let ans = document.querySelectorAll('.ans'); 
let spans = document.querySelectorAll("#span");


let question_num = 0;
const answers = [];
let num = 0;

const questions = [
    {
        question: 'Укажите ваш пол',
        emoji: ["&#128104", "&#128105"],
        options: ["Мужской", "Женский"]

    },
    {
        question: 'Сколько вам лет?',
        emoji: ["&#128118", "&#129492"],
        options: ["Меньше 18", "Больше 18"]

    },
    {
        question: 'У вас есть домашние животные?',
        emoji: ["&#128021", "&#128581"],
        options: ["Да", "Нет"]

    },
    {
        question: 'Сколько времени в день вы проводите в телефоне?',
        emoji: ["&#128245", "&#128241"],
        options: ["Меньше 5 часов", "Больше 5 часов"]

    },
    {
        question: 'Вам понравился опрос?',
        emoji: ["&#127878", "&#128169"],
        options: ["Да", "Нет"]

    },
];

document.querySelector('.menu_button').onclick = function() {
    if(num == 0){
        openmenu.style.display = "block";
        openmenu.classList.add("all");
        body.classList.add("size");
        body.style.padding = "0";
        container.classList.add("container_size");
        num++;
    }
    else{
        openmenu.style.display = "none";
        body.classList.remove("size");
        container.classList.remove("container_size");
        num = 0;
    }
};

answers.length = questions.length;

document.querySelector('#close').onclick = function() {
    question_num = 0;
    answers.length = 0;
    answers.length = questions.length;
    number.innerHTML = "0" + (question_num + 1);
    textquestion.innerHTML = questions[question_num].question;

    for (let j = 0; j < emoji.length; j++) {
        emoji[j].innerHTML = questions[question_num].emoji[j];
        buttontext[j].innerHTML = questions[question_num].options[j];
        ticks[j].classList.remove("visible"); 
        buttons[j].classList.remove("click");
    }

    circle.style.strokeDasharray = "20, 100";
    block.style.display = "none"; 
    block.classList.add("all");
    document.querySelector(".quiz_block").style.display = "flex";
    body.style.background = "#feb4cf";
    document.querySelector(".menu_button_enter button").style.background = "#feb4cf";
    document.querySelector(".logo_text").style.color = "#feb4cf";

    for (let i = 0; i < spans.length; i++) {
        spans[i].style.background = "#feb4cf";
    }

};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {   
    for (let j = 0; j < buttons.length; j++) {
        ticks[j].classList.remove("visible"); 
        buttons[j].classList.remove("click");
    }
    this.classList.add("click");
    ticks[i].classList.add("visible");
    });
}

for (let i = 0; i < blockticks.length; i++) {

    blockticks[i].onclick = function() {
        answers[question_num] = questions[question_num].options[i];
        question_num++;

        if(question_num == 5){
            document.querySelector(".quiz_block").style.display = "none";
            youranswers.style.display = "flex";
    
            for (let j = 0; j < answers.length; j++) {
                que[j].innerHTML = questions[j].question  + ": ";
                ans[j].innerHTML = answers[j];
                
            }
        }

        else{
            textquestion.innerHTML = questions[question_num].question;
            for (let j = 0; j < emoji.length; j++) {
                emoji[j].innerHTML = questions[question_num].emoji[j];
                buttontext[j].innerHTML = questions[question_num].options[j];
                ticks[j].classList.remove("visible"); 
                buttons[j].classList.remove("click");
            }
            number.innerHTML = "0" + (question_num + 1);
            circle.style.strokeDasharray = (question_num + 1) * 2 + "0"+", 100";
        } 
    };
}

document.querySelector('.btn_your_ansver').onclick = function() {
    block.style.display = "flex";
    youranswers.style.display = "none";
    body.style.background = "#f4ebdc";
    document.querySelector(".menu_button_enter button").style.background = "#f4ebdc";
    document.querySelector(".logo_text").style.color = "#f4ebdc";

    for (let i = 0; i < spans.length; i++) {
        spans[i].style.background = "#f4ebdc";
    }

}

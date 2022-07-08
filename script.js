const quizData = [
    {
        question: 'how old is florin',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: 'what is most used programing language in 2019',
        a: 'Java',
        b: 'c',
        c: 'python',
        d: 'javascript',
        correct: 'a'

    },{
        question: 'who is presedent of Us',
        a: 'Florin Pop',
        b: 'Donold trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },{
            question: 'what dose HTML stand for',
            a: 'Hypertext Markup Language',
            b: 'Casecoding Style Sheat',
            c: 'Jason Object Notation',
            d: 'Helicopters Terminals Lamborgines',
            correct: 'a'
    },{
        question: 'what year was Javascript lunched?',
        a:'2020',
        b:'2019',
        c:'2018',
        d:'none of the above',
        correct:'d'
    }
]

const quiz = document.getElementById("quiz");

const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
//
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected(){
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer =  answerEl.id;
        }
    });
    return answer;
}
function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () =>{
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz(); 
        }else{
          quiz.innerHTML = ` <h2>You answered correctly at ${score}/${quizData.length} question.<h2>`;
        }
    }
});
const quizDB = [
    {
      question: "Q1: Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Brendan",
      ans: "ans3"
    },
    {
      question: "Q2: Which one of these is a JavaScript package manager?",
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        b: "TypeScript",
        ans: "ans3"
    },
    {
      question: "Q3: Which tool can you use to ensure code quality?",
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",
      ans: "ans4"
    },
    {
        question: "Q4: Which tool can you use to ensure code quality?",
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint" , 
        ans: "ans4"
    }
    
  ];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

   question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }
    });
    return answer;
};

const deselectAll = () =>{
  answers.forEach((curAnsElem) =>curAnsElem.checked = false  );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
      score++;
    };

    questionCount++;

    deselectAll()

    if(questionCount < quizDB.length){
      loadQuestion();
    }else{

      showScore.innerHTML = `
           <h1> You scored ${score}/${quizDB.length} </h1>
           <button class="btn" onclick="location.reload()"> play again </button>
      ` ;

    showScore.classList.remove('scoreArea');

    }

});


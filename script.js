const questions = [
    {
        'que': 'which of the following is Markup Langusge',
        'a': 'html',
        'b': 'Css',
        'c': 'Js',
        'd': 'PHP',
        'correct': 'a'

    },
    {
        'que': 'Where in an HTML document is the correct place to refer to an external style sheet',
        'a': "in body section",
        'b': "at the end of document",
        'c': "in the head section",
        'd': "none",
        'correct': 'c'

    },
    {
        'que': 'Which HTML attribute is used to define inline styles',
        'a': 'font',
        'b': 'style',
        'c': 'class',
        'd': 'styles',
        'correct': 'b'

    },
    {
        'que': 'How do you add a background color for all <h1> elements?',
        'a': 'all.h1{background-color:#fff}',
        'b': 'h1{background-color:#fff}',
        'c': 'h1.all{background-color:#fff}',
        'd': 'none',
        'correct': 'b'

    },
    {
        'que': "What is the correct CSS syntax for making all the <p> elements bold?",
        'a': 'p{font-weight:bold;}',
        'b': 'p style="text-size:bold;"}',
        'c': 'p style="font-size:bold;}',
        'd': 'p{style-size:bold;}',
        'correct': 'a',

    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset()
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}?`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }

        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank you </H3>
    <H2> ${right}/${total} are correct
    </div>
    `
}
loadQuestion();
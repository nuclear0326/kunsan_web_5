const quizData = [
    {
        question: "다음 중 직업과 관련 없는 단어는?",
        options: ["firefighter", "with", "police officer", "teacher", "professor"],
        answer: "b"
    },
    {
        question: "candidate의 뜻은?",
        options: ["후보자", "유산", "낙선", "즐기다", "반기다"],
        answer: "a"
    },
    {
        question: "mobile과 뜻이 유사한 단어는?",
        options: ["movie", "game", "handly", "cell", "message"],
        answer: "c"
    },
    {
        question: "actually의 뜻은?",
        options: ["사과", "사연","사전", "사막", "사실"],
        answer: "e"
    },
    {
        question: "leave의 뜻이 아닌 것은?",
        options: ["남기다", "왼쪽", "떠나다", "놓아두다", "~로 가다"],
        answer: "b"
    }   
    ];

    let currentQuestion = 0;
    let correctAnswers = 0;
    let page_num = 0;

    function showQuestion() {
        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");
        
        questionElement.textContent = `// 오지선다 문제: ${quizData[currentQuestion].question}`;
        
        // 옵션 목록 추가
        optionsElement.innerHTML = "";
        quizData[currentQuestion].options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = `${String.fromCharCode(97 + index)}. ${option}`;
            optionsElement.appendChild(li);
        });
    }

    function enterkey() {
        if (window.event.keyCode == 13) {
            checkAnswer();
        }
    }

    function checkAnswer() {
        const answerElement = document.getElementById("answer");
        const resultElement = document.getElementById("result");
        const scoreElement = document.getElementById("score");
        const pageElement = document.getElementById("page");
        const userAnswer = answerElement.value.toLowerCase();

        if (userAnswer === quizData[currentQuestion].answer) {
            resultElement.textContent = "정답입니다!";
            correctAnswers++;
            page_num++;
            pageElement.textContent = `${page_num} / 5`;
        } else {
            alert(`틀렸습니다. 정답은 ${quizData[currentQuestion].answer}였습니다.`)
            resultElement.textContent = "틀렸습니다."
            page_num++;
            pageElement.textContent = `${page_num} / 5`;
        }

        currentQuestion++;

        if (currentQuestion >= quizData.length) {
            resultElement.textContent = "퀴즈 종료!";
            scoreElement.textContent = `맞춘 갯수: ${correctAnswers} / ${quizData.length}`;
        } else {
            showQuestion();
            answerElement.value = "";
        }
    }

    // 초기 퀴즈 로딩
    showQuestion();
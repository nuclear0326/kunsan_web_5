const quizData = [
    {
        question: "집합이 아닌 것을 고르시오.",
        options: ["교집합", "합집합", "차집합", "여집합", "집합 행동"],
        answer: "e"
    },
    {
        question: "연속의 성질이 아닌 것은?",
        options: ["kf(x)", "f(x)+g(x)", "f(x)/g(x) (g(a)=0)", "f(x)g(x)", "f(x)-g(x)"],
        answer: "c"
    },
    {
        question: "최빈값의 특성으로 옳지 않은 것은?",
        options: ["사용하는 곳이 없다", 
        "존재하지 않거나 여러 개 존재할 수 있다.", 
        " 특이 값의 영향을 전혀 받지 않는다", 
        "자료의 개수가 많은 경우에 부적절하다", 
        "수리적으로 다루기 매우 힘들다"],
        answer: "a"
    },
    {
        question: "합사건의 성질이 아닌 것은?",
        options: ["A U A = A", 
        "A U B = B U A",
        "A U S = S", 
        "(A U B) U C = (A U B U C)", 
        "A U A = B"],
        answer: "d"
    },
    {
        question: "다음 중 옳은 것은?",
        options: ["평균은 특이값의 유무에 영향을 받는다", 
        "중앙값은 특이값의 유무에 영향을 받는다.", 
        "최빈값은 특이값의 유무에 영향을 받는다.", 
        "중앙값은 여러 개 존재할 수 있다.", 
        "최빈값은 오로지 하나뿐이다."],
        answer: "a"
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
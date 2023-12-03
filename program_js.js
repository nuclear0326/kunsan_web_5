const quizData = [
    {
        question: "박스 모델에 관해 틀린 설명은?",
        options: ["모든 HTML 태그는 박스 모델의 적용을 받는댜.",
         "여백(margin) 색은 지정할 수 없고, 부모 태그의 색이 비춰 출력된다.", 
         "패딩(padding)색은 태그의 배경색과 같다.", 
         "테두리는 실선으로만 가능하다.", 
         "박스의 크기는 제어할 수 있다."],
        answer: "d"
    },
    {
        question: "다음 중 셀렉터로 적합하지 않은 것은?",
        options: ["속성", "id", "##div", "class", "자식"],
        answer: "c"
    },
    {
        question: "다음 중 HTML 태그에 대한 브라우저의 디폴트 배치는?",
        options: ["정적 배치", "상대 배치", "절대 배치", "고정 배치", "적당 배치"],
        answer: "a"
    },
    {
        question: "자바스크립트의 특징이 아닌 것은?",
        options: ["자바스크립트 프로그램은 컴파일 과정이 간단하다.", 
        "자바스크립트 프로그램은 HTML 페이지에 소스 코드 형태로 삽입된다.",
        "Netscape사가 처음 개발하였다.", 
        "웹 페이지에 동적인 변화를 만드는데 사용된다.", 
        "자바스크립트는 C언어 구조를 차용하고 단순화시켰다."],
        answer: "a"
    },
    {
        question: "다음 중 연산과 결과가 틀린 것은?",
        options: ["53+10=63", "53/10=5", "53%10=3", "53*10=530", "1+2*3=7"],
        answer: "b"
    }
    ];

    let currentQuestion = 0;
    let correctAnswers = 0;
    let page_num = 0;
    //1

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
        //1
        const userAnswer = answerElement.value.toLowerCase();

        if (userAnswer === quizData[currentQuestion].answer) {
            resultElement.textContent = "정답입니다!";
            correctAnswers++;
            page_num++;
            pageElement.textContent = `${page_num} / 5`;
            //2
        } else {
            alert(`틀렸습니다. 정답은 ${quizData[currentQuestion].answer}였습니다.`)
            resultElement.textContent = "틀렸습니다."
            page_num++;
            pageElement.textContent = `${page_num} / 5`;
            //2
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

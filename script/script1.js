function myfunction(event) {

    event.preventDefault();

    const correctAnswer1 = "Id";
    const correctAnswer2 = "float";
    const correctAnswer3 = "default";
    const correctAnswer4 = "class";
    const correctAnswer5 = "link";
    const checkAnswer1 = document.querySelector("input[name='quiz1']:checked").value;
    const checkAnswer2 = document.querySelector("input[name='quiz2']:checked").value;
    const checkAnswer3 = document.querySelector("input[name='quiz3']:checked").value;
    const checkAnswer4 = document.querySelector("input[name='quiz4']:checked").value;
    const checkAnswer5 = document.querySelector("input[name='quiz5']:checked").value;
    const totalScore = document.getElementById('scorenumber');
    let score = 0;

    if (checkAnswer1 === correctAnswer1) {
        score = 1
        totalScore.innerHTML = "" + score;
    }
    if (checkAnswer2 === correctAnswer2) {
        score = score + 1;
        totalScore.innerHTML = "" + score;
    }
    if (checkAnswer3 === correctAnswer3) {
        score = score + 1;

        totalScore.innerHTML = "" + score;
    }
    if (checkAnswer4 === correctAnswer4) {
        score = score + 1;

        totalScore.innerHTML = "" + score;
    }
    if (checkAnswer5 === correctAnswer5) {
        score = score + 1;
        totalScore.innerHTML = "" + score;
    }
        else {
            totalScore.innerHTML = "" + score;
        }
}   
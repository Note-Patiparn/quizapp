function myfunction(event) {

    event.prevenDefault();

    const correctAnswer1 = "Id";
    const correctAnswer2 = "float";
    const correctAnswer3 = "default";
    const correctAnswer4 = "class";
    const correctAnswer5 = "link";
    const checkAnswer1 = document.querySelector("choice.input[name='quiz1']:checked").value;
    const checkAnswer2 = document.querySelector("input[name='quiz2']:checked").value;
    const checkAnswer3 = document.querySelector("input[name='quiz3']:checked").value;
    const checkAnswer4 = document.querySelector("input[name='quiz4']:checked").value;
    const checkAnswer5 = document.querySelector("input[name='quiz5']:checked").value;

    if (checkAnswer1 === correctAnswer1) {
        const totalScore = document.getElementById('scorenumber');
        totalScore.innerHTML = 5;
    }
        else {
            const totalScore = document.getElementById('scorenumber');
            totalScore.innerHTML = 0;
        }
    alert(correctAnswer1.value);
}   
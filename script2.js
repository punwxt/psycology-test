function selectChoice(animalList) {
    animalList.forEach(a => scores[a]++);

    currentQuestion++;

    if (currentQuestion > 16) {
        location.href = "story-end.html"; 
    } else {
        loadQuestion();
    }
}

// ----------------- สร้างคะแนนสัตว์ -----------------
let animals = JSON.parse(localStorage.getItem("animals")) || {
  dog: 0, dolphin: 0, bear: 0, fox: 0,
  whale: 0, meerkat: 0, otter: 0, beaver: 0,
  narwhal: 0, seahorse: 0, octopus: 0, owl: 0,
  elephant: 0, ant: 0, panda: 0, honeybee: 0
};

// บันทึก
function saveScore() {
  localStorage.setItem("animals", JSON.stringify(animals));
}

// ฟังก์ชันเพิ่มคะแนนสัตว์กลุ่มที่เลือก
function addScore(list) {
  list.forEach(a => {
    animals[a] += 1;
  });
  saveScore();
}

// เรียกเมื่อกดคำตอบ → บวกคะแนน + ไปหน้าใหม่
function chooseAnswer(animalList, nextPage) {
  addScore(animalList);
  window.location.href = nextPage;
}

// ----------------- ฟังก์ชันสรุปผล -----------------
function showResult() {
  let box = document.getElementById("result-box");

  // หา max
  let maxAnimal = "";
  let maxScore = -1;

  for (let animal in animals) {
    if (animals[animal] > maxScore) {
      maxScore = animals[animal];
      maxAnimal = animal;
    }
  }

  box.innerHTML = `

    <h1>You're a "${maxAnimal.toUpperCase()}"</h1>
  `;
}

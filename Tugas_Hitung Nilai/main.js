function checkGrade(nilai) {

    let grade;

    if (nilai >= 90 && nilai <= 100) {
        grade = "A";
    } else if (nilai >= 80 && nilai <= 89) {
        grade = "B";
    } else if (nilai >= 70 && nilai <= 79) {
        grade = "C";
    } else if (nilai >= 60 && nilai <=69) {
        grade = "D";
    } else if (nilai >= 0 && nilai <= 59) {
        grade = "E";
    } else {
        grade = "tidak terdeteksi! Kesalahan input!"
    }

    return grade;

}

function showGrade() {
    const nilai = document.getElementById("nilaiInput").value;
    const result = checkGrade(nilai);
    document.getElementById("result").textContent = "Grade: " + result;
}

console.log(checkGrade(90))
console.log("Grade " + checkGrade(9))

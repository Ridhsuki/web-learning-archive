// String
let nama = "Suki";
let nmr = 10;

let ary = [1, 2, 3, "Ridho"];

let ary2 = []
ary2['nama'] = 'Ridho';
ary2['alamat'] = 'Klaten';
ary2.gender = 'Pria';
ary2.umur = 18;
ary2.status = false;

let a = true;
let b = false;

let c = 10
let d = 10

function changeAge(umur) {
    if (umur >= 17) {
        console.log("Silahkan nonton")
    } else {
        console.log("gaboleh nonton!")
    }
}

// changeAge(90)

function checkGrade(nilai) {

    let grade
    nilai = Math.floor(nilai)

    if (nilai >= 90 && nilai <= 100) {
        grade = "A"
    } else if (nilai >= 80 && nilai <= 90) {
        grade = "B"
    } else if (nilai >= 70 && nilai <= 80) {
        grade = "C"
    } else if (nilai >= 60 && nilai <= 70) {
        grade = "D"
    } else if (nilai >= 0 && nilai <= 60) {
        grade = "E"
    } else {
        grade = "nilai tidak diketahui"
    }
    
    console.log(nilai)
    return grade;
}

function checkGradeBySwitchCase(nilai) {

    switch(true) {
        case (nilai >= 90 && nilai <= 100) :
            console.log("A");
            break;
        case (nilai >= 80 && nilai <= 90) :
            console.log("B")
            break;
        case (nilai >= 70 && nilai <= 80) :
            console.log("C")
            break;
        case (nilai >= 60 && nilai <= 70) :
            console.log("D")
            break;
        case (nilai >= 0 && nilai <= 60) :
            console.log("E")
            break;
        default :
            console.log("nilai tidak diketahui")
    }
}

checkGradeBySwitchCase(80)

function ternaryOperator() {
    return false ? console.log("Iya, ini True") : console.log("Ngga, ini False")
}

ternaryOperator()


// console.log("Grade " + checkGrade(89.6))
// console.log(c > d)

// console.log (new Date())
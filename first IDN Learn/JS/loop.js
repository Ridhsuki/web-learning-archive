// function loopFor() {
//     for (let i = 1; i <= 10; i++){
//         console.log(i)
//     }
// }
// loopFor()
function selangSeling(i) {
        if (i % 2 === 0) {
            if (i === 2) {
                console.log("Dua")
            } else if (i === 4) {
                console.log("Empat")
            } else if (i === 6) {
                console.log("Enam")
            } else if (i === 8) {
                console.log("Delapan")
            } else {
                console.log("Sepuluh")
            }
        }
        else {
            console.log(i)
        }
    }

function loopFor() {
    let i = 1;
    for (i; i <= 10; i++){
        selangSeling(i)
    }
}
 
// loopFor()

function loopWhile(){
    let x = 3;
    while (x <= 10){
        // console.log(i)
        selangSeling(x)
        x++
    }
}

// loopWhile() 

function loopDoWhile(){
    let a = 1
    do {
        console.log(a)
        a++
    } while (a <= 10)
}

loopDoWhile()

let b = 5 
do {
    console.log(b)
    b++
} while (b <= 100)

document.getElementById("demo").innerHTML = b;
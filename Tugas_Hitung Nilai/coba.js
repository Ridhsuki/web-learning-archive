function checkGrade(){
    
    nilai = Math.floor(parseFloat(document.getElementById("nilai").value))
    console.log(nilai)

    if(nilai >= 90 && nilai <= 100){
        grade = 'A'
    }else if(nilai >= 80 && nilai <= 89){
        grade = 'B'
    }else if(nilai >= 70 && nilai <= 79){
        grade = 'C'
    }else if(nilai >= 60 && nilai <= 69){
        grade = 'D'
    }else if(nilai >= 0 && nilai <= 59){
        grade = 'E'
    }else{
        grade = "nilai tidak diketahui !"
    }
 
    // string interpolation
    // return `Grade ${grade}`
    
    document.getElementById("hasil").innerHTML = `Grade ${grade}`

}

function bayarLangganan() {
    let langganan = false
    let lembar = 109 
    if(langganan) {
        console.log("500/lembar")
    } else {
        if(lembar > 100) {
            console.log("800/lembar")
        } else {
            console.log("1k/lembar")
        }
    }
}

bayarLangganan()
function getData() {
    let data2 = parseFloat(document.getElementById("data2").value)
    let data1 = parseFloat(document.getElementById("data1").value)
    let hasil = data1 + data2;

    document.getElementById("hasil").innerHTML = hasil;
    console.log(hasil)
}

function showName() {

    // if(true) {
    //     var x ="Halo x";
    //     let y ="Halo y";
    //     // console.log(y);
    // }
    // console.log(x)
    // console.log(y)

    let nama = "Suki!"
    console.log(nama)

    nama = "Basuki!"
    console.log(nama)

    const phi = 3.14;
    console.log(phi);

    let nF = "10"
    let nL = "HO"
    let fN = nF + " " + nL

    console.log(fN)
    
}

showName()
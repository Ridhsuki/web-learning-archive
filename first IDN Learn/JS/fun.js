
// Signature = Identitas Fun -> terdiri dari nama dan parameter/argumen
// Body = 

// function sum (a, b) {
//     return a + b
// }

let sum = function (a = 10, b = 10) {
    return a + b
}

console.log(sum(20, 30))

// fun eksplisit = Jelas
function greet(name){
    return name 
}
console.log(greet("ini Fun Greet"))

// fun implisit = belum jelas
function greet2() {
    console.log("Belum Jelas dan bisa berubah2, belum di tetapkan parameternya")
}
greet2()

// Fun didalam Fun

function luasLingkaran(r){

    function hitungPhi(){
        return Math.PI * r * r
    }

    return hitungPhi()
}

console.log(luasLingkaran(9))

// Scoope chain Functiion 

let global = "Global!"

// function outerFun(){
//     let outerVar = "Outer!"

//     function innerFun() {
//         let innerVar = 'Inner!'

//         console.log(global)
//         console.log(outerVar)
//         console.log(innerVar)
//     }
//     innerFun()
// } outerFun()

let fn_A = function(){
    // console.log(this)
    let a = 111

    function fn_B(){
        let b = 222
        console.log(`ini adalah B bisa akses A dengan nilai = ${a}`)
        console.log(`Ini adalah data dari B itu sendiri = ${b}`)

        function fn_C(){
            let c = 333
            console.log(`ini adalah C bisa akses A, yang bernilai = ${a}`)
            console.log(`Ini adalah C bisa akses B, yang bernilai = ${b}`)
            console.log(`Ini adalah data dari C itu sendiri = ${c}`)
        }

        fn_C()
        // console.log(c) ini dari function B, ga akan bisa akses punya C
    }

    fn_B()
    // console.log(c) fn_A ngga akan bisa akses punya childnya
    // console.log(b) fn_A ngga akan bisa akses punya childnya
}

// fn_A()

// CALLBACK

function sum2(a, b) {
    let result = a() + b()
    console.log(result)
}

function fn_AA () {
    return 1
}

function fn_BB () {
    return 2
}

sum2(fn_AA, fn_BB) //mengambil function fn_AA dan fn_BB di dalam function sum2()

// Function yang memanggil dirinya sendiri
// (function(){
//     console.log("halo")
// }())

// (function(name){
//     console.log("Hallo, " + name)
// }("Suki!"))

// Recursive function for search factorial

function faktorial(n) {
    if(n == 0 || n == 1){
        return 1
    }
    return n * faktorial(n - 1)
}

console.log(faktorial(10))

// Arrow Function
const Hallo1 = function(name){
    return(`Halo ${name}`)
}

console.log(Hallo1("Suki"))

// With Params 1
const Hallo2 = name => (`hai ${name}`) 
console.log(Hallo2("nama"))

// With Params 1
// const Hai2 = (name, address) => (`Hai ${name}!, Address ${address}`)

// const Hai2 = (name, address) => ((
//     status  : 200,
//     msg     : `hai ${name}, Address ${address}`
// ))

const Hai3 = (name) => {
    if(!name){
        console.log("harap Isi Nama!")
    }
    return `hai, ${name}`
}

// console.log(Hai3())

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json()) // convert to json
        .then(data => { 
            console.log(data[3].body)
            document.getElementById('fromApi').innerHTML = data[1].title
        })
        .catch(error => console.error(error))
}

// getData()

const getData2 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}
getData2()


const dariApi = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            console.log(json[1].title)
            document.getElementById('fromApi').innerHTML = json[1].title
        })
}

console.log("Ini fungsi dariApi" + dariApi())
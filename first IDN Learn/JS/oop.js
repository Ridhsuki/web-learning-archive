// let car = {
//     brand: "Xenia",
//     color: "Black",
//     year: 2017,
//     stop: function () {
//         console.log(this.brand)
//     }
// }

// // console.log(car.stop())

// car.brand = "Avanza" // bisa mengganti object
// // console.log(car.brand)

// delete (car.year) // untuk menghapus property dan value
// // console.log(car)

// car.price = 200000000 // untuk menambah value 

// car.move = function () {
//     console.log("Move!")
//     console.log(this.brand)
// }

// // console.log(car.move())

// class Motor {
//     constructor(merk, warna, harga) { // yang pertama kali di jalankan ketika object di panggil
//         this.merk = merk
//         this.warna = warna
//         this.harga = harga
//     }
//     tampilkanMotor() {
//         console.log(`Motorku bermerk ${this.merk} yang berwarna ${this.warna} dan harganya ${this.harga}`)
//     }
// }

// let motorKu = new Motor("Ducati", "Merah", 3000)
// motorKu.tampilkanMotor()

// let motorKu2 = new Motor("Satria", "Hijau", 2500)
// motorKu2.tampilkanMotor()

// // Constraction

// class kendaraan {
//     #merk
//     constructor (jenis, merk, model, tahun){
//         this.jenis = jenis
//         this.#merk = merk
//         this.model = model
//         this.tahun = tahun
//     }
//     showInfo(){
//         console.log(`Kendaraan ber jenis ${this.jenis} dengan merk ${this.merk}`)
//     }
//     showInfo2(){
//         return this.showInfo()
//     }
// }

// class Pesawat extends kendaraan{
//     #bahanBakar
//     constructor(merk, model, tahun, bahanBakar){
//         super("Pesawat", merk, model, tahun)
//         this.#bahanBakar = bahanBakar
//     }
// }


// let pswtku = new Pesawat("Air Asia", "Boing", 2011, "Solar")
// pswtku.showInfo2()

// class Sepeda extends kendaraan{
//     constructor(merk, model, tahun) {
//         super("Sepeda", merk, model, tahun)
//     }
// }

// let spdKu = new Sepeda("Wimcycle", "Gunung", 2009)
// spdKu.showInfo() 
// console.log(spdKu.merk) // Terproteksi

// // Constructor coba2

// class TempatTinggal {
//     constructor(Kota, Provinsi, Negara){
//         this.Kota = Kota
//         this.Provinsi = Provinsi
//         this.Negara = Negara
//     }
//     showTT(){
//         console.log(`Saya Tinggal di Kota ${this.Kota}, Provinsi ${this.Provinsi}, ${this.Negara}.`)
//     }
// }

// class Nasional extends TempatTinggal {
//     constructor(Provinsi, Negara){
//         super('Bogor', Provinsi, Negara)
//     }
// } 

// let ttKu = new Nasional("Jabar", "Indonesia")
// ttKu.showTT()

// class Internasional extends TempatTinggal {
//     constructor(Kota, Provinsi){
//         super(Kota, Provinsi, "Jepang")
//     }
// } 

// let ttIKu = new Internasional("Tokyo", "Hokkaido")
// ttIKu.showTT()

// // Encaptulation (Private/Public) #

// // Polimorfisme

// class Food {
//     constructor(nama){
//         this.nama = nama
//     }
//     flavor(){
//         console.log("Rasa Makanan")
//     }
// }

// class Chocolate extends Food {
//     constructor(nama){
//         super(nama)
//     }
//     flavor(){
//         // super.flavor()
//         console.log(`${this.nama} manis`)
//     }
// }

// class Chesse extends Food {
//     constructor(nama){
//         super(nama)
//     }
//     flavor(){
//         console.log(`${this.nama} asin`)
//     }
// }

// let foodList = [
//     new Food(),
//     new Chocolate('Coklat'),
//     new Chesse('Keju')
// ]

// foodList.forEach(Food =>(
//     Food.flavor()
// ))

// let CkltQ = 

function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Data ditampilkan"
            resolve(data)
        }, 2000)
    })
}

async function getDataFetch() {
    console.log("Memproses data...")
    const data = await fetchData()
    console.log(data)
    console.log("selesai")
}

getDataFetch()
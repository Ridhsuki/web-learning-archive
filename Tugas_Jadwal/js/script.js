// Ambil waktu secara real
const currentTime = new Date()
const getYear = currentTime.getFullYear()
const getMonth = currentTime.getMonth() + 1
const getDate = currentTime.getDate()

function formattedMont(){
    if(getMonth < 10){
        mont = `0${getMonth}`
    } else {
        mont = getMonth
    } return mont
}

function formattedDate(){
    if(getDate < 10){
        date = `0${getDate}`
    } else {
        date = getDate
    } return date
}

const tanggal = `${getYear}-${formattedMont()}-${formattedDate()}`
console.log(`${getYear}-${formattedMont()}-${formattedDate()}`)

function getJadwalShalat(){
    fetch('https://api.myquran.com/v2/sholat/jadwal/1414/'+tanggal)
        .then(res => res.json())
        .then(data => {
            const jadwal = data.data.jadwal
            document.getElementById('imsak').textContent = jadwal.imsak
            document.getElementById('shubuh').textContent = jadwal.subuh
            document.getElementById('terbit').textContent = jadwal.terbit
            document.getElementById('dhuha').textContent = jadwal.dhuha
            document.getElementById('dzuhur').textContent = jadwal.dzuhur
            document.getElementById('ashar').textContent = jadwal.ashar
            document.getElementById('maghrib').textContent = jadwal.maghrib
            document.getElementById('isya').textContent = jadwal.isya
            document.getElementById('tanggal').textContent = jadwal.tanggal
        })
}

getJadwalShalat()
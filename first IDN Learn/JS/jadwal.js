// Ambil New Time

const CurrentTime = new Date()
const getYear = CurrentTime.getFullYear()
const getMont = CurrentTime.getMonth() + 1
const getDay = CurrentTime.getDate()

// menambah 0 pada bulan 1 digit
function formattedMonth(){
    if (getMont < 10) {
        month = `0${getMont}`
    } else {
        month = getMont
    }
    return month
}

// console.log(formattedMonth())

// menambah 0 pada tanggal 1 digit
function formattedDay() {
    if (getDay < 10) {
        day = `0${getDay}`
    } else {
        day = getDay
    } return day
}

// console.log(formattedDay())

const tanggal = `${getYear}-${formattedMonth()}-${formattedDay()}`

// console.log(tanggal)

function getJadwalSholat(){
    fetch('https://api.myquran.com/v2/sholat/jadwal/1414/'+tanggal)
        .then(response => response.json()) // convert ke json
        .then(data => {
            // console.log(data)
            const jadwal = data.data.jadwal
            // console.log(jadwal)
            document.getElementById('imsak').textContent = jadwal.imsak
            document.getElementById('shubuh').textContent = jadwal.subuh
            document.getElementById('terbit').textContent = jadwal.terbit
            document.getElementById('dhuha').textContent = jadwal.dhuha
            document.getElementById('dzuhur').textContent = jadwal.dzuhur
            document.getElementById('asar').textContent = jadwal.ashar
            document.getElementById('maghrib').textContent = jadwal.maghrib
            document.getElementById('isya').textContent = jadwal.isya
            document.getElementById('tanggal').textContent = jadwal.tanggal
        })
}

getJadwalSholat()
async function getData() {
    const response = await fetch('https://api.myquran.com/v2/sholat/kota/semua')
    const data = await response.json()
    const selectCity = document.getElementById('selectCity')

    data.data.forEach(city => {
        const option = document.createElement('option')
        option.value = city.id
        option.textContent = city.lokasi
        selectCity.appendChild(option)
    });
}

async function getJadwalSolat(){
    const city = document.getElementById('selectCity').value

    if(!city){
        alert('Pilih Kota!')
    }

    const today = new Date()
    const formatDateToday = today.toISOString().split('T')[0]
    const response = await fetch (`https://api.myquran.com/v2/sholat/jadwal/${city}/${formatDateToday}`)
    const data = await response.json()

    const Jadwal = data.data.jadwal
    
    const jadwalSolat = document.getElementById('jadwalSolat')

    jadwalSolat.innerHTML = `
        <div class='jadwal-items'><span>Shubuh </span><span>${Jadwal.subuh}</span></div>
        <div class='jadwal-items'><span>Dzuhur </span><span>${Jadwal.dzuhur}</span></div>
        <div class='jadwal-items'><span>Asar </span><span>${Jadwal.ashar}</span></div>
        <div class='jadwal-items'><span>Maghrib </span><span>${Jadwal.maghrib}</span></div>
        <div class='jadwal-items'><span>Isya </span><span>${Jadwal.isya}</span></div>
    `

    document.getElementById('message').style.display = 'none';
}


getData()
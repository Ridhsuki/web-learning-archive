function getJoke(){
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
        .then(respon => respon.json())
        .then(data => {
            const joke = data
            console.log(joke.setup)
            document.getElementById('quest').innerHTML = joke.setup
            setTimeout(()=> {
                console.log(joke.delivery)
                document.getElementById('answer').innerHTML = joke.delivery
            },3000)
        })
        .catch(error => {
            console.error("gagal:", error)
        })
}

getJoke()
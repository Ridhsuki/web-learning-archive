let currentIndex = 0
let dataPost = []

const fetchData = function (url) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            // console.log(data)
            dataPost = data
            displayData(currentIndex)
            console.log(dataPost)
        })
        .catch(function (error) {
            console.log(error)
        })
}

const displayData = function (index) {
    if (dataPost.length > 0) {
        document.getElementById('title').innerHTML = dataPost[index].title
        document.getElementById('body').innerHTML = dataPost[index].body
    }

}

const nextData = function(){
    if(dataPost.length > 0){
        // currentIndex += 1
        displayData(currentIndex += 1)
        // console.log(currentIndex)
    }
}

displayData(currentIndex)

// console.log(dataPost)

fetchData('https://jsonplaceholder.typicode.com/posts')

// Return Function

function fn_A() {
    let a = "halo"
    return function(){
        console.log("Kamu")
    }
}

let kamu = fn_A()

kamu()
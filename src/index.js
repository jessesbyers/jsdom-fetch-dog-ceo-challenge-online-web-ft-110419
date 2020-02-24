console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
    // DONE - challenge 1
    fetchDogs(imgUrl);
     // DONE - challenge 1
    fetchBreeds(breedUrl);

    // challenge 3
    document.querySelector("ul").addEventListener('mouseover', function() {
        let dogs = document.querySelectorAll("li")
        dogs.forEach(dog => {
            dog.addEventListener('click', function() {
                dog.style = "color:red"
            })
        })
    })

    document.getElementById("breed-dropdown").addEventListener('click', function(){
        filterDogs()
    })
})


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDogs(url) {
    return fetch(url)
    .then(resp => resp.json())
    .then(json => renderImages(json)); 
}

function renderImages(json) {
    const dogImgContainer = document.getElementById("dog-image-container");
        json[`message`].forEach(dog => {
        const img = document.createElement('div')
        img.innerHTML = `<img src=${dog}>`
        dogImgContainer.appendChild(img)
    })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds(url) {
    return fetch(url)
    .then(resp => resp.json())
    .then(json => renderBreeds(json)); 
}


function renderBreeds(json) {
    let breeds = Object.keys(json.message)
    const breedList = document.getElementById("dog-breeds");

        breeds.forEach(breed => {
            const li = document.createElement('li')
            li.innerHTML = breed
            breedList.appendChild(li)
        })

}


function filterDogs(json) {
    let dogs = document.querySelectorAll("li")
    // let dogs = Object.keys(json.message)

    document.getElementById("breed-dropdown").addEventListener('click', function(){
        dogs.forEach(dog => {

            if (dog.innerText[0] !== document.getElementById("breed-dropdown").value) {
                document.getElementById("dog-breeds").removeChild(dog)
            } 
        })
    })
}

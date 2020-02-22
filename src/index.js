console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs(imgUrl);
    fetchBreeds(breedUrl);
  })

// DONE - challenge 1
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

//   DONE - Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds(url) {
    return fetch(url)
    .then(resp => resp.json())
    .then(json => renderBreeds(json)); 
}
function renderBreeds(json) {
    // console.log(json.message)
    // console.log(`${Object.keys(json.message)}`);
    let breeds = Object.keys(json.message)
    // console.log(breeds);
    const breedList = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
            const li = document.createElement('li')
            li.innerHTML = breed
            breedList.appendChild(li)
    })
}

// Challenge 3

  
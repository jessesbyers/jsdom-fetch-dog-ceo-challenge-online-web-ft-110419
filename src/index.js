console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// DONE - challenge 1
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

  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs(imgUrl);
    fetchBreeds(breedUrl);
  })

//   Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds(url) {
    return fetch(url)
    .then(resp => resp.json())
    .then(json => renderBreeds(json)); 
}
// need to figure out how to get one layer deeper in nested object
function renderBreeds(json) {
    const breedList = document.getElementById("dog-breeds");
    console.log(json.message)
    // for (let i = 0; i < json.message.length; i++) {
        console.log(`${Object.keys}`);
    // }

    //   let breeds = []
    // Object.keys.forEach(breed => {
    //     // breeds.push(breed)
    //     console.log(breed)


    //         const li = document.createElement('li')
    //         li.innerHTML = `<img src=${breed.key}>`
    //         breedList.appendChild(li)
    // })
    
}



  
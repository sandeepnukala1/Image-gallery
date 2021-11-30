const openFullScreen = (img) => {
    let modalContainer = document.getElementById('modal-image')
    let imgSrc = `<img class="hidden-img" src=${img} >`
    modalContainer.innerHTML = imgSrc
    document.getElementById("myModal").style.display = "block";;
    
}

const closeModal = () => {
    let modalContainer = document.getElementById('modal-image')
    modalContainer.innerHTML = '';
    document.getElementById("myModal").style.display = "none";
}

const createImageElements = (imgData) => {
  console.log(imgData)
  const container = document.getElementById('image-gallery')
  for(let i=0; i<imgData.length; i++) {
      let fullImage = imgData[i].urls.raw
      let imgEle = `<a><img src=${imgData[i].urls.thumb} width="300" height="250" onclick="openFullScreen('${fullImage}');">`
      container.innerHTML += imgEle
    }
} 

const getImageData = async () => {
  let response = await fetch('data/photos.json')
  let data = await response.json()
  createImageElements(data)
}

getImageData()
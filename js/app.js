document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.next-pet-btn')
  const img = document.querySelector('.pet-img')
  const urlApi = 'https://dog.ceo/api/breeds/image/random'

  async function fetchHandler() {
    try {
      const response = await fetch(urlApi)
      const data = await response.json()
      img.src = data.message
    } catch(error) {
      console.log(error)
    }
  }

  button.addEventListener('click', () => {
    if(img.complete) {
      fetchHandler()
    }
  })

})
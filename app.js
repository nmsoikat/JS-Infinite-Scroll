const container = document.querySelector(".container")
const loading = document.querySelector(".loading")

const numberGenerate = () => {
  return Math.floor(Math.random() * 100)
}

function loadImages() {
  let limit = 10
  while (limit > 0) {
    fetch(`https://picsum.photos/id/${numberGenerate()}/info`)
      .then((res) => res.json())
      .then((data) => {
        const img = document.createElement("img")
        img.src = data.download_url
        container.appendChild(img)
      })
      .catch((err) => {
        console.log(err)
      })
    limit--
  }
}

loadImages()

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loading.style.display = "visible"
    loadImages()
    loading.style.display = "hide"
  }
})

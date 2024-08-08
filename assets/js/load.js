import { GODS } from "./gods.js"

const menuIcon = document.querySelector(".menu-icon")
const menuItems = document.querySelector(".menu-items")
const galleryDiv = document.querySelector(".gallery")
const infoDiv = document.querySelector(".info")

let mobileMenuShown = false

menuIcon.addEventListener("click", () => {
  mobileMenuShown = !mobileMenuShown
  menuIcon.classList.remove("active")
  if (mobileMenuShown) menuIcon.classList.add("active")
})

infoDiv.addEventListener("click", () => (infoDiv.style.display = "none"))

const showGodInfo = ({ greek, roman, desc, image: { x, y } }) => {
  infoDiv.innerHTML = `
  <div class="info-container">
    <div class="god-img" style="background-position: ${x}% ${y}%;"></div>
    <h4 class="greek-title">Nombre griego:</h4>
    <p class="greek-text">${greek}</p>
    <h4 class="roman-title">Nombre romano:</h4>
    <p class="roman-text">${roman}</p>
    <p class="desc-text">${desc}</p>
  </div>`
  infoDiv.style.display = "block"
}

// Load Gods' data
GODS.forEach((el) => {
  const {
    greek,
    roman,
    image: { x, y },
  } = el

  const god = document.createElement("div")
  god.className = "god-img"
  god.style.backgroundPosition = `${x}% ${y}%`
  god.addEventListener("click", () => showGodInfo(el))
  galleryDiv.appendChild(god)

  const godLink = document.createElement("li")
  godLink.innerText = `${greek} (${roman})`
  godLink.addEventListener("click", () => showGodInfo(el))
  menuItems.appendChild(godLink)
})

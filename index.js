const pokeContainer = document.getElementById("pork-container")
const porkForm = document.getElementById("pork-form")
const porkemonNumber = 151

const fetchPorkemon = async (value) => {
   event.preventDefault()
   let porkNum = value

   await gottaFetchEmAll(porkNum)
}

const gottaFetchEmAll = async (id) => {
   const url = `https://pokeapi.co/api/v2/pokemon/${id}`
   const res = await fetch(url)
   const porkemon = await res.json()
   createPorkemonCard(porkemon)
}

const createPorkemonCard = (porkemon) => {
   const porkemonEl = document.createElement("div")
   const { id, name, sprites, types } = porkemon
   const type = types[0].type.name
   const porkInnerHtml = `
   <div class="img-container">
   <img src="${sprites.front_default}" alt="${name}" />
   </div>
   <div class="info">
   <span class="number">${id}</span>
   <h3 class="name">${name}</h3>
   <p class="type">Type: <span>${type}</span></p>
   </div>
   `
   porkemonEl.innerHTML = porkInnerHtml
   porkemonEl.classList.add("porkemon")
   pokeContainer.appendChild(porkemonEl)
}

fetchPorkemon()

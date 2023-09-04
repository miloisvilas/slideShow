'use strict'

const images = [
  { id: '1', url: './img/babyLoonesTunes.jpg' },
  { id: '2', url: './img/ben10-1.jpg' },
  { id: '3', url: './img/bobEsponja.jpg' },
  { id: '4', url: './img/caoCovarde.jpg' },
  { id: '5', url: './img/dragonBall.jpg' },
  { id: '6', url: './img/flintstones.jpg' },
  { id: '7', url: './img/hihiPuffy.jpg' },
  { id: '8', url: './img/jackieChan.jpg' },
  { id: '9', url: './img/juniperLee.jpg' },
  { id: '10', url: './img/kimPossible.jpg' },
  { id: '11', url: './img/mansaoF.jpg' },
  { id: '12', url: './img/meuAmigoBoa.jpg' },
  { id: '13', url: './img/padrinhosmagicos.jpg' },
  { id: '14', url: './img/picapau.jpg' },
  { id: '15', url: './img/rugrats.jpg' },
  { id: '16', url: './img/scoobyDoo.jpg' },
  { id: '17', url: './img/superShock.jpg' },
  { id: '18', url: './img/superPoderosas.jpg' },
  { id: '19', url: './img/titas.jpg' },
  { id: '20', url: './img/tomEjerry.jpg' },
  { id: '21', url: './img/tresEspiasD.jpg' },
  { id: '22', url: './img/turmaDoBairro.jpg' },
  { id: '23', url: './img/winx.jpg' }
]

const containerItems = document.querySelector('.container-items')

const loadImages = (images, container) => {
  images.forEach(image => {
    container.innerHTML += `
    <div class = 'item'>
    <img src = '${image.url}'
    </div>
    `
  })
}

loadImages(images, containerItems)

let items = document.querySelectorAll('.item')

const previous = () => {
  containerItems.appendChild(items[0])
  items = document.querySelectorAll('.item')
}

const next = () => {
  const lastItem = items[items.length - 1]
  containerItems.insertBefore(lastItem, items[0])
  items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)

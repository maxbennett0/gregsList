import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

// FIXME Step 2: set up a place to store our data

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  /** @type {import('./Models/Car').Car|null} */
  activeCar = null

  houses = [
    new House({
      name: "joe's house",
      year: 2022,
      bedrooms: 4,
      bathrooms: 6,
      sqft: 10000,
      price: 150000,
      description: 'big house for a lil guy',
      imgUrl: 'https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-large-house-plans-1.webp'
    })
  ]

  activeHouses = {}
}


export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

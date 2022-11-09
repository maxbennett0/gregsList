import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { houseService } from "../Services/HouseServices.js"
import { setHTML } from "../Utils/Writer.js"

function _drawHouses() {
  let template = ''
  appState.houses.forEach(h => template += h.HouseTemplate)
  setHTML('listings', template)
  setHTML('listing-form', House.GetHouseFormTemplate())
}

export class HouseController {
  constructor() {
    appState.on('houses', _drawHouses)
  }

  showHouses() {
    _drawHouses()
  }
}
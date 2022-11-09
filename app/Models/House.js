import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get HouseTemplate() {
    return `
    <div class="col-4 p-4">
          <div class="card">
            <img src="${this.imgUrl}" class="card-img-top"
              alt="vue">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-between mb-2">
                <span>${this.name}</span>
                <span>$${this.price}</span>
              </h5>
              <button class="btn btn-primary">
                See Details
              </button>
            </div>
          </div>
        </div>
    `
  }

  static GetHouseFormTemplate() {
    return `
    <form onsubmit="app.carsController.createCar()">
            <div class="form-floating mb-3">
              <input required type="text" minlength="3" class="form-control" id="house-name" placeholder="House Name"
                name="name">
              <label for="house-name">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="number" class="form-control" id="house-bedrooms" placeholder="House Bedrooms" name="model">
              <label for="house-bedrooms">Bedrooms</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="number" class="form-control" id="house-bathrooms" placeholder="House Bathrooms" name="bathrooms">
              <label for="house-bathroom">Bathrooms</label>
            </div>
            <div class="form-floating mb-3">
            <input required type="number" class="form-control" id="house-price" placeholder="House Price" name="price">
            <label for="house-price">Price</label>
            </div>
            <div class="form-floating mb-3">
            <input required type="number" class="form-control" id="house-year" placeholder="House Year" name="year">
            <label for="house-year">Year</label>
            </div>
            <div class="form-floating mb-3">
            <input required type="number" class="form-control" id="house-sqft" placeholder="House Sqft" name="sqft">
            <label for="house-sqft">Sqft</label>
            </div>
            <div class="form-floating mb-3">
              <input required type="url" class="form-control" id="house-img" placeholder="House Image" name="img">
              <label for="house-img">Image</label>
            </div>
            <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a description here" id="house-description"
            name="description"></textarea>
            <label for="house-description">Description</label>
            </div>
            <button type="submit" class="btn btn-success mt-3">Submit</button>
            <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
          </form>
    `
  }
}
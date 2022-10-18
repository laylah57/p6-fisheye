class Controller {
// boss function - you(getPhotographers) fetch my data and you(showPhotographers) display it - acts as a controller
  async displayPhotographers() {
    let model = new Model();
    let indexView = new View();
    await model.initData();
    let data = model.getPhotographers();

    indexView.showPhotographers(data);
  }
  async displayPhotographerDetails() {
    let model = new Model()
    let photographerView = new PhotographerView();
    await model.initData();
    let data = model.getMedia();

    photographerView.showPhotographerDetails(data);
  }
  // async displayPhotographerDetails() + getPhotographerById + let view = newView (dans index.js / details.js)// index.vue // details.vue
}

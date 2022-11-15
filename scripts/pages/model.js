class Model {
  constructor() {
    this.data = null;
  }

  initData() {
    return fetch('../../data/photographers.json')
      .then((response) => {
        return(response.json());
      })
      .then((response) => {
        this.data = response;
        return response;
      })
      .catch((error) => {
        console.log(error);
      })
  }
// fetch data and transform to Object - acts as a model
  getPhotographers() {
   return this.data.photographers;
  };

  // TODO: rename by PhotographerId. No. Delete completely.
  getPhotographerById() {
    let params = new URLSearchParams(document.location.search); // TODO: send this to Controller and give id to getPhotographersDetails.

    return Number(params.get("id"));
  }

  getPhotographerDetails() { //TODO: this function is what getPhotographerById was supposed to do
    // TODO: refactor with .filter()
    let currentPhotographerId = this.getPhotographerById();
    let photographerList = this.data.photographers;
    // let currentPhotographer = photographerList.filter((currentPhotographer) => currentPhotographer.id == currentPhotographerId);
    let idList = photographerList.map(element => element.id);
    let currentPhotographerIndex = idList.findIndex(element => element === currentPhotographerId);
    let currentPhotographerDetails = photographerList[currentPhotographerIndex];
    return currentPhotographerDetails;
  }

  getPhotographerMedia() { // TODO: pass the id through controller
    let mediaList = this.data.media;
    let currentPhotographer = this.getPhotographerById(); // TODO: rename currentPhotographer and getPhotographerById
    return mediaList.filter((mediaAuthor) => mediaAuthor.photographerId === currentPhotographer);
  }
}


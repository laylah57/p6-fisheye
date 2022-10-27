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

  getPhotographerById() {
    let params = new URLSearchParams(document.location.search);

    return Number(params.get("id"));
  }

  getPhotographerDetails() {
    // TODO: refactor with .filter()
    let currentPhotographerId = this.getPhotographerById();
    let photographerList = this.data.photographers;
    // let currentPhotographer = photographerList.filter((currentPhotographer) => currentPhotographer.id == currentPhotographerId);
    let idList = photographerList.map(element => element.id);
    let currentPhotographer = idList.findIndex(element => element === currentPhotographerId);
    let currentPhotographerDetails = photographerList[currentPhotographer];
    return currentPhotographerDetails;
  }

  getPhotographerMedia() {
    let mediaList = this.data.media;
    let currentPhotographer = this.getPhotographerById();
    return mediaList.filter((mediaAuthor) => mediaAuthor.photographerId === currentPhotographer);
  }
}


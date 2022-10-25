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
  getPhotographerById(){

    console.log();
    return;
  }
}


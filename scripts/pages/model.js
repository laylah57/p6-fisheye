// fetch data and transform to Object - acts as a model
function getPhotographers() {
  return fetch('../../data/photographers.json')
    .then(function(response ) {
      return(response.json());
    })
    .then(function(response) {
      return response.photographers;
    })
    .catch(function (error) {
      console.log(error);
    })
}

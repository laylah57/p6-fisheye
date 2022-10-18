// boss function - you(getPhotographers) fetch my data and you(showPhotographers) display it - acts as a controller
async function displayPhotographers() {
  let data = await getPhotographers();
  showPhotographers(data);
}

displayPhotographers();

/**
 * Fetches data from the ACNH API and updates the UI elements with the fetched data.
 */
function getFetch() {
  // Generate a random choice between 0 and 99
  const choice = Math.floor(Math.random() * 100);

  // Construct the API URL
  const url = `https://acnhapi.com/v1/villagers/${choice}`;

  // Make a fetch request to the API
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // Update the name heading with the fetched data
      document.querySelector('h1').innerText = `${data.name['name-USen']}`;

      // Update the villager picture with the fetched data
      let villagerImage = document.querySelector('.villager-image');
      villagerImage.src = data.image_uri;
      villagerImage.style.border = `15px solid ${data['bubble-color']}`;

      // Update the species and hobby elements with the fetched data
      document.querySelector('.species').innerText = data.species;
      document.querySelector('.hobby').innerText = data.hobby;
    })
    .catch(err => {
      // Log any errors to the console
      console.error(`Error ${err}`);
    });
}

getFetch()

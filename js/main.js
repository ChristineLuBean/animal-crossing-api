function getFetch(){
    const choice = Math.floor(Math.random() * 100)
    const url = 'https://acnhapi.com/v1/villagers/'+choice
    console.log(url)
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          document.querySelector('h1').innerText = `${data.name['name-USen']}`
          let villagerPic = document.querySelector('.villagerPic')
          villagerPic.src = `${data.image_uri}`
          villagerPic.style.border = `15px solid ${data['bubble-color']}`
          document.querySelector('.species').innerText = data.species
          document.querySelector('.hobby').innerText = data.hobby

          console.log(data)
          console.log(data.name['name-USen'])
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

  getFetch()

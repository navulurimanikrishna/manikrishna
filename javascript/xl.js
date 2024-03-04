  const scriptURL = '<https://script.google.com/macros/s/AKfycbwMNDk_g5-WHroEPPQLG7yGWX9PlWtq10jPdUpJn3jp5OTeJU9S-KVlQX8TbVA3lL16oQ/exec>'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "message sent"
        setTimeout(function(){
          msg.innerHTML =""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

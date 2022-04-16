let btn = document.getElementById('boton')

let list = document.getElementById('lista')

// On click show friends
let showFriendsFlag = true
btn.addEventListener('click', function(){

  if (showFriendsFlag){
  $.get('http://localhost:5000/amigos', (data) => {
  console.log(data)
  
  for (let i = 0; i < data.length; i++) {
        let NL = document.createElement('li')
        NL.innerText = data[i].name + ' X'
          list.appendChild(NL)     
      }
      showFriendsFlag = false    
  })}
})

// onClick search
let sBtn = document.getElementById('search')
let inData = document.getElementById('input')
const out = document.getElementById('amigo')

sBtn.addEventListener('click', () => {
  console.log('> Search Info <')
  $.get('http://localhost:5000/amigos/', (data) => {  
  console.log(data[inData.value -1].name)
  console.log(data[inData.value -1])

  out.innerHTML = data[inData.value -1].name
})
})

// onClick delete

let deletebBtn = document.getElementById('delete')
let dlInput = document.getElementById('inputDelete')

deletebBtn.addEventListener('click', () => {
  console.log('> Delete info <')

  
  let list = document.getElementById('lista')
  let msg = document.getElementById('sucess')
  let dIn = dlInput.value - 1

  del = list.children[dIn]
  list.removeChild(del)

  msg.innerHTML = 'Removido satisfactoriamente'
  showFriendsFlag = true
})

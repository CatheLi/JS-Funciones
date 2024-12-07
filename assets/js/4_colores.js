// declaro las variables y las enlazo con el html a través del id
const azul = document.getElementById('azul');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');

// para cada variable, aplico el evento click, cambiando el color a negro
azul.addEventListener('click', function () {
  azul.style.backgroundColor = 'black';
});

rojo.addEventListener('click', function () {
  rojo.style.backgroundColor = 'black';
});

verde.addEventListener('click', function () {
  verde.style.backgroundColor = 'black';
});

amarillo.addEventListener('click', function () {
  amarillo.style.backgroundColor = 'black';
})
//Función que crea un div
const createDiv = (color) => {
  const div = document.createElement('div') //le estoy pidiendo que cree el div en el documento
  div.style.width = '200px'
  div.style.height = '200px'
  div.style.margin = '20px'
  div.style.backgroundColor = color
  document.body.appendChild(div)
}
const changeColor = (change) => {
  const key= document.getElementById('key')
  key.style.backgroundColor = change
}

//aplico el escuchador al documento, con el keydown informo que va a presionar una tecla, pongo la letra e de evento, para que cuando presione la tecla se dispare el evento
// hago un if y luego invoco la función para pasarle las letras q,w,e
document.addEventListener('keydown', (e) => {
  if (e.key === 'a') changeColor('pink')//con el .key me dice que letra estoy presionando, el evento esta escuchando las teclas cuando se presionan
  if (e.key === 's') changeColor('orange')
  if (e.key === 'd') changeColor('skyblue')
  if (e.key === 'q') createDiv('purple')//con el .key me dice que letra estoy presionando, el evento esta escuchando las teclas cuando se presionan
  if (e.key === 'w') createDiv('grey')
  if (e.key === 'e') createDiv('brown')
    
})
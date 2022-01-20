//Animacion con jquery
$(".mediosDePago").hide();

const mensajes = [
  'bienvenido',
  'hey hola que bueno que estes aqui ',
  'hola buenas tardes',
  'hoy es tu dia',
  'buenas noches'
  
  ]
  
  let saludo = document.getElementById("mensaje");
  console.log (mensaje); 
   let resultados = Math.floor(Math.random() * 5)
  
  
  saludo.innerHTML = `${mensajes[resultados]}`
   
  console.log(resultados)
    

  let menu2 = document.getElementById("menu");
  let menu = document.createElement('div')
  console.log(menu)
  menu.innerHTML = `<p id="parrafo" >Glaciar Beer menu:</p>
 <ol id="listamenu "> <li>  1-Germany smirch red</li>
 <li> 2-Belgium strong amber</li>
 <li>  3-Scotland lamb gods</li>
 <li>4-Slovakian herr hangunst </li></ol>
 <p id="parrafo"> Elige el número de cerveza que quieras </p>`
 menu.id = "createdElement" 
 menu2.appendChild(menu);
    
 cervezas = [ 
  {
  id:1,
  name:"Germany smirch red ",
  stock:31, 
  precio:200
  },
  
      
  {
  id:2,
  name:"Belgium strong amber ",
  stock:35, 
  precio:150
  },
  
  { 
  id:3,
  name:" Scotland lamb gods",
  stock:40, 
  precio:75
  },
  
  { 
  id:4,
  name:"Slovakian herr hangunst ",
  stock:45, 
  precio:100
  }
  
  
  ]
  
  const  cervezaObjeto = (array)=>{
    for(const elemento  of array){ 
      console.log(elemento)
  
    let cervezals = JSON.stringify(elemento)
    localStorage.setItem( elemento.name,cervezals)
    }
  }
  
  const cervezaDesdeLS = (clave) => {
    const cerveza = localStorage.getItem(clave)
    console.log(cerveza)
    return cerveza
  }
  cervezaObjeto(cervezas);
  cervezaDesdeLS("Scotland lamb gods")
  
  
   let form = document.querySelector("#centrado")
    let submit = document.querySelector("#submit")
    let input2 = document.querySelector("#entrada2")
  
    form.onsubmit = (e) => {
    e.preventDefault();
    console.log("submit")
   
  }
      
  //jQuery y al final con aninacion 
  input2.oninput =()=>{
    console.log(input2.value)
    console.log(cervezas)
    for(const cerveza of cervezas) {
      console.log(cerveza)  
      if(cerveza.id==input2.value){
        console.log(cerveza)
        let resultadoInput = $("#resultadoInput")
        resultadoInput.html(`<p id="textoResultadoInput">La cerveza elegida es: ${cerveza.name}. El valor de esta cerveza es $${cerveza.precio}.</p><p id="parrafo">¿Cuántas cervezas querés?</p>
        <form action="" id="centrado2">  
        <input id="entrada3" type="number" placeholder="escriba un numero" >
        <input id="submit" type="submit" value="Enviar">
        </form>
        <div id="resultadoInput2"> </div>
        `)
        menu.id = "createdElement" 
        menu2.appendChild(menu);
        $("#centrado2").on('submit', (e) => {
          e.preventDefault();
          console.log("submit2")
        })
        let entrada3 = $('#entrada3')
        let resultadoInput2 = $('#resultadoInput2')
        entrada3.on('input', () => {
        let valorEntrada3 = entrada3[0].value
        let totalAPagar = valorEntrada3 * cerveza.precio
        resultadoInput2.html(`<p>El total es $${totalAPagar}.</p>`)
        $(".mediosDePago").fadeIn(2000);

        })
      }
    }
  }

//jQuerY,Ajax and API://
const URLGET="https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"

$("#cervezasDelMundo").prepend('<button id="btn1">ver</button>')
$("#btn1").click(()=>{
  $.get(URLGET,function (respuesta , estado){
  
    if (estado ==='success'){
      let misDatos = respuesta;
      let index = 0;
      $("#cervezasDelMundo").append(`<ol id="cervezasApi">`)
        for(const dato of misDatos){
          $("#cervezasApi").append(`<li>${index +=1 }-${dato.name}</li>`)
        }
        $("#cervezasDelMundo").append(`</ol>`)
        $("#btn1").attr(`disabled`,`disabled`)  
    }
  })


}
)








  
  
  
  
  
   
    
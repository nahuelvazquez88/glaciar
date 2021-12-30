
//SECCION DE CERVEZA 
class Cerveza {
constructor(id, nombre, valor, stock) {
this.nombre = nombre;
this.id = id;
this.stock = stock;
this.valor = valor;   
}
    
};
  
const valorIva = 21;
  
let cervezas = [];
  
  
  
// cervezas.push(new Cerveza(1,'Germany smirch red', 30, 200));
// cervezas.push(new Cerveza(2,'Belgium strong amber', 35, 150));
// cervezas.push(new Cerveza(3,'Scotland lamb gods', 40, 75));
// cervezas.push(new Cerveza(4,'Slovakian herr hangunst', 45, 100));
  
  
console.log(cervezas); 
  
//PEDIDO AL USUARIO 
//   alert(`Glaciar Beer menu:
//   1-Germany smirch red
//   2-Belgium strong amber
//   3-Scotland lamb gods
//   4-Slovakian herr hangunst ` )  
//   let cervezaPedida = prompt(`Glaciar Beer menu:
//   1-Germany smirch red
//   2-Belgium strong amber
//   3-Scotland lamb gods
//   4-Slovakian herr hangunst 
//   Choose the number of beer you want ` )
//   let cantidadPedida = parseInt(prompt(" How many beers? "))
//   let nombreCerveza 

//   for(let i=0;i<cervezas.length;i++){
//   console.log(cervezas[i].nombre)
//   if(cervezas[i].id == cervezaPedida ){
//   nombreCerveza = cervezas[i].nombre
//   console.log( cervezas[i].id);
//   console.log(cervezaPedida);
//   }

 
//   }
      
//   console.log(cervezaPedida)
//   console.log(cantidadPedida)
  
//   //operaciones 

//   for(let i=0;i<cervezas.length;i++){
//   console.log(cervezas[i].nombre)
//   if(cervezas[i].id == cervezaPedida ){
//   nombreCerveza = cervezas[i].nombre
//   console.log( cervezas[i].id);
//   console.log(cervezaPedida);
//     }
  
// }

// const calcularTotal =(arreglo,nombre ,cantidad)=>{
// let precio 
// let stockNuevo 
//  for(let i=0;i<arreglo.length;i++){
//         console.log(arreglo[i].nombre)
//         if(arreglo[i].nombre == nombre ){

//         stockNuevo = arreglo[i].stock -cantidad;
//         precio = arreglo[i].valor
//         console.log(stockNuevo);
//         console.log(cervezaPedida);
//   }
//           }

// return ((precio*cantidad)+(((precio*cantidad)* valorIva ) /100)); 



// }
// let total= calcularTotal(cervezas,nombreCerveza,cantidadPedida)

// alert( `Great your  ${nombreCerveza}  it s on the way, enjoy it  🍻 
// total= $${total}
// `);

//selector del DOM
//let entrada = document.getElementById("entrada").value ='4';
//console.log(entrada.value); 

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

// let menu = document.getElementById("menu");
// menu.createElement('h1')
// menu.innerHTML = ` Glaciar Beer menu:` 
 

/* <div id="menu">Glaciar Beer menu:
<ol> <li>  1-Germany smirch red</li>
 <li> 2-Belgium strong amber</li>
     <li>  3-Scotland lamb gods</li>
         <li>4-Slovakian herr hangunst </li></ol>
 Choose the number of beer you want</div>
  */
 
//const imprimirMenu =()=>{
  let menu2 = document.getElementById("menu");
  let menu = document.createElement('div')
  console.log(menu)
  menu.innerHTML = `<p id="parrafo" >Glaciar Beer menu:</p>
 <ol id="listamenu "> <li>  1-Germany smirch red</li>
 <li> 2-Belgium strong amber</li>
 <li>  3-Scotland lamb gods</li>
 <li>4-Slovakian herr hangunst </li></ol>
 <p id="parrafo">Choose the number of beer you want</p>`
 menu.id = "createdElement" 
 menu2.appendChild(menu);
//}
//imprimirMenu()  



//Segunda entrega proyecto 2 

//{
//   cervezas = 
//   {
//     "id":1,
//     "name":"Germany smirch red ",
//     "stock":31, 
//     "precio":200
//   },

    
//     {
//       "id":2,
//       "name":"Belgium strong amber ",
//       "stock":35, 
//       "precio":150
//     },

//     { 
//       "id":3,
//       "name":"Belgium strong amber ",
//       "stock":40, 
//       "precio":75
//     },

//       { 
//         "id":4,
//         "name":"Belgium strong amber ",
//         "stock":45, 
//         "precio":100
//       }
// }
      
// function Cerveza(id,nombre,stock,precio){
//   this.id = id;
//   this.nombre=nombre;
//   this.stock=stock;
//   this.precio=precio;

// }


//este me devuelve una sola cerveza /objeto

// const cervezaDesdeLS = (clave) => {
//   const cerveza = localStorage.getItem(clave)
//   console.log(cerveza)
//   return cerveza
// }
// devuelve una array de claves 
// const cervezasDesdeLS = () => {
//   let keys = Object.keys(localStorage)
//   return keys
// }

  //devuelve un array de objetos de local storage 

// const arrayCervezasDesdeLS = (keys) => {
//   let arrayCervezasLS = []
//   console.log(keys)
//   arrayCervezasLS = keys.map( key => localStorage.getItem(key))
//   console.log(arrayCervezasLS)
//   return arrayCervezasDesdeLS
// }

// agrega una cerveza nueva al array 

// const newCervezaInArray = (nombre, stock, precio, array) => {
//   let cervezaNueva = {}
//   cervezaNueva.id = array.length + 1
//   cervezaNueva.name = nombre
//   cervezaNueva.stock = stock
//   cervezaNueva.precio = precio
//   let newArray = [...array]
//   newArray.push(cervezaNueva)
//   return newArray
// }

// cervezaObjeto(cervezas);
// cervezaDesdeLS("Slovakian herr hangunst")
// arrayCervezasDesdeLS(cervezasDesdeLS())
// newCervezaInArray("Rubia", 10, 140, cervezas)
// cervezaObjeto(newCervezaInArray("Rubia", 10, 140, cervezas))
// cervezaObjeto(newCervezaInArray("Negra", 12, 130, cervezas))

// let form = document.querySelector("#centrado")
// let submit = document.querySelector("#submit")
// form.onsubmit = (e) => {
//   e.preventDefault();
//   console.log("submit")
// }



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
    
//jQuery
input2.oninput =()=>{
  console.log(input2.value)
  console.log(cervezas)
  for(const cerveza of cervezas) {
    console.log(cerveza)  
    if(cerveza.id==input2.value){
      console.log(cerveza)
      let resultadoInput = $("#resultadoInput")
      resultadoInput.html(`<p id="textoResultadoInput">the chosen beer is : ${cerveza.name}. Total to pay $${cerveza.precio}.</p><p id="parrafo">¿ how many beers do you want ?</p>
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
      resultadoInput2.html(`<p>  total  $${totalAPagar} Thanks for your purchase. Enjoy it. .</p>`)
      })
    }
  }
}










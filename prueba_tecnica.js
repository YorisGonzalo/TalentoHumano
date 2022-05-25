



// CSS NO APLICADO POR FALTA DE TIEMPO 

const render = document.querySelector(".render")

// 1
const producto = {
  code : [],
  name : [],
  color : [],
  weight : []
};

// 2
function handleAnadirProducto(){
  let code = document.getElementById('code').value
  let name = document.getElementById('name').value
  let color = document.getElementById('color').value
  let weight = document.getElementById('weight').value
  añadirProducto(code, name, color, weight)
};

function añadirProducto(code, name, color, weight){
  producto.code.push(code)
  producto.name.push(name)
  producto.color.push(color)
  producto.weight.push(weight)
  cantidadProductos()
};


// 3
function cantidadProductos(){
  render.innerHTML = ''
  render.innerHTML += (`<p>La cantidad de productos cargados es de ${producto.code.length}</p>`);
}; 

añadirProducto(0, 'manzana', 'roja', '1kg');
añadirProducto(1, 'perfume', 'naranja', '230gr');


// 4

function handleActualizarProducto(){
  let codeselect = document.getElementById('codeselect').value
  let codemod = document.getElementById('codemod').value
  let namemod = document.getElementById('namemod').value
  let colormod = document.getElementById('colormod').value
  let weightmod = document.getElementById('weightmod').value
  actualizarProducto(codeselect, codemod, namemod, colormod, weightmod)
};

function actualizarProducto(codeselect, codemod, namemod, colormod, weightmod){
  producto.code.splice(codeselect, 1, codemod)
  producto.name.splice(codeselect, 1, namemod)
  producto.color.splice(codeselect, 1, colormod)
  producto.weight.splice(codeselect, 1, weightmod)
  console.log(producto)
  };



  // 5
function eliminarProducto(){
  let codeselect = document.getElementById('codeselect').value
  producto.code.splice(codeselect)
  producto.name.splice(codeselect)
  producto.color.splice(codeselect)
  producto.weight.splice(codeselect)
};

  
  // 6
function consultaProducto(){
    for (let index = 0; index < producto.code.length; index++) {
      render.innerHTML += (`<p>${producto.code[index]}</p>`);
      
    }   
    for (let index = 0; index < producto.name.length; index++) {  
  
      render.innerHTML += (`<p>${producto.name[index]}</p>`);
    }   
    for (let index = 0; index <  producto.color.length; index++) {
   
      render.innerHTML += (`<p>${producto.color[index]}</p>`);
    }   
    for (let index = 0; index <  producto.weight.length; index++) {
     
      render.innerHTML += (`<p>${producto.weight[index]}</p>`);
    }   
};

    
    


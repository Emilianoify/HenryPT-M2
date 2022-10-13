const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const contador = require('./reducer');
const { incremento, decremento, impar, incremento_async } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador, applyMiddleware(thunk))

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const{contador} = store.getState();
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = contador;
}
// Ejecutamos la funcion 'renderContador':

renderContador();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(renderContador);

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

document.getElementById('incremento').onclick = ()=> store.dispatch(incremento());
document.getElementById('decremento').onclick = ()=> store.dispatch(decremento());
document.getElementById('incrementoImpar').onclick = ()=> store.dispatch(impar());
document.getElementById('incrementoAsync').onclick = ()=> store.dispatch(incremento_async());
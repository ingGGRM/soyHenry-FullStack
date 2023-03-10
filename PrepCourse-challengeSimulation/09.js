/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
	// Escribi una función filtrar en el prototipo de Arrays,
	// que recibe una funcion (callback) que devuelve true o false.
	// filtrar los elementos de ese arreglo en base al resultado de esa funcion
	// comparadora, devolver un nuevo arreglo con los elementos filtrados.
	// NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
	// ej:
	// var productos = [{
	//   price: 100,
	//   name: 'tv'
	// }, {
	//   price: 50,
	//   name: 'phone'
	// }, {
	//   price: 30,
	//   name: 'lamp'
	// }]
	// productos.filtrar(function(p) {
	//   return p.price >= 50;
	// }) => [{price: 100, name:'tv'}]
	/*Object.defineProperty(Array.prototype, "filtrar", {
		value: function () {
			let arr = [];
			this.map((item) => {
				if (funcion) arr.push(item);
			});
			console.log(arr);
			return [];
		},
	});*/
	const filtered = []; // it will receive all values that match to condition passed in fn callback.

	for (let i = 0; i < this.length; i++) {
		if (funcion(this[i])) {
			filtered.push(this[i]);
		}
	}

	return filtered;
}

 Array.prototype.filtrar = filtrar;

// No modifiques nada debajo de esta linea //

module.exports = filtrar;

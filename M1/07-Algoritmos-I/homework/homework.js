"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
	// Factorear el número recibido como parámetro y devolver en un array
	// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
	// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
	// Tu código:
	let factores = [1],
		div = 2;

	while (num > 1) {
		while (true) {
			if (num % div === 0) {
				factores.push(div);
				num = num / div;
				break;
			} else div++;
		}
	}

	return factores;
}

function bubbleSort(array) {
	// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	for (let i = 0; i < array.length; i++) {
		for (let j = 1; j < array.length - i; j++) {
			if (array[j - 1] > array[j]) {
				let temp = array[j];
				array[j] = array[j - 1];
				array[j - 1] = temp;
			}
		}
	}

	return array;
}

function insertionSort(array) {
	// Implementar el método conocido como insertionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando arreglos
	// Devolver el array ordenado resultante
	// Tu código:
	for (let i = 1; i < array.length; i++) {
		let actual = array[i];

		for (let j = i - 1; j >= 0 && array[j] > actual; j--) {
			array[j + 1] = array[j];
			array[j] = actual;
		}
	}

	return array;
}

function selectionSort(array) {
	// Implementar el método conocido como selectionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando dos arreglos
	// Devolver el array ordenado resultante
	// Tu código:
	var ordenado = [];

	while (array.length > 0) {
		let min = array[0];

		array.forEach((n) => {
			if (n < min) min = n;
		});
		ordenado.push(min);
		array.splice(array.indexOf(min), 1);
	}
	return ordenado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	factorear,
	bubbleSort,
	insertionSort,
	selectionSort,
};

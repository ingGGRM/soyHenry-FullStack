"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
	// Implementar el método conocido como quickSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	if (array.length <= 1) return array;
	else {
		var center = array[0],
			left = [],
			right = [];

		for (let i = 1; i < array.length; i++) {
			array[i] < center ? left.push(array[i]) : right.push(array[i]);
		}

		return [...quickSort(left), center, ...quickSort(right)];
	}
}

function mergeSort(array) {
	// Implementar el método conocido como mergeSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	//okey probemos ahora
	if (array.length < 2) return array;

	var center = Math.round(array.length / 2),
		left = array.splice(0, center);

	var leftRes = mergeSort(left);
	var rightRes = mergeSort(array);

	let arr = [];

	while (leftRes.length && rightRes.length) {
		if (leftRes[0] < rightRes[0]) {
			arr.push(leftRes.shift());
		} else {
			arr.push(rightRes.shift());
		}
	}

	return [...arr, ...leftRes, ...rightRes];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	quickSort,
	mergeSort,
};

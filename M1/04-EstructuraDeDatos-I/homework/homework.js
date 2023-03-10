"use strict";

// EJERCICIO 1
function nFactorial(n) {
	return n >= 0 ? (n > 1 ? n * nFactorial(n - 1) : n) : null;
}

// EJERCICIO 2
function nFibonacci(n) {
	return n < 2 ? n : nFibonacci(n - 1) + nFibonacci(n - 2);
}

// EJERCICIO 3
function Queue() {
	this.queue = [];

	this.enqueue = function (n) {
		this.queue.push(n);
	};

	this.dequeue = function (n) {
		return this.queue.shift();
	};

	this.size = function () {
		return this.queue.length;
	};
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Queue,
	nFactorial,
	nFibonacci,
};

"use strict";

function BinarioADecimal(num) {
	let valor = 0; // variable de resultado final

	for (let i = 0; i < num.length; i++) {
		valor += num[num.length - 1 - i] * Math.pow(2, i);
	}

	return valor;
}

function DecimalABinario(num) {
	let valor = "";

	while (num >= 2) {
		valor += num % 2;
		num = Math.floor(num / 2);
	}
	valor += num;

	return valor.split("").reverse().join("");
}

module.exports = {
	BinarioADecimal,
	DecimalABinario,
};

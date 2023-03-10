"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
	this._length = 0;
	this.head = null;
}

function Node(value) {
	this.value = value;
	this.next = null;
}

LinkedList.prototype.add = function (elem) {
	var node = new Node(elem);
	var current = this.head;

	if (!current) {
		this.head = node;
		this._length++;
		return node;
	}

	while (current.next) {
		current = current.next;
	}

	current.next = node;
	this._length++;
};

LinkedList.prototype.remove = function () {
	var temp, ret;

	if (this.head != null) {
		if (this.head.next === null) {
			temp = this.head;
			ret = temp.value;
			this.head = null;
			this._length--;
		} else {
			temp = this.head;
			while (temp.next.next != null) {
				temp = temp.next;
				this._length--;
			}

			ret = temp.next.value;
			temp.next = null;
			this._length--;
		}

		return ret;
	}
};

LinkedList.prototype.search = function (param) {
	var node = this.head;

	if (typeof param === "function") {
		while (node.next !== null) {
			if (param(node.value)) {
				break;
			}
			node = node.next;
		}
		return param(node.value) ? node.value : null;
	} else {
		while (node.next !== null) {
			if (node.value === param) {
				break;
			}
			node = node.next;
		}
		return node.value === param ? node.value : null;
	}
};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuestra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
	this.buckets = [];
	for (let i = 0; i < 35; i++) {
		this.buckets.push({});
	}

	this.numBuckets = this.buckets.length;

	this.hash = function (dato) {
		var hash = 0;

		for (let i = 0; i < dato.length; i++) {
			hash += dato.charCodeAt(i);
		}

		return hash % this.numBuckets;
	};

	this.set = function (clave, valor) {
		if(typeof clave !== 'string') throw new TypeError('Keys must be strings');
		this.buckets[this.hash(clave)][clave] = valor;
	};

	this.get = function (clave) {
		if (this.hasKey(clave)) {
			return this.buckets[this.hash(clave)][clave];
		}
	};

	this.hasKey = function (clave) {
		for (let i = 0; i < this.numBuckets; i++) {
			if (this.buckets[this.hash(clave)].hasOwnProperty(clave)) {
				return true;
			}
		}
		return false;
	};
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Node,
	LinkedList,
	HashTable,
};

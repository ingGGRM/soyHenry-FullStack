"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(data) {
	this.value = data;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.size = function () {
	return !this.left && !this.right
		? 1
		: this.left && !this.right
		? 1 + this.left.size()
		: !this.left && this.right
		? 1 + this.right.size()
		: 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.insert = function (data) {
	if (data < this.value) {
		if (this.left) return this.left.insert(data);
		else this.left = new BinarySearchTree(data);
	} else if (data > this.value) {
		if (this.right) return this.right.insert(data);
		else this.right = new BinarySearchTree(data);
	}
};

BinarySearchTree.prototype.contains = function (data) {
	return data === this.value
		? true
		: data < this.value && this.left !== null
		? this.left.contains(data)
		: data > this.value && this.right !== null
		? this.right.contains(data)
		: false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, type) {
	if (type === "pre-order") {
		// root - left - right
		cb(this.value);
		if (this.left) {
			this.left.depthFirstForEach(cb, type);
		}
		if (this.right) {
			this.right.depthFirstForEach(cb, type);
		}
	} else if (type === "post-order") {
		// left - right - root
		if (this.left) {
			this.left.depthFirstForEach(cb, type);
		}
		if (this.right) {
			this.right.depthFirstForEach(cb, type);
		}
		cb(this.value);
	} else {
		// so it's in-order: left - root - right
		if (this.left) {
			this.left.depthFirstForEach(cb, type);
		}
		cb(this.value);
		if (this.right) {
			this.right.depthFirstForEach(cb, type);
		}
	}
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, vals = []) {
	// use push and shift to simule tailing behavior
	cb(this.value);
	if (this.left) vals.push(this.left);
	if (this.right) vals.push(this.right);

	if (vals.length > 0) vals.shift().breadthFirstForEach(cb, vals);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	BinarySearchTree,
};

var traverseDomAndCollectElements = function (matchFunc, startEl) {
	var resultSet = [];

	if (typeof startEl === "undefined") {
		startEl = document.body;
	}

	// recorre el árbol del DOM y recolecta elementos que matchien en resultSet
	// usa matchFunc para identificar elementos que matchien

	// TU CÓDIGO AQUÍ
	if (matchFunc(startEl)) resultSet.push(startEl);
	else if (startEl.children.length > 0) {
		for (let i = 0; i < startEl.children.length; i++) {
			let temp = traverseDomAndCollectElements(
				matchFunc,
				startEl.children[i]
			);
			resultSet = [...resultSet, ...temp];
		}
	}

	return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
	// tu código aquí
	if (selector[0] === "#") return "id";
	else if (selector[0] === ".") return "class";
	else if (selector.includes(".")) return "tag.class";
	// EXTRA CREDITS START
	else if (selector.includes(">")) return "tag > tag";
	else if (selector.includes(" ")) return "tag tag";
	// EXTRA CREDITS END
	else return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
	var selectorType = selectorTypeMatcher(selector);
	var matchFunction;
	if (selectorType === "id") {
		matchFunction = function (element) {
			return "#" + element.id === selector;
		};
	} else if (selectorType === "class") {
		matchFunction = function (element) {
			for (let i = 0; i < element.classList.length; i++) {
				if ("." + element.classList[i] === selector) return true;
			}
			return false;
		};
	} else if (selectorType === "tag.class") {
		let tg = selector.slice(0, selector.indexOf("."));
		let cl = selector.slice(selector.indexOf(".") + 1);

		matchFunction = function (element) {
			return (
				matchFunctionMaker(tg)(element) &&
				matchFunctionMaker("." + cl)(element)
			);
		};
	} else if (selectorType === "tag") {
		matchFunction = function (element) {
			return (
				element.tagName &&
				element.tagName.toLowerCase() === selector.toLowerCase()
			);
		};
	} // EXTRA CREDIT START
	else if (selectorType === "tag > tag") {
		let tg1 = selector.slice(0, selector.indexOf(">") - 1);
		let tg2 = selector.slice(selector.indexOf(">") + 2);

		matchFunction = function (element) {
			return (
				matchFunctionMaker(tg2)(element) &&
				matchFunctionMaker(tg1)(element.parentElement)
			);
		};
	} else if (selectorType === "tag tag") {
		matchFunction = function (element) {
			return false; // NOT DONE YET!
		};
	}
	// EXTRA CREDIT END

	return matchFunction;
};

var $ = function (selector) {
	var elements;
	var selectorMatchFunc = matchFunctionMaker(selector);

	elements = traverseDomAndCollectElements(selectorMatchFunc);

	return elements;
};

const botonGet = document.getElementById("boton");
botonGet.addEventListener("click", getAmigos);

function getAmigos() {
	$.get("http://localhost:5000/amigos", function (data) {
		console.log(data);

		// clear list child to avoid repeating
		const lista = document.getElementById("lista");
		while (lista.firstChild) {
			lista.removeChild(lista.firstChild);
		}

		// create and append and li to existing ul for each friend in loaded array
		data.forEach((element) => {
			let li = document.createElement("li");
			li.innerHTML = element.name;
			lista.appendChild(li);
		});
	});
}

const botonSearch = document.getElementById("search");
botonSearch.addEventListener("click", searchAmigos);

function searchAmigos() {
	let searchId = document.getElementById("input").value;

	if (searchId !== "" && !isNaN(searchId)) {
		$.get(`http://localhost:5000/amigos/${searchId}`, function (data) {
			console.log(data);
			document.getElementById("amigo").innerHTML = data.name;
		});
	} else {
		document.getElementById("amigo").innerHTML = "";
	}

	document.getElementById("input").value = "";
}

const botonDelete = document.getElementById("delete");
botonDelete.addEventListener("click", deleteAmigos);

function deleteAmigos() {
	let deleteId = document.getElementById("inputDelete").value;

	if (deleteId !== "" && !isNaN(deleteId)) {
		fetch(`http://localhost:5000/amigos/${deleteId}`, {
			method: "DELETE",
		});
	} else {
		document.getElementById("success").innerHTML = "";
	}

	document.getElementById("inputDelete").value = "";
}

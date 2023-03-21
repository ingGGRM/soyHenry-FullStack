const boton = document.getElementById("boton");
boton.addEventListener("click", getAmigos);

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

let urlListaAgentes='https://valorant-api.com/v1/agents/';




const selectAgentes = document.getElementById('agents');
/*const selectImagenAgente= document.getElementById('imagenAgente');*/
const contenedorAgentes=document.getElementById('contenedorAgentes');
const agenteElement=document.getElementById('imagenAgente');
const agenteCaracteristicas=document.getElementById('textoAgente');


async function obtenerJSON(url){
  const respuesta = await fetch(url);
  const json = await respuesta.json();
  return json;
}
obtenerJSON(urlListaAgentes).then(json => { 
	const agenteNombre = document.createElement("div");
	agenteNombre.setAttribute("id", "agentes");
	contenedorAgentes.innerHTML="";
	for(var i=0; i<json.data.length; i++){
		
		var valor = json.data[i].displayName;
		var opcion = document.createElement('option');
		opcion.appendChild( document.createTextNode(valor));
		opcion.value = json.data[i].uuid;
		selectAgentes.appendChild(opcion);
		agenteNombre.appendChild(selectAgentes);
		contenedorAgentes.appendChild(agenteNombre);
		

	}
		
	sacarImagen();


});

/*function obtenerImagen(){
	for (var i = 0; i < json.data[0].length; i++) {
		var imagen = json.data[0].displayIcon;

	}
}
*/



function sacarImagen(){

	var agents = selectAgentes.value;
	agenteElement.innerHTML="";
	agenteCaracteristicas.innerHTML="";
	
	obtenerJSON(urlListaAgentes + agents).then(json => { 

		
		
		const agenteImagen = document.createElement("img");
		agenteImagen.src = json.data.displayIcon;
		agenteElement.appendChild(agenteImagen);
		contenedorAgentes.appendChild(agenteElement);
		

		
		
		const agenteHabilidades = document.createElement("h2");
		const imagenHabilidad=document.createElement("img");
		

		const AgenteYImagen1=document.createElement("div");
		AgenteYImagen1.setAttribute("id", "habilidades");

		const AgenteYImagen2=document.createElement("div");
		AgenteYImagen2.setAttribute("id", "habilidades2");
		const AgenteYImagen3=document.createElement("div");
		AgenteYImagen3.setAttribute("id", "habilidades3");
		const AgenteYImagen4=document.createElement("div");
		AgenteYImagen4.setAttribute("id", "habilidades4");
		const descripcionAgente=document.createElement("div");
		descripcionAgente.setAttribute("id", "descripcion1");
		
			/*agenteHabilidades.innerText = json.data.abilities[0].displayName;
			imagenHabilidad.src=json.data.abilities[0].displayIcon;*/
			/*agenteHabilidades.innerText = " " + json.data.abilities[0].displayName;
			imagenHabilidad.src=json.data.abilities[0].displayIcon;

			agenteHabilidades.innerText += " " + json.data.abilities[1].displayName;
			*/
			AgenteYImagen1.innerHTML = `
			<h2 class="titleHab">${json.data.abilities[0].displayName}</h2>
			<img class="imgHab" src=${json.data.abilities[0].displayIcon}></img>
			
		`;
		AgenteYImagen2.innerHTML = `
			<h2 class="titleHab">${json.data.abilities[1].displayName}</h2>
			<img class="imgHab" src=${json.data.abilities[1].displayIcon}></img>
			
		`;
		AgenteYImagen3.innerHTML = `
			<h2 class="titleHab">${json.data.abilities[2].displayName}</h2>
			<img class="imgHab" src=${json.data.abilities[2].displayIcon}></img>
			
		`;
		AgenteYImagen4.innerHTML = `
			<h2 class="titleHab">${json.data.abilities[3].displayName}</h2>
			<img class="imgHab" src=${json.data.abilities[3].displayIcon}></img>
			
		`;
			/*x += json.data.abilities[1].displayName + "<p>";
			x += json.data.abilities[2].displayName + "<p>";
			x += json.data.abilities[3].displayName;
			console.log(x);*/
		

		const descripcion = document.createElement("h1");
		descripcion.innerText = json.data.description;

		descripcionAgente.appendChild(descripcion);
		
		/*agenteHabilidades.appendChild(imagenHabilidad);
		AgenteYImagen.appendChild(agenteHabilidades);*/
		agenteCaracteristicas.appendChild(AgenteYImagen1);
		agenteCaracteristicas.appendChild(AgenteYImagen2);
		agenteCaracteristicas.appendChild(AgenteYImagen3);
		agenteCaracteristicas.appendChild(AgenteYImagen4);
		agenteCaracteristicas.appendChild(descripcionAgente);

		contenedorAgentes.appendChild(agenteCaracteristicas);

		

		
		/*selectImagenAgente.appendChild(agenteImagen);
		textoAgente.appendChild(agenteCaracteristicas);
		*/

	});
}


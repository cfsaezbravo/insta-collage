var botoncito = document.getElementById("botoncito");

botoncito.addEventListener("click", validacion);


function validacion(){
	var username = document.getElementById("name").value;
	var psw = document.getElementById("psw").value;

	if(username == ""){
		alert("Por favor ingresa tu nombre de usuario o correo");
	}
	if(psw == 123456 || psw == "" && (!(/^\d{6}$/.test(psw))) ){
		alert("Por favor ingresa una clave correcta");
	}
}	

/* FUNCION DRAG */

function drag(ev){
	ev.dataTransfer.setData('img', ev.target.id)
}

function permitirDrop(ev){
	ev.preventDefault();
}

function drop(ev){
	ev.preventDefault();

	var id_foto = ev.dataTransfer.getData('img');

	ev.target.appendChild(document.getElementById(id_foto));
}
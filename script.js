function consultar(){
    let datosjson;
    fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then((salida)=>{datosjson = salida;

        document.getElementById("nombre");
        nombre.textContent = 'Nombre: ' + salida.nombre;

        document.getElementById("ciudad");
        ciudad.textContent = 'Ciudad: ' + salida.ciudad;

        document.getElementById("contacto");
        contacto.textContent = 'Contacto: ' + salida.contacto;
        
        document.getElementById("email");
        email.textContent ='Email: ' + salida.email;

        document.getElementById("nota");
        nota.textContent ='Nota: ' + salida.nota;

    })

}
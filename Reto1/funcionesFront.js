console.log(event)

//validaciones por parte del servidor

$(document).ready(function() {
    $("#Registro").validate({
        debug: false,
        rules: {
            name: {
                required: true,
                minLength: 5,
            },
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                number: true,
                minLength: 8,
                maxLength: 30,
            },
            repeatpassword: {
                equalTo: '#passwordv',
                }
            },
             messages: {    //Alertas para el Usuario
                /*name: {
                required: "Se necesita un nombre para completar el registro",
                minLength: "El nombre debe contener un mínimo de 5 carácteres",
            },
            email: {
                required: "Ingresa una dirección de email",
                email: "",
            },
            password: {
                required: "Introduce una contraseña",
                maxLength: "El número de carácteres no puede pasar de 30",
                minLength: "Se requiere de 8 carácteres como mínimo",
            },*/
            repeatpassword: {
            equalTo: "Los campos deben coincidir",
            },
            errorElement: "div"
        },
    });
});






function guardarAdministrador() {
    if ($('#name').val().trim() == "" || $('#email').val().trim() == "" || $('#password').val().trim() == "") {
        alert('Campos vacíos, por favor verifique');
    } else {
        var datos = {
            name: $('#name').val(),
            email: $("#email").val(),
            password: $("#password").val()
        }

        var datosaEnviar = JSON.stringify(datos);

        $.ajax({
            url: 'http://localhost:8081/api/user/new',
            data: datosaEnviar,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                console.log(response);
            },
            complete: function (xhr, status) {
                alert('Usuario Guardado');
                limpiarFormulario();
            }
        });
    }

}

var p1 = document.getElementById("password").value;
var p2 = document.getElementById("passwordv").value;

if (p1 != p2) {
    alert("Las passwords deben de coincidir");
    return false;
  } else {
    alert("Todo esta correcto");
    return true; 
  }




/* 
function IniciarSesion(){
    $.ajax({
        type: 'GET',
        url: 'https',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta)

    })

} */



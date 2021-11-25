/*SLIDER BANNER*/ 
var img = ["Imagenes/bannerc.png","Imagenes/Banner.png", "Imagenes/banner2.jpg","Imagenes/banner3.jpg","Imagenes/banner4.jpg"];

var valor = 0;

function adelante(){
    valor++;
    if(valor >= img.length) valor = 0;
    document.getElementById("baner").src = img[valor];
}

function atras(){
    valor--;
    if(valor<0) valor = img.length-1;
    document.getElementById("baner").src = img[valor];
}

//CONTACTANOS + FORMULARIO

function confirmar(){
    function Persona(nombre,telefono,correo,mensaje){
        this.nombre=nombre;
        this.telefono=telefono;
        this.correo=correo;
        this.mensaje=mensaje;
        
    }

    var nombreCapturar=document.getElementById("nombres").value;
    var telefonoCapturar=document.getElementById("telefono").value;
    var correoCapturar=document.getElementById("correo").value;
    var mensajeCapturar=document.getElementById("mensaje").value;

    let condicion1=/^[a-z\s]+$/i;
    let condicion2=/^[0-9]{7,15}$/;
    let condicion3=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!condicion1.test(nombreCapturar)){
        alert("Ingrese un nombre válido");
        return 0;
    }
    else if(!condicion2.test(telefonoCapturar)){
        alert("Ingrese un número de telefono válido");
        return 0;
    }
    else if(!condicion3.test(correoCapturar)){
        alert("Ingrese un correo electrónico válido");
        return 0;
    }

    else if(mensajeCapturar==""){
        alert("Ingrese su mensaje");
        return 0;
    }
   
    else{

    nuevoSujeto = new Persona(nombreCapturar,telefonoCapturar,correoCapturar,mensajeCapturar);
    /*console.log(nuevoSujeto);*/
    agregar();
    alert("Hola "+nombreCapturar+" , gracias por contactarse con nosotros ,nos comunicaremos con usted a la brevedad posible al número "+telefonoCapturar+" o al correo "+correoCapturar+" .");
    }
}
var baseDatos=[];
function agregar(){
    baseDatos.push(nuevoSujeto);
    /*console.log(baseDatos);*/
   
}
/*wsp*/
/*
    (function () {
        var options = {
            whatsapp: "+51999999999", // WhatsApp number
            call_to_action: "Envia tu mensaje", // Call to action
            position: "left", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
*/
//WSP OPCION 2
/*
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#whatsapp').fadeIn();
        } else {
            $('#whatsapp').fadeIn();
        }
    });
});
*/






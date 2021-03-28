function ocultar() {
  var div = document.getElementById('imgN');
  div.style.display = 'none';
}
function mostrar() {
  var div = document.getElementById('imgN');
  div.style.display = '';
}
var inicio;
function iniciarSesion() {

  var correo = document.getElementById('txtusu').value;
  var passw = document.getElementById('txtpass').value;
  if ((correo == "") && (passw == "")) {
    if (correo == "") {
      alert("Debe ingresar un correo valido");
    } else if (passw == "") {
      alert("Debe ingresar una contraseña");
    }
  } else {
    fetch('../js/arch.json')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (datos) {
        console.log(datos);
        datos.forEach(function (validar) {
          if (validar.correo == correo) {
            if (validar.contrasena == passw) {
              intento = true
              inicio = `${validar.nombre} ${validar.apellido}`
              bandera = true
              localStorage.setItem("Inicio", inicio)
              window.location = ("../index.html")
            } else {
              alert("incorrecto contraseña")

              bandera = true
            }

          } else {
            bandera = false
          }
        });
        if (bandera == null) {
          alert("usuario no existe")
        }

      })
  }
}
var usua
miStorage = window.localStorage;

function cargarD() {
  usua = miStorage.getItem('Inicio')
  document.getElementById('nombreU').innerHTML = usua;
  var login = document.getElementById('iniciar');
  var cerrarS = document.getElementById('cerrarSesion');
  if (usua != null) {
    login.style.display = 'none';
    cerrarS.style.display = '';

  } else {
    login.style.display = '';
    cerrarS.style.display = 'none';
  }

}

function cerrar() {
  miStorage.clear();
  window.location = "../index.html";

}
localContacto = window.localStorage

var arregloInfo = localContacto.getItem("arregloInfo");
arregloInfo = JSON.parse(arregloInfo);
if (arregloInfo == null) {
  arregloInfo = [];
}

function guardarCont() {
  var idDigitado = document.getElementById("txtid").value;
  var nombreDigitado = document.getElementById("txtnombre").value;
  var pApellidoADigitado = document.getElementById("txtpApellido").value;
  var SApellidoDigitado = document.getElementById("txtsApellido").value;
  var correoDigitado = document.getElementById("txtCorreo").value;
  var fechaNacDigitado = document.getElementById("dateFecha").value;
  var edadDigitado = document.getElementById("txtEdad").value;
  var telefonoDigitado = document.getElementById("txtTelefono").value;
  var tipoLibroDigitado = document.getElementById("opcion").value;
  if (document.getElementById('precios').checked) {
    var cheq = "Precios";
  } else if (document.getElementById('consultarLi').checked) {
    var cheq = "Consultar libro";
  } else if (document.getElementById('consultarCom').checked) {
    var cheq = "Consultar compra de libros";
  } else if (document.getElementById('consultarAlq').checked) {
    var cheq = "Consultar alquiler de libros";
  }

  if (document.getElementById('F').checked) {
    var generoDig = "Femenino";
  } else if (document.getElementById('M').checked) {
    var generoDig = "Masculino";
  }
  if ((idDigitado == "") || (nombreDigitado == "") || (pApellidoADigitado == "") || (SApellidoDigitado == "") || (correoDigitado == "") || (fechaNacDigitado == "") || (edadDigitado == "") || (telefonoDigitado == "") || (cheq.checked = false) || (generoDig.checked = false)) {
    alert("Debe llenar todos los campos")
  } else {
    var newC = {
      id: idDigitado,
      nombre: nombreDigitado,
      pApellido: pApellidoADigitado,
      sApellido: SApellidoDigitado,
      correo: correoDigitado,
      fechaNac: fechaNacDigitado,
      edad: edadDigitado,
      telefono: telefonoDigitado,
      tipoLibro: tipoLibroDigitado,
      motivo: cheq,
      genero: generoDig
    };
    arregloInfo.push(newC);
    //miespacio.setItem('arregloInfo', JSON.stringify(arregloInfo));
    localContacto.setItem(idDigitado, JSON.stringify(arregloInfo));
    alert("Datos guardados");

    limpiarFormu();
  }
}

function editarC() {
  var idDigitado = document.getElementById("txtid").value;
  var nombreDigitado = document.getElementById("txtnombre").value;
  var pApellidoADigitado = document.getElementById("txtpApellido").value;
  var SApellidoDigitado = document.getElementById("txtsApellido").value;
  var correoDigitado = document.getElementById("txtCorreo").value;
  var fechaNacDigitado = document.getElementById("dateFecha").value;
  var edadDigitado = document.getElementById("txtEdad").value;
  var telefonoDigitado = document.getElementById("txtTelefono").value;
  var tipoLibroDigitado = document.getElementById("opcion").value;
  if (document.getElementById('precios').checked) {
    var cheq = "Precios";
  } else if (document.getElementById('consultarLi').checked) {
    var cheq = "Consultar libro";
  } else if (document.getElementById('consultarCom').checked) {
    var cheq = "Consultar compra de libros";
  } else if (document.getElementById('consultarAlq').checked) {
    var cheq = "Consultar alquiler de libros";
  }

  if (document.getElementById('F').checked) {
    var generoDig = "Femenino";
  } else if (document.getElementById('M').checked) {
    var generoDig = "Masculino";
  } if (localContacto.getItem(idDigitado)) {
    var newC = {
      id: idDigitado,
      nombre: nombreDigitado,
      pApellido: pApellidoADigitado,
      sApellido: SApellidoDigitado,
      correo: correoDigitado,
      fechaNac: fechaNacDigitado,
      edad: edadDigitado,
      telefono: telefonoDigitado,
      tipoLibro: tipoLibroDigitado,
      motivo: cheq,
      genero: generoDig
    };
    localContacto.setItem(idDigitado, JSON.stringify(newC));
    alert("Dato editado");

    limpiarFormu();
  } else {
    alert("Dato no encontrado");
  }

}
function limpiarFormu() {
  document.getElementById("txtid").value = "";
  document.getElementById("txtnombre").value = "";
  document.getElementById("txtpApellido").value = "";
  document.getElementById("txtsApellido").value = "";
  document.getElementById("txtCorreo").value = "";
  document.getElementById("dateFecha").value = "";
  document.getElementById("txtEdad").value = "";
  document.getElementById("txtTelefono").value = "";
  document.getElementById("opcion").value = "Terror";
  document.getElementById('precios').checked = false;
  document.getElementById('consultarLi').checked = false;
  document.getElementById('consultarCom').checked = false;
  document.getElementById('consultarAlq').checked = false;
  document.getElementById("F").checked = false;
  document.getElementById("M").checked = false;

}

function mostrarTabla() {
  tablallena = "";
  for (var i = 0; i < localContacto.length; i++) {

    var key = localContacto.key(i);
    

      var cuerpo = document.getElementById("elementos")
      var persona2Json = JSON.parse(localContacto.getItem(key));

      tablallena += "<tr><td>" + key + "</td><td>" + persona2Json.nombre + "</td><td>" + persona2Json.pApellido + "</td><td>" + persona2Json.sApellido + "</td><td>" + persona2Json.correo + "</td><td>" + persona2Json.fechaNac + "</td><td>" + persona2Json.telefono + "</td><td>" + persona2Json.tipoLibro + "</td><td>" + persona2Json.motivo + "</td><td>" + persona2Json.genero + "</td></tr>"

      cuerpo.innerHTML = tablallena;
    
  }
}
function eliminarItem() {
  var idDigitado = document.getElementById("txtid").value;
  if (localContacto.getItem(idDigitado)) {
    alert("Se eliminó el registro");
    localContacto.removeItem(idDigitado);
  } else {
    alert("No existe Id");

  }
}
localAlq = window.localStorage;

//localStorage = window.localStorage

var arregloAl = localAlq.getItem("arregloAl");
arregloAl = JSON.parse(arregloAl);
if (arregloAl == null) {
  arregloAl = [];
}
//localStorage = window.localStorage

function alquilarAlq() {
  var idDig = document.getElementById('txtId').value;

  var libro1 = document.getElementById('txt1').value;
  var libro2 = document.getElementById('txt2').value;
  var libro3 = document.getElementById('txt3').value;
  var libro4 = document.getElementById('txt4').value;
  var libro5 = document.getElementById('txt5').value;
  var libro6 = document.getElementById('txt6').value;
  var libro7 = document.getElementById('txt7').value;
  var libr8 = document.getElementById('txt8').value;
  var libro9 = document.getElementById('txt9').value;
  var libro10 = document.getElementById('txt10').value;
  var libro11 = document.getElementById('txt11').value;
  var libro12 = document.getElementById('txt12').value;

  sblb1 = parseInt(libro1) * 30000
  sblb2 = parseInt(libro2) * 30000
  sblb3 = parseInt(libro3) * 30000
  sblb4 = parseInt(libro4) * 30000
  sblb5 = parseInt(libro5) * 30000
  sblb6 = parseInt(libro6) * 30000
  sblb7 = parseInt(libro7) * 30000
  sblb8 = parseInt(libr8) * 30000
  sblb9 = parseInt(libro9) * 30000
  sblb10 = parseInt(libro10) * 30000
  sblb11 = parseInt(libro11) * 30000
  sblb12 = parseInt(libro12) * 30000

  total = parseInt((libr8) * 30000) + parseInt((libro7) * 30000) + parseInt((libro6) * 30000) + parseInt((libro5) * 30000) + parseInt((libro4) * 30000) + parseInt((libro3) * 30000) + parseInt((libro2) * 30000) + parseInt((libro1) * 30000) + parseInt((libro9) * 30000) + parseInt((libro10) * 30000) + parseInt((libro11) * 30000) + parseInt((libro12) * 30000)

  var newAl = {
    idAlq: idDig,
    lib1: libro1,
    lib2: libro2,
    lib3: libro3,
    lib4: libro4,
    lib5: libro5,
    lib6: libro6,
    lib7: libro7,
    lib8: libr8,
    lib9: libro9,
    lib10: libro10,
    lib11: libro11,
    lib12: libro12,

    subt1: sblb1,
    subt2: sblb2,
    subt3: sblb3,
    subt4: sblb4,
    subt5: sblb5,
    subt6: sblb6,
    subt7: sblb7,
    subt8: sblb8,
    subt9: sblb9,
    subt10: sblb10,
    subt11: sblb11,
    subt12: sblb12,

    libTotal: total
  };

  arregloAl.push(newAl);

  localAlq.setItem(idDig, JSON.stringify(newAl));
  alert("Datos guardados");
  limpiar()
}

function editarLibro() {
  var idDig = document.getElementById('txtId').value;

  var libro1 = document.getElementById('txt1').value;
  var libro2 = document.getElementById('txt2').value;
  var libro3 = document.getElementById('txt3').value;
  var libro4 = document.getElementById('txt4').value;
  var libro5 = document.getElementById('txt5').value;
  var libro6 = document.getElementById('txt6').value;
  var libro7 = document.getElementById('txt7').value;
  var libr8 = document.getElementById('txt8').value;
  var libro9 = document.getElementById('txt9').value;
  var libro10 = document.getElementById('txt10').value;
  var libro11 = document.getElementById('txt11').value;
  var libro12 = document.getElementById('txt12').value;

  sblb1 = parseInt(libro1) * 30000
  sblb2 = parseInt(libro2) * 30000
  sblb3 = parseInt(libro3) * 30000
  sblb4 = parseInt(libro4) * 30000
  sblb5 = parseInt(libro5) * 30000
  sblb6 = parseInt(libro6) * 30000
  sblb7 = parseInt(libro7) * 30000
  sblb8 = parseInt(libr8) * 30000
  sblb9 = parseInt(libro9) * 30000
  sblb10 = parseInt(libro10) * 30000
  sblb11 = parseInt(libro11) * 30000
  sblb12 = parseInt(libro12) * 30000

  total = parseInt((libr8) * 30000) + parseInt((libro7) * 30000) + parseInt((libro6) * 30000) + parseInt((libro5) * 30000) + parseInt((libro4) * 30000) + parseInt((libro3) * 30000) + parseInt((libro2) * 30000) + parseInt((libro1) * 30000) + parseInt((libro9) * 30000) + parseInt((libro10) * 30000) + parseInt((libro11) * 30000) + parseInt((libro12) * 30000)


  if (localAlq.getItem(idDig)) {
    var newAl = {
      idAlq: idDig,
      lib1: libro1,
      lib2: libro2,
      lib3: libro3,
      lib4: libro4,
      lib5: libro5,
      lib6: libro6,
      lib7: libro7,
      lib8: libr8,
      lib9: libro9,
      lib10: libro10,
      lib11: libro11,
      lib12: libro12,

      subt1: sblb1,
      subt2: sblb2,
      subt3: sblb3,
      subt4: sblb4,
      subt5: sblb5,
      subt6: sblb6,
      subt7: sblb7,
      subt8: sblb8,
      subt9: sblb9,
      subt10: sblb10,
      subt11: sblb11,
      subt12: sblb12,

      libTotal: total
    };
    localAlq.setItem(idDig, JSON.stringify(newAl));
    limpiar();

  } else {
    alert("Dato no encontrado");
  }
}
function eliminarAlqu() {
  var idDig = document.getElementById('txtId').value;
  if (localAlq.getItem(idDig)) {
    alert("Se eliminó el registro");
    localAlq.removeItem(idDig);
  } else {
    alert("No existe Id");

  }
}

function limpiar() {
  document.getElementById('txtId').value = "";

  document.getElementById('txt1').value = "";
  document.getElementById('txt2').value = "";
  document.getElementById('txt3').value = "";
  document.getElementById('txt4').value = "";
  document.getElementById('txt5').value = "";
  document.getElementById('txt6').value = "";
  document.getElementById('txt7').value = "";
  document.getElementById('txt8').value = "";
  document.getElementById('txt9').value = "";
  document.getElementById('txt10').value = "";
  document.getElementById('txt11').value = "";
  document.getElementById('txt12').value = "";

}
function mostrarAlq() {
  tablallena = "";
  tablallena2 = "";

  for (var i = 0; i < localAlq.length; i++) {
    var key = localAlq.key(i);
    var cuerpo = document.getElementById("elementosA");
    var cuerpob = document.getElementById("elementosB");
    var personaAJson = JSON.parse(localAlq.getItem(key));

    tablallena += "<tr><td>" + personaAJson.idAlq + "</td><td>" + personaAJson.lib1 + "</td><td>" + personaAJson.lib2 + "</td><td>" + personaAJson.lib3 + "</td><td>" + personaAJson.lib4 + "</td><td>" + personaAJson.lib5 + "</td><td>" + personaAJson.lib6 + "</td><td>" + personaAJson.lib7 + "</td><td>" + personaAJson.lib8 + "</td><td>" + personaAJson.lib9 + "</td><td>" + personaAJson.lib10 + "</td><td>" + personaAJson.lib11 + "</td><td>" + personaAJson.lib12 + "</td></tr>"
    cuerpo.innerHTML = tablallena;

    tablallena2 += "<tr><td>" + personaAJson.idAlq + "</td><td>" + personaAJson.subt1 + "</td><td>" + personaAJson.subt2 + "</td><td>" + personaAJson.subt3 + "</td><td>" + personaAJson.subt4 + "</td><td>" + personaAJson.subt5 + "</td><td>" + personaAJson.subt6 + "</td><td>" + personaAJson.subt7 + "</td><td>" + personaAJson.subt8 + "</td><td>" + personaAJson.subt9 + "</td><td>" + personaAJson.subt10 + "</td><td>" + personaAJson.subt11 + "</td><td>" + personaAJson.subt12 + "</td><td>" + personaAJson.libTotal + "</td></tr>"
    cuerpob.innerHTML = tablallena2;

    cuerpo.innerHTML = tablallena;
  }

}



"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");

//*  1º Persona:Maria Características: 2 residencias, Mail, 2 Teléfono (Fijo y Movil) //* 

var residenciaUnoMaria = new Direccion_1.Direccion("Calle Feria", 1, 2, "A", 41007, "sevilla", "sevilla");
var residenciaDosMaria = new Direccion_1.Direccion("Calle Recaredo", 3, 4, "B", 41008, "Huelva", "Huelva");
var mailMaria = new Mail_1.Mail("personal", "mariaGonzalez@gmail.com");
var fijoMaria = new Telefono_1.Telefono("fijodecasa", 954525117);
var movilMaria = new Telefono_1.Telefono("movil", 669123456);
var datosMaria = new Persona_1.Persona("Maria", "Gonzalez Carmona", 20, "10121416S", new Date(1998, 7, 11), "rosa", "mujer", [residenciaUnoMaria, residenciaDosMaria], [mailMaria], [fijoMaria, movilMaria], "sus padres viven en la residenciaDos");

//*  2º Persona:Marcos Características: 1 residencia, 1 Mail, 2 Teléfono (Fijo y Movil) //* 

var residenciaUnoMarcos = new Direccion_1.Direccion("Calle Barco", 5, 6, "C", 41009, "cadiz", "cadiz");
var residenciaDosMarcos = new Direccion_1.Direccion("Calle Velero", 7, 8, "D", 41010, "jaen", "jaen");
var mailMarcos = new Mail_1.Mail("personal", "marcosGarrido@gmail.com");
var fijoMarcos = new Telefono_1.Telefono("fijodecasa", 954504030);
var movilMarcos = new Telefono_1.Telefono("movil", 669133557);
var datosMarcos = new Persona_1.Persona("Marcos", "Garrido Castillo", 21, "11131517R", new Date(1999, 8, 12), "verde", "hombre", [residenciaUnoMarcos, residenciaDosMarcos], [mailMarcos], [fijoMarcos, movilMarcos], "Tiene la oficina donde trabaja en la residenciaUno");

//*  3º Persona:Marta Características: 2 residencia, 2 Mail, 2 Teléfono (Fijo y Movil) //* 

var residenciaUnoMarta = new Direccion_1.Direccion("Calle Gracia", 9, 10, "E", 41011, "cordoba", "cordoba");
var residenciaDosMarta = new Direccion_1.Direccion("Calle Sigilo", 11, 12, "F", 41012, "granada", "granada");
var mailMarta = new Mail_1.Mail("personal", "martaRodriguez@gmail.com");
var fijoMarta = new Telefono_1.Telefono("fijodecasa", 954514233);
var movilMarta = new Telefono_1.Telefono("movil", 669143659);
var datosMarta = new Persona_1.Persona("Marta", "Rodriguez Reyes", 27, "18192021T", new Date(2000, 9, 13), "dorado", "mujer", [residenciaUnoMarta, residenciaDosMarta], [mailMarta], [fijoMarta, movilMarta], "Solo contesta mails de trabajo o llamadas al fijo");
console.log("Before");
console.log(datosMaria);
console.log(datosMarcos);
console.log(datosMarta);
var registro = new Array(datosMaria, datosMarcos, datosMarta);
var dniBusqueda = "10121416S";
var modificarPersona = registro.find(function (persona) { return persona.dni === dniBusqueda; });
var nuevaDireccion = new Direccion_1.Direccion("calle Augusta", 47, 8, "A", 41045, "portugal", "portugal");
var nuevoMail = new Mail_1.Mail("cuenta mail para el ocio", "musicarelax@gmail.com");
var nuevoTelefono = new Telefono_1.Telefono("fijo", 987654227);
modificarPersona.vincularNuevoMail(nuevoMail);
modificarPersona.vincularNuevoTelefono(nuevoTelefono);
modificarPersona.vincularNuevaDireccion(nuevaDireccion);
console.log("After");
console.log(datosMaria);
console.log(datosMarcos);
console.log(datosMarta);

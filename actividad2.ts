import { Persona } from './Persona';
import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';

//*  1º Persona:Maria Características: 2 residencias, Mail, 2 Teléfono (Fijo y Movil) //* 

const residenciaUnoMaria = new Direccion(
    "Calle Feria",
    1,
    2,
    "A",
    41007,
    "sevilla",
    "sevilla"
)

const residenciaDosMaria = new Direccion(
    "Calle Recaredo",
    3,
    4,
    "B",
    41008,
    "Huelva",
    "Huelva"
)

const mailMaria = new Mail (
    "personal",
    "mariaGonzalez@gmail.com"
)

const fijoMaria = new Telefono(
    "fijodecasa",
    954525117
    )

const movilMaria = new Telefono(
    "movil",
     669123456
    )

const datosMaria = new Persona(
    "Maria",
    "Gonzalez Carmona",
    20,
    "10121416S",
    new Date(1998, 7, 11),
    "rosa",
    "mujer",
    [residenciaUnoMaria, residenciaDosMaria],
    [mailMaria],
    [fijoMaria, movilMaria],
    "sus padres viven en la residenciaDos"
    );

    //*  2º Persona:Marcos Características: 1 residencia, 1 Mail, 2 Teléfono (Fijo y Movil) //* 

    const residenciaUnoMarcos = new Direccion(
        "Calle Barco",
        5,
        6,
        "C",
        41009,
        "cadiz",
        "cadiz"
    )
    
    const residenciaDosMarcos = new Direccion(
        "Calle Velero",
        7,
        8,
        "D",
        41010,
        "jaen",
        "jaen"
    )
    
    const mailMarcos = new Mail (
        "personal",
        "marcosGarrido@gmail.com"
    )
    
    const fijoMarcos = new Telefono(
        "fijodecasa",
        954504030
        )
    
    const movilMarcos = new Telefono(
        "movil",
         669133557
        )
        
    const datosMarcos = new Persona(
        "Marcos",
        "Garrido Castillo",
        21,
        "11131517R",
        new Date(1999, 8, 12),
        "verde",
        "hombre",
        [residenciaUnoMarcos, residenciaDosMarcos],
        [mailMarcos],
        [fijoMarcos, movilMarcos],
        "Tiene la oficina donde trabaja en la residenciaUno"
        );
    
     //*  3º Persona:Marta Características: 2 residencia, 2 Mail, 2 Teléfono (Fijo y Movil) //* 

     const residenciaUnoMarta = new Direccion(
        "Calle Gracia",
        9,
        10,
        "E",
        41011,
        "cordoba",
        "cordoba"
    )
    
    const residenciaDosMarta = new Direccion(
        "Calle Sigilo",
        11,
        12,
        "F",
        41012,
        "granada",
        "granada"
    )
    
    const mailMarta = new Mail (
        "personal",
        "martaRodriguez@gmail.com"
    )
    
    const fijoMarta = new Telefono(
        "fijodecasa",
        954514233
        )
    
    const movilMarta = new Telefono(
        "movil",
         669143659
        )

    const datosMarta = new Persona(
        "Marta",
        "Rodriguez Reyes",
        27,
        "18192021T",
        new Date(2000, 9, 13),
        "dorado",
        "mujer",
        [residenciaUnoMarta, residenciaDosMarta],
        [mailMarta],
        [fijoMarta, movilMarta],
        "Solo contesta mails de trabajo o llamadas al fijo"
         );
    
    console.log("Before");
    console.log(datosMaria);
    console.log(datosMarcos);
    console.log(datosMarta);

    const registro = new Array(datosMaria, datosMarcos, datosMarta);

    const dniBusqueda: string = "10121416S";

    const modificarPersona: Persona = registro.find(persona => persona.dni === dniBusqueda) as Persona;
    
    const nuevaDireccion = new Direccion(
        "calle Augusta",
        47,
        8,
        "A",
        41045,
        "portugal",
        "portugal"
    )

    const nuevoMail = new Mail(
        "cuenta mail para el ocio",
        "musicarelax@gmail.com"
    )

    const nuevoTelefono = new Telefono(
        "fijo",
        987654227
    )

modificarPersona.vincularNuevoMail(nuevoMail);
modificarPersona.vincularNuevoTelefono(nuevoTelefono);
modificarPersona.vincularNuevaDireccion(nuevaDireccion);

console.log("After");
console.log(datosMaria);
console.log(datosMarcos);
console.log(datosMarta);





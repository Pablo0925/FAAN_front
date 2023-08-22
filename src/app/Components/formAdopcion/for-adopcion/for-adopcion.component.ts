import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ImageService } from 'src/app/Service/image.service';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
    selector: 'app-for-adopcion',
    templateUrl: './for-adopcion.component.html',
    styleUrls: ['./for-adopcion.component.css']
})
export class ForAdopcionComponent {

    constructor(private imageService: ImageService) { }

    public async generarPDF() {

        const nombreInput = document.getElementById("nombre") as HTMLInputElement;
        const ocupacionInput = document.getElementById("ocupacion") as HTMLInputElement;
        const direccionCasaInput = document.getElementById("direccion_domicilio") as HTMLInputElement;
        const direccionTrabajoInput = document.getElementById("direccion_trabajo") as HTMLInputElement;
        const correoInput = document.getElementById("correo") as HTMLInputElement;
        const telefonoCasaInput = document.getElementById("telefono_casa") as HTMLInputElement;
        const telefonoTrabajoInput = document.getElementById("telefono_trabajo") as HTMLInputElement;
        const celularInput = document.getElementById("celular") as HTMLInputElement;
        const estadoCivilInput = document.getElementById("estado_civil") as HTMLInputElement;
        const numeroMiembrosInput = document.getElementById("num_miembros_familia") as HTMLInputElement;
        const edadNinosInput = document.getElementById("ninos_edad") as HTMLInputElement;
        const autorizadorInput = document.getElementById("autorizador") as HTMLInputElement;

        const acuerdoFamiliaSi = document.getElementById("acuerdo_familia_si") as HTMLInputElement;
        const acuerdoFamiliaNo = document.getElementById("acuerdo_familia_no") as HTMLInputElement;
        let acuerdoFamilia;
        const desacuerdoFamiliarInput = document.getElementById("razon_no_acuerdo") as HTMLInputElement;

        if (acuerdoFamiliaSi.checked) {
            acuerdoFamilia = 'SI';
        } else if (acuerdoFamiliaNo.checked) {
            acuerdoFamilia = 'NO';
        } else {
            acuerdoFamilia = 'NO SELECCIONADO';
        }


        let viveConUOtro;
        const viveConmigo = document.getElementById("viveConmigo") as HTMLInputElement;
        const viveConOtro = document.getElementById("viveOtro") as HTMLInputElement;
        if (viveConmigo.checked) {
            viveConUOtro = "VIVIRA CONMIGO";
        }
        if (viveConOtro.checked) {
            viveConUOtro = "VIVIRA CON OTRO";
        }

        let considerar;
        const considerarCompania = document.getElementById("compania") as HTMLInputElement;
        const considerarGuardian = document.getElementById("guardian") as HTMLInputElement;
        const considerarMiembro = document.getElementById("miembroFamilia") as HTMLInputElement;
        const considerarAmigo = document.getElementById("amigo") as HTMLInputElement;

        if (considerarCompania.checked) {
            considerar = "COMPAÑIA";
        }
        if (considerarGuardian.checked) {
            considerar = "GUARDIAN";
        }
        if (considerarMiembro.checked) {
            considerar = "MIEMBRO FAMILIAR";
        }
        if (considerarAmigo.checked) {
            considerar = "AMIGO";
        }

        let antes = "NO";
        const antesSI = document.getElementById("antesSi") as HTMLInputElement;

        if (antesSI.checked) {
            antes = "SI";
        }

        const animalPasadoInput = document.getElementById("animalPasado") as HTMLInputElement;
        const tiempoPasadoInput = document.getElementById("tiempoPasado") as HTMLInputElement;
        const animalAhoraInput = document.getElementById("animalAhora") as HTMLInputElement;

        let vacunado = "NO";
        const vacunaSI = document.getElementById("vacunaSI") as HTMLInputElement;
        if (vacunaSI.checked) {
            vacunado = "SI";
        }

        const vacunasAntesInput = document.getElementById("vacunasANTES") as HTMLInputElement;

        let desparasitado = "NO";
        const desparasitadoSI = document.getElementById("desparasitadoSI") as HTMLInputElement;
        if (desparasitadoSI.checked) {
            desparasitado = "SI";
        }

        const tiempoDesparasitadoInput = document.getElementById("tiempoDesparasita") as HTMLInputElement;
        const hotasSoloInput = document.getElementById("horasSolo") as HTMLInputElement;
        const pasariaAnimalInput = document.getElementById("pasariaAnimal") as HTMLInputElement;
        const problemaAlergiaInput = document.getElementById("problemaAlergia") as HTMLInputElement;
        const resultaAlergicoInput = document.getElementById("resultaAlergico") as HTMLInputElement;

        let planeaHijos = "NO";
        const planeaHijosSI = document.getElementById("planeaSI") as HTMLInputElement;
        if (planeaHijosSI.checked) {
            planeaHijos = "SI";
        }

        const embarazaInput = document.getElementById("embaraza") as HTMLInputElement;
        let conoceGastos = "NO";
        const conoceGastosSI = document.getElementById("gastosSI") as HTMLInputElement;
        if (conoceGastosSI.checked) {
            conoceGastos = "SI";
        }

        let tipoVivienda;
        const viviendaCasaInput = document.getElementById("casa") as HTMLInputElement;
        const viviendaDepaInput = document.getElementById("depa") as HTMLInputElement;

        if (viviendaCasaInput.checked) {
            tipoVivienda = "CASA";
        }
        if (viviendaDepaInput.checked) {
            tipoVivienda = "DEPARTAMENTO";
        }

        let vivienda;
        const viviendaPropiaInput = document.getElementById("propia") as HTMLInputElement;
        const viviendaRentadaInput = document.getElementById("rentada") as HTMLInputElement;
        const viviendaCompartidaInput = document.getElementById("compartida") as HTMLInputElement;

        if (viviendaPropiaInput.checked) {
            vivienda = "PROPIA";
        }
        if (viviendaRentadaInput.checked) {
            vivienda = "RENTADA";
        }
        if (viviendaCompartidaInput.checked) {
            vivienda = "COMPARTIDA";
        }

        let jardioPatio;
        const jardinSI = document.getElementById("jardin") as HTMLInputElement;
        const patioSI = document.getElementById("patio") as HTMLInputElement;
        if (jardinSI.checked) {
            jardioPatio = "JARDIN";
        }
        if (patioSI.checked) {
            jardioPatio = "PATIO";
        }

        let parteCasa;
        const jardinParte = document.getElementById("jardinParte") as HTMLInputElement;
        const patioParte = document.getElementById("patioParte") as HTMLInputElement;
        const azoteaParte = document.getElementById("azoteaParte") as HTMLInputElement;
        const dentronCasaParte = document.getElementById("dentroCasaParte") as HTMLInputElement;

        if (jardinParte.checked) {
            parteCasa = "JARDIN";
        }
        if (patioParte.checked) {
            parteCasa = "PATIO";
        }
        if (azoteaParte.checked) {
            parteCasa = "AZOTEA";
        }
        if (dentronCasaParte.checked) {
            parteCasa = "DENTRO DE LA CASA";
        }

        let dormirParte;
        const jardinDormir = document.getElementById("dormirJardin") as HTMLInputElement;
        const patioDormir = document.getElementById("dormirPatio") as HTMLInputElement;
        const azoteaDormir = document.getElementById("dormirAzotea") as HTMLInputElement;
        const dentronCasaDormir = document.getElementById("dormirDentroCasa") as HTMLInputElement;

        if (jardinDormir.checked) {
            dormirParte = "JARDIN";
        }
        if (patioDormir.checked) {
            dormirParte = "PATIO";
        }
        if (azoteaDormir.checked) {
            dormirParte = "AZOTEA";
        }
        if (dentronCasaDormir.checked) {
            dormirParte = "DENTRO DE LA CASA";
        }

        const vecinosAnimalesInput = document.getElementById("vecinosAnimales") as HTMLInputElement;

        let permiso = "NO";
        const permisoSI = document.getElementById("permisoSI") as HTMLInputElement;
        if (permisoSI.checked) {
            permiso = "SI";
        }

        const mudarseLugarInput = document.getElementById("mudarseLugar") as HTMLInputElement;
        const mudarseInput = document.getElementById("mudarse") as HTMLInputElement;

        let dispuesto = "NO";
        const dispuestoSI = document.getElementById("dispuestoSI") as HTMLInputElement;

        if (dispuestoSI.checked) {
            dispuesto = "SI";
        }

        const enterarseInput = document.getElementById("enterarseNosotros") as HTMLInputElement;
        const otrosComentarios = document.getElementById("otrosComentarios") as HTMLInputElement;

        //variables para el pdf
        const name = nombreInput.value;
        const ocupacion = ocupacionInput.value;
        const email = ocupacionInput.value;
        const direccionCasa = direccionCasaInput.value;
        const direccionTrabajo = direccionTrabajoInput.value;
        const correo = correoInput.value;
        const telefonoCasa = telefonoCasaInput.value;
        const telefonoTrabajo = telefonoTrabajoInput.value;
        const celular = celularInput.value;
        const estadoCivil = estadoCivilInput.value;
        const numeroMiembros = numeroMiembrosInput.value;
        const edadNinos = edadNinosInput.value;
        const autorizador = autorizadorInput.value;
        const desacuerdoFamiliar = desacuerdoFamiliarInput.value;
        const animalPasado = animalPasadoInput.value;


        const data = {

            title: 'FORMULARIO PARA LA ADOGCIÓN',
            subtitle: 'INFORMACION DE LA VIVIENDA'
        };

        // Definir el contenido del PDF utilizando la estructura de pdfmake
        // const documentDefinition1 = {
        //     content: [
        //         { text: data.title, style: 'header' },
        //         { text: 'NOMBRE: ' + name },
        //         { text: 'OCUPACION: ' + email },
        //         { text: 'DIRECCION DE DOMICILIO: ' + direccionCasa },
        //         { text: 'DIRECCION DEL TRABAJO: ' + direccionTrabajo },
        //         { text: 'CORREO ELECTRONICO: ' + correo },
        //         { text: 'TELEFONO DE CASA: ' + telefonoCasa },
        //         { text: 'TELEFONO DE TRABAJO: ' + telefonoTrabajo },
        //         { text: 'CELULAR: ' + celular },
        //         { text: 'ESTADO CIVIL: ' + estadoCivil },
        //         { text: 'NUMERO DE MIEMBROS EN EL HOGAR: ' + numeroMiembros },
        //         { text: 'EDAD DE LOS NIÑOS: ' + edadNinos },
        //         { text: 'AUTORIZADOR: ' + autorizador },
        //         { text: 'ACUERDO FAMILIAR: ' + acuerdoFamilia },
        //         { text: 'RAZON DEL DESACUERDO: ' + desacuerdoFamiliar },
        //         { text: 'PERSONAS CON LAS QUE VIVIRA: ' + viveConUOtro },
        //         { text: 'COMO SE CONSIDERARA EL ANIMALITO: ' + considerar },
        //         { text: 'SI HA TENIDO ANIMALES ANTES: ' + antes },
        //         { text: 'QUE ANIMAL ERA: ' + animalPasado },
        //         { text: 'CUANTO TIEMPO VIVIO: ' + tiempoPasadoInput.value },
        //         { text: 'DONDE SE ENCUENTRA AHORA: ' + animalAhoraInput.value },
        //         { text: 'SI FUE VACUNADO: ' + vacunado },
        //         { text: 'VACUNAS Y TIEMPO DE APLICACION: ' + vacunasAntesInput.value },
        //         { text: 'DESPARASITACION: ' + desparasitado },
        //         { text: 'TIEMPO DE DESPARASITACION: ' + tiempoDesparasitadoInput.value },
        //         { text: 'HORAS DE PERMANENCIA SOL@: ' + hotasSoloInput.value },
        //         { text: 'LUGAR DONDE PASARIA SOL@: ' + pasariaAnimalInput.value },
        //         { text: 'PERSONAS CON PROBLEMAS DE ALERGIA: ' + problemaAlergiaInput.value },
        //         { text: 'QUE SUCEDERIA CON ESTAS PERSONAS: ' + resultaAlergicoInput.value },
        //         { text: 'PLANEACION DE HIJOS: ' + planeaHijos },
        //         { text: 'QUE PASARIA SI EXISTE EMBARAZADA: ' + embarazaInput.value },
        //         { text: 'CONOCIMIENTO DE GASTOS: ' + conoceGastos },
        //         { text: data.subtitle },
        //         { text: 'TIPO DE VIVIENDA: ' + tipoVivienda },
        //         { text: 'VIVIENDA: ' + vivienda },
        //         { text: 'JARDIO O PATIO: ' + jardioPatio },
        //         { text: 'PARTE DONDE VIVIRIA EL ANIMALITO: ' + parteCasa },
        //         { text: 'PARTE DONDE DORMIRIA EL ANIMALITO: ' + dormirParte },
        //         { text: 'VECINOS QUE POSEAN OTRO ANIMAL: ' + vecinosAnimalesInput.value },
        //         { text: 'SE CUENTA CON EL PERMISO: ' + permiso },
        //         { text: 'QUE SUCEDERIA SI SE TUVIERA QUE MUDAD DE CASA, CIUDAD O PAIS: ' + mudarseLugarInput.value },
        //         { text: 'QUE SUCEDERIA SI NO SE ADMITIERAN ANIMALES: ' + mudarseInput.value },
        //         { text: 'DISPOSICION DEL TIEMPO DE ADAPTACION: ' + dispuesto },
        //         { text: 'COMO SE ENTERO DE LA FUNDACION: ' + enterarseInput.value },
        //         { text: 'OTROS COMENTARIOS: ' + otrosComentarios.value },

        //     ],
        //     styles: {
        //         header: {
        //             fontSize: 22,
        //             bold: true,
        //         }
        //     },
        //     anotherStyle: {
        //         alignment: 'center'
        //     }
        // };






        const styles = {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 10]
            },
            subtittle: {
                fontSize: 14,
                bold: true,
            },
            question: {
                fontSize: 12,
                bold: true,
            },
            roundedImage: {
                mask: {
                    type: 'ellipse',
                },
                alignment: 'center',
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 14,
                bold: true,
                margin: [0, 10, 0, 5]
            }
        };


        const imageDataUrl = await this.imageService.getImageDataUrl('assets/img/faan.jpg');


        const documentDefinition = {
            content: [
                { image: imageDataUrl, width: 300, height: 130, style: 'roundedImage' },
                { text: 'SOLICICITUD DE ADOPCIÓN', style: 'header' },
                { text: 'NO COMPRES ADOGTA SALVA UNA VIDA.', style: 'subtittle' },
                '\n Primeramente agradecemos tu interés en adoptar darle y dar una segunda oportunidad a uno de nuestros rescatados.',
                '\n Para nosotros es muy importante cada uno de los perritos y gatitos que han sido rescatados ya que vienen de maltrato, calle o abandono, motivo por el cuál debemos asegurarnos que estará en buenas manos bajo tu cuidado y protección, por ello te pedimos que antes de llenar el siguiente formulario, leas con atención las siguientes consideraciones que debes tomar en cuenta antes de adoptar un animalito.',
                '\n Si al terminar de leer aún estas convencido de aDOGtar, llénala esta solicitud y envíala a nuestros contactos 0998681859 -0987614520',
                { text: '\n I M P O R T A N T E', style: 'question' },
                { text: '\n CONSIDERACIONESANTES DE ADOPTAR', style: 'question' },
                '\n El tener una animalito puede ser muy gratificante, pero sólo si realmente has meditado esta decisión antes de adogtar un compañero.',
                '\n El hecho de que estés pensando en adoptar un animal de un refugio significa que eres una persona responsable y humanitaria. Pero antes de tomar la decisión de traer un animalito a tu vida, tómate un momento para pensar en estos puntos:',
                { text: '\n ¿Porqué quieres un animalito?', style: 'question' },
                '\n Adogtar un animalito simplemente por novelería o porque los niños han estado lloriqueando generalmente termina siendo un gran error. No te olvides de que algunas especies pueden estar contigo 10, 15 o incluso 20 años.',
                { text: '\n ¿Tienes tiempo necesario?', style: 'question' },
                '\n Perros, gatos y otros animales de compañía no pueden ser ignorados simplemente porque estés cansado u ocupado, necesitan comida, agua, ejercicio, cariño y compañía. Muchos animales en los refugios están allí porque sus dueños no pensaron realmente cuánto tiempo llevaba cuidar de ellos.',
                { text: '\n Economía', style: 'question' },
                'Los costos de mantener un animalito pueden ser elevados: ',
                'Cuidados veterinarios, juguetes, comida y otros que se puedan ocasionar.',
                '\n Otros.',
                '\n Pulgas, lana en los muebles, travesuras, etc.',
                '\n Te comprometes a hacerte cargo del animal por el resto de su vida, tomando en cuenta que vivirá un promedio aproximado de 10 a 15 años.',
                '\n Tomando estas consideraciones deseas continuar, llena la solicitud.',

                { text: 'PERSONALES:', style: 'subheader' },
                {
                    ul: [
                        { text: 'Nombre: ' + name, style: 'question' },
                        { text: 'Ocupación: ' + ocupacion, style: 'question' },
                        { text: 'Dirección domiciliaria: ' + direccionCasa, style: 'question' },
                        { text: 'Dirección de trabajo: ' + direccionTrabajo, style: 'question' },
                        { text: 'Correo electrónico: ' + correo, style: 'question' },
                        { text: 'Teléfono de casa: ' + telefonoCasa, style: 'question' },
                        { text: 'Tel. trabajo: ' + telefonoTrabajo, style: 'question' },
                        { text: 'Celular: ' + celular, style: 'question' },
                        { text: 'Estado civil: ' + estadoCivil, style: 'question' },
                        { text: 'Número de miembros en la familia: ' + numeroMiembros, style: 'question' },
                        { text: 'Niños- edad: ' + edadNinos, style: 'question' },

                    ]
                },
                { text: '\n 1. ¿Quién es la persona que autorizará la adopción del animal? (madre, padre, tutor, etc) ', style: 'question' },
                { text: '\n' + autorizador },

                { text: '\n 2. ¿Están todos los miembros de la familia enterados y de acuerdo de la intención de adogtar un animal de compañía? Si ___ No___ ', style: 'question' },

                { text: '\n 3. ¿Están de acuerdo? Si ___ No___ ¿Quiénes? todos_____ ¿Porqué? ', style: 'question' },
                { text: ' \n', },

                { text: '\n 4. El animalito viviría con: Conmigo y mi familia___ Es obsequio para un conocido___', style: 'question' },

                { text: '\n 5. Como lo vas a considerar?: ', style: 'question' },
                { text: 'Una compañía _______Un guardián _______ Un miembro más de la familia ______ Un amigo_______', style: 'question' },


                { text: '\n 6. ¿Han tenido animales de compañía con anterioridad? ', style: 'question' },
                { text: '\n', },

                { text: '\n 7. ¿Qué animal era? ', style: 'question' },
                { text: '\n', },


                { text: '\n 8. ¿Cuánto tiempo vivió con ustedes? ', style: 'question' },
                { text: '\n', },

                { text: '\n 9. ¿En dónde está ahora el animal? ¿Por qué? Falleció, Como?', style: 'question' },
                { text: '\n', },

                { text: '\n 10. ¿Estaba vacunado? ', style: 'question' },
                { text: '\n', },

                { text: '\n 11. ¿Qué vacunas se le aplicaron? y ¿Cada cuánto tiempo se vacunaba?', style: 'question' },
                { text: '\n', },

                { text: '\n 12. ¿Estaba desparasitado? ¿Cada cuánto tiempo se desparasitaba?  ', style: 'question' },
                { text: '\n', },

                { text: '\n 13. ¿Cuántas horas del día permanecería solo?', style: 'question' },
                { text: '\n', },

                { text: '\n 14. ¿En dónde estaría mientras no hubiera nadie en casa? ', style: 'question' },
                { text: '\n', },

                { text: '\n 15. ¿Hay alguien en su familia con problemas de alergias? ', style: 'question' },
                { text: '\n', },

                { text: '\n 16. ¿Qué sucedería si alguien resultara alérgico al animal? ', style: 'question' },
                { text: '\n', },

                { text: '\n 17. ¿Planea tener hijos? ', style: 'question' },
                { text: '\n', },


                { text: '\n 18. ¿Qué sucedería si usted o en caso de ser hombre, su pareja quedara embarazada?', style: 'question' },
                { text: '\n', },


                { text: '\n 20. Con quien quedaría el animalito en caso de separación?', style: 'question' },
                { text: '\n', },

                { text: '\n VIVIENDA', style: 'subheader' },

                { text: '\n 21. Tu vivienda es: Casa___ Departamento__', style: 'question' },
                { text: 'Tu vivienda es: Propia___ Rentada ___ Compartida ___ Otra:________', style: 'question' },

                { text: '\n 22. ¿Tiene jardín o patio? ', style: 'question' },
                { text: '\n', },

                { text: '\n 23. En que parte de tu casa va a vivir el animalito:', style: 'question' },
                { text: 'Jardín____ Patio_____ Azotea____ Dentro de casa____', style: 'question' },

                { text: '\n 24. ¿En dónde dormiría? ', style: 'question' },
                { text: 'Jardín____ Patio_____ Azotea____ Dentro de casa____', style: 'question' },

                { text: '\n 25.Si vive en departamento, ¿hay otros vecinos que tengan animales de compañía? ', style: 'question' },
                { text: '\n', },

                { text: '\n 26. En caso de renta o condominio cuentas con el permiso de tu casero o administración para poseer animales de compañía?', style: 'question' },
                { text: '\n', },

                { text: '\n 27. ¿Qué sucedería si tuviera que mudarse a otra casa o ciudad /país? ', style: 'question' },
                { text: '\n', },

                { text: '\n 28. ¿Qué sucedería si al mudarse algún lugar donde no admiten perros o gatos o de tener algún problema familiar o económico? ', style: 'question' },
                { text: '\n', },

                { text: '\n 29. ¿Está dispuesto a que el perro o gato tenga un periodo de ajuste en el que aprenda dónde debe ir al baño y se adapte a la familia? ', style: 'question' },
                { text: '\n', },

                { text: '\n 30. ¿Cómo te enteraste de nosotros?', style: 'question' },
                { text: '\n', },

                { text: '\n 31. otros comentarios.', style: 'question' },
                { text: '', },


                { text: '\n Una vez llenado este formulario pasaremos a los siguientes requerimientos:', },
                { text: '\n Después de conocer el perro o gato con interés en adoptar, se deberá realizar una visita de convivencia, así como recibir una platica sobre el cuidado de una mascota. ' },

                {
                    text: 'Entregar copia de Identificación oficial y comprobante de domicilio (planilla servicios básicos) Tener la disponibilidad de recibir una visita de parte de la asociación para conocer el lugar donde habitará el animalito en adopción.'
                },
                {
                    text: 'Segunda visita de familiarización y entrega de donativo de $ 15.00 o su equivalente en comida para perros los cual ayudara a seguir con nuestra labor.'
                },
                {
                    text: 'Es obligación de FAAN entregarte al animalito vacunado, desparasitado y esterilizado si tiene edad para hacerlo'
                },


            ],
            styles: styles
        };


        const pdfDocGenerator = pdfMake.createPdf(documentDefinition as any);
        pdfDocGenerator.download('ejemplo.pdf');


        // Generar el PDF
        // const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
        // pdfDocGenerator.open();
    }


}

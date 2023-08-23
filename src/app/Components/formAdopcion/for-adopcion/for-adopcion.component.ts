import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ImageService } from 'src/app/Service/image.service';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import { Form, Formulario } from 'src/app/Models/fomulario';


@Component({
    selector: 'app-for-adopcion',
    templateUrl: './for-adopcion.component.html',
    styleUrls: ['./for-adopcion.component.css']
})
export class ForAdopcionComponent {
    public formulario: Form = new Form();

    constructor(private imageService: ImageService) { }

    public async generarPDF() {
        console.log(this.formulario)


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
                        { text: 'Nombre: ' + this.formulario.nombre, style: 'question' },
                        { text: 'Ocupación: ' + this.formulario.ocupacion, style: 'question' },
                        { text: 'Dirección domiciliaria: ' + this.formulario.direccionDomiciliaria, style: 'question' },
                        { text: 'Dirección de trabajo: ' + this.formulario.direccionTrabajo, style: 'question' },
                        { text: 'Correo electrónico: ' + this.formulario.correoE, style: 'question' },
                        { text: 'Teléfono de casa: ' + this.formulario.telefonoCasa, style: 'question' },
                        { text: 'Tel. trabajo: ' + this.formulario.telefonoTrabajo, style: 'question' },
                        { text: 'Celular: ' + this.formulario.celular, style: 'question' },
                        { text: 'Estado civil: ' + this.formulario.estadoCivil, style: 'question' },
                        { text: 'Número de miembros en la familia: ' + this.formulario.numeroMiembros, style: 'question' },
                        { text: 'Niños- edad: ' + this.formulario.edadNinos, style: 'question' },

                    ]
                },
                { text: '\n 1. ¿Quién es la persona que autorizará la adopción del animal? (madre, padre, tutor, etc) ', style: 'question' },
                { text: '\n' + this.formulario.autorizacion1 },

                { text: `\n 2. ¿Están todos los miembros de la familia enterados y de acuerdo de la intención de adogtar un animal de compañía? Si __${this.formulario.todoMiembrosAcuerdo2 === 'SI' ? 'X' : ''}__ No__${this.formulario.todoMiembrosAcuerdo2 === 'NO' ? 'X' : ''}__ `, style: 'question' },

                {
                    text: `\n 3. ¿Están de acuerdo? Si __${this.formulario.acuerdo3 === 'SI' ? 'X' : ''}__ No__${this.formulario.acuerdo3 === 'SI' ? 'X' : ''}__ ¿Quiénes? todos_____ ¿Porqué? `, style: 'question'
                },
                { text: ' \n' + this.formulario.responseWhy3, },

                { text: `\n 4. El animalito viviría con: Conmigo y mi familia__${this.formulario.acuerdo3 === 'A' ? 'X' : ''}__ Es obsequio para un conocido__${this.formulario.acuerdo3 === 'B' ? 'X' : ''}__`, style: 'question' },

                { text: '\n 5. Como lo vas a considerar?: ', style: 'question' },
                { text: `Una compañía ___${this.formulario.acuerdo3 === 'A' ? 'X' : ''}___Un guardián ___${this.formulario.acuerdo3 === 'B' ? 'X' : ''}___ Un miembro más de la familia ___${this.formulario.acuerdo3 === 'C' ? 'X' : ''}___ Un amigo___${this.formulario.acuerdo3 === 'D' ? 'X' : ''}___`, style: 'question' },


                { text: '\n 6. ¿Han tenido animales de compañía con anterioridad? ', style: 'question' },
                { text: '\n' + this.formulario.animalesAnterioridad6, },

                { text: '\n 7. ¿Qué animal era? ', style: 'question' },
                { text: '\n' + this.formulario.animalPasado7, },


                { text: '\n 8. ¿Cuánto tiempo vivió con ustedes? ', style: 'question' },
                { text: '\n' + this.formulario.tiempoVivido8, },

                { text: '\n 9. ¿En dónde está ahora el animal? ¿Por qué? Falleció, Como?', style: 'question' },
                { text: '\n' + this.formulario.animalAhora9, },

                { text: '\n 10. ¿Estaba vacunado? ', style: 'question' },
                { text: '\n' + this.formulario.vacunado10, },

                { text: '\n 11. ¿Qué vacunas se le aplicaron? y ¿Cada cuánto tiempo se vacunaba?', style: 'question' },
                { text: '\n' + this.formulario.vacunasAntes11, },

                { text: '\n 12. ¿Estaba desparasitado? ¿Cada cuánto tiempo se desparasitaba?  ', style: 'question' },
                { text: '\n' + this.formulario.desparasitado12, },

                { text: '\n 13. ¿Cuántas horas del día permanecería solo?', style: 'question' },
                { text: '\n' + this.formulario.horasSolo13, },

                { text: '\n 14. ¿En dónde estaría mientras no hubiera nadie en casa? ', style: 'question' },
                { text: '\n' + this.formulario.pasariaAnimal14, },

                { text: '\n 15. ¿Hay alguien en su familia con problemas de alergias? ', style: 'question' },
                { text: '\n' + this.formulario.problemaAlergia15, },

                { text: '\n 16. ¿Qué sucedería si alguien resultara alérgico al animal? ', style: 'question' },
                { text: '\n' + this.formulario.resultaAlergico16, },

                { text: '\n 17. ¿Planea tener hijos? ', style: 'question' },
                { text: '\n' + this.formulario.planeaHijos17, },


                { text: '\n 18. ¿Qué sucedería si usted o en caso de ser hombre, su pareja quedara embarazada?', style: 'question' },
                { text: '\n' + this.formulario.embaraza18, },

                { text: '\n 19. ¿Conoce los gastos que implica tener un perro o gato? ', style: 'question' },
                { text: '\n' + this.formulario.conoceGastos19, },


                { text: '\n 20. Con quien quedaría el animalito en caso de separación?', style: 'question' },
                { text: '\n' + this.formulario.separacionFamilia20, },

                { text: '\n VIVIENDA', style: 'subheader' },

                { text: `\n 21. Tu vivienda es: Casa_${this.formulario.tipoVivienda21 === 'A' ? 'X' : ''}_ Departamento_${this.formulario.tipoVivienda21 === 'B' ? 'X' : ''}_`, style: 'question' },
                { text: `Tu vivienda es: Propia__${this.formulario.vivienda21 === 'A' ? 'X' : ''}_ Rentada _${this.formulario.vivienda21 === 'B' ? 'X' : ''}_ Compartida _${this.formulario.vivienda21 === 'C' ? '' : ''}_ Otra:__${this.formulario.vivienda21 === 'D' ? '' : ''}__`, style: 'question' },

                { text: '\n 22. ¿Tiene jardín o patio? ', style: 'question' },
                { text: '\n' + this.formulario.jardioPatio22, },

                { text: '\n 23. En que parte de tu casa va a vivir el animalito:', style: 'question' },
                {
                    text: `Jardín__${this.formulario.parteCasaVivirAnimal23 === 'A' ? 'X' : ''}__ Patio___${this.formulario.parteCasaVivirAnimal23 === 'B' ? 'X' : ''}__ Azotea__${this.formulario.parteCasaVivirAnimal23 === 'C' ? 'X' : ''}__ Dentro de casa__${this.formulario.parteCasaVivirAnimal23 === 'D' ? 'X' : ''}__`, style: 'question'
                },

                { text: '\n 24. ¿En dónde dormiría? ', style: 'question' },
                {
                    text: `Jardín__${this.formulario.dormirAnimalParte24 === 'A' ? 'X' : ''}__ Patio___${this.formulario.dormirAnimalParte24 === 'B' ? 'X' : ''}__ Azotea__${this.formulario.dormirAnimalParte24 === 'C' ? 'X' : ''}__ Dentro de casa__${this.formulario.dormirAnimalParte24 === 'D' ? 'X' : ''}__`, style: 'question'
                },

                { text: '\n 25.Si vive en departamento, ¿hay otros vecinos que tengan animales de compañía? ', style: 'question' },
                { text: '\n' + this.formulario.vecinosAnimales25, },

                { text: '\n 26. En caso de renta o condominio cuentas con el permiso de tu casero o administración para poseer animales de compañía?', style: 'question' },
                { text: '\n' + this.formulario.permiso26, },

                { text: '\n 27. ¿Qué sucedería si tuviera que mudarse a otra casa o ciudad /país? ', style: 'question' },
                { text: '\n' + this.formulario.mudarseLugar27, },

                { text: '\n 28. ¿Qué sucedería si al mudarse algún lugar donde no admiten perros o gatos o de tener algún problema familiar o económico? ', style: 'question' },
                { text: '\n' + this.formulario.mudarse28, },

                { text: '\n 29. ¿Está dispuesto a que el perro o gato tenga un periodo de ajuste en el que aprenda dónde debe ir al baño y se adapte a la familia? ', style: 'question' },
                { text: '\n' + this.formulario.dispuesto29, },

                { text: '\n 30. ¿Cómo te enteraste de nosotros?', style: 'question' },
                { text: '\n' + this.formulario.enterarse30, },

                { text: '\n 31. otros comentarios.', style: 'question' },
                { text: '' + this.formulario.otrosComentarios31, },


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

    }

}

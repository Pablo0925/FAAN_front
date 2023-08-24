import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ImageService } from 'src/app/Service/image.service';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import { Formulario } from 'src/app/Models/fomulario';


@Component({
    selector: 'app-for-adopcion',
    templateUrl: './for-adopcion.component.html',
    styleUrls: ['./for-adopcion.component.css']
})
export class ForAdopcionComponent {
    public formulario: Formulario = new Formulario();

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
                { text: 'PERSONALES:', style: 'subheader' },
                {
                    ul: [
                        { text: 'Nombre: ' + this.formulario.nombre, style: 'question' },
                        { text: 'Ocupación: ' + this.formulario.ocupacion, style: 'question' },
                        { text: 'Dirección domiciliaria: ' + this.formulario.ubicaciondomicilio, style: 'question' },
                        { text: 'Dirección de trabajo: ' + this.formulario.direccion, style: 'question' },
                        { text: 'Correo electrónico: ' + this.formulario.correo, style: 'question' },
                        { text: 'Teléfono de casa: ' + this.formulario.telefonocasa, style: 'question' },
                        { text: 'Tel. trabajo: ' + this.formulario.telefonotrabajo, style: 'question' },
                        { text: 'Celular: ' + this.formulario.celular, style: 'question' },
                        { text: 'Estado civil: ' + this.formulario.estadocivil, style: 'question' },
                        { text: 'Número de miembros en la familia: ' + this.formulario.numeroMiembros, style: 'question' },
                        { text: 'Niños- edad: ' + this.formulario.edadNinos, style: 'question' },

                    ]
                },
                { text: '\n 1. ¿Quién es la persona que autorizará la adopción del animal? (madre, padre, tutor, etc) ', style: 'question' },
                { text: '\n' + this.formulario.autorizacion },

                { text: `\n 2. ¿Están todos los miembros de la familia enterados y de acuerdo de la intención de adogtar un animal de compañía? Si __${this.formulario.todoMiembrosAcuerdoSI === 'SI' ? 'X' : ''}__ No__${this.formulario.todoMiembrosAcuerdoNO === 'NO' ? 'X' : ''}__ `, style: 'question' },

                { text: ' \n3. Respuesta en caso de NO: ' + this.formulario.siesno },

                { text: `\n 4. El animalito viviría con: Conmigo y mi familia__${this.formulario.viviraConNosotros === 'A' ? 'X' : ''}__ Es obsequio para un conocido__${this.formulario.viviraConConocidos === 'B' ? 'X' : ''}__`, style: 'question' },

                { text: '\n 5. Como lo vas a considerar?: ', style: 'question' },
                { text: `Una compañía ___${this.formulario.considerarCompania === 'A' ? 'X' : ''}___Un guardián ___${this.formulario.considerarGuardian === 'B' ? 'X' : ''}___ Un miembro más de la familia ___${this.formulario.considerarMiembro === 'C' ? 'X' : ''}___ Un amigo___${this.formulario.considerarAmigo === 'D' ? 'X' : ''}___`, style: 'question' },


                { text: `\n 6. ¿Han tenido animales de compañía con anterioridad? Si __${this.formulario.animalesAnterioridadSI === 'SI' ? 'X' : ''}__ No__${this.formulario.animalesAnterioridadNO === 'NO' ? 'X' : ''}__ `, style: 'question' },

                { text: '\n 7. ¿Qué animal era? ', style: 'question' },
                { text: '\n' + this.formulario.animalPasado, },


                { text: '\n 8. ¿Cuánto tiempo vivió con ustedes? ', style: 'question' },
                { text: '\n' + this.formulario.tiempoPasado, },

                { text: '\n 9. ¿En dónde está ahora el animal? ¿Por qué? Falleció, Como?', style: 'question' },
                { text: '\n' + this.formulario.animalAhora, },

                { text: `\n 10. ¿Estaba vacunado? Si __${this.formulario.vacunadoSI === 'SI' ? 'X' : ''}__ No__${this.formulario.vacunadoNO === 'NO' ? 'X' : ''}__ `, style: 'question' },


                { text: '\n 11. ¿Qué vacunas se le aplicaron? y ¿Cada cuánto tiempo se vacunaba?', style: 'question' },
                { text: '\n' + this.formulario.vacunasAntes, },

                { text: `\n 12. ¿Estaba desparasitado? Si __${this.formulario.desparasitadoSI === 'SI' ? 'X' : ''}__ No__${this.formulario.desparasitadoNO === 'NO' ? 'X' : ''}__ `, style: 'question' },

                { text: '\n 13.¿Cada cuánto tiempo se desparasitaba?  ', style: 'question' },
                { text: '\n' + this.formulario.tiempoDesparasitado, },

                { text: '\n 14. ¿Cuántas horas del día permanecería solo?', style: 'question' },
                { text: '\n' + this.formulario.horasSolo, },

                { text: '\n 15. ¿En dónde estaría mientras no hubiera nadie en casa? ', style: 'question' },
                { text: '\n' + this.formulario.pasariaAnimal, },

                { text: '\n 15. ¿Hay alguien en su familia con problemas de alergias? ', style: 'question' },
                { text: '\n' + this.formulario.problemaAlergia, },

                { text: '\n 16. ¿Qué sucedería si alguien resultara alérgico al animal? ', style: 'question' },
                { text: '\n' + this.formulario.resultaAlergico, },

                { text: `\n 17. ¿Planea tener hijos? Si __${this.formulario.planeaHijosSI === 'SI' ? 'X' : ''}__ No__${this.formulario.planeaHijosNO === 'NO' ? 'X' : ''}__ `, style: 'question' },


                { text: '\n 18. ¿Qué sucedería si usted o en caso de ser hombre, su pareja quedara embarazada?', style: 'question' },
                { text: '\n' + this.formulario.embaraza, },

                { text: `\n 19. ¿Conoce los gastos que implica tener un perro o gato? Si __${this.formulario.planeaHijosSI === 'SI' ? 'X' : ''}__ No__${this.formulario.planeaHijosNO === 'NO' ? 'X' : ''}__ `, style: 'question' },

                { text: '\n 20. Con quien quedaría el animalito en caso de separación?', style: 'question' },
                { text: '\n' + this.formulario.pasariaAnimal, },

                { text: '\n VIVIENDA', style: 'subheader' },

                { text: `\n 21. Tu vivienda es: Casa_${this.formulario.tipoViviendaCasa === 'A' ? 'X' : ''}_ Departamento_${this.formulario.tipoViviendaDepartamento === 'B' ? 'X' : ''}_`, style: 'question' },
                { text: `Tu vivienda es: Propia__${this.formulario.viviendaPropia === 'A' ? 'X' : ''}_ Rentada _${this.formulario.viviendaRentada === 'B' ? 'X' : ''}_ Compartida _${this.formulario.viviendaCompartida === 'C' ? '' : ''}__`, style: 'question' },

                { text: `\n 22. ¿Tiene jardín o patio? Jardin_${this.formulario.jardin === 'A' ? 'X' : ''}_ Patio_${this.formulario.patio === 'B' ? 'X' : ''}_`, style: 'question' },

                { text: '\n 23. En que parte de tu casa va a vivir el animalito:', style: 'question' },
                {
                    text: `Jardín__${this.formulario.parteCasaJardin === 'A' ? 'X' : ''}__ Patio___${this.formulario.parteCasaPatio === 'B' ? 'X' : ''}__ Azotea__${this.formulario.parteCasaAzotea === 'C' ? 'X' : ''}__ Dentro de casa__${this.formulario.parteCasaDentro === 'D' ? 'X' : ''}__`, style: 'question'
                },

                { text: '\n 24. ¿En dónde dormiría? ', style: 'question' },
                {
                    text: `Jardín__${this.formulario.dormirParteJardin === 'A' ? 'X' : ''}__ Patio___${this.formulario.dormirPartePatio === 'B' ? 'X' : ''}__ Azotea__${this.formulario.dormirParteAzotea === 'C' ? 'X' : ''}__ Dentro de casa__${this.formulario.dormirParteDentro === 'D' ? 'X' : ''}__`, style: 'question'
                },

                { text: '\n 25.Si vive en departamento, ¿hay otros vecinos que tengan animales de compañía? ', style: 'question' },
                { text: '\n' + this.formulario.vecinosAnimales, },

                { text: `\n 26. En caso de renta o condominio cuentas con el permiso de tu casero o administración para poseer animales de compañía? Si __${this.formulario.permisoSI === 'SI' ? 'X' : ''}__ No__${this.formulario.permisoNO === 'NO' ? 'X' : ''}__ `, style: 'question' },

                { text: '\n 27. ¿Qué sucedería si tuviera que mudarse a otra casa o ciudad /país? ', style: 'question' },
                { text: '\n' + this.formulario.mudarseLugar, },

                { text: '\n 28. ¿Qué sucedería si al mudarse algún lugar donde no admiten perros o gatos o de tener algún problema familiar o económico? ', style: 'question' },
                { text: '\n' + this.formulario.mudarse, },

                { text: `\n 29. ¿Está dispuesto a que el perro o gato tenga un periodo de ajuste en el que aprenda dónde debe ir al baño y se adapte a la familia? Si __${this.formulario.dispuestoSI === 'SI' ? 'X' : ''}__ No__${this.formulario.dispuestoNO === 'NO' ? 'X' : ''}__ `, style: 'question' },

                { text: '\n 30. ¿Cómo te enteraste de nosotros?', style: 'question' },
                { text: '\n' + this.formulario.enterarse, },

                { text: '\n 31. otros comentarios.', style: 'question' },
                { text: '' + this.formulario.otrosComentarios, },


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
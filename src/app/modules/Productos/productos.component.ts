import { Component, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  sections: Array<{
    categoria: string;
    descripcion: string;
    productos: Array<{
      nombre: string;
      img: string;
    }>;
  }> = [
    {
      categoria: 'Kits de Uñas',
      descripcion:
        'Kits profesionales completos para uñas acrílicas, semipermanentes y polygel. Incluyen todos los insumos esenciales para iniciar o potenciar tu negocio de uñas.',
      productos: [
        {
          nombre: 'Kit Profesional de Uñas Acrílicas – 15 piezas',
          img: '../../../assets/imagenes/producto/kit1.jpg',
        },
        {
          nombre: 'Kit Esmaltado Semipermanente – Inicio',
          img: '../../../assets/imagenes/producto/kit2.jpg',
        },
        {
          nombre: 'Kit Polygel con Lámpara LED',
          img: '../../../assets/imagenes/producto/kit3.jpg',
        },
      ],
    },
    {
      categoria: 'Acrílicos',
      descripcion:
        'Polvos acrílicos para uñas con acabados naturales, cover, glitter y neón. Fáciles de esculpir y de alta adherencia.',
      productos: [
        {
          nombre: 'Acrílico Cover Rosa Claro 30g',
          img: '../../../assets/imagenes/producto/acrilico1.jpg',
        },
        {
          nombre: 'Acrílico Neón Naranja 30g',
          img: '../../../assets/imagenes/producto/acrilico2.jpg',
        },
      ],
    },
    {
      categoria: 'Pinceles Kolinsky',
      descripcion:
        'Pinceles Kolinsky profesionales para aplicación de acrílico y técnicas 3D. Precisión, durabilidad y control para resultados impecables.',
      productos: [
        {
          nombre: 'Pincel Kolinsky N° 8 – Mango de Madera',
          img: '../../../assets/imagenes/producto/pincel1.jpg',
        },
        {
          nombre: 'Pincel 3D para Acrílico – Cerdas Naturales',
          img: '../../../assets/imagenes/producto/pincel2.jpg',
        },
      ],
    },
    {
      categoria: 'Esmaltes en Gel',
      descripcion:
        'Esmaltes semipermanentes con fórmula de larga duración, alto brillo y colores en tendencia 2025. Ideal para manicura profesional.',
      productos: [
        {
          nombre: 'Gel Color Nude Elegante',
          img: '../../../assets/imagenes/producto/gel1.jpg',
        },
        {
          nombre: 'Gel Semipermanente Neón Fucsia',
          img: '../../../assets/imagenes/producto/gel2.jpg',
        },
      ],
    },
    {
      categoria: 'Decoraciones para Uñas',
      descripcion:
        'Decoraciones 3D, cristales, foil, stickers y efectos especiales para realzar cualquier diseño de uñas con estilo único.',
      productos: [
        {
          nombre: 'Cristales Swarovski AB – 50 unidades',
          img: '../../../assets/imagenes/producto/deco1.jpg',
        },
        {
          nombre: 'Foil Decorativo Holográfico',
          img: '../../../assets/imagenes/producto/deco2.jpg',
        },
      ],
    },
    {
      categoria: 'Tips y Moldes',
      descripcion:
        'Tips naturales, curvos y moldes reutilizables para extensión de uñas acrílicas y polygel. Flexibles y resistentes.',
      productos: [
        {
          nombre: 'Tips Naturales Full Cover – 500 unidades',
          img: '../../../assets/imagenes/producto/tips1.jpg',
        },
        {
          nombre: 'Moldes Reutilizables para Esculpido',
          img: '../../../assets/imagenes/producto/tips2.jpg',
        },
      ],
    },
    {
      categoria: 'Lámparas LED/UV',
      descripcion:
        'Lámparas LED/UV profesionales para secado de esmalte semipermanente y construcción con polygel o gel UV.',
      productos: [
        {
          nombre: 'Lámpara LED 48W – Display Digital',
          img: '../../../assets/imagenes/producto/lampara1.jpg',
        },
      ],
    },
  ];

  constructor(public publicService: PublicService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // setTimeout(() => this.publicService.stopInterval(), 2000);
  }
}

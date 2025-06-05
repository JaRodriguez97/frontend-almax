import { Component } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  sections: Array<{
    h1: string;
    h2: string;
    h3: string;
    p: string;
    active: boolean;
    page: string;
  }> = [
    {
      h1: 'ALMAX NAILS',
      h2: 'Eleva tu Estilo ',
      h3: '01. Revoluciona tus uñas',
      p: 'Descubre los insumos profesionales para uñas en Colombia que están marcando tendencia. ALMAX NAILS te ofrece las herramientas clave para crear diseños únicos y modernos. ¡Haz de tus uñas un arte con productos de calidad superior!',
      active: true,
      page: 'tendencias',
    },
    {
      h1: 'Insumos Exclusivos',
      h2: 'Calidad y Estilo a tu Alcance',
      h3: '02. Productos de alto impacto',
      p: 'Explora nuestra colección de productos exclusivos para uñas: desde polvos acrílicos hasta geles de última generación. Todo lo que necesitas para que tus creaciones luzcan espectaculares y resalten en cada ocasión.',
      active: false,
      page: 'productos',
    },
    {
      h1: 'Estilo Único',
      h2: 'Inspírate y Crea sin Límites tus diseños',
      h3: '03. Diseños que hablan',
      p: 'Déjate llevar por tu imaginación y sorprende con diseños para uñas que rompen esquemas. ALMAX NAILS te acompaña en cada paso para que tu creatividad no tenga límites y logres resultados extraordinarios.',
      active: false,
      page: 'inspiracion',
    },
    {
      h1: 'Uñas Perfectas',
      h2: 'De la idea a la realidad',
      h3: '04. Procesos impecables',
      p: 'Cada diseño es un proceso: desde la selección de insumos hasta la aplicación precisa. Con ALMAX NAILS, garantiza resultados impecables con nuestros kits profesionales y asesoría experta en cada paso del camino.',
      active: false,
      page: 'transformacion',
    },
    {
      h1: 'Reseñas Amorosas',
      h2: 'Lo que dicen de ALMAX NAILS',
      h3: '05. Voces que inspiran',
      p: 'Conoce la experiencia de quienes ya transformaron sus diseños con nuestros productos. Opiniones reales de artistas de uñas que confían en ALMAX NAILS para llevar su creatividad al siguiente nivel.',
      active: false,
      page: 'testimonios',
    },
    {
      h1: 'Conecta Ideas',
      h2: 'Aprende y Evoluciona',
      h3: '06. Juntos marcamos la diferencia',
      p: 'Sé parte de una comunidad apasionada por las uñas en Colombia. Comparte tus creaciones, aprende de los mejores y mantente siempre a la vanguardia. ALMAX NAILS impulsa tu talento y te conecta con oportunidades únicas.',
      active: false,
      page: 'comunidad',
    },
  ];

  constructor(public publicService: PublicService) {
    console.log(this.sections.length);
  }

  prevBtn() {
    let indexSection = this.sections.findIndex((s) => s.active),
      numberOfSlides = this.sections.length;

    this.sections[indexSection].active = false;

    if (indexSection == 0) this.sections[numberOfSlides - 1].active = true;
    else this.sections[indexSection - 1].active = true;
  }

  nextBtn() {
    let indexSection = this.sections.findIndex((s) => s.active),
      numberOfSlides = this.sections.length;

    this.sections[indexSection].active = false;

    if (indexSection == numberOfSlides - 1) this.sections[0].active = true;
    else this.sections[indexSection + 1].active = true;
  }
}

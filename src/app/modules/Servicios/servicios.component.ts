import { PublicService } from '@app/services/Public/public.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  faPlay,
  faStar,
  faQuoteLeft,
  faHeart,
  faCrown,
  faTrophy,
  faGem,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface TestimonialData {
  clientName: string;
  location: string;
  videoUrl?: string;
  thumbnail?: string;
  clientImage: string;
  text: string;
  rating: number;
  type: 'video' | 'image' | 'text';
  image?: string;
  tags?: string[];
  profession?: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit, OnDestroy {
  private animationFrameId: number | null = null;

  // Icons
  faPlay = faPlay;
  faStar = faStar;
  faQuoteLeft = faQuoteLeft;
  faWhatsapp = faWhatsapp;
  faHeart = faHeart;
  faCrown = faCrown;
  faTrophy = faTrophy;
  faGem = faGem;

  // Testimonio destacado principal
  featuredTestimonial: TestimonialData = {
    clientName: 'Daniela',
    location: 'Medellin, Colombia',
    videoUrl: '../../../assets/videos/testimonio1.mp4',
    thumbnail: 'assets/images/testimonials/isabella-featured-thumb.jpg',
    clientImage: 'assets/images/clients/isabella-avatar.jpg',
    text: 'ALMAX NAILS transformó completamente mi negocio. En 6 meses mis ingresos se triplicaron y ahora tengo una clientela fija de más de 200 personas. La calidad de los productos es excepcional y mis clientas siempre salen fascinadas.',
    rating: 5,
    type: 'video',
  };

  // Testimonio de texto destacado
  highlightedTestimonial: TestimonialData = {
    clientName: 'María Fernanda Gómez',
    location: 'Medellín, Colombia',
    clientImage: 'assets/images/clients/maria-avatar.jpg',
    text: 'Después de 15 años como nail artist, puedo decir que ALMAX NAILS es la mejor inversión que he hecho. La durabilidad y acabado es incomparable.',
    rating: 5,
    type: 'text',
    profession: 'Nail Artist Profesional',
  };

  // Antes y después
  beforeAfter = {
    before: 'assets/images/before-after/before-nails.jpg',
    after: 'assets/images/before-after/after-nails.jpg',
    description: 'Transformación completa con técnicas ALMAX NAILS',
  };

  // Testimonios regulares
  regularTestimonials: TestimonialData[] = [
    {
      clientName: 'Ana Rodríguez',
      location: 'Cali, Colombia',
      videoUrl: 'assets/videos/testimonial-ana.mp4',
      thumbnail: 'assets/images/testimonials/ana-thumb.jpg',
      clientImage: 'assets/images/clients/ana-avatar.jpg',
      text: 'Los productos son increíbles. Mis clientas me preguntan constantemente qué uso porque el acabado es perfecto.',
      rating: 5,
      type: 'video',
      tags: ['Calidad', 'Profesional'],
    },
    {
      clientName: 'Carmen López',
      location: 'Barranquilla, Colombia',
      clientImage: 'assets/images/clients/carmen-avatar.jpg',
      image: 'assets/images/testimonials/carmen-work.jpg',
      text: 'Mi negocio creció 300% en un año. ALMAX NAILS me dio la confianza para cobrar más y ofrecer mejor calidad.',
      rating: 5,
      type: 'image',
      tags: ['Negocio', 'Crecimiento'],
    },
    {
      clientName: 'Sofía Martínez',
      location: 'Medellín, Colombia',
      videoUrl: 'assets/videos/testimonial-sofia.mp4',
      thumbnail: 'assets/images/testimonials/sofia-thumb.jpg',
      clientImage: 'assets/images/clients/sofia-avatar.jpg',
      text: 'La durabilidad es impresionante. Mis uñas lucen perfectas por semanas, sin descascararse ni perder brillo.',
      rating: 5,
      type: 'video',
      tags: ['Durabilidad', 'Brillo'],
    },
    {
      clientName: 'Valentina Herrera',
      location: 'Pereira, Colombia',
      clientImage: 'assets/images/clients/valentina-avatar.jpg',
      image: 'assets/images/testimonials/valentina-nails.jpg',
      text: 'Como instructora de belleza, recomiendo ALMAX NAILS a todas mis estudiantes. Es sinónimo de excelencia.',
      rating: 5,
      type: 'image',
      tags: ['Educación', 'Recomendación'],
    },
    {
      clientName: 'Camila Vásquez',
      location: 'Bogotá, Colombia',
      videoUrl: 'assets/videos/testimonial-camila.mp4',
      thumbnail: 'assets/images/testimonials/camila-thumb.jpg',
      clientImage: 'assets/images/clients/camila-avatar.jpg',
      text: 'Abrí mi segundo salón gracias a los resultados con ALMAX NAILS. Mis clientas están encantadas.',
      rating: 5,
      type: 'video',
      tags: ['Expansión', 'Éxito'],
    },
  ];

  // Estadísticas detalladas
  detailedStats = [
    {
      icon: faHeart,
      value: '98%',
      label: 'Satisfacción',
    },
    {
      icon: faCrown,
      value: '500+',
      label: 'Clientas',
    },
    {
      icon: faTrophy,
      value: '15',
      label: 'Premios',
    },
    {
      icon: faGem,
      value: '5⭐',
      label: 'Calificación',
    },
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public publicService: PublicService
  ) {}

  ngOnInit(): void {
    this.detectScroll();
    this.initAOS();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null)
      cancelAnimationFrame(this.animationFrameId);
  }

  initAOS(): void {
    if (this.publicService.isBrowser) {
      // Simulación de AOS (Animate On Scroll)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      });

      // Observar todos los elementos con data-aos
      setTimeout(() => {
        const elements = this.document.querySelectorAll('[data-aos]');
        elements.forEach((el) => observer.observe(el));
      }, 100);
    }
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  onVideoLoadStart(event: Event): void {
    const video = event.target as HTMLVideoElement;
    video.classList.add('loading');
  }

  onVideoCanPlay(event: Event): void {
    const video = event.target as HTMLVideoElement;
    video.classList.remove('loading');
    video.classList.add('loaded');
  }

  detectScroll() {
    let testimonios = this.document.querySelector('.testimonios');

    testimonios?.addEventListener('scroll', () => {
      let scrollPos = testimonios?.scrollTop!;
      this.publicService.sticky = scrollPos > 50;
    });
  }
}

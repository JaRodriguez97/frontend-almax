import { PublicService } from '@app/services/Public/public.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit, OnDestroy {
  private animationFrameId: number | null = null;
  faPlay = faPlay;
  
  public testimonios: Array<{
    clientName: string;
    location: string;
    videoUrl: string;
    thumbnail: string;
    previewText: string;
    isPlaying: boolean;
  }> = [
    {
      clientName: 'María González',
      location: 'Bogotá, Colombia',
      videoUrl: 'assets/videos/testimonial-maria.mp4',
      thumbnail: 'assets/images/testimonials/maria-thumbnail.jpg',
      previewText: 'ALMAX NAILS cambió completamente mi técnica de uñas. Ahora mis clientas quedan fascinadas con los resultados.',
      isPlaying: false
    },
    {
      clientName: 'Ana Rodríguez',
      location: 'Medellín, Colombia',
      videoUrl: 'assets/videos/testimonial-ana.mp4',
      thumbnail: 'assets/images/testimonials/ana-thumbnail.jpg',
      previewText: 'Los productos son increíbles, la calidad es superior a todo lo que había usado antes.',
      isPlaying: false
    },
    {
      clientName: 'Sofía Martínez',
      location: 'Cali, Colombia',
      videoUrl: 'assets/videos/testimonial-sofia.mp4',
      thumbnail: 'assets/images/testimonials/sofia-thumbnail.jpg',
      previewText: 'Mis uñas lucen profesionales y duraderas. Definitivamente recomiendo ALMAX NAILS.',
      isPlaying: false
    },
    {
      clientName: 'Carmen López',
      location: 'Barranquilla, Colombia',
      videoUrl: 'assets/videos/testimonial-carmen.mp4',
      thumbnail: 'assets/images/testimonials/carmen-thumbnail.jpg',
      previewText: 'La diferencia es notoria desde el primer uso. Calidad y elegancia en cada aplicación.',
      isPlaying: false
    },
    {
      clientName: 'Isabella Torres',
      location: 'Bucaramanga, Colombia',
      videoUrl: 'assets/videos/testimonial-isabella.mp4',
      thumbnail: 'assets/images/testimonials/isabella-thumbnail.jpg',
      previewText: 'Como nail artist profesional, puedo decir que ALMAX NAILS es la mejor opción del mercado.',
      isPlaying: false
    },
    {
      clientName: 'Valentina Herrera',
      location: 'Pereira, Colombia',
      videoUrl: 'assets/videos/testimonial-valentina.mp4',
      thumbnail: 'assets/images/testimonials/valentina-thumbnail.jpg',
      previewText: 'Mis clientas siempre me preguntan qué productos uso. La respuesta siempre es ALMAX NAILS.',
      isPlaying: false
    }
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public publicService: PublicService
  ) {}

  ngOnInit(): void {
    this.roundParticles();

    this.delayAnimation();

    this.detectScroll();
  }

  delayAnimation() {
    if (this.publicService.isBrowser) {
      this.animationFrameId = requestAnimationFrame(() => {
        setTimeout(() => {
          this.roundParticles();
          this.delayAnimation();
        }, 10000);
      });
    }
  }

  detectScroll() {
    let testimonios = this.document.querySelector('.testimonios');

    testimonios?.addEventListener('scroll', () => {
      let scrollPos = testimonios?.scrollTop!;

      this.publicService.sticky = scrollPos > 50;
    });
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null)
      cancelAnimationFrame(this.animationFrameId);
  }

  roundParticles() {
    if (this.publicService.isBrowser) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let i = 0; i < 50; i++) {
        let particles = this.document.createElement('i');
        let section = this.document.getElementById('lab');

        let randomX = (Math.random() - 0.5) * width;
        let randomY = (Math.random() - 0.5) * height;

        let randomSize = Math.random() * 60 + 10;

        let duration = Math.random() * 10 + 5;

        let deg = Math.random() * 360 + 1;

        particles.style.setProperty('--x', randomX + 'px');
        particles.style.setProperty('--y', randomY + 'px');

        particles.style.width = randomSize + 'px';
        particles.style.height = randomSize + 'px';

        particles.style.animation = `animate ${duration}s ease forwards`;

        particles.style.background = `linear-gradient(${deg}deg, #f00, var(--colorPrincipal))`;

        particles.classList.add('particles');

        section!.appendChild(particles);

        setTimeout(() => particles.remove(), 11000);
      }
    }
  }
}

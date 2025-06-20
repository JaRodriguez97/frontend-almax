import { PublicService } from '@app/services/Public/public.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.css'],
})
export class TendenciasComponent implements OnInit, OnDestroy {
  private animationFrameId: number | null = null;
  public tendencias: Array<{
    src: string;
    alt: string;
    title: string;
    titulo: string;
  }> = [
    {
      src: 'https://cdn.pixabay.com/photo/2022/08/03/11/56/nail-polish-7362587_1280.jpg',
      alt: 'Esmaltes en gel colores tendencia para uñas 2025',
      title: 'Esmaltes en gel tonos pastel y neón, tendencia 2025',
      titulo: 'ESMALTES EN GEL',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2021/06/21/13/10/nails-6351965_1280.jpg',
      alt: 'Polvo acrílico para uñas profesionales',
      title: 'Polvo acrílico de alta adherencia para uñas esculpidas',
      titulo: 'ACRÍLICOS',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2021/03/09/13/50/nail-polish-6080964_1280.jpg',
      alt: 'Pinceles Kolinsky profesionales para diseño de uñas',
      title: 'Pinceles Kolinsky para acrílico y decoración de precisión',
      titulo: 'PINCELERÍA',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2020/08/14/20/58/nails-5489679_1280.jpg',
      alt: 'Tips para uñas postizas de alta resistencia',
      title: 'Tips curvos y naturales para aplicación profesional de uñas',
      titulo: 'TIPS',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2017/03/17/04/50/nails-2152091_1280.jpg',
      alt: 'Decoraciones 3D para uñas con glitter y piedras',
      title: 'Decoraciones 3D, cristales y efectos espejo para uñas',
      titulo: 'DECORACIONES',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2018/03/25/13/57/nail-3260193_1280.jpg',
      alt: 'Limas profesionales y bloques pulidores para manicura',
      title: 'Limas, bloques y herramientas básicas para manicura profesional',
      titulo: 'HERRAMIENTAS',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2018/03/03/09/27/nail-polish-3194972_1280.jpg',
      alt: 'Gel UV para construcción de uñas con molde',
      title: 'Geles UV y LED para esculpido de uñas y encapsulado',
      titulo: 'GELES UV',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2018/05/06/14/29/nail-art-3377792_1280.jpg',
      alt: 'Stickers y foil para diseño de uñas artísticas',
      title: 'Stickers, foil y papel transfer para arte en uñas',
      titulo: 'STICKERS Y FOIL',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2020/11/01/14/29/ultraviolet-5704702_1280.jpg',
      alt: 'Lámparas LED para secado rápido de esmalte en gel',
      title: 'Lámparas LED/UV profesionales para salones de uñas',
      titulo: 'LÁMPARAS LED',
    },
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
        }, 30000);
      });
    }
  }

  detectScroll() {
    let tendencias = this.document.querySelector('.tendencias');

    tendencias?.addEventListener('scroll', () => {
      let scrollPos = tendencias?.scrollTop!;

      this.publicService.sticky = scrollPos > 50;
    });
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null)
      cancelAnimationFrame(this.animationFrameId);
  }

  roundParticles() {
    for (let i = 0; i < 50; i++) {
      let particles = this.document.createElement('i');
      let section = this.document.getElementById('lab');

      let randomX = (Math.random() - 0.5) * innerWidth;
      let randomY = (Math.random() - 0.5) * innerHeight;

      let randomSize = Math.random() * 60 + 10;

      let duration = Math.random() * 30 + 5;

      let deg = Math.random() * 360 + 1;

      particles.style.setProperty('--x', randomX + 'px');
      particles.style.setProperty('--y', randomY + 'px');

      particles.style.width = randomSize + 'px';
      particles.style.height = randomSize + 'px';

      particles.style.animation = `animate ${duration}s ease forwards`;

      particles.style.background = `linear-gradient(${deg}deg, #f00, var(--colorPrincipal))`;

      particles.classList.add('particles');

      section!.appendChild(particles);

      setTimeout(() => particles.remove(), 33000);
    }
  }
}

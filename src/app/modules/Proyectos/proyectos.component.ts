import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { PublicService } from '@app/services/Public/public.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit, OnDestroy {
  public articles: Array<{
    h2: string;
    img: string;
    p: string;
  }> = [
    {
      h2: 'Proyecto #1',
      img: 'background-image: url(https://img.freepik.com/foto-gratis/mapa-mesa-madera_53876-105723.jpg)',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est voluptas rem tenetur consequatur cum  ducimus temporibus! Quasi corporis minus mollitia? Accusamus odit eos autem ipsum distinctio provident! Voluptates?',
    },
    {
      h2: 'Proyecto #2',
      img: 'background-image: url(https://img.freepik.com/foto-gratis/vista-superior-equipo-creativo-discutiendo-graficos-negocios-dibujados-rotuladores_1098-18798.jpg)',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est voluptas rem tenetur consequatur cum  ducimus temporibus! Quasi corporis minus mollitia? Accusamus odit eos autem ipsum distinctio provident! Voluptates?',
    },
    {
      h2: 'Proyecto #3',
      img: 'background-image: url(https://img.freepik.com/foto-gratis/concepto-marketing-redes-sociales-marketing-aplicaciones_23-2150063164.jpg?t=st=1717104710~exp=1717108310~hmac=37bf3b542ac66c48172beed13bb3c764049663e445684313529f149cd66d8041&w=740)',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est voluptas rem tenetur consequatur cum  ducimus temporibus! Quasi corporis minus mollitia? Accusamus odit eos autem ipsum distinctio provident! Voluptates?',
    },
    {
      h2: 'Proyecto #4',
      img: 'background-image: url(https://img.freepik.com/foto-gratis/manos-sosteniendo-concepto-redes-sociales-telefonos-inteligentes_23-2150208238.jpg?t=st=1717106555~exp=1717110155~hmac=ce8744fee80d41b52d979bad16e97f9f64ed3bcb4fbe23e359da2db399afbbc9&w=360)',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est voluptas rem tenetur consequatur cum  ducimus temporibus! Quasi corporis minus mollitia? Accusamus odit eos autem ipsum distinctio provident! Voluptates?',
    },
    {
      h2: 'Proyecto #5',
      img: 'background-image: url(https://img.freepik.com/foto-gratis/cerrar-mano-sosteniendo-smartphone_23-2149151162.jpg?t=st=1717104857~exp=1717108457~hmac=f18fa4056ee9dfac2c5727940dbfde19a9269b7dbdcbf5967327f50a94cdb5d3&w=740)',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est voluptas rem tenetur consequatur cum  ducimus temporibus! Quasi corporis minus mollitia? Accusamus odit eos autem ipsum distinctio provident! Voluptates?',
    },
    {
      h2: 'Proyecto #6',
      img: 'background-image: url(https://img.freepik.com/foto-gratis/vista-superior-gerente-empleado-que-trabajan-equipo-oficina-negocios-mirando-graficos-pantalla-computadora-portatil_482257-2443.jpg?t=st=1717104851~exp=1717108451~hmac=af077f03a0cbab7f1b2b0104f52cd937a6dd25994f6f207d017f3d127301fc2a&w=740)',
      p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est voluptas rem tenetur consequatur cum  ducimus temporibus! Quasi corporis minus mollitia? Accusamus odit eos autem ipsum distinctio provident! Voluptates?',
    },
  ];
  private sectionElement: HTMLElement | null = null;

  constructor(
    public publicService: PublicService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.sectionElement = this.document.querySelector('.section');
    this.sectionElement?.addEventListener('scroll', this.onSectionScroll);
  }

  ngOnDestroy(): void {
    this.sectionElement?.removeEventListener('scroll', this.onSectionScroll);
  }

  onSectionScroll = (): void => {
    const scrollPos = this.sectionElement?.scrollTop || 0;

    this.applyParallaxEffect(scrollPos);
  };

  applyParallaxEffect(scrollPos: number): void {
    this.publicService.sticky = scrollPos > 50;

    // Efecto de paralaje para h2
    let num = 200;
    const h2Element = this.sectionElement?.querySelectorAll(
      'h2'
    ) as NodeListOf<HTMLElement>;

    h2Element.forEach((h, i) => {
      let multIN =
        i *
        (innerHeight -
          (innerHeight * (this.publicService.isMobile ? 50 : 60)) / 100);
      let multOUT = i + 1;
      let margin =
        num -
        (scrollPos - innerHeight * (i / 10)) /
          (i + 1) /
          (this.publicService.isMobile ? 2 : 1);

      if (h && scrollPos > multIN && scrollPos < multOUT * innerHeight) {
        if (i % 2 == 0) h.style.marginLeft = `${margin}px`;
        else h.style.marginRight = `${margin}px`;
      }
    });

    // Efecto de paralaje para div.content
    const contentOffset = scrollPos * 0.4;
    const contentElement = this.sectionElement?.querySelectorAll(
      '.content'
    ) as NodeListOf<HTMLElement>;

    contentElement.forEach((c, i) => {
      let multIN = i * (innerHeight - (innerHeight * 60) / 100);
      let multOUT = i + 1;

      if (c && contentOffset > multIN && contentOffset < multOUT * innerHeight)
        c.style.top = `${contentOffset - multIN}px`;
    });
  }
}

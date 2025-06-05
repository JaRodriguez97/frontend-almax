import { AfterViewInit, Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { PublicService } from '@services/Public/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'front-almax';

  faBars = faBars;

  constructor(public publicService: PublicService) {
    this.publicService.load = true;
    this.publicService.headerLoad = false;
  }

  ngOnInit(): void {
    this.publicService.headerLoad = false;
  }

  ngAfterViewInit() {
    this.publicService.headerLoad = false;
    setTimeout(() => {
      this.publicService.medium_load = true;
      this.publicService.headerLoad = true;

      setTimeout(() => {
        this.publicService.load = false;
      }, 600);
    }, 500);
  }

  toogleMenu() {
    if (this.publicService.sticky)
      this.publicService.sticky = !this.publicService.sticky;

    setTimeout(() => (this.publicService.menu = !this.publicService.menu), 300);
  }

  imgLogoLoaded() {
    this.publicService.imgLogoLoaded = true;
  }
}

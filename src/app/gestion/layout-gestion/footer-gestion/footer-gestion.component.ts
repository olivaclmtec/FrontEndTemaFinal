import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from 'src/@fury/services/theme.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer-gestion.component.html',
  styleUrls: ['./footer-gestion.component.scss']
})
export class FooterGestionComponent implements OnInit, OnDestroy {

  visible$ = this.themeService.config$.pipe(map(config => config.footerVisible));

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
  }

  hide() {
    this.themeService.setFooterVisible(false);
  }

  ngOnDestroy(): void {}
}

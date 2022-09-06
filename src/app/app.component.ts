import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Compara', url: 'comparar', icon: 'storefront' },
    { title: 'Listas', url: 'listas', icon: 'bookmark' },
    { title: 'Ofertas', url: 'ofertas', icon: 'pricetags' },
    { title: 'Mapa', url: 'mapa', icon: 'map' },
    { title: 'Iniciar Sesión', url: 'login', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

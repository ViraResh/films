import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: object[] = [
    { path: '/', label: 'Головна', active: 'button-active', icon: 'home'},
    { path: '/films', label: 'Фільми', active: 'button-active', icon: 'list_alt'},
    { path: '/actors', label: 'Актори', active: 'button-active', icon: 'list_alt'}
  ];

}

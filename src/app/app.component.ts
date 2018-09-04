import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: object[] = [
    { path: '/main', label: 'Головна', active: 'button-active', icon: 'home'},
    { path: '/films', label: 'Всі фільми', active: 'button-active', icon: 'list_alt'}
  ];

}

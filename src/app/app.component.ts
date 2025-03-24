import { Component } from '@angular/core';
import { CardsListComponent } from './components/cards-list/cards-list.component';

@Component({
  selector: 'app-root',
  imports: [CardsListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-quality';
}

import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GamesGridComponent } from '../../components/games-grid/games-grid.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, GamesGridComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}

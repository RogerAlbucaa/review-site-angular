import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Game } from '../../../../core/interfaces/game.interface';
import { GamesService } from '../../../../core/services/games.service';

@Component({
  selector: 'app-games-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './games-grid.component.html',
  styleUrls: ['./games-grid.component.scss']
})
export class GamesGridComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }
}

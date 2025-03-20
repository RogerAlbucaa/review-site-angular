import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Game } from '../../../../core/interfaces/game.interface';
import { GamesService } from '../../../../core/services/games.service';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="game-details">
      <header class="header">
        <nav class="container">
          <a routerLink="/" class="back-button">← Voltar para a lista</a>
        </nav>
      </header>
      
      @if (game) {
        <main class="container game-content">
          <div class="cover-image">
            <img [src]="game.coverImageUrl || game.imageUrl" [alt]="game.title" class="game-cover">
            <button class="favorite-btn" (click)="toggleFavorite()">
              <span class="material-icons">
                {{game.isFavorite ? 'favorite' : 'favorite_border'}}
              </span>
            </button>
          </div>
          <div class="game-info">
            <h1>{{game.title}}</h1>
            <div class="meta">
              <span class="metacritic">Metacritic: {{game.metacritic}}</span>
              <span class="developer">{{game.developer}}</span>
              <span class="release">{{game.releaseDate}}</span>
            </div>
            
            <div class="tags">
              @for (genre of game.genre; track genre) {
                <span class="tag">{{genre}}</span>
              }
            </div>
            
            <p class="description">{{game.description}}</p>
            
            <div class="platforms">
              <h3>Disponível em:</h3>
              <div class="platform-list">
                @for (platform of game.platforms; track platform) {
                  <span class="platform">{{platform}}</span>
                }
              </div>
            </div>
          </div>
        </main>
      } @else {
        <div class="container error-message">
          <h2>Jogo não encontrado</h2>
          <a routerLink="/" class="back-link">Voltar para a lista de jogos</a>
        </div>
      }
    </div>
  `,
  styles: [`
    .game-details {
      min-height: 100vh;
      background: var(--ds-dark);
    }
    .header {
      background: rgba(0,0,0,0.5);
      padding: 1rem;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .back-button {
      color: var(--ds-text);
      text-decoration: none;
      font-size: 1.1rem;
      &:hover {
        color: var(--ds-gold);
      }
    }
    .game-header {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 2rem;
      margin-top: 2rem;
    }
    .image-container {
      position: relative;
      
      .game-cover {
        width: 100%;
        border-radius: 8px;
      }
      
      .rating-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: var(--ds-gold);
        color: var(--ds-dark);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-weight: bold;
      }
    }
    .game-info {
      color: var(--ds-text);
      
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      .meta {
        display: flex;
        gap: 2rem;
        margin: 1rem 0;
        color: #888;
      }
      
      .tags {
        display: flex;
        gap: 0.5rem;
        margin: 1rem 0;
        
        .tag {
          background: rgba(255,255,255,0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.9rem;
        }
      }
      
      .description {
        font-size: 1.1rem;
        line-height: 1.6;
        margin: 2rem 0;
      }
      
      .platforms {
        margin-top: 2rem;
        
        h3 {
          color: var(--ds-gold);
          margin-bottom: 1rem;
        }
        
        .platform-list {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          
          .platform {
            background: rgba(255,255,255,0.1);
            padding: 0.5rem 1rem;
            border-radius: 4px;
          }
        }
      }
    }
    .error-message {
      text-align: center;
      padding: 4rem 0;
      
      h2 {
        margin-bottom: 1rem;
      }
      
      .back-link {
        color: var(--ds-gold);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .game-content {
      display: flex;
      gap: 3rem;
      align-items: start;
      padding-top: 3rem;
    }

    .cover-image {
      flex: 0 0 400px;
      position: relative;
      margin-bottom: 2rem; // Adicionado margin para dar espaço ao botão
      
      img {
        width: 100%;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
      }
    }

    .favorite-btn {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -25px; // Ajustado para -25px
      background: var(--ds-dark);
      border: 2px solid var(--ds-gold); // Adicionada borda
      color: var(--ds-gold);
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      transition: all 0.2s; // Alterado para all

      &:hover {
        transform: translateX(-50%) scale(1.1);
        background: var(--ds-gold);
        color: var(--ds-dark);
      }

      .material-icons {
        font-size: 2rem;
      }
    }
  `]
})
export class GameDetailsComponent implements OnInit {
  gameId: number = 0;
  game: Game | undefined;  // Alterado de Game | null para Game | undefined

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.game = this.gamesService.getGameById(id);
  }

  toggleFavorite(): void {
    if (this.game) {
      this.gamesService.toggleFavorite(this.game.id);
    }
  }
}

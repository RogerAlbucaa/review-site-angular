import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private games: Game[] = [
    {
      id: 1,
      title: "Dark Souls Remastered",
      releaseDate: "2018",
      description: "Dark Souls Remastered includes the main game plus the Artorias of the Abyss DLC. Re-experience the critically acclaimed genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning detail.",
      rating: 9.0,
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/570940/header.jpg",
      coverImageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/570940/library_600x900.jpg",
      metacritic: 89,
      platforms: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
      developer: "FromSoftware",
      genre: ["Action RPG", "Dark Fantasy"]
    },
    {
      id: 2,
      title: "Dark Souls II: Scholar of the First Sin",
      releaseDate: "2015",
      description: "Dark Souls II: Scholar of the First Sin brings the franchise's renowned difficulty & gripping gameplay to a new level. Join the dark journey and experience overwhelming enemy encounters, diabolical hazards, and unrelenting challenges.",
      rating: 8.5,
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/335300/header.jpg",
      coverImageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/335300/library_600x900.jpg",
      metacritic: 87,
      platforms: ["PC", "PS4", "Xbox One"],
      developer: "FromSoftware",
      genre: ["Action RPG", "Dark Fantasy"]
    },
    {
      id: 3,
      title: "Dark Souls III",
      releaseDate: "2016",
      description: "Dark Souls III continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments.",
      rating: 9.5,
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg",
      coverImageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/library_600x900.jpg",
      metacritic: 89,
      platforms: ["PC", "PS4", "Xbox One"],
      developer: "FromSoftware",
      genre: ["Action RPG", "Dark Fantasy"]
    },
    {
      id: 4,
      title: "Elden Ring",
      releaseDate: "2022",
      description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
      rating: 9.8,
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      coverImageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg",
      metacritic: 96,
      platforms: ["PC", "PS5", "PS4", "Xbox Series X|S", "Xbox One"],
      developer: "FromSoftware",
      genre: ["Action RPG", "Open World", "Dark Fantasy"]
    },
    {
      id: 5,
      title: "Bloodborne",
      releaseDate: "2015",
      description: "Hunt your nightmares as you search for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like wildfire. Danger, death and madness lurk around every corner of this dark and horrific world.",
      rating: 9.4,
      imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/NVmnBXze9ElHzU6SmykrJLIV.png",
      coverImageUrl: "https://upload.wikimedia.org/wikipedia/pt/2/29/Bloodborne_capa.png", // Nova imagem vertical oficial do Bloodborne
      metacritic: 92,
      platforms: ["PS4"],
      developer: "FromSoftware",
      genre: ["Action RPG", "Gothic Horror"]
    },
    {
      id: 6,
      title: "Sekiro: Shadows Die Twice",
      releaseDate: "2019",
      description: "Carve your own clever path to vengeance in an all-new adventure from developer FromSoftware. Take Revenge. Restore your honor. Kill Ingeniously.",
      rating: 9.2,
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg",
      coverImageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_600x900.jpg",
      metacritic: 90,
      platforms: ["PC", "PS4", "Xbox One"],
      developer: "FromSoftware",
      genre: ["Action Adventure", "Ninja"]
    }
  ];

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites(): void {
    const favoritesStr = localStorage.getItem('favorites');
    if (favoritesStr) {
      const favorites = JSON.parse(favoritesStr);
      this.games = this.games.map(game => ({
        ...game,
        isFavorite: favorites.includes(game.id)
      }));
    }
  }

  toggleFavorite(id: number): void {
    const game = this.games.find(g => g.id === id);
    if (game) {
      game.isFavorite = !game.isFavorite;
      const favorites = this.games
        .filter(g => g.isFavorite)
        .map(g => g.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  getGames(): Game[] {
    return this.games;
  }

  getGameById(id: number): Game | undefined {
    return this.games.find(game => game.id === id);
  }
}

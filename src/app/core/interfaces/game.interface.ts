export interface Game {
  id: number;
  title: string;
  releaseDate: string;
  description: string;
  rating: number;
  imageUrl: string;
  coverImageUrl?: string; // Tornando opcional com ?
  metacritic: number;
  platforms: string[];
  developer: string;
  genre: string[];
  isFavorite?: boolean;
}

import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'game/:id',
        loadComponent: () => import('./modules/portfolio/pages/game-details/game-details.component')
            .then(m => m.GameDetailsComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

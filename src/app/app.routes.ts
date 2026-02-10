import { Routes } from '@angular/router';
import { Flashcard } from './components/flashcard/flashcard';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Flashcard },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
];


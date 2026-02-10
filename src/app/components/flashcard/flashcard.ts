import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from "@angular/material/icon";
import { FlashcardService } from '../../services';

@Component({
  selector: 'app-flashcard',
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.scss',
})
export class Flashcard {
  private flashcardService = inject(FlashcardService);

  public get currentEntry() {
    return this.flashcardService.currentEntry;
  }

  public moveToNextEntry(): void {
    this.flashcardService.moveToNextEntry();
  }

  public moveToPreviousEntry(): void {
    this.flashcardService.moveToPreviousEntry();
  }
}

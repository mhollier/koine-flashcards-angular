import { inject, Injectable } from '@angular/core';
import { KoineDictionaryService } from './koine-dictionary';
import { KoineEntryWithKey } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  private koineDictionaryService = inject(KoineDictionaryService);

  private _currentEntryIndex: number = -1;
  public get currentEntryIndex(): number {
    return this._currentEntryIndex;
  }

  constructor() {
    this.startNewDeck();
  }

  private currentDeck: ReadonlyArray<KoineEntryWithKey> = [];

  public startNewDeck(): void {
    const deck: KoineEntryWithKey[] = this.koineDictionaryService.entries.slice(0, 150);
    this.currentDeck = this.shuffleArray(deck);
    this._currentEntryIndex = 0;
  }

  public get currentEntry(): KoineEntryWithKey | null {
    if (this._currentEntryIndex < 0 || this._currentEntryIndex >= this.currentDeck.length) {
      return null;
    }
    return this.currentDeck[this._currentEntryIndex];
  } 
  
  public moveToNextEntry(): void {
    if (this._currentEntryIndex < this.currentDeck.length - 1) {
      this._currentEntryIndex++;
    } 
  }

  public moveToPreviousEntry(): void {
    if (this._currentEntryIndex > 0) {
      this._currentEntryIndex--;
    }
  }

  shuffleArray(deck: KoineEntryWithKey[]): readonly KoineEntryWithKey[] {
     let shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

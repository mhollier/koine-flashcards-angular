import { Injectable } from '@angular/core';
import { KoineEntry, KoineEntryWithKey, MounceKoineDictionarySortedJson } from '../types';

@Injectable({
  providedIn: 'root',
})
export class KoineDictionaryService {
  private readonly _entries: ReadonlyArray<KoineEntryWithKey>;
  public get entries(): ReadonlyArray<KoineEntryWithKey> {
    return this._entries;
  }

  constructor() {
    const recordSet = this.parse(MounceKoineDictionarySortedJson);
    this._entries = Object.entries(recordSet).map(([key, value]) => ({ key, ...value }));
  }

  public getRandomEntry(): KoineEntryWithKey {
    const randomIndex = Math.floor(Math.random() * this._entries.length);
    return this._entries[randomIndex];
  }

  public getRandomEntryTop(count: number): KoineEntryWithKey {
    const randomIndex = Math.floor(Math.random() * count);
    return this._entries[randomIndex];
  }

  private parse(json: string): Record<string, KoineEntry> {
    try {
      const obj = JSON.parse(json) as unknown;
      if (!obj || typeof obj !== 'object') {
        throw new Error('Dictionary JSON is not an object.');
      }

      return obj as Record<string, KoineEntry>;
    } catch (err) {
      // Fail loudly during dev; you can swap to a safe empty dict in prod if you prefer.
      console.error('Failed to parse MounceKoineDictionaryJson:', err);
      throw err;
    }
  }
}

import { TestBed } from '@angular/core/testing';

import { KoineDictionaryService } from './koine-dictionary';

describe('KoineDictionaryService', () => {
  let service: KoineDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoineDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.entries.length).toEqual(5362);
  });

  it('should sort entries by frequency', () => {
    expect(service.entries[0].frequencyCount).toBeGreaterThanOrEqual(service.entries[1].frequencyCount);
    expect(service.entries[0].key).toEqual("ιησους");
  });

  it('should return a random entry', () => {
    const entry = service.getRandomEntry();
    expect(entry).toBeTruthy();
    expect(service.entries).toContain(entry);
  });

  it('should return a random entry from the top N', () => {
    const topCount = 100;
    const entry = service.getRandomEntryTop(topCount);
    expect(entry).toBeTruthy();
    const topEntries = service.entries.slice(0, topCount);
    expect(topEntries).toContain(entry);
  });
});

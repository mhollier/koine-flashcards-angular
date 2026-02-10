export interface KoineEntry {
  gk: number;
  strongs: number[];
  lemma: string;
  transliteration: string;
  frequencyCount: number;
  definition: string;
}

export interface KoineEntryWithKey extends KoineEntry {
  key: string; // the JSON object key, e.g. "ααρων"
}
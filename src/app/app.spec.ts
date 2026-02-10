import { TestBed } from '@angular/core/testing';
import { MediaMatcher } from '@angular/cdk/layout';
import { App } from './app';

describe('App', () => {
  const mockMediaMatcher = {
    matchMedia: (query: string) => ({
      matches: false, // or true based on your test case
      media: query,
      addEventListener: () => { },
      removeEventListener: () => { }
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: MediaMatcher, useValue: mockMediaMatcher }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

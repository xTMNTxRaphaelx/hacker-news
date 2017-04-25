import { TestBed, inject } from '@angular/core/testing';

import { HackernewsApiService } from './hackernews-api.service';

describe('HackernewsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackernewsApiService]
    });
  });

  it('should ...', inject([HackernewsApiService], (service: HackernewsApiService) => {
    expect(service).toBeTruthy();
  }));
});

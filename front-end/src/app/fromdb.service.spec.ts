import { TestBed, inject } from '@angular/core/testing';

import { ForLoginService } from './fromdb.service';

describe('ForLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForLoginService]
    });
  });

  it('should ...', inject([ForLoginService], (service: ForLoginService) => {
    expect(service).toBeTruthy();
  }));
});

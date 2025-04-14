import { TestBed } from '@angular/core/testing';

import { LocalMessageService } from './local-message.service';

describe('LocalMessageService', () => {
  let service: LocalMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

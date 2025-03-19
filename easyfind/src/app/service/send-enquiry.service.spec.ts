import { TestBed } from '@angular/core/testing';

import { SendEnquiryService } from './send-enquiry.service';

describe('SendEnquiryService', () => {
  let service: SendEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

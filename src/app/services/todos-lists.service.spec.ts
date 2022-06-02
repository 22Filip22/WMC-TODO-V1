import { TestBed } from '@angular/core/testing';

import { TodosListsService } from './todos-lists.service';

describe('TodosListsService', () => {
  let service: TodosListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

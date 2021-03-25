import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryUpsertComponent } from './library-upsert.component';

describe('LibraryUpsertComponent', () => {
  let component: LibraryUpsertComponent;
  let fixture: ComponentFixture<LibraryUpsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryUpsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

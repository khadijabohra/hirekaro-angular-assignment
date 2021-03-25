import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryModelComponent } from './library-model.component';

describe('LibraryModelComponent', () => {
  let component: LibraryModelComponent;
  let fixture: ComponentFixture<LibraryModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

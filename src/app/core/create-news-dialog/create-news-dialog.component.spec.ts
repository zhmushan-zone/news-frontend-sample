import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewsDialogComponent } from './create-news-dialog.component';

describe('CreateNewsDialogComponent', () => {
  let component: CreateNewsDialogComponent;
  let fixture: ComponentFixture<CreateNewsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInfoDialogComponent } from './news-info-dialog.component';

describe('NewsInfoDialogComponent', () => {
  let component: NewsInfoDialogComponent;
  let fixture: ComponentFixture<NewsInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

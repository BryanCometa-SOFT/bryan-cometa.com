import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBriefcaseComponent } from './card-briefcase.component';

describe('CardBriefcaseComponent', () => {
  let component: CardBriefcaseComponent;
  let fixture: ComponentFixture<CardBriefcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBriefcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBriefcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

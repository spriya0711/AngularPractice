import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBtnComponent } from './parent-btn.component';

describe('ParentBtnComponent', () => {
  let component: ParentBtnComponent;
  let fixture: ComponentFixture<ParentBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

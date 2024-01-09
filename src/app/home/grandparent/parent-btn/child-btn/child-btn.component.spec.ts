import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBtnComponent } from './child-btn.component';

describe('ChildBtnComponent', () => {
  let component: ChildBtnComponent;
  let fixture: ComponentFixture<ChildBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TXTComponent } from './txt.component';

describe('InputComponent', () => {
  let component: TXTComponent;
  let fixture: ComponentFixture<TXTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TXTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TXTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

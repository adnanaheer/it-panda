import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUx } from './ui-ux';

describe('UiUx', () => {
  let component: UiUx;
  let fixture: ComponentFixture<UiUx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

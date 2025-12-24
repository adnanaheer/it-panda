import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wordpress } from './wordpress';

describe('Wordpress', () => {
  let component: Wordpress;
  let fixture: ComponentFixture<Wordpress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wordpress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wordpress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

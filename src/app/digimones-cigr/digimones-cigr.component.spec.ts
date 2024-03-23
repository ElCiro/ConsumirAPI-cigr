import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonesCigrComponent } from './digimones-cigr.component';

describe('DigimonesCigrComponent', () => {
  let component: DigimonesCigrComponent;
  let fixture: ComponentFixture<DigimonesCigrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonesCigrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonesCigrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

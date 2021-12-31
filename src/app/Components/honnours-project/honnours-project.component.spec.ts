import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonnoursProjectComponent } from './honnours-project.component';

describe('HonnoursProjectComponent', () => {
  let component: HonnoursProjectComponent;
  let fixture: ComponentFixture<HonnoursProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonnoursProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonnoursProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../../auth/auth.service';
import { NavComponent } from '../nav/nav.component';
import { MatToolbarComponent } from './mat-toolbar.component';

describe('MatToolbarComponent', () => {
  let component: MatToolbarComponent;
  let fixture: ComponentFixture<MatToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatToolbarComponent, NavComponent],
      imports: [RouterTestingModule],
      providers: [AuthService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

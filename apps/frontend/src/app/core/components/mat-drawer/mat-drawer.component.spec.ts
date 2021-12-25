import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';
import { MatToolbarComponent } from '../mat-toolbar/mat-toolbar.component';
import { NavComponent } from '../nav/nav.component';
import { MatDrawerComponent } from './mat-drawer.component';

describe('MatDrawerComponent', () => {
  let component: MatDrawerComponent;
  let fixture: ComponentFixture<MatDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatDrawerComponent, NavComponent, MatToolbarComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

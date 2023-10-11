import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamPayProcessorComponent } from './streampay-processor.component';

describe('streamPayProcessorComponent', () => {
  let component: StreamPayProcessorComponent;
  let fixture: ComponentFixture<StreamPayProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolanaPayProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamPayProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTransferComponent } from './share-transfer.component';

describe('ShareTransferComponent', () => {
  let component: ShareTransferComponent;
  let fixture: ComponentFixture<ShareTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

interface Company {
  name: string;
  id: string;
  address: string;
  status: string;
  authorized: number;
  paidUp: number;
}

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {
  @Input() company!: Company;
}

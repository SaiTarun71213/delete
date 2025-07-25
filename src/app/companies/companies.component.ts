import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CompanyCardComponent } from '../company-card/company-card.component';

@Component({
  selector: 'app-companies',
  imports: [CommonModule, ButtonModule, InputTextModule, CompanyCardComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
  companies = [
    {
      name: 'Tech Corp Ltd',
      id: 'U72900DL2020PTC123456',
      address: '123 Business Park, New Delhi, 110001',
      status: 'Active',
      authorized: 10000000,
      paidUp: 7500000
    },
    {
      name: 'Sri Sai Rajarajeswari InnovateCorp',
      id: 'U72900DL2020PTC123456',
      address: '789 Corporate Avenue, New Delhi, 110001',
      status: 'Active',
      authorized: 10000000,
      paidUp: 7500000
    },
    {
      name: 'Tech Corp Ltd',
      id: 'U72900DL2020PTC123456',
      address: '123 Business Park, New Delhi, 110001',
      status: 'Active',
      authorized: 10000000,
      paidUp: 7500000
    },
    {
      name: 'Tech Corp Ltd',
      id: 'U72900DL2020PTC123456',
      address: '123 Business Park, New Delhi, 110001',
      status: 'Active',
      authorized: 10000000,
      paidUp: 7500000
    },
    {
      name: 'Tech Corp Ltd',
      id: 'U72900DL2020PTC123456',
      address: '789 Corporate Avenue, New Delhi, 110001',
      status: 'Active',
      authorized: 10000000,
      paidUp: 7500000
    },
    {
      name: 'Tech Corp Ltd',
      id: 'U72900DL2020PTC123456',
      address: '123 Business Park, New Delhi, 110001',
      status: 'Active',
      authorized: 10000000,
      paidUp: 7500000
    }
  ];
}

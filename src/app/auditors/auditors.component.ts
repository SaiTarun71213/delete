import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

interface Auditor {
  name: string;
  email: string;
  contact: string;
}

@Component({
  selector: 'app-auditors',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, TableModule],
  templateUrl: './auditors.component.html',
  styleUrl: './auditors.component.scss'
})
export class AuditorsComponent {
  auditors: Auditor[] = [
    {
      name: 'John Smith',
      email: 'john.smith@email.com',
      contact: '+91 9876543210'
    },
    {
      name: 'John Smith',
      email: 'john.smith@email.com',
      contact: '+91 9876543210'
    },
    {
      name: 'John Smith',
      email: 'john.smith@email.com',
      contact: '+91 9876543210'
    },
    {
      name: 'John Smith',
      email: 'john.smith@email.com',
      contact: '+91 9876543210'
    },
    {
      name: 'John Smith',
      email: 'john.smith@email.com',
      contact: '+91 9876543210'
    }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

interface Member {
  name: string;
  din: string;
  email: string;
  phone: string;
  companiesCount: number;
}

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, TableModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  members: Member[] = [
    {
      name: 'John Smith',
      din: '12345678',
      email: 'john.smith@email.com',
      phone: '+91 9876543210',
      companiesCount: 5
    },
    {
      name: 'John Smith',
      din: '12345678',
      email: 'john.smith@email.com',
      phone: '+91 9876543210',
      companiesCount: 2
    },
    {
      name: 'John Smith',
      din: '12345678',
      email: 'john.smith@email.com',
      phone: '+91 9876543210',
      companiesCount: 2
    },
    {
      name: 'John Smith',
      din: '12345678',
      email: 'john.smith@email.com',
      phone: '+91 9876543210',
      companiesCount: 2
    },
    {
      name: 'John Smith',
      din: '12345678',
      email: 'john.smith@email.com',
      phone: '+91 9876543210',
      companiesCount: 2
    },
    {
      name: 'John Smith',
      din: '12345678',
      email: 'john.smith@email.com',
      phone: '+91 9876543210',
      companiesCount: 2
    }
  ];
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DataService, Company } from '../services/data.service';

@Component({
  selector: 'app-companies',
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, CardModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  filteredCompanies: Company[] = [];
  searchQuery: string = '';

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companies = this.dataService.getCompanies();
    this.filteredCompanies = [...this.companies];
  }

  onSearchChange(event: any) {
    this.searchQuery = event.target.value;
    this.filterCompanies();
  }

  filterCompanies() {
    if (!this.searchQuery.trim()) {
      this.filteredCompanies = [...this.companies];
    } else {
      this.filteredCompanies = this.companies.filter(company =>
        company.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        company.registrationNumber.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  onCompanyClick(company: Company) {
    this.router.navigate(['/company-details', company.id]);
  }

  onAddCompany() {
    // TODO: Implement add company functionality
    console.log('Add company clicked');
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { DataService, User, Company } from '../services/data.service';

@Component({
  selector: 'app-share-transfer',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    IconFieldModule,
    InputIconModule,
    DropdownModule,
    TooltipModule
  ],
  templateUrl: './share-transfer.component.html',
  styleUrl: './share-transfer.component.scss'
})
export class ShareTransferComponent implements OnInit {
  // Flow context
  action: 'transfer' | 'add' | 'allot' = 'transfer';
  companyId: string = '';
  companyName: string = '';

  // Source (FROM) - for transfer and add flows
  fromUserId: string = '';
  fromUserName: string = '';
  fromCompanyId: string = '';
  fromCompanyName: string = '';
  availableShares: number = 0;

  // Target (TO) - for all flows
  toUserId: string = '';
  toUserName: string = '';

  // Form data
  recipientType: 'person' | 'organization' = 'person';
  searchQuery: string = '';
  sharesToTransfer: string = '';
  transferDate: Date = new Date();
  selectedRecipient: User | null = null;
  selectedSourceUser: User | null = null;
  selectedSourceCompany: Company | null = null;

  // Data
  users: User[] = [];
  companies: Company[] = [];
  filteredUsers: User[] = [];
  filteredCompanies: Company[] = [];

  // UI state
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadData();
    this.route.queryParams.subscribe(params => {
      this.initializeFromParams(params);
    });
  }

  loadData() {
    this.users = this.dataService.getUsers();
    this.companies = this.dataService.getCompanies();
    this.filteredUsers = [...this.users];
    this.filteredCompanies = [...this.companies];
  }

  initializeFromParams(params: any) {
    this.action = params['action'] || 'transfer';
    this.companyId = params['companyId'] || '';
    this.companyName = params['companyName'] || '';

    // Initialize based on action type
    if (this.action === 'transfer') {
      this.fromUserId = params['fromUserId'] || '';
      this.fromUserName = params['fromUserName'] || '';
      this.availableShares = parseInt(params['availableShares']) || 0;
    } else if (this.action === 'add') {
      this.toUserId = params['toUserId'] || '';
      this.toUserName = params['toUserName'] || '';
    } else if (this.action === 'allot') {
      this.toUserId = params['toUserId'] || '';
      this.toUserName = params['toUserName'] || '';
      this.availableShares = parseInt(params['availableShares']) || 0;
    }
  }

  setRecipientType(type: 'person' | 'organization') {
    this.recipientType = type;
    this.selectedRecipient = null;
    this.searchQuery = '';
    this.filterUsers();
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.type === this.recipientType &&
      (user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }

  onSearchChange() {
    this.filterUsers();
  }

  selectRecipient(user: User) {
    this.selectedRecipient = user;
    this.searchQuery = user.name;
    // Clear filtered results to hide dropdown
    this.filteredUsers = [];
  }

  clearRecipientSelection() {
    this.selectedRecipient = null;
    this.searchQuery = '';
    this.filterUsers();
  }

  setPercentage(percentage: number) {
    const maxShares = this.getMaxAvailableShares();
    if (percentage === 50) {
      this.sharesToTransfer = Math.floor(maxShares * 0.5).toString();
    } else if (percentage === 100) {
      this.sharesToTransfer = maxShares.toString();
    }
  }

  getMaxAvailableShares(): number {
    if (this.action === 'transfer') {
      return this.availableShares;
    } else if (this.action === 'allot') {
      return this.availableShares; // Company's available shares
    } else if (this.action === 'add' && this.selectedSourceUser) {
      // Get shares from selected source user in selected company
      const shareholding = this.dataService.getShareholding(
        this.selectedSourceUser.id,
        this.selectedSourceCompany?.id || ''
      );
      return shareholding?.shares || 0;
    }
    return 0;
  }

  getActionTitle(): string {
    switch (this.action) {
      case 'transfer': return 'Transfer Shares';
      case 'add': return 'Add Shares';
      case 'allot': return 'Allot Shares';
      default: return 'Share Management';
    }
  }

  getActionDescription(): string {
    switch (this.action) {
      case 'transfer': return 'Transfer shares from one holder to another person or organization.';
      case 'add': return 'Add shares from another person or organization to the selected shareholder.';
      case 'allot': return 'Allot new shares from company reserves to the selected shareholder.';
      default: return 'Manage share transactions.';
    }
  }

  isFieldDisabled(field: string): boolean {
    switch (field) {
      case 'fromUser':
        return this.action === 'transfer' || this.action === 'allot';
      case 'toUser':
        return this.action === 'add' || this.action === 'allot';
      case 'company':
        return this.action === 'transfer' || this.action === 'allot';
      default:
        return false;
    }
  }

  onCancel() {
    this.router.navigate(['/company-details', this.companyId]);
  }

  onConfirmTransaction() {
    if (!this.validateForm()) {
      return;
    }

    this.loading = true;

    // Simulate API call
    setTimeout(() => {
      const transaction = this.dataService.createShareTransaction({
        type: this.action,
        fromUserId: this.action === 'allot' ? undefined : (this.selectedSourceUser?.id || this.fromUserId),
        toUserId: this.selectedRecipient?.id || this.toUserId,
        companyId: this.companyId,
        shares: this.parseNumber(this.sharesToTransfer),
        transactionDate: this.transferDate.toISOString(),
        status: 'completed'
      });

      console.log('Transaction completed:', transaction);
      this.loading = false;

      // Navigate back to company details
      this.router.navigate(['/company-details', this.companyId]);
    }, 1000);
  }

  // Helper method for template
  parseNumber(value: string): number {
    return parseInt(value) || 0;
  }

  validateForm(): boolean {
    if (!this.sharesToTransfer || this.parseNumber(this.sharesToTransfer) <= 0) {
      alert('Please enter a valid number of shares');
      return false;
    }

    if (this.parseNumber(this.sharesToTransfer) > this.getMaxAvailableShares()) {
      alert('Insufficient shares available');
      return false;
    }

    if (this.action !== 'allot' && !this.selectedRecipient) {
      alert('Please select a recipient');
      return false;
    }

    if (this.action === 'add' && (!this.selectedSourceUser || !this.selectedSourceCompany)) {
      alert('Please select source user and company');
      return false;
    }

    return true;
  }
}

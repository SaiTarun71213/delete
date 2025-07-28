import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { DataService, Company, User, Shareholding } from '../services/data.service';

interface ShareholderWithUser extends Shareholding {
  user: User;
}

@Component({
  selector: 'app-company-details',
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    TagModule,
    AvatarModule,
    TooltipModule
  ],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss'
})
export class CompanyDetailsComponent implements OnInit {
  company: Company | null = null;
  shareholders: ShareholderWithUser[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const companyId = params['id'];
      if (companyId) {
        this.loadCompanyDetails(companyId);
      }
    });
  }

  loadCompanyDetails(companyId: string) {
    this.loading = true;

    // Simulate API call delay
    setTimeout(() => {
      this.company = this.dataService.getCompanyById(companyId) || null;
      if (this.company) {
        this.shareholders = this.dataService.getCompanyShareholders(companyId);
      }
      this.loading = false;
    }, 500);
  }

  onTransferShares(shareholder: ShareholderWithUser) {
    // Navigate to share management with transfer context
    this.router.navigate(['/share-management'], {
      queryParams: {
        action: 'transfer',
        companyId: this.company?.id,
        fromUserId: shareholder.shareholderId,
        fromUserName: shareholder.user.name,
        availableShares: shareholder.shares,
        companyName: this.company?.name
      }
    });
  }

  onAddShares(shareholder: ShareholderWithUser) {
    // Navigate to share management with add context
    this.router.navigate(['/share-management'], {
      queryParams: {
        action: 'add',
        companyId: this.company?.id,
        toUserId: shareholder.shareholderId,
        toUserName: shareholder.user.name,
        companyName: this.company?.name
      }
    });
  }

  onAllotShares(shareholder: ShareholderWithUser) {
    // Navigate to share management with allot context
    this.router.navigate(['/share-management'], {
      queryParams: {
        action: 'allot',
        companyId: this.company?.id,
        toUserId: shareholder.shareholderId,
        toUserName: shareholder.user.name,
        companyName: this.company?.name,
        availableShares: this.company?.availableShares
      }
    });
  }

  goBack() {
    this.router.navigate(['/companies']);
  }

  getShareTypeColor(shareType: string): string {
    return shareType === 'preferred' ? 'success' : 'info';
  }

  getUserInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
}

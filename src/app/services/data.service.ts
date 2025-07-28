import { Injectable } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'person' | 'organization';
  avatar?: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  totalShares: number;
  availableShares: number;
  logo?: string;
  registrationNumber: string;
  establishedDate: string;
}

export interface Shareholding {
  id: string;
  shareholderId: string;
  companyId: string;
  shares: number;
  percentage: number;
  acquisitionDate: string;
  shareType: 'common' | 'preferred';
}

export interface ShareTransaction {
  id: string;
  type: 'transfer' | 'add' | 'allot';
  fromUserId?: string;
  toUserId: string;
  companyId: string;
  shares: number;
  transactionDate: string;
  status: 'pending' | 'completed' | 'cancelled';
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users: User[] = [
    {
      id: '1',
      name: 'Aarav Patel',
      email: 'aarav.patel@email.com',
      type: 'person',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      type: 'person',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: '3',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      type: 'person',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: '4',
      name: 'Venture Capital Partners',
      email: 'contact@vcpartners.com',
      type: 'organization'
    },
    {
      id: '5',
      name: 'Tech Innovations Ltd',
      email: 'info@techinnovations.com',
      type: 'organization'
    },
    {
      id: '6',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      type: 'person',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    {
      id: '7',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      type: 'person',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: '8',
      name: 'Global Investment Fund',
      email: 'contact@globalfund.com',
      type: 'organization'
    }
  ];

  private companies: Company[] = [
    {
      id: '1',
      name: 'Innovate Inc.',
      description: 'Leading technology innovation company',
      industry: 'Technology',
      totalShares: 100000,
      availableShares: 25000,
      registrationNumber: 'INC001',
      establishedDate: '2020-01-15'
    },
    {
      id: '2',
      name: 'Tesla Inc.',
      description: 'Electric vehicle and clean energy company',
      industry: 'Automotive',
      totalShares: 500000,
      availableShares: 50000,
      registrationNumber: 'TSLA001',
      establishedDate: '2003-07-01'
    },
    {
      id: '3',
      name: 'Green Energy Solutions',
      description: 'Renewable energy solutions provider',
      industry: 'Energy',
      totalShares: 75000,
      availableShares: 15000,
      registrationNumber: 'GES001',
      establishedDate: '2018-03-20'
    },
    {
      id: '4',
      name: 'FinTech Dynamics',
      description: 'Financial technology and digital banking solutions',
      industry: 'Financial Services',
      totalShares: 200000,
      availableShares: 40000,
      registrationNumber: 'FTD001',
      establishedDate: '2019-11-10'
    }
  ];

  private shareholdings: Shareholding[] = [
    // Innovate Inc. shareholders
    {
      id: '1',
      shareholderId: '1',
      companyId: '1',
      shares: 10000,
      percentage: 10,
      acquisitionDate: '2020-02-01',
      shareType: 'common'
    },
    {
      id: '2',
      shareholderId: '2',
      companyId: '1',
      shares: 15000,
      percentage: 15,
      acquisitionDate: '2020-03-15',
      shareType: 'common'
    },
    {
      id: '3',
      shareholderId: '4',
      companyId: '1',
      shares: 25000,
      percentage: 25,
      acquisitionDate: '2020-01-20',
      shareType: 'preferred'
    },
    {
      id: '4',
      shareholderId: '5',
      companyId: '1',
      shares: 25000,
      percentage: 25,
      acquisitionDate: '2020-04-10',
      shareType: 'common'
    },
    // Tesla Inc. shareholders
    {
      id: '5',
      shareholderId: '1',
      companyId: '2',
      shares: 50000,
      percentage: 10,
      acquisitionDate: '2021-01-15',
      shareType: 'common'
    },
    {
      id: '6',
      shareholderId: '6',
      companyId: '2',
      shares: 75000,
      percentage: 15,
      acquisitionDate: '2021-02-20',
      shareType: 'common'
    },
    {
      id: '7',
      shareholderId: '7',
      companyId: '2',
      shares: 100000,
      percentage: 20,
      acquisitionDate: '2021-03-10',
      shareType: 'preferred'
    },
    {
      id: '8',
      shareholderId: '8',
      companyId: '2',
      shares: 225000,
      percentage: 45,
      acquisitionDate: '2021-01-05',
      shareType: 'preferred'
    },
    // Green Energy Solutions shareholders
    {
      id: '9',
      shareholderId: '2',
      companyId: '3',
      shares: 20000,
      percentage: 26.67,
      acquisitionDate: '2018-04-01',
      shareType: 'common'
    },
    {
      id: '10',
      shareholderId: '3',
      companyId: '3',
      shares: 15000,
      percentage: 20,
      acquisitionDate: '2018-05-15',
      shareType: 'common'
    },
    {
      id: '11',
      shareholderId: '4',
      companyId: '3',
      shares: 25000,
      percentage: 33.33,
      acquisitionDate: '2018-04-10',
      shareType: 'preferred'
    },
    // FinTech Dynamics shareholders
    {
      id: '12',
      shareholderId: '6',
      companyId: '4',
      shares: 40000,
      percentage: 20,
      acquisitionDate: '2020-01-01',
      shareType: 'common'
    },
    {
      id: '13',
      shareholderId: '7',
      companyId: '4',
      shares: 60000,
      percentage: 30,
      acquisitionDate: '2020-02-15',
      shareType: 'common'
    },
    {
      id: '14',
      shareholderId: '8',
      companyId: '4',
      shares: 60000,
      percentage: 30,
      acquisitionDate: '2020-01-10',
      shareType: 'preferred'
    }
  ];

  constructor() { }

  // Company methods
  getCompanies(): Company[] {
    return [...this.companies];
  }

  getCompanyById(id: string): Company | undefined {
    return this.companies.find(company => company.id === id);
  }

  // User methods
  getUsers(): User[] {
    return [...this.users];
  }

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Shareholding methods
  getShareholdingsByCompany(companyId: string): Shareholding[] {
    return this.shareholdings.filter(sh => sh.companyId === companyId);
  }

  getShareholdingsByUser(userId: string): Shareholding[] {
    return this.shareholdings.filter(sh => sh.shareholderId === userId);
  }

  getShareholding(userId: string, companyId: string): Shareholding | undefined {
    return this.shareholdings.find(sh => sh.shareholderId === userId && sh.companyId === companyId);
  }

  // Get shareholders with user details for a company
  getCompanyShareholders(companyId: string) {
    const shareholdings = this.getShareholdingsByCompany(companyId);
    return shareholdings.map(sh => ({
      ...sh,
      user: this.getUserById(sh.shareholderId)!
    }));
  }

  // Get companies with shareholding details for a user
  getUserCompanies(userId: string) {
    const shareholdings = this.getShareholdingsByUser(userId);
    return shareholdings.map(sh => ({
      ...sh,
      company: this.getCompanyById(sh.companyId)!
    }));
  }

  // Transaction methods (for future use)
  createShareTransaction(transaction: Omit<ShareTransaction, 'id'>): ShareTransaction {
    const newTransaction: ShareTransaction = {
      ...transaction,
      id: Date.now().toString()
    };
    // In a real app, this would be saved to backend
    return newTransaction;
  }

  // Update shareholding after transaction
  updateShareholding(shareholdingId: string, newShares: number): boolean {
    const shareholding = this.shareholdings.find(sh => sh.id === shareholdingId);
    if (shareholding) {
      shareholding.shares = newShares;
      // Recalculate percentage based on company total shares
      const company = this.getCompanyById(shareholding.companyId);
      if (company) {
        shareholding.percentage = (newShares / company.totalShares) * 100;
      }
      return true;
    }
    return false;
  }
}

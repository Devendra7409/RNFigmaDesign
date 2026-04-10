import { InvestorItemData } from '../components/common/InvestorCard';
import { InvestmentData } from '../components/common/InvestmentItem';

export interface UserProfile {
  id: string;
  name: string;
  greeting: string;
}

export const currentUser: UserProfile = {
  id: 'u_001',
  name: 'Rahul Kapoor',
  greeting: 'Good Morning',
};

export interface DashboardStats {
  commissionBalance: number;
  lifetimeEarnings: number;
  totalInvestors: number;
  activeInvestors: number;
  monthlyCommission: number;
  monthlyCommissionDelta: number;
}

export const dashboardStats: DashboardStats = {
  commissionBalance: 2450.0,
  lifetimeEarnings: 4820.6,
  totalInvestors: 24,
  activeInvestors: 18,
  monthlyCommission: 49.24,
  monthlyCommissionDelta: 12.4,
};

export interface Milestone {
  id: string;
  title: string;
  description: string;
  current: number;
  target: number;
}

export const currentMilestone: Milestone = {
  id: 'm_q2',
  title: 'Quarterly Target',
  description: 'Reach ₹5L in commissions this quarter',
  current: 327000,
  target: 500000,
};

export const milestonesList: Milestone[] = [
  {
    id: 'm_q2',
    title: 'Quarterly Target',
    description: 'Q2 2026 commissions',
    current: 327000,
    target: 500000,
  },
  {
    id: 'm_year',
    title: 'Annual Goal',
    description: '2026 lifetime earnings',
    current: 1420000,
    target: 2500000,
  },
  {
    id: 'm_investor',
    title: 'Investor Growth',
    description: 'Onboard 30 investors',
    current: 24,
    target: 30,
  },
];

export const investors: InvestorItemData[] = [
  {
    id: 'inv_01',
    name: 'Priya Sharma',
    joinedOn: 'Mar 12, 2026',
    invested: 250000,
    currentValue: 286500,
    returnPct: 14.6,
    status: 'active',
  },
  {
    id: 'inv_02',
    name: 'Amit Kumar',
    joinedOn: 'Feb 04, 2026',
    invested: 180000,
    currentValue: 192400,
    returnPct: 6.88,
    status: 'active',
  },
  {
    id: 'inv_03',
    name: 'Neha Patel',
    joinedOn: 'Jan 22, 2026',
    invested: 420000,
    currentValue: 408300,
    returnPct: -2.78,
    status: 'dormant',
  },
  {
    id: 'inv_04',
    name: 'Vikram Gupta',
    joinedOn: 'Dec 18, 2025',
    invested: 330000,
    currentValue: 372650,
    returnPct: 12.92,
    status: 'active',
  },
  {
    id: 'inv_05',
    name: 'Sneha Iyer',
    joinedOn: 'Nov 29, 2025',
    invested: 150000,
    currentValue: 154800,
    returnPct: 3.2,
    status: 'active',
  },
  {
    id: 'inv_06',
    name: 'Rohan Desai',
    joinedOn: 'Oct 11, 2025',
    invested: 600000,
    currentValue: 588200,
    returnPct: -1.97,
    status: 'dormant',
  },
];

// Investor Detail data
export interface InvestorDetail {
  id: string;
  name: string;
  kycVerified: boolean;
  phone: string;
  email: string;
  joinedOn: string;
  totalInvested: number;
  currentValue: number;
  totalReturnsPct: number;
  totalEarnings: number;
  earningsMonthly: number;
  portfolio: InvestmentData[];
}

export const investorDetailById: Record<string, InvestorDetail> = {
  inv_01: {
    id: 'inv_01',
    name: 'Priya Sharma',
    kycVerified: true,
    phone: '+91 98200 00001',
    email: 'priya.sharma@example.com',
    joinedOn: 'Mar 12, 2026',
    totalInvested: 250000,
    currentValue: 286500,
    totalReturnsPct: 14.6,
    totalEarnings: 36500,
    earningsMonthly: 4200,
    portfolio: [
      {
        id: 'pl_01',
        planName: 'Growth Plan A',
        invested: 150000,
        currentValue: 174200,
        returnPct: 16.13,
        startDate: 'Mar 14, 2026',
      },
      {
        id: 'pl_02',
        planName: 'Stable Income',
        invested: 60000,
        currentValue: 63800,
        returnPct: 6.33,
        startDate: 'Apr 02, 2026',
      },
      {
        id: 'pl_03',
        planName: 'Dividend Fund',
        invested: 40000,
        currentValue: 48500,
        returnPct: 21.25,
        startDate: 'Apr 28, 2026',
      },
    ],
  },
};

// Commissions screen
export interface CommissionEntry {
  id: string;
  title: string;
  source: string;
  date: string;
  amount: number;
}

export const commissionHistory: CommissionEntry[] = [
  {
    id: 'c_01',
    title: 'Priya Sharma',
    source: 'Growth Plan A',
    date: 'Apr 08, 2026',
    amount: 1850,
  },
  {
    id: 'c_02',
    title: 'Vikram Gupta',
    source: 'Dividend Fund',
    date: 'Apr 06, 2026',
    amount: 1320,
  },
  {
    id: 'c_03',
    title: 'Sneha Iyer',
    source: 'Stable Income',
    date: 'Apr 02, 2026',
    amount: 550,
  },
  {
    id: 'c_04',
    title: 'Amit Kumar',
    source: 'Growth Plan B',
    date: 'Mar 30, 2026',
    amount: 980,
  },
];

export const commissionStats = {
  availableBalance: 2450,
  lifetimePayout: 48206,
  monthlyAverage: 4924,
  pendingClearance: 860,
};

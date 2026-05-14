export interface User {
  id: string
  email: string
  name: string
  role: 'subscriber' | 'publisher' | 'org_admin' | 'marketplace_admin' | 'api_developer'
  orgId: string
  orgName: string
  plan: 'free' | 'professional' | 'enterprise'
  lastLogin: string
}

export interface Dataset {
  id: string
  name: string
  type: string
  region: string
  lastUpdated: string
  status: 'active' | 'pending' | 'deprecated'
  description: string
  licenceType: string
  priceMonthly: number
}

export interface DownloadJob {
  id: string
  datasetId: string
  datasetName: string
  status: 'queued' | 'processing' | 'completed' | 'failed'
  createdAt: string
  completedAt?: string
  downloadUrl?: string
}

export interface ApiKey {
  id: string
  name: string
  prefix: string
  createdAt: string
  lastUsed?: string
  rateLimit: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
}

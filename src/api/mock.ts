import helenAvatar from '@/assets/avatars/helen.jpg'
import kathrynAvatar from '@/assets/avatars/kathryn.jpg'
import jamesAvatar from '@/assets/avatars/james.jpg'
import jimAvatar from '@/assets/avatars/jim.jpg'

// --- Data Types ---

export interface ChatMessage {
  name: string
  message: string
  time: string
  unreadCount: number
  avatarSrc: string
  status: 'online' | 'offline'
}

export interface Vaccination {
  name: string
  type: 'Overdue' | 'Noncore' | 'Core'
  date: string
  veterinarian?: string
}

export interface HealthDataPoint {
  period: string
  level: number
}

export interface PeriodHealthData {
  daily: HealthDataPoint[]
  weekly: HealthDataPoint[]
  monthly: HealthDataPoint[]
}

export interface HealthData {
  stress: PeriodHealthData
  pulse: PeriodHealthData
  temperature: PeriodHealthData
  calories: PeriodHealthData
}

export interface DonutStat {
  title: string
  percentage: {
    daily: number
    weekly: number
    monthly: number
  }
  chartColor: string
}

// --- Mock Data ---

const chatMessages: ChatMessage[] = [
  { name: 'Helen Brooks', message: 'Luna has been scratching her ears a lot lately and shaking her head...', time: '15:56', unreadCount: 0, avatarSrc: helenAvatar, status: 'online' },
  { name: 'Kathryn Murphy', message: 'The best way to treat an ear infection is to visit your local vet clinic a...', time: 'Wed', unreadCount: 2, avatarSrc: kathrynAvatar, status: 'online' },
  { name: 'James Grey', message: 'You should follow the instructions on the ear drops label, but usually y...', time: 'Tue', unreadCount: 0, avatarSrc: jamesAvatar, status: 'offline' },
  { name: 'Jim Brown', message: 'Hi, I have a question about my cat.', time: 'Tue', unreadCount: 0, avatarSrc: jimAvatar, status: 'offline' },
]

const vaccinations: Vaccination[] = [
  { name: 'Distemper', type: 'Core', date: '27 Jun 2024', veterinarian: 'Jim Brown' },
  { name: 'Bordetella', type: 'Noncore', date: '16 Sep 2024', veterinarian: 'James Grey' },
  { name: 'Rabies', type: 'Overdue', date: '01 Dec 2023' },
  { name: 'Calicivirus', type: 'Core', date: '11 Dec 2024', veterinarian: 'Helen Brooks' },
]

const healthData: HealthData = {
  stress: {
    daily: Array.from({ length: 14 }, (_, i) => ({ period: `Day ${i + 1}`, level: Number((Math.random() * 2 + 1).toFixed(1)) })),
    weekly: Array.from({ length: 14 }, (_, i) => ({ period: `Week ${i + 1}`, level: Number((Math.random() * 3 + 1).toFixed(1)) })),
    monthly: [
      { period: 'September', level: 1.2 },
      { period: '', level: 2.3 },
      { period: '', level: 1.8 },
      { period: '', level: 3.2 },
      { period: '', level: 2.8 },
      { period: 'November', level: 3.4 },
      { period: '', level: 2.7 },
      { period: '', level: 3.2 },
      { period: '', level: 2.4 },
      { period: 'December', level: 4.8 },
      { period: '', level: 6.2 },
      { period: '', level: 5 },
      { period: 'January', level: 2.0 },
      { period: '', level: 3.8 },
    ],
  },
  pulse: {
    daily: Array.from({ length: 14 }, (_, i) => ({ period: `Day ${i + 1}`, level: Math.floor(Math.random() * 10 + 60) })),
    weekly: Array.from({ length: 14 }, (_, i) => ({ period: `Week ${i + 1}`, level: Math.floor(Math.random() * 15 + 65) })),
    monthly: [
      { period: 'September', level: 60 },
      { period: '', level: 62 },
      { period: '', level: 65 },
      { period: '', level: 63 },
      { period: '', level: 68 },
      { period: 'November', level: 70 },
      { period: '', level: 72 },
      { period: '', level: 75 },
      { period: '', level: 73 },
      { period: 'December', level: 78 },
      { period: '', level: 80 },
      { period: '', level: 82 },
      { period: 'January', level: 75 },
      { period: '', level: 77 },
    ],
  },
  temperature: {
    daily: Array.from({ length: 14 }, (_, i) => ({ period: `Day ${i + 1}`, level: Number((Math.random() * 0.5 + 36.5).toFixed(1)) })),
    weekly: Array.from({ length: 14 }, (_, i) => ({ period: `Week ${i + 1}`, level: Number((Math.random() * 0.7 + 36.6).toFixed(1)) })),
    monthly: [
      { period: 'September', level: 36.5 },
      { period: '', level: 36.6 },
      { period: '', level: 36.7 },
      { period: '', level: 36.8 },
      { period: '', level: 36.9 },
      { period: 'November', level: 37.0 },
      { period: '', level: 37.1 },
      { period: '', level: 37.2 },
      { period: '', level: 37.3 },
      { period: 'December', level: 37.4 },
      { period: '', level: 37.5 },
      { period: '', level: 37.6 },
      { period: 'January', level: 37.7 },
      { period: '', level: 37.8 },
    ],
  },
  calories: {
    daily: Array.from({ length: 14 }, (_, i) => ({ period: `Day ${i + 1}`, level: Math.floor(Math.random() * 300 + 2000) })),
    weekly: Array.from({ length: 14 }, (_, i) => ({ period: `Week ${i + 1}`, level: Math.floor(Math.random() * 500 + 2200) })),
    monthly: [
      { period: 'September', level: 2000 },
      { period: '', level: 2100 },
      { period: '', level: 2200 },
      { period: '', level: 2300 },
      { period: '', level: 2400 },
      { period: 'November', level: 2500 },
      { period: '', level: 2600 },
      { period: '', level: 2700 },
      { period: '', level: 2800 },
      { period: 'December', level: 2900 },
      { period: '', level: 3000 },
      { period: '', level: 3100 },
      { period: 'January', level: 3200 },
      { period: '', level: 3300 },
    ],
  },
}

const donutStats: DonutStat[] = [
  {
    title: 'ACTIVITY',
    percentage: {
      daily: 15,
      weekly: 25,
      monthly: 45,
    },
    chartColor: 'text-destructive',
  },
  {
    title: 'SLEEP',
    percentage: {
      daily: 85,
      weekly: 79,
      monthly: 75,
    },
    chartColor: 'text-chart-2',
  },
  {
    title: 'WELLNESS',
    percentage: {
      daily: 60,
      weekly: 52,
      monthly: 65,
    },
    chartColor: 'text-chart-4',
  },
]

// --- API Functions ---

const MOCK_API_DELAY = 1000 // 1 second delay

function withDelay<T>(data: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), MOCK_API_DELAY)
  })
}

export function getChatMessages(): Promise<ChatMessage[]> {
  return withDelay(chatMessages)
}

export function getVaccinations(): Promise<Vaccination[]> {
  return withDelay(vaccinations)
}

export function getHealthData(): Promise<HealthData> {
  return withDelay(healthData)
}

export function getDonutStats(): Promise<DonutStat[]> {
  return withDelay(donutStats)
}
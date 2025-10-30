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
  month: string
  level: number
}

export interface HealthData {
  stress: HealthDataPoint[]
  pulse: HealthDataPoint[]
  temperature: HealthDataPoint[]
  calories: HealthDataPoint[]
}

export interface DonutStat {
  title: string
  percentage: number
  chartColor: string
  dropdownOptions?: string[]
}

// --- Mock Data ---

const chatMessages: ChatMessage[] = [
  { name: 'Helen Brooks', message: 'Luna has been scratching her ears a lot lately and shaking her head...', time: '15:56', unreadCount: 0, avatarSrc: helenAvatar, status: 'online' },
  { name: 'Kathryn Murphy', message: 'The best way to treat an ear infection is to visit your local vet clinic a...', time: 'Wed', unreadCount: 2, avatarSrc: kathrynAvatar, status: 'online' },
  { name: 'James Grey', message: 'You should follow the instructions on the ear drops label, but usually y...', time: 'Tue', unreadCount: 0, avatarSrc: jamesAvatar, status: 'offline' },
  { name: 'Jim Brown', message: 'Hi, I have a question about my cat.', time: 'Tue', unreadCount: 0, avatarSrc: jimAvatar, status: 'offline' },
]

const vaccinations: Vaccination[] = [
  { name: 'Rabies', type: 'Overdue', date: '01 Dec 2023' },
  { name: 'Bordetella', type: 'Noncore', date: '11 Dec 2024', veterinarian: 'James Grey' },
  { name: 'Distemper', type: 'Core', date: '27 Jun 2024', veterinarian: 'Jim Brown' },
  { name: 'Calicivirus', type: 'Core', date: '16 Sep 2024', veterinarian: 'Helen Brooks' },
]

const healthData: HealthData = {
  stress: [
    { month: 'September', level: 1.2 },
    { month: '', level: 2.3 },
    { month: '', level: 1.8 },
    { month: '', level: 3.2 },
    { month: '', level: 2.8 },
    { month: 'November', level: 3.4 },
    { month: '', level: 2.7 },
    { month: '', level: 3.2 },
    { month: '', level: 2.4 },
    { month: 'December', level: 4.8 },
    { month: '', level: 6.2 },
    { month: '', level: 5 },
    { month: 'January', level: 2.0 },
    { month: '', level: 3.8 },
  ],
  pulse: [
    { month: 'September', level: 60 },
    { month: '', level: 62 },
    { month: '', level: 65 },
    { month: '', level: 63 },
    { month: '', level: 68 },
    { month: 'November', level: 70 },
    { month: '', level: 72 },
    { month: '', level: 75 },
    { month: '', level: 73 },
    { month: 'December', level: 78 },
    { month: '', level: 80 },
    { month: '', level: 82 },
    { month: 'January', level: 75 },
    { month: '', level: 77 },
  ],
  temperature: [
    { month: 'September', level: 36.5 },
    { month: '', level: 36.6 },
    { month: '', level: 36.7 },
    { month: '', level: 36.8 },
    { month: '', level: 36.9 },
    { month: 'November', level: 37.0 },
    { month: '', level: 37.1 },
    { month: '', level: 37.2 },
    { month: '', level: 37.3 },
    { month: 'December', level: 37.4 },
    { month: '', level: 37.5 },
    { month: '', level: 37.6 },
    { month: 'January', level: 37.7 },
    { month: '', level: 37.8 },
  ],
  calories: [
    { month: 'September', level: 2000 },
    { month: '', level: 2100 },
    { month: '', level: 2200 },
    { month: '', level: 2300 },
    { month: '', level: 2400 },
    { month: 'November', level: 2500 },
    { month: '', level: 2600 },
    { month: '', level: 2700 },
    { month: '', level: 2800 },
    { month: 'December', level: 2900 },
    { month: '', level: 3000 },
    { month: '', level: 3100 },
    { month: 'January', level: 3200 },
    { month: '', level: 3300 },
  ],
}

const donutStats: DonutStat[] = [
  {
    title: 'ACTIVITY',
    percentage: 25,
    chartColor: 'text-destructive',
  },
  {
    title: 'SLEEP',
    percentage: 79,
    chartColor: 'text-chart-2',
    dropdownOptions: ['Weekly', 'Daily', 'Monthly'],
  },
  {
    title: 'WELLNESS',
    percentage: 52,
    chartColor: 'text-chart-4',
    dropdownOptions: ['Weekly', 'Daily', 'Monthly'],
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
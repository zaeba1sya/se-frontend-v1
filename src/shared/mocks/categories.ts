import {
  Cable,
  Cpu,
  Flame,
  Lightbulb,
  Power,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap
} from 'lucide-react'
import type { Category } from 'entity/category'

export const CATEGORIES: Category[] = [
  {
    description: 'Пускатели, контакторы, реле управления',
    featured: true,
    icon: Zap,
    id: 'starters',
    name: 'Магнитные пускатели',
    productsCount: 48,
    slug: 'magnitnye-puskateli'
  },
  {
    description: 'Тёплые полы, маты и плёночные системы',
    featured: true,
    icon: Flame,
    id: 'heating',
    name: 'Тёплые полы',
    productsCount: 36,
    slug: 'teplye-poly'
  },
  {
    description: 'Конвекторы и обогреватели для дома и офиса',
    featured: true,
    icon: Flame,
    id: 'convectors',
    name: 'Конвекторы',
    productsCount: 24,
    slug: 'konvektory'
  },
  {
    description: 'Инверторы, полуавтоматы и аксессуары',
    featured: true,
    icon: Sparkles,
    id: 'welding',
    name: 'Сварочные аппараты',
    productsCount: 29,
    slug: 'svarochnye-apparaty'
  },
  {
    description: 'Автоматы, УЗО, дифавтоматы, ограничители',
    icon: ShieldCheck,
    id: 'protection',
    name: 'Защита и автоматика',
    productsCount: 72,
    slug: 'zashchita'
  },
  {
    description: 'Силовые и слаботочные кабели, провода',
    icon: Cable,
    id: 'cables',
    name: 'Кабели и провода',
    productsCount: 54,
    slug: 'kabeli'
  },
  {
    description: 'Розетки, выключатели и рамки',
    icon: Power,
    id: 'sockets',
    name: 'Розетки и выключатели',
    productsCount: 63,
    slug: 'rozetki'
  },
  {
    description: 'Светильники, лампы и LED-решения',
    icon: Lightbulb,
    id: 'lighting',
    name: 'Освещение',
    productsCount: 41,
    slug: 'osveshchenie'
  },
  {
    description: 'Щиты, шкафы и монтажные коробки',
    icon: Cpu,
    id: 'boards',
    name: 'Электрощиты',
    productsCount: 33,
    slug: 'shchity'
  },
  {
    description: 'Инструмент электромонтажника',
    icon: Wrench,
    id: 'tools',
    name: 'Инструмент',
    productsCount: 58,
    slug: 'instrument'
  }
]

export function findCategory(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug)
}

export function findCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id)
}

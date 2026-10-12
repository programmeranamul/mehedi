import { articles, brands, comparisons, phones } from '@/lib/data/mock'
import type { Article, Brand, Comparison, Phone } from '@/lib/types'

/*
 * Single data-access boundary for the UI. Components only call these functions,
 * so swapping mock data for the real backend means changing this file only, e.g.
 *   return apiFetch<Phone[]>('/phones/popular?limit=' + limit)
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? ''

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, init)
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`)
  return res.json() as Promise<T>
}

export async function getPopularPhones(limit = 6): Promise<Phone[]> {
  return phones.slice(0, limit)
}

export async function getBrands(limit = 8): Promise<Brand[]> {
  return brands.slice(0, limit)
}

export async function getComparisons(limit = 4): Promise<Comparison[]> {
  return comparisons.slice(0, limit)
}

export async function getLatestArticles(limit = 4): Promise<Article[]> {
  return articles.slice(0, limit)
}

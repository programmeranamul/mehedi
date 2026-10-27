import { articles, comparisons, phones } from '@/lib/data/mock'
import type { Article, Brand, Comparison, Phone } from '@/lib/types'

/*
 * Single data-access boundary for the UI. Components only call these functions,
 * so swapping mock data for the real backend means changing this file only, e.g.
 *   return apiFetch<Phone[]>('/phones/popular?limit=' + limit)
 */

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'
).replace(/\/+$/, '')

interface BrandsResponse {
  data?: {
    _id?: string
    name?: string
    slug?: string
    logo?: string | null
  }[]
}

interface LatestComparisonsResponse {
  data?: {
    _id?: string
    phone1?: {
      name?: string
      price?: string
      score?: string
      image?: string
      slug?: string
    }
    phone2?: {
      name?: string
      price?: string
      score?: string
      image?: string
      slug?: string
    }
  }[]
}

export interface LatestComparisonPhone {
  name: string
  price: string
  score: string
  image: string
  slug: string
}

export interface LatestComparison {
  id: string
  phone1: LatestComparisonPhone
  phone2: LatestComparisonPhone
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, init)
  if (!res.ok) throw new ApiError(res.status, path)
  return res.json() as Promise<T>
}

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    path: string,
  ) {
    super(`API ${status}: ${path}`)
    this.name = 'ApiError'
  }
}

export async function getPopularPhones(limit = 6): Promise<Phone[]> {
  return phones.slice(0, limit)
}

export async function getBrands(limit = 8, page = 1): Promise<Brand[]> {
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  })
  const response = await apiFetch<BrandsResponse>(`/brands?${query.toString()}`, {
    cache: 'no-store',
  })

  if (!Array.isArray(response.data)) {
    throw new Error('Brands response is missing its data array.')
  }

  return response.data.map((brand) => {
    const { _id, name, slug, logo } = brand

    if (!_id || !name || !slug) {
      throw new Error('Brands response contains an invalid brand.')
    }

    return {
      id: _id,
      name,
      slug,
      logo: logo ?? null,
    }
  })
}

export async function getComparisons(limit = 4): Promise<Comparison[]> {
  return comparisons.slice(0, limit)
}

export async function getLatestComparisons(
  page = 1,
  limit = 10,
): Promise<LatestComparison[]> {
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  })
  const response = await apiFetch<LatestComparisonsResponse>(
    `/latest-comparisons?${query.toString()}`,
    { cache: 'no-store' },
  )

  if (!Array.isArray(response.data)) {
    throw new Error('Latest comparisons response is missing its data array.')
  }

  return response.data.map((comparison) => {
    const { _id, phone1, phone2 } = comparison

    if (!_id || !phone1 || !phone2) {
      throw new Error('Latest comparisons response contains an invalid comparison.')
    }

    return {
      id: _id,
      phone1: validateComparisonPhone(phone1),
      phone2: validateComparisonPhone(phone2),
    }
  })
}

function validateComparisonPhone(
  phone: NonNullable<LatestComparisonsResponse['data']>[number]['phone1'],
): LatestComparisonPhone {
  const { name, price, score, image, slug } = phone ?? {}

  if (!name || !price || !score || !image || !slug) {
    throw new Error('Latest comparisons response contains an invalid phone.')
  }

  return { name, price, score, image, slug }
}

export async function getLatestArticles(limit = 4): Promise<Article[]> {
  return articles.slice(0, limit)
}

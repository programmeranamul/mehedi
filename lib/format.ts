const priceFormatter = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 })
const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

export function formatPrice(value: number) {
  return `৳ ${priceFormatter.format(value)}`
}

export function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso))
}

export function formatToBRL(price: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(price)
}

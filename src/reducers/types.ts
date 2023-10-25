export interface ICoffee {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export interface CartState {
  coffees: ICoffee[]
}

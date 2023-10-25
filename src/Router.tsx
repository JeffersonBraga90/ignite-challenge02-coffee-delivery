import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { ConfirmOrder } from './pages/ConfirmOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}

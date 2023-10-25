import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { OrderContextProvider } from './contexts/OrderContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <OrderContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </OrderContextProvider>
      </CoffeeContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

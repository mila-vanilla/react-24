import { Footer, Header } from '@/components'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/redux/index'
import { AuthProvider } from '@/features/auth/index.js'
import { ThemeProvider } from '@/features/themes/index.js'

export const DefaultLayout = () => {
  return (
    <Provider store={ store }>
      <AuthProvider>
        <ThemeProvider>
          <div>
            <div id="modal-root" style={ { position: 'relative', zIndex: 2 } }/>
            <div>
              <Header/>
              <Outlet/>
              <Footer/>
            </div>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  )
}

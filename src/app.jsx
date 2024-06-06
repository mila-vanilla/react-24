import { Restaurants } from '@/components'
import { DefaultLayout } from '@/layouts'
import { ThemeProvider } from '@/features/themes'
import { AuthProvider } from '@/features/auth/index.js'
import { Provider } from 'react-redux'
import { store } from '@/redux'

export const App = () => {
  return (
    <div>
      <Provider store={ store }>
        <AuthProvider>
          <ThemeProvider>
            <DefaultLayout>
              <Restaurants
                tabIndex={ 0 }/>
            </DefaultLayout>
          </ThemeProvider>
        </AuthProvider>
      </Provider>

    </div>
  )
}

import { Restaurants } from '@/components'
import { restaurants } from '@/constants/mock.js'
import { DefaultLayout } from '@/layouts'
import { ThemeProvider } from '@/features/themes'
import { AuthProvider } from '@/features/auth/index.js'

export const App = () => {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider>
          <DefaultLayout>
            <Restaurants
              restaurants={ restaurants }
              tabIndex={ 0 }/>
          </DefaultLayout>
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

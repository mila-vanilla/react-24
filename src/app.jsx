import { Restaurants } from '@/components'
import { restaurants } from '@/constants/mock.js'
import { DefaultLayout } from '@/layouts'
import { ThemeProvider } from '@/features/themes'

export const App = () => {
  return (
    <div>
      <ThemeProvider>
        <DefaultLayout>
          <Restaurants
            restaurants={ restaurants }
            tabIndex={ 0 }/>
        </DefaultLayout>
      </ThemeProvider>
    </div>
  )
}

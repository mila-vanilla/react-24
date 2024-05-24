import { Restaurants } from '@/components'
import { restaurants } from '@/constants/mock.js'
import { DefaultLayout } from '@/layouts'

export const App = () => {
  return (
    <div>
      <DefaultLayout>
        <Restaurants
          restaurants={ restaurants }
          tabIndex={ 0 }/>
      </DefaultLayout>
    </div>
  )
}

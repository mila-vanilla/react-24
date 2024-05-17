import React from 'react'
import { Restaurant } from '@/components'
import { restaurants } from '@/constants/mock.js'
import { DefaultLayout } from '@/layouts'

export const App = () => {
  return (
    <div>
      <DefaultLayout>
        <div>
          { restaurants.map(restaurant => {
            return <Restaurant key={ restaurant.id } restaurant={ restaurant }/>
          }) }
        </div>
      </DefaultLayout>
    </div>
  )
}

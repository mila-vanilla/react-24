import { useState } from 'react'
import { Restaurant } from '@/components'

export const Restaurants = ({ restaurants, tabIndex }) => {
  const [activeTab, setActiveTab] = useState(Math.min(tabIndex, restaurants.length))

  if (!restaurants.length) {
    return 'No restaurants yet'
  }

  return (
    <>
      <ul>
        { restaurants.map((restaurant, idx) => {
          return (
            <li key={ restaurant.id } onClick={ () => setActiveTab(idx) }>
              <b>{ restaurant.name } </b>
            </li>
          )
        }) }
      </ul>

      <Restaurant restaurant={ restaurants[activeTab] }/>
    </>
  )
}
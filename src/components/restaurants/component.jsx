import { useState } from 'react'
import { Restaurant } from '@/components'

export const Restaurants = ({ list, tabIndex }) => {
  const [activeTab, setActiveTab] = useState(Math.min(tabIndex, list.length))

  if (!list.length) {
    return 'No restaurants yet'
  }

  return (
    <>
      <ul>
        { list.map((i, idx) => {
          return (
            <li key={ i.id } onClick={ () => setActiveTab(idx) }>
              <b>{ i.name } </b>
            </li>
          )
        }) }
      </ul>

      <Restaurant restaurant={ list[ activeTab ] }/>
    </>
  )
}

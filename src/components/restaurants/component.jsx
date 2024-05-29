import { useRef, useState } from 'react'
import { Restaurant, ScrollProgress } from '@/components'
import { useScrollProgress } from '@/hooks/useScrollProgress.js'

// For demo purpose
const STYLES = {
  height: '500px',
  overflow: 'auto',
  padding: '32px',
  margin: '32px 0',
  border: '3px solid grey',
  borderRadius: '16px'
}

export const Restaurants = ({ restaurants, tabIndex }) => {
  const [activeTab, setActiveTab] = useState(Math.min(tabIndex, restaurants.length))
  const scroller = useRef()
  const { scrollProgress } = useScrollProgress(scroller)

  if (!restaurants.length) {
    return 'No restaurants yet'
  }

  return (
    <div>
      <ScrollProgress progress={ scrollProgress }/>
      <ul>
        { restaurants.map((restaurant, idx) => {
          return (
            <li key={ restaurant.id } onClick={ () => setActiveTab(idx) }>
              <b>{ restaurant.name } </b>
            </li>
          )
        }) }
      </ul>
      <div ref={ scroller } style={ { ...STYLES } }>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
        <Restaurant restaurant={ restaurants[activeTab] }/>
      </div>

    </div>
  )
}

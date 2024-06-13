import { useSelector } from 'react-redux'
import { selectRestaurants } from '@/redux/entities/restaurant/selectors.js'

export const RestaurantTabLinks = ({ onTabClick }) => {
  const restaurants = useSelector(selectRestaurants)

  return (
    <ul>
      { Object.values(restaurants).map(({ name, id }) => {
        return (
          <li key={ id } onClick={ () => onTabClick(id) }>
            <b>{ name } </b>
          </li>
        )
      }) }
    </ul>
  )
}

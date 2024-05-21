import { Dish } from '@/components'

export const Menu = ({ menu }) => {
  return (
    <ul>
      {
        menu.map(dish => {
          return <li key={ dish.id }>
            <Dish dish={ dish }/>
          </li>
        })
      }
    </ul>
  )
}
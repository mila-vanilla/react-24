import { Dish } from '@/components'

export const Menu = ({ menu }) => {
  if (menu && menu.length) {
    return (
      <ul>
        { menu.map(dish => {
          return <li key={ dish.id }>
            <Dish dish={ dish }/>
          </li>
        }) }
      </ul>
    )
  }

  return (
    <div>
      There is no menu yet, but it’ll be coming soon :)
    </div>
  )
}

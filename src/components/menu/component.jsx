import { Dish } from '@/components'

export const Menu = ({ menuIds }) => {
  if (menuIds && menuIds.length) {
    return (
      <ul>
        { menuIds.map(id => {
          return <li key={ id }>
            <Dish dishId={ id }/>
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

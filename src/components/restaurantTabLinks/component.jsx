import { NavLink, useSearchParams } from 'react-router-dom'

export const RestaurantTabLinks = ({ onTabClick, restaurants }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchValue = searchParams.get('search') || ''

  return (
    <>
      <input
        value={ searchValue }
        onChange={ (event) => setSearchParams({ search: event.target.value }) }
      />

      <ul>
        { restaurants
          .filter(
            ({ name }) =>
              name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
          )
          .map(({ name, id }) => {
            return (
              <li key={ id } onClick={ () => onTabClick(id) }>
                <NavLink className={ ({ isActive }) =>
                  isActive ? '_active' : ''
                } to={ id }><b>{ name } </b></NavLink>

              </li>
            )
          }) }
      </ul>
    </>

  )
}

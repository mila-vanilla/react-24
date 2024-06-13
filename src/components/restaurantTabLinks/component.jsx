export const RestaurantTabLinks = ({ onTabClick, restaurants }) => {
  return (
    <ul>
      { restaurants.map(({ name, id }, index) => {
        return (
          <li key={ id } onClick={ () => onTabClick(index) }>
            <b>{ name } </b>
          </li>
        )
      }) }
    </ul>
  )
}

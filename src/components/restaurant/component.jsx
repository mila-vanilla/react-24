import { Menu, ReviewForm, Reviews } from '@/components'

export const Restaurant = ({ restaurant }) => {
  return (
    <div key={ restaurant.id }>
      <h2>{ restaurant.name }</h2>

      <h3>Menu</h3>
      <Menu menu={ restaurant.menu }/>

      <h3>Reviews</h3>
      <Reviews reviews={ restaurant.reviews }/>

      <div>
        <h3> Leave a review </h3>
        <ReviewForm/>
      </div>
    </div>
  )
}

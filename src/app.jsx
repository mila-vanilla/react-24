import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '@/pages/home.jsx'
import { RestaurantPage } from '@/pages/restaurants.jsx'
import { ContactsPage } from '@/pages/contacts.jsx'
import { DishPage } from '@/pages/dish.jsx'
import { DefaultLayout } from '@/layouts'
import { Menu, Restaurant, Reviews } from '@/components'
import { DishContainer } from '@/components/dish/container.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <DefaultLayout/>, children: [
      { index: true, element: <HomePage/> },
      { path: 'contacts', element: <ContactsPage/> },
      {
        path: 'restaurants', element: <RestaurantPage/>, children: [
          {
            path: ':restaurantId', element: <Restaurant/>, children: [
              { index: true, element: <Menu/> },
              { path: 'menu', index: true, element: <Menu/> },
              { path: 'reviews', element: <Reviews/> }
            ]
          }
        ]
      },
      {
        path: 'dish', element: <DishPage/>, children: [
          { path: ':dishId', element: <DishContainer /> }
        ]
      }
    ]
  },

])
export const App = () => {
  return (
    <RouterProvider router={ router }/>
  )
}

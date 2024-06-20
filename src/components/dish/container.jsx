import { useParams } from 'react-router-dom'
import { useGetDishByIdQuery } from '@/redux/service/api'
import { Dish } from './component'

export const DishContainer = () => {
  const { dishId } = useParams()
  const { data: dish } = useGetDishByIdQuery(dishId)

  return (
    <Dish dish={ dish }/>
  )
}

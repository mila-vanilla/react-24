import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const DishPage = () => {
  const { dishId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!dishId)
      navigate('/restaurants', { replace: true })
  }, [dishId])

  return (
    <Outlet/>
  )
}

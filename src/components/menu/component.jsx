import { useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo } from 'react'
import { getMenuByRestaurantId } from '@/redux/entities/dish/thunks/getMenuByRestaurantId'
import { Dish } from '@/components/index.js'
import { selectDishIds } from '@/redux/entities/dish/selectors'
import { REQUEST_STATUS } from '@/redux/ui/request/constants'
import { useLazyRequest } from '@/hooks/useLazyRequest'

export const Menu = ({ restaurantId }) => {
  const menu = useSelector(state => selectDishIds(state, restaurantId))

  const params = useMemo(() => {
    return { restaurantId }
  }, [restaurantId])

  const [fetchMenuStatus, fetchMenu] = useLazyRequest(
    getMenuByRestaurantId,
    params
  )

  const handleReFetch = useCallback(
    (forceReFetch = true) => fetchMenu({ restaurantId, forceReFetch }),
    [restaurantId]
  )

  useEffect(() => {
    handleReFetch(false)
  }, [handleReFetch])

  if (fetchMenuStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>
  }

  if (menu && menu.length) {
    return (
      <div>
        <button onClick={ () => handleReFetch() }>Refresh</button>
        <ul>
          { menu.map(id => {
            return <li key={ id }>
              { <Dish dishId={ id }/> }
            </li>
          }) }
        </ul>
      </div>

    )
  }
}

import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectRequestStatus } from '@/redux/ui/request/selectors'

export const useLazyRequest = (thunk) => {
  const [request, setRequest] = useState()
  const status = useSelector(state => {
    return selectRequestStatus(state, request?.requestId)
  })

  const dispatch = useDispatch()

  const makeRequest = useCallback((...params) => {
    setRequest(dispatch(thunk(...params)))
  }, [dispatch, thunk])

  return [status, makeRequest]
}

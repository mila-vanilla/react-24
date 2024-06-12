import { EditReviewForm, IconBox, Review } from '@/components'
import Rewrite from '@/assets/icons/rewrite.svg?react'
import styles from './editable-review.module.css'
import { useCallback, useEffect, useState } from 'react'

export const EditableReview = ({ review, isReviewsLoading }) => {
  const [isFormVisible, setFormVisibility] = useState(false)
  const [isReFetchInProgress, setReFetchStatus] = useState(null)

  if (!review) {
    return
  }

  useEffect(() => {
    if (!isReviewsLoading)
      setReFetchStatus(null)
  }, [isReviewsLoading])

  const handleSuccess = useCallback(() => {
    setReFetchStatus(true)
    setFormVisibility(false)
  }, [setFormVisibility])

  return (
    <>
      { !isFormVisible &&
        <div className={ styles.reviewCol }>
          {
            isReFetchInProgress && <div> Load you review...</div>
          }
          { !isReFetchInProgress && <Review review={ review }/> }
          <div onClick={ () => setFormVisibility(true) }>
            <IconBox
              width="16px"
              color={ '#909090' }>
              <Rewrite/>
            </IconBox>
          </div>
        </div>
      }

      { isFormVisible &&
        <div className={ styles.row }>
          <EditReviewForm review={ review } onSuccess={ () => handleSuccess() }/>
          <button onClick={ () => setFormVisibility(false) }>
            Cancel
          </button>
        </div>
      }
    </>

  )
}

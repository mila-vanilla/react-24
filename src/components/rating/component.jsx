import Star from '@/assets/icons/star.svg?react'
import styles from './rating.module.css'
import { IconBox } from '@/components/index.js'

export const Rating = ({ value, onChange }) => {
  return (
    <div className={ styles.box }>
      {
        Array.from({ length: 5 }).map((_, index) => {
          return (
            <div key={ index } onClick={ () => onChange(index + 1) }>
              <IconBox
                width="16px"
                color={ index < value ? '#FFC72C' : '#B8B8B8' }>
                <Star/>
              </IconBox>
            </div>
          )
        })
      }
    </div>
  )
}




import styles from './scrollProgress.module.css'

export const ScrollProgress = ({ progress }) => {
  return (
    <div className={ styles.box }>
      <div className={ styles.track }>
        <div className={ styles.line } style={ { width: `${ progress }%` } }></div>
      </div>
    </div>
  )
}

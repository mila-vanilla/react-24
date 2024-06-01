export const IconBox = ({ color = 'currentColor', width= '32px', height= null, children }) => {
  const styles = {
    color,
    width,
    height: height || width
  }
  return <div style={ { ... styles } }>{ children }</div>
}

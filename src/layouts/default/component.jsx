import { Footer, Header } from '@/components'

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div id="modal-root" style={ { position: 'relative', zIndex: 2 } }/>
      <div>
        <Header/>
        { children }
        <Footer/>
      </div>
    </div>
  )
}

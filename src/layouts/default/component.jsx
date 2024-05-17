import { Footer, Header } from '@/components'

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}

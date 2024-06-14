import { ThemeController } from '@/features/themes'
import { AuthController } from '@/features/auth/'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <header>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/restaurants'}>Restaurants</Link>
        <Link to={'/contacts'}>Contacts</Link>
      </div>
      <ThemeController/>
      <AuthController/>
    </header>
  )
}


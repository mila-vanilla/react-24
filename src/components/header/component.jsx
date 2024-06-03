import { ThemeController } from '@/features/themes'
import { AuthController } from '@/features/auth/'

export const Header = () => {

  return (
    <header>
      <ThemeController/>
      <AuthController/>
    </header>
  )
}


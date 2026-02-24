import { createContext, useContext, useState, useMemo, type ReactNode } from 'react'

interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
  language_code?: string
}

interface User {
  id: number
  name: string
  username: string
  avatar: string
}

interface AppContextType {
  user: User
  telegramUser: TelegramUser | null
  onboarded: boolean
  setOnboarded: (v: boolean) => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

function getTelegramUser(): TelegramUser | null {
  return window.Telegram?.WebApp?.initDataUnsafe?.user ?? null
}

function buildUser(tgUser: TelegramUser | null): User {
  if (tgUser) {
    const name = [tgUser.first_name, tgUser.last_name].filter(Boolean).join(' ')
    return {
      id: tgUser.id,
      name,
      username: tgUser.username ? `@${tgUser.username}` : '',
      avatar: tgUser.photo_url ?? '',
    }
  }

  return {
    id: 0,
    name: 'User',
    username: '',
    avatar: '',
  }
}

const AppContext = createContext<AppContextType>(null!)

export function AppProvider({ children }: { children: ReactNode }) {
  const [onboarded, setOnboarded] = useState(false)
  const [activeTab, setActiveTab] = useState('main')

  const telegramUser = useMemo(() => getTelegramUser(), [])
  const user = useMemo(() => buildUser(telegramUser), [telegramUser])

  return (
    <AppContext.Provider value={{
      user,
      telegramUser,
      onboarded,
      setOnboarded,
      activeTab,
      setActiveTab,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)

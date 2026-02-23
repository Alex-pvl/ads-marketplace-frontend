import { createContext, useContext, useState, type ReactNode } from 'react'

interface User {
  name: string
  username: string
  avatar: string
  balance: number
  earned: number
}

interface AppContextType {
  user: User
  onboarded: boolean
  setOnboarded: (v: boolean) => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

const defaultUser: User = {
  name: 'Maxim',
  username: '@tonsecurer',
  avatar: 'https://www.figma.com/api/mcp/asset/7ce1a0be-ad2f-46e2-ab47-68ac6be4ec26',
  balance: 320,
  earned: 32913,
}

const AppContext = createContext<AppContextType>({
  user: defaultUser,
  onboarded: false,
  setOnboarded: () => {},
  activeTab: 'main',
  setActiveTab: () => {},
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [onboarded, setOnboarded] = useState(false)
  const [activeTab, setActiveTab] = useState('main')

  return (
    <AppContext.Provider value={{
      user: defaultUser,
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

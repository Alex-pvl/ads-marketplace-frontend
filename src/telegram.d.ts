interface TelegramWebApp {
  expand: () => void
  close: () => void
  disableVerticalSwipes: () => void
  ready: () => void
  initData: string
  initDataUnsafe: {
    user?: {
      id: number
      first_name: string
      last_name?: string
      username?: string
      photo_url?: string
      language_code?: string
    }
  }
  colorScheme: 'light' | 'dark'
  themeParams: Record<string, string>
  viewportHeight: number
  viewportStableHeight: number
}

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp
  }
}

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import OnboardingPage from './pages/OnboardingPage'
import MainPage from './pages/MainPage'
import MyAdsPage from './pages/MyAdsPage'
import ProfilePage from './pages/ProfilePage'
import ChannelStatsPage from './pages/ChannelStatsPage'
import MyAdsPostPage from './pages/MyAdsPostPage'
import MyChannelsPage from './pages/MyChannelsPage'
import LandingPage from './pages/LandingPage'
import { AppProvider } from './context/AppContext'
import { ErrorBoundary } from './components/ErrorBoundary'

const isTelegramWebApp =
  !!window.Telegram?.WebApp?.initData && window.Telegram.WebApp.initData.length > 0

const manifestUrl = new URL('/tonconnect-manifest.json', window.location.origin).toString()

export default function App() {
  if (!isTelegramWebApp) {
    return <LandingPage />
  }

  return (
    <ErrorBoundary>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <AppProvider>
          <div className="app-shell">
            <HashRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/onboarding" replace />} />
                <Route path="/onboarding" element={<OnboardingPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/my-ads" element={<MyAdsPage />} />
                <Route path="/my-ads/:id" element={<MyAdsPostPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/channels" element={<MyChannelsPage />} />
                <Route path="/channels/:id" element={<ChannelStatsPage />} />
              </Routes>
            </HashRouter>
          </div>
        </AppProvider>
      </TonConnectUIProvider>
    </ErrorBoundary>
  )
}

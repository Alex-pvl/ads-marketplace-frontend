import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import OnboardingPage from './pages/OnboardingPage'
import MainPage from './pages/MainPage'
import MyAdsPage from './pages/MyAdsPage'
import ProfilePage from './pages/ProfilePage'
import ChannelStatsPage from './pages/ChannelStatsPage'
import MyAdsPostPage from './pages/MyAdsPostPage'
import MyChannelsPage from './pages/MyChannelsPage'
import { AppProvider } from './context/AppContext'

export default function App() {
  return (
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
  )
}

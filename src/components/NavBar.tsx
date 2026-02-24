import { useNavigate, useLocation } from 'react-router-dom'

const ACTIVE_COLOR = '#1689ff'
const INACTIVE_COLOR = 'rgba(221,221,221,0.4)'

function DashboardIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1" y="1" width="7.5" height="7.5" rx="2" fill={color} />
      <rect x="11.5" y="1" width="7.5" height="7.5" rx="2" fill={color} />
      <rect x="1" y="11.5" width="7.5" height="7.5" rx="2" fill={color} />
      <rect x="11.5" y="11.5" width="7.5" height="7.5" rx="2" fill={color} />
    </svg>
  )
}

function MegaphoneIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 3C18 3 20 5 20 12C20 19 18 21 18 21M13.5 6C13.5 6 15 7.5 15 12C15 16.5 13.5 18 13.5 18M4 9H7L12 5V19L7 15H4C3.45 15 3 14.55 3 14V10C3 9.45 3.45 9 4 9Z"
        fill={color}
      />
    </svg>
  )
}

function ProfileIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" fill={color} />
      <path
        d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20V21H4V20Z"
        fill={color}
      />
    </svg>
  )
}

const tabIcons: Record<string, (props: { color: string }) => JSX.Element> = {
  main: DashboardIcon,
  'my-ads': MegaphoneIcon,
  profile: ProfileIcon,
}

const tabs = [
  { id: 'main', label: 'Main', path: '/main', matchPaths: ['/main'] },
  { id: 'my-ads', label: 'My ads', path: '/my-ads', matchPaths: ['/my-ads'] },
  { id: 'profile', label: 'Profile', path: '/profile', matchPaths: ['/profile', '/channels'] },
]

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const activeTab = tabs.find(t =>
    t.matchPaths.some(p => location.pathname.startsWith(p))
  )?.id

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 pointer-events-none" style={{ zIndex: 100 }}>
      <div
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #111 20%, transparent 100%)' }}
      />
      <div
        className="relative pointer-events-auto flex items-center p-1 rounded-full"
        style={{ background: '#161616', width: 239, height: 62 }}
      >
        {tabs.map(tab => {
          const isActive = tab.id === activeTab
          const IconComponent = tabIcons[tab.id]
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center gap-1 rounded-full transition-all flex-1"
              style={{
                height: 54,
                background: isActive ? '#313132' : 'transparent',
              }}
            >
              <IconComponent color={isActive ? ACTIVE_COLOR : INACTIVE_COLOR} />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? ACTIVE_COLOR : INACTIVE_COLOR,
                  lineHeight: '12px',
                }}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

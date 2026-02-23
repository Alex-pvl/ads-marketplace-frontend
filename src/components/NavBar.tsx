import { useNavigate, useLocation } from 'react-router-dom'

const dashboardIcon = 'https://www.figma.com/api/mcp/asset/3b88dd13-d905-445e-a8ac-c939c4363153'
const megaphoneIcon = 'https://www.figma.com/api/mcp/asset/00abee7a-40dc-4085-846b-1f7349360953'
const profileIcon = 'https://www.figma.com/api/mcp/asset/c2b0ecd2-0523-4c22-bedb-72da562a5592'

const tabs = [
  { id: 'main', label: 'Main', icon: dashboardIcon, path: '/main' },
  { id: 'my-ads', label: 'My ads', icon: megaphoneIcon, path: '/my-ads' },
  { id: 'profile', label: 'Profile', icon: profileIcon, path: '/profile' },
]

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const activeTab = tabs.find(t => location.pathname.startsWith(t.path))?.id || 'main'

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 pointer-events-none" style={{ zIndex: 100 }}>
      {/* Gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #111 20%, transparent 100%)' }}
      />
      {/* Nav pill */}
      <div
        className="relative pointer-events-auto flex items-center p-1 rounded-full"
        style={{ background: '#161616', width: 239, height: 62 }}
      >
        {tabs.map(tab => {
          const isActive = tab.id === activeTab
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
              <img
                src={tab.icon}
                alt={tab.label}
                style={{
                  width: tab.id === 'main' ? 20 : 24,
                  height: tab.id === 'main' ? 20 : 24,
                  opacity: isActive ? 1 : 0.4,
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  color: isActive ? '#1689ff' : 'rgba(221,221,221,0.4)',
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

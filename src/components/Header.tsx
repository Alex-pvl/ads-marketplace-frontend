import { useRef } from 'react'
import { useTonConnectUI } from '@tonconnect/ui-react'
import { useApp } from '../context/AppContext'
import { useTonBalance } from '../hooks/useTonBalance'

const tonIcon = 'https://www.figma.com/api/mcp/asset/a28063f9-dc1a-426b-a92a-701825e0c0a9'
const plusIcon = 'https://www.figma.com/api/mcp/asset/f41a4ff2-78f9-44f1-9853-82d803a2ccd5'

function formatBalance(val: number): string {
  if (val >= 1000) return val.toLocaleString('ru-RU', { maximumFractionDigits: 1 })
  return val.toLocaleString('ru-RU', { maximumFractionDigits: 2 })
}

interface HeaderProps {
  showBanner?: boolean
}

function SmallAvatar({ name, avatar }: { name: string; avatar: string }) {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name}
        className="w-full h-full object-cover"
      />
    )
  }

  const initial = name.charAt(0).toUpperCase()
  const hue = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `hsl(${hue}, 50%, 45%)` }}
    >
      <span style={{ color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
        {initial}
      </span>
    </div>
  )
}

export default function Header({ showBanner = true }: HeaderProps) {
  const { user } = useApp()
  const [tonConnectUI] = useTonConnectUI()
  const { balance, loading, connected } = useTonBalance()

  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleWalletClick = () => {
    if (!connected) {
      tonConnectUI.openModal()
    }
  }

  const handlePointerDown = () => {
    if (!connected) return
    longPressTimer.current = setTimeout(() => {
      tonConnectUI.disconnect()
    }, 600)
  }

  const handlePointerUp = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
  }

  return (
    <div className="px-4 pt-4 flex flex-col gap-3.5">
      {/* User row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="rounded-xl overflow-hidden flex-shrink-0"
            style={{ width: 36, height: 36 }}
          >
            <SmallAvatar name={user.name} avatar={user.avatar} />
          </div>
          <div className="flex flex-col gap-1.5" style={{ width: 60 }}>
            <span className="text-white font-bold leading-none" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.42px' }}>
              {user.name}
            </span>
            {user.username && (
              <span className="text-[#5f6473] font-semibold leading-none" style={{ fontSize: 10, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.3px' }}>
                {user.username}
              </span>
            )}
          </div>
        </div>

        {/* Balance / Connect wallet */}
        <button
          onClick={handleWalletClick}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="flex items-center gap-1 rounded-full px-2.5 py-2"
          style={{
            background: connected ? 'rgba(0,157,255,0.1)' : 'rgba(255,255,255,0.08)',
            height: 36,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {connected ? (
            <>
              <div
                className="rounded-full overflow-hidden flex-shrink-0"
                style={{ width: 18, height: 18, background: '#35aff1' }}
              >
                <img src={tonIcon} alt="TON" className="w-full h-full" style={{ padding: '27% 23% 19% 23%', boxSizing: 'border-box' }} />
              </div>
              <span className="text-white font-bold flex-1" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.24px' }}>
                {loading && balance === null ? '...' : `${formatBalance(balance ?? 0)} TON`}
              </span>
              <img src={plusIcon} alt="Add" style={{ width: 19, height: 19 }} />
            </>
          ) : (
            <span className="text-white font-semibold" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.24px' }}>
              Подключить кошелёк
            </span>
          )}
        </button>
      </div>

      {showBanner && <PromoBanner />}
    </div>
  )
}

const bannerRocket = 'https://www.figma.com/api/mcp/asset/363c34df-cc43-46b0-b71e-c8a9a1e53cb2'
const chevronRight = 'https://www.figma.com/api/mcp/asset/51ae4085-09e7-46d5-a1dd-7d88243a507e'

function PromoBanner() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex items-center"
      style={{ background: '#0084ff', height: 80 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img src={bannerRocket} alt="" className="absolute right-0 top-0 h-full object-cover" style={{ width: 'auto' }} />
      </div>
      <div className="relative z-10 pl-4 flex flex-col gap-2">
        <span className="text-white font-bold leading-tight" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.42px' }}>
          Покупай и продавай рекламу
        </span>
        <button className="flex items-center gap-1.5">
          <span className="text-white opacity-50 font-semibold" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif' }}>
            Стать рекламодателем
          </span>
          <img src={chevronRight} alt="" style={{ width: 14, height: 14, transform: 'rotate(90deg)', opacity: 0.5 }} />
        </button>
      </div>
    </div>
  )
}

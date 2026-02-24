import { useNavigate } from 'react-router-dom'
import { useTonConnectUI } from '@tonconnect/ui-react'
import NavBar from '../components/NavBar'
import TonAmount from '../components/TonAmount'
import { transactions, myChannels } from '../data/mockData'
import { useApp } from '../context/AppContext'
import { useTonBalance } from '../hooks/useTonBalance'

const megaphoneIcon = 'https://www.figma.com/api/mcp/asset/99dd1067-532e-43ab-8aee-b1c30f7a3648'
const verifyIcon = 'https://www.figma.com/api/mcp/asset/1f928ede-4282-4fd4-9986-f92586f1b33f'
const tonIconCircle = 'https://www.figma.com/api/mcp/asset/a28063f9-dc1a-426b-a92a-701825e0c0a9'
const plusIcon = 'https://www.figma.com/api/mcp/asset/384f3d2f-858e-4ae0-85d3-cdcccc2edf7b'
const chevronRight = 'https://www.figma.com/api/mcp/asset/40290abe-c988-4739-88c6-c3ec210e1904'
const chevronRight2 = 'https://www.figma.com/api/mcp/asset/84e32dc9-e09f-4b60-8112-2137134b19fd'
const arrowUpLeft = 'https://www.figma.com/api/mcp/asset/2fce9e51-ff31-4062-b48c-36dea3a8b912'
const historyIcon = 'https://www.figma.com/api/mcp/asset/ccf6a924-4016-4c51-b5e4-200bffef3ac9'
const minusIcon = 'https://www.figma.com/api/mcp/asset/508f118e-cb00-457c-b413-81815400e474'

function formatBalance(val: number): string {
  if (val >= 1000) return val.toLocaleString('ru-RU', { maximumFractionDigits: 1 })
  return val.toLocaleString('ru-RU', { maximumFractionDigits: 2 })
}

function UserAvatar({ name, avatar, size = 120 }: { name: string; avatar: string; size?: number }) {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    )
  }

  const initials = name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const hue = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: `hsl(${hue}, 50%, 45%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          color: '#fff',
          fontSize: size * 0.36,
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.5px',
        }}
      >
        {initials}
      </span>
    </div>
  )
}

export default function ProfilePage() {
  const { user } = useApp()
  const navigate = useNavigate()
  const [tonConnectUI] = useTonConnectUI()
  const { balance, loading, connected } = useTonBalance()

  const handleWalletClick = () => {
    if (!connected) {
      tonConnectUI.openModal()
    }
  }

  const grouped = transactions.reduce((acc, tx) => {
    if (!acc[tx.date]) acc[tx.date] = []
    acc[tx.date].push(tx)
    return acc
  }, {} as Record<string, typeof transactions>)

  return (
    <div className="page">
      <div className="content-scroll">
        <div className="flex flex-col pb-28">
          {/* Stars background gradient */}
          <div
            className="absolute top-0 left-0 right-0 opacity-30 pointer-events-none"
            style={{ height: 843, background: 'linear-gradient(to bottom, #636363, transparent)' }}
          />

          {/* Avatar & name */}
          <div className="relative z-10 flex flex-col items-center gap-3.5 pt-16 px-4">
            <div className="relative" style={{ width: 120, height: 125 }}>
              {/* Badge */}
              <div
                className="absolute bottom-0 right-1/2 translate-x-1/2 flex items-center justify-center rounded-xl z-10"
                style={{ background: '#0084ff', padding: '5px 6px', bottom: 0 }}
              >
                <img src={megaphoneIcon} alt="seller" style={{ width: 12, height: 12 }} />
              </div>
              {/* Avatar */}
              <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden' }}>
                <UserAvatar name={user.name} avatar={user.avatar} size={120} />
              </div>
            </div>

            {/* Name + verify */}
            <div className="flex flex-col items-center gap-3.5">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-semibold" style={{ fontSize: 20, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.4px' }}>
                  {user.name}
                </span>
                <img src={verifyIcon} alt="verified" style={{ width: 13.6, height: 13.6 }} />
              </div>

              {/* Wallet / Balance */}
              <button
                onClick={handleWalletClick}
                className="flex items-center gap-1 rounded-full px-2.5"
                style={{
                  background: connected ? 'rgba(0,157,255,0.1)' : 'rgba(255,255,255,0.08)',
                  height: 42,
                  minWidth: 144,
                  border: 'none',
                  cursor: connected ? 'default' : 'pointer',
                }}
              >
                {connected ? (
                  <>
                    <div
                      className="rounded-full overflow-hidden flex-shrink-0"
                      style={{ width: 18, height: 18, background: '#35aff1' }}
                    >
                      <img src={tonIconCircle} alt="TON" className="w-full h-full" style={{ padding: '27% 23% 19% 23%', boxSizing: 'border-box' }} />
                    </div>
                    <span className="text-white font-bold flex-1" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.28px' }}>
                      {loading && balance === null ? '...' : `${formatBalance(balance ?? 0)} TON`}
                    </span>
                    <img src={plusIcon} alt="Add" style={{ width: 19, height: 19 }} />
                  </>
                ) : (
                  <span className="text-white font-bold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.28px', padding: '0 8px' }}>
                    Подключить кошелёк
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="relative z-10 px-4 mt-4 flex items-stretch gap-2">
            {/* Earned card */}
            <div
              className="flex flex-col rounded-2xl px-3 py-4 flex-1"
              style={{ background: '#101010' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold" style={{ fontSize: 12, color: '#969696', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.24px' }}>
                  Заработано
                </span>
                <div className="flex items-center justify-center" style={{ width: 15, height: 15 }}>
                  <img src={chevronRight} alt="→" style={{ width: 15, height: 15, transform: 'rotate(90deg)' }} />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold" style={{ fontSize: 24, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.48px' }}>
                  32 913
                </span>
                <div
                  className="rounded-full flex-shrink-0"
                  style={{ width: 18, height: 18, background: '#35aff1', overflow: 'hidden' }}
                >
                  <img src={tonIconCircle} alt="TON" className="w-full h-full" style={{ padding: '27% 23% 19% 23%', boxSizing: 'border-box' }} />
                </div>
              </div>
              {/* Growth badge */}
              <div
                className="flex items-center gap-1 rounded-2xl px-2.5 py-0.5 mt-2 self-start"
                style={{ background: 'rgba(153,255,226,0.1)' }}
              >
                <span className="font-semibold" style={{ fontSize: 10, color: '#99ffe2', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.3px' }}>
                  +320%
                </span>
                <div style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
                  <img src={arrowUpLeft} alt="↑" style={{ width: 12, height: 12 }} />
                </div>
              </div>
            </div>

            {/* My channels card */}
            <div
              className="flex flex-col rounded-2xl px-3 py-4 flex-1"
              style={{ background: '#101010' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold" style={{ fontSize: 12, color: '#969696', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.24px' }}>
                  Мои каналы
                </span>
                <button onClick={() => navigate('/channels')}>
                  <img src={chevronRight2} alt="→" style={{ width: 15, height: 15, transform: 'rotate(90deg)' }} />
                </button>
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                {myChannels.slice(0, 2).map(ch => (
                  <div key={ch.id} className="rounded-xl overflow-hidden flex-shrink-0" style={{ width: 43, height: 43 }}>
                    <img src={ch.avatar} alt={ch.name} className="w-full h-full object-cover" />
                  </div>
                ))}
                {myChannels.length > 2 && (
                  <div className="rounded-xl overflow-hidden flex-shrink-0 relative" style={{ width: 43, height: 43 }}>
                    <img src={myChannels[2].avatar} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 rounded-xl" style={{ background: 'rgba(30,33,42,0.8)' }} />
                    <span
                      className="absolute inset-0 flex items-center justify-center text-white font-semibold"
                      style={{ fontSize: 18, fontFamily: 'Inter, sans-serif' }}
                    >
                      +{myChannels.length - 2}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className="relative z-10 px-4 mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={historyIcon} alt="history" style={{ width: 20, height: 20 }} />
              <span className="text-white font-semibold" style={{ fontSize: 20, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.4px' }}>
                Последние действия
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ background: '#101010' }}>
              <div className="flex flex-col px-4 py-4.5 gap-6">
                {Object.entries(grouped).map(([date, txs]) => (
                  <div key={date} className="flex flex-col gap-3">
                    <span className="font-semibold" style={{ fontSize: 12, color: '#969696', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.24px' }}>
                      {date}
                    </span>
                    <div className="flex flex-col gap-3">
                      {txs.map(tx => (
                        <div key={tx.id}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="rounded-xl overflow-hidden flex-shrink-0" style={{ width: 40, height: 40 }}>
                                <img src={tx.channelAvatar} alt="" className="w-full h-full object-cover" />
                              </div>
                              <div className="flex flex-col gap-2">
                                <span className="text-white font-semibold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.28px' }}>
                                  {tx.title}
                                </span>
                                <span className="font-semibold" style={{ fontSize: 10, color: '#969696', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.2px' }}>
                                  {tx.subtitle}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <img
                                src={minusIcon}
                                alt="−"
                                style={{ width: 16, height: 16, opacity: tx.type === 'sell' ? 0 : 1 }}
                              />
                              <TonAmount amount={tx.amount} size="sm" />
                            </div>
                          </div>
                          <div className="mt-2.5 h-px" style={{ background: 'rgba(150,150,150,0.1)' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  )
}

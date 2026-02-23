import { useNavigate } from 'react-router-dom'
import { myChannels } from '../data/mockData'
import NavBar from '../components/NavBar'

const backIcon = 'https://www.figma.com/api/mcp/asset/de95db85-5b21-4980-8c12-63c6912229db'
const verifyIcon = 'https://www.figma.com/api/mcp/asset/1f928ede-4282-4fd4-9986-f92586f1b33f'
const tonIcon = 'https://www.figma.com/api/mcp/asset/ff03a5ee-f74e-44ca-83fc-ad7748f41863'
const arrowRight = 'https://www.figma.com/api/mcp/asset/34ca4291-f0af-4524-9ef9-8a42c5302bc9'
const plusWhite = 'https://www.figma.com/api/mcp/asset/f41a4ff2-78f9-44f1-9853-82d803a2ccd5'

export default function MyChannelsPage() {
  const navigate = useNavigate()

  return (
    <div className="page" style={{ background: '#000' }}>
      <div className="content-scroll">
        <div className="flex flex-col pb-28">
          {/* Header */}
          <div className="px-4 pt-4 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center rounded-xl"
                style={{ width: 36, height: 36, background: '#101010' }}
              >
                <img src={backIcon} alt="back" style={{ width: 18, height: 18, transform: 'rotate(180deg)' }} />
              </button>
              <span className="text-white font-semibold" style={{ fontSize: 18, fontFamily: 'Inter, sans-serif' }}>
                Мои каналы
              </span>
            </div>
            <button
              className="flex items-center justify-center rounded-xl"
              style={{ width: 36, height: 36, background: '#0084ff' }}
            >
              <img src={plusWhite} alt="add" style={{ width: 20, height: 20 }} />
            </button>
          </div>

          {/* Channel list */}
          <div className="px-4 flex flex-col gap-2 mt-2">
            {myChannels.map(ch => (
              <div
                key={ch.id}
                className="flex items-center justify-between rounded-2xl p-3 cursor-pointer"
                style={{ background: '#101010' }}
                onClick={() => navigate(`/channels/${ch.id}`)}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl overflow-hidden flex-shrink-0" style={{ width: 52, height: 52 }}>
                    <img src={ch.avatar} alt={ch.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1">
                      <span className="text-white font-bold" style={{ fontSize: 15, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.3px' }}>
                        {ch.name}
                      </span>
                      {ch.verified && (
                        <img src={verifyIcon} alt="verified" style={{ width: 13.6, height: 13.6 }} />
                      )}
                    </div>
                    <span className="font-semibold" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                      {ch.username}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                        {formatNumber(ch.subscribers)} подписчиков
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1">
                    <span className="text-white font-semibold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
                      {ch.price}
                    </span>
                    <img src={tonIcon} alt="TON" style={{ width: 14, height: 14 }} />
                  </div>
                  <img src={arrowRight} alt="→" style={{ width: 16, height: 16, opacity: 0.5 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Add channel CTA */}
          <div className="px-4 mt-4">
            <button
              className="w-full flex items-center justify-center gap-2 rounded-2xl"
              style={{ background: '#101010', height: 52, border: '1px dashed rgba(255,255,255,0.1)' }}
            >
              <span className="text-white opacity-50 font-semibold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
                + Добавить канал
              </span>
            </button>
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  )
}

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return String(n)
}

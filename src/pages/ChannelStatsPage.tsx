import { useNavigate, useParams } from 'react-router-dom'
import { channels } from '../data/mockData'

const backIcon = 'https://www.figma.com/api/mcp/asset/de95db85-5b21-4980-8c12-63c6912229db'
const tonIcon = 'https://www.figma.com/api/mcp/asset/ff03a5ee-f74e-44ca-83fc-ad7748f41863'
const verifyIcon = 'https://www.figma.com/api/mcp/asset/1f928ede-4282-4fd4-9986-f92586f1b33f'
const calendarIcon = 'https://www.figma.com/api/mcp/asset/2ae768d6-aca5-4e3e-bcc3-da278ab46843'
const statsIcon = 'https://www.figma.com/api/mcp/asset/3b88dd13-d905-445e-a8ac-c939c4363153'

export default function ChannelStatsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const channel = channels.find(c => c.id === id) || channels[0]

  const stats = [
    { label: 'Подписчиков', value: formatNumber(channel.subscribers) },
    { label: 'Средний охват', value: formatNumber(channel.avgReach) },
    { label: 'ERR', value: '4.2%' },
    { label: 'Постов / нед.', value: '14' },
  ]

  return (
    <div className="page" style={{ background: '#000' }}>
      <div className="content-scroll">
        <div className="flex flex-col pb-10">
          {/* Header */}
          <div className="px-4 pt-4 pb-3 flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center rounded-xl"
              style={{ width: 36, height: 36, background: '#101010' }}
            >
              <img src={backIcon} alt="back" style={{ width: 18, height: 18, transform: 'rotate(180deg)' }} />
            </button>
            <span className="text-white font-semibold flex-1" style={{ fontSize: 18, fontFamily: 'Inter, sans-serif' }}>
              Статистика канала
            </span>
          </div>

          {/* Channel card */}
          <div className="px-4">
            <div className="rounded-2xl overflow-hidden relative" style={{ height: 200 }}>
              <img src={channel.avatar} alt={channel.name} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold" style={{ fontSize: 20, fontFamily: 'Inter, sans-serif' }}>
                    {channel.name}
                  </span>
                  {channel.verified && (
                    <img src={verifyIcon} alt="verified" style={{ width: 16, height: 16 }} />
                  )}
                </div>
                <span className="font-semibold" style={{ fontSize: 14, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                  {channel.username}
                </span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="px-4 mt-4">
            <div
              className="flex items-center justify-between rounded-2xl px-4 py-4"
              style={{ background: '#101010' }}
            >
              <span className="font-semibold" style={{ fontSize: 14, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                Стоимость размещения
              </span>
              <div className="flex items-center gap-1">
                <span className="text-white font-semibold" style={{ fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
                  {channel.price}
                </span>
                <img src={tonIcon} alt="TON" style={{ width: 16, height: 16 }} />
                <span className="font-medium opacity-70 text-white" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
                  / 24hr
                </span>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="px-4 mt-3 grid grid-cols-2 gap-2">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="flex flex-col gap-1.5 rounded-2xl p-4"
                style={{ background: '#101010' }}
              >
                <span className="font-semibold" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </span>
                <span className="text-white font-bold" style={{ fontSize: 20, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.4px' }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Recent posts section */}
          <div className="px-4 mt-4">
            <div className="flex items-center gap-2 mb-3">
              <img src={statsIcon} alt="stats" style={{ width: 18, height: 18 }} />
              <span className="text-white font-semibold" style={{ fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
                Последние посты
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl p-3"
                  style={{ background: '#101010' }}
                >
                  <div className="rounded-xl overflow-hidden flex-shrink-0" style={{ width: 48, height: 48 }}>
                    <img src={channel.avatar} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="text-white font-semibold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
                      Пост #{i}
                    </span>
                    <span className="font-semibold" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                      Охват: {formatNumber(Math.floor(channel.avgReach * (0.8 + i * 0.1)))}
                    </span>
                  </div>
                  <span className="font-semibold" style={{ fontSize: 10, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                    {i} дн. назад
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Buy ad button */}
          <div className="px-4 mt-6">
            <button
              className="w-full flex items-center justify-center gap-2 rounded-2xl"
              style={{ background: '#0084ff', height: 52 }}
              onClick={() => navigate('/my-ads')}
            >
              <img src={calendarIcon} alt="" style={{ width: 20, height: 20 }} />
              <span className="text-white font-semibold" style={{ fontSize: 16, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.32px' }}>
                Купить рекламу
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return String(n)
}

import { useNavigate, useParams } from 'react-router-dom'
import { myAds } from '../data/mockData'
import { statusConfig } from '../components/AdCard'

const backIcon = 'https://www.figma.com/api/mcp/asset/de95db85-5b21-4980-8c12-63c6912229db'
const tonIconCircle = 'https://www.figma.com/api/mcp/asset/a28063f9-dc1a-426b-a92a-701825e0c0a9'
const clockIcon = 'https://www.figma.com/api/mcp/asset/aeb0a273-0e6e-44e0-9e64-e116e3cc769f'
const calendarIcon = 'https://www.figma.com/api/mcp/asset/2ae768d6-aca5-4e3e-bcc3-da278ab46843'
const trashIcon = 'https://www.figma.com/api/mcp/asset/c86c8621-0ace-4dcc-ac53-e2135649b18f'
const infoIcon = 'https://www.figma.com/api/mcp/asset/578eec5c-e205-443d-9ea5-0034abfc41ec'
const verifyIcon = 'https://www.figma.com/api/mcp/asset/1f928ede-4282-4fd4-9986-f92586f1b33f'
const previewIcon = 'https://www.figma.com/api/mcp/asset/2fce9e51-ff31-4062-b48c-36dea3a8b912'

export default function MyAdsPostPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const ad = myAds.find(a => a.id === id) || myAds[0]
  const status = statusConfig[ad.status]

  const details = [
    { icon: clockIcon, label: 'Срок размещения', value: ad.duration },
    { icon: tonIconCircle, label: 'Сумма', value: `${ad.price} TON`, hasTon: true },
    { icon: calendarIcon, label: 'Дата и время', value: ad.startDate },
    { icon: trashIcon, label: 'Время окончания', value: ad.endDate },
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
              Детали рекламы
            </span>
          </div>

          {/* Post image */}
          <div className="px-4">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 220 }}>
              <img src={ad.postImage} alt={ad.postTitle} className="w-full h-full object-cover" />
              {/* Preview badge */}
              <div
                className="absolute bottom-3 left-3 flex items-center gap-1 rounded-xl px-2 py-1.5"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}
              >
                <span className="text-white font-semibold" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif' }}>
                  Превью
                </span>
                <img src={previewIcon} alt="" style={{ width: 10, height: 10, transform: 'rotate(180deg) scaleY(-1)' }} />
              </div>
            </div>
          </div>

          {/* Post title & text */}
          <div className="px-4 mt-3 flex flex-col gap-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 18, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.36px' }}>
              {ad.postTitle}
            </span>
            <span className="font-semibold" style={{ fontSize: 13, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
              {ad.postText}
            </span>
          </div>

          {/* Channel info */}
          <div className="px-4 mt-3">
            <div
              className="flex items-center gap-3 rounded-2xl p-3"
              style={{ background: '#101010' }}
            >
              <div className="rounded-xl overflow-hidden flex-shrink-0" style={{ width: 40, height: 40 }}>
                <img src={ad.channelAvatar} alt={ad.channelName} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-8 flex-1">
                <div className="flex flex-col gap-1.5">
                  <span className="font-semibold" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                    Канал
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-semibold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
                      {ad.channelName}
                    </span>
                    <img src={verifyIcon} alt="verified" style={{ width: 13.6, height: 13.6 }} />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-white font-semibold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
                      {formatNumber(ad.subscribers)}
                    </span>
                    <span className="font-semibold" style={{ fontSize: 10, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                      Подписчики
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-white font-semibold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
                      {formatNumber(ad.avgReach)}
                    </span>
                    <span className="font-semibold" style={{ fontSize: 10, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                      Сред. охват
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="px-4 mt-3">
            <div
              className="flex items-center gap-2 rounded-2xl px-3 py-3"
              style={{ background: status.bg }}
            >
              <img src={clockIcon} alt="" style={{ width: 16, height: 16 }} />
              <span className="font-semibold" style={{ fontSize: 14, color: status.color, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.28px' }}>
                {status.label}
              </span>
            </div>
          </div>

          {/* Placement info */}
          <div className="px-4 mt-3">
            <div className="flex items-center gap-2 mb-3">
              <img src={infoIcon} alt="info" style={{ width: 18, height: 18 }} />
              <span className="text-white font-semibold" style={{ fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
                Условия размещения
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ background: '#101010' }}>
              <div className="px-3 pt-3">
                <span className="font-semibold" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.3px' }}>
                  ИНФОРМАЦИЯ О РАЗМЕЩЕНИИ
                </span>
              </div>
              <div className="h-px mt-2" style={{ background: 'rgba(255,255,255,0.05)' }} />
              <div className="flex flex-col px-3 pb-3">
                {details.map((detail, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-2">
                        <img src={detail.icon} alt="" style={{ width: 14, height: 14 }} />
                        <span className="font-semibold" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
                          {detail.label}
                        </span>
                      </div>
                      <span className="text-white font-semibold" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif' }}>
                        {detail.value}
                      </span>
                    </div>
                    {i < details.length - 1 && (
                      <div className="h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cancel button (only for pending) */}
          {ad.status === 'pending' && (
            <div className="px-4 mt-4">
              <button
                className="w-full flex items-center justify-center gap-2 rounded-2xl"
                style={{ background: 'rgba(255,68,68,0.1)', height: 52 }}
                onClick={() => navigate(-1)}
              >
                <span className="font-semibold" style={{ fontSize: 16, color: '#ff4444', fontFamily: 'Inter, sans-serif' }}>
                  Отменить размещение
                </span>
              </button>
            </div>
          )}
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

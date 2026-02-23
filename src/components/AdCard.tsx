import { useNavigate } from 'react-router-dom'
import type { Ad } from '../data/mockData'

const tonIcon = 'https://www.figma.com/api/mcp/asset/1b91d937-929b-4a17-a23d-4df1c2d7478e'
const arrowRight = 'https://www.figma.com/api/mcp/asset/34ca4291-f0af-4524-9ef9-8a42c5302bc9'
const clockIcon = 'https://www.figma.com/api/mcp/asset/4f11a781-c0ea-4e85-910e-93cee882a576'

const statusConfig = {
  pending: { label: 'На модерации', color: '#ffc300', bg: 'rgba(255,195,0,0.1)' },
  approved: { label: 'Одобрено', color: '#99ffe2', bg: 'rgba(153,255,226,0.1)' },
  cancelled: { label: 'Отменено', color: '#ff4444', bg: 'rgba(255,68,68,0.1)' },
  active: { label: 'Активно', color: '#0084ff', bg: 'rgba(0,132,255,0.1)' },
}

interface AdCardProps {
  ad: Ad
}

export default function AdCard({ ad }: AdCardProps) {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col gap-2.5 rounded-2xl cursor-pointer w-full overflow-hidden"
      style={{ background: '#101010', padding: '9px 10px 10px' }}
      onClick={() => navigate(`/my-ads/${ad.id}`)}
    >
      {/* Post image with overlays */}
      <div className="relative rounded-[18px] overflow-hidden flex-shrink-0 w-full" style={{ aspectRatio: '1 / 1' }}>
        <img src={ad.postImage} alt={ad.postTitle} className="w-full h-full object-cover" />
        {/* Price overlay */}
        <div
          className="absolute top-2 left-2 flex items-center gap-0.5 rounded-xl px-1 py-1"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(16px)' }}
        >
          <img src={tonIcon} alt="TON" style={{ width: 14, height: 14 }} />
          <span className="text-white font-semibold" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif' }}>{ad.price}</span>
        </div>
        {/* Duration overlay */}
        <div
          className="absolute top-2 left-16 flex items-center gap-1 rounded-xl px-1 py-1"
          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(16px)' }}
        >
          <img src={clockIcon} alt="time" style={{ width: 14, height: 14 }} />
          <span className="text-white font-semibold" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif' }}>24ч</span>
        </div>
      </div>
      {/* Channel name */}
      <div className="flex flex-col gap-1.5">
        <span className="text-white font-bold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.28px' }}>
          {ad.channelName}
        </span>
        <span className="font-semibold truncate" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif' }}>
          {ad.postTitle}
        </span>
      </div>
      {/* CTA Button */}
      <button
        className="flex items-center justify-between rounded-2xl w-full"
        style={{ background: '#0084ff', padding: 10, height: 36 }}
      >
        <span className="text-white font-semibold" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif' }}>
          К посту
        </span>
        <img src={arrowRight} alt="→" style={{ width: 18, height: 18 }} />
      </button>
    </div>
  )
}

export { statusConfig }

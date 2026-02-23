import { useNavigate } from 'react-router-dom'
import type { Channel } from '../data/mockData'

const tonIcon = 'https://www.figma.com/api/mcp/asset/ff03a5ee-f74e-44ca-83fc-ad7748f41863'
const verifyIcon = 'https://www.figma.com/api/mcp/asset/1f928ede-4282-4fd4-9986-f92586f1b33f'

interface ChannelCardProps {
  channel: Channel
}

export default function ChannelCard({ channel }: ChannelCardProps) {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col justify-between rounded-2xl p-2.5 cursor-pointer w-full overflow-hidden"
      style={{ background: '#101010' }}
      onClick={() => navigate(`/channels/${channel.id}`)}
    >
      <div className="flex flex-col gap-2.5">
        {/* Avatar */}
        <div className="rounded-[18px] overflow-hidden flex-shrink-0 w-full" style={{ aspectRatio: '1 / 1' }}>
          <img src={channel.avatar} alt={channel.name} className="w-full h-full object-cover" />
        </div>
        {/* Info */}
        <div className="flex flex-col gap-1.5 min-w-0">
          <div className="flex items-center gap-0.5 min-w-0">
            <span className="text-white font-bold truncate" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.28px' }}>
              {channel.name}
            </span>
            {channel.verified && (
              <img src={verifyIcon} alt="verified" style={{ width: 13.6, height: 13.6, flexShrink: 0 }} />
            )}
          </div>
          <span className="font-semibold truncate" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.36px' }}>
            {channel.username}
          </span>
        </div>
      </div>
      {/* Price button */}
      <button
        className="flex items-center justify-center gap-1 rounded-2xl w-full mt-2.5"
        style={{ background: '#0084ff', padding: 10, flexShrink: 0 }}
        onClick={(e) => { e.stopPropagation(); navigate(`/channels/${channel.id}`) }}
      >
        <span className="text-white font-semibold" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.24px' }}>
          {channel.price}
        </span>
        <img src={tonIcon} alt="TON" style={{ width: 15, height: 15 }} />
        <span className="text-white font-medium opacity-70" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.24px' }}>
          / 24hr
        </span>
      </button>
    </div>
  )
}

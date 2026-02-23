const tonIconCircle = 'https://www.figma.com/api/mcp/asset/a28063f9-dc1a-426b-a92a-701825e0c0a9'

interface TonAmountProps {
  amount: number | string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: { icon: 14, text: 12, letterSpacing: '-0.24px' },
  md: { icon: 16, text: 14, letterSpacing: '-0.28px' },
  lg: { icon: 18, text: 20, letterSpacing: '-0.4px' },
}

export default function TonAmount({ amount, size = 'md', className = '' }: TonAmountProps) {
  const s = sizeMap[size]
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className="text-white font-bold" style={{ fontSize: s.text, letterSpacing: s.letterSpacing }}>
        {amount}
      </span>
      <span
        className="rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
        style={{ width: s.icon, height: s.icon, background: '#35aff1' }}
      >
        <img src={tonIconCircle} alt="TON" className="w-full h-full" style={{ padding: '27% 23% 19% 23%', boxSizing: 'border-box' }} />
      </span>
    </span>
  )
}

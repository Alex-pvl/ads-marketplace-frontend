const TELEGRAM_APP_URL = 'https://t.me/AdvertsMarketBot'

const features = [
  {
    icon: '📢',
    title: 'Покупай рекламу',
    description: 'Находите каналы для размещения рекламы и управляйте кампаниями в пару кликов.',
  },
  {
    icon: '💰',
    title: 'Продавай рекламу',
    description: 'Добавляйте свои каналы и получайте оплату за размещение от рекламодателей.',
  },
  {
    icon: '📊',
    title: 'Следи за статистикой',
    description: 'Детальная аналитика по каждому размещению и каналу в реальном времени.',
  },
]

export default function LandingPage() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        color: '#fff',
        fontFamily: "'Inter', sans-serif",
        overflow: 'auto',
      }}
    >
      <div
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px',
        }}
      >
        {/* Hero */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 32,
            maxWidth: 720,
            width: '100%',
          }}
        >
          <img
            src="/logo.png"
            alt="Ads Marketplace"
            style={{ height: 96, objectFit: 'contain', borderRadius: 24 }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h1
              style={{
                fontSize: 40,
                fontWeight: 800,
                letterSpacing: '-1.2px',
                lineHeight: 1.1,
                margin: 0,
                background: 'linear-gradient(135deg, #fff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Ads Marketplace
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: '#838383',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Маркетплейс рекламы в Telegram-каналах.
              Покупайте и продавайте рекламу удобно,
              безопасно и прозрачно.
            </p>
          </div>

          <a
            href={TELEGRAM_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#0084ff',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              padding: '14px 32px',
              borderRadius: 16,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1689ff')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0084ff')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.57 7.4c-.12.54-.43.67-.87.42l-2.4-1.77-1.16 1.12c-.13.13-.24.24-.49.24l.17-2.44 4.44-4.01c.19-.17-.04-.27-.3-.1l-5.5 3.46-2.36-.74c-.51-.16-.52-.51.11-.76l9.23-3.56c.43-.16.8.1.66.74z"
                fill="currentColor"
              />
            </svg>
            Открыть в Telegram
          </a>
        </div>

        {/* Features */}
        <div
          style={{
            maxWidth: 720,
            width: '100%',
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: '#101010',
                borderRadius: 20,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <span style={{ fontSize: 32 }}>{f.icon}</span>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0, letterSpacing: '-0.3px' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: '#838383', lineHeight: 1.5, margin: 0 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px 24px',
          color: '#6c6c6c',
          fontSize: 13,
          textAlign: 'center',
          background: 'linear-gradient(to top, #000 60%, transparent)',
          pointerEvents: 'none',
        }}
      >
        Ads Marketplace &copy; {new Date().getFullYear()}
      </div>
    </div>
  )
}

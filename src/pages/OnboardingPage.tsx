import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const arrowRight = 'https://www.figma.com/api/mcp/asset/de95db85-5b21-4980-8c12-63c6912229db'

const imgPostImage = 'https://www.figma.com/api/mcp/asset/00070e61-97f7-47f6-8d77-56cb8fc70419'
const imgChannelAvatar = 'https://www.figma.com/api/mcp/asset/4714ec7d-75b9-497c-a968-905f8e5d1297'
const imgVerify = 'https://www.figma.com/api/mcp/asset/ca236cf6-2f7d-4f1d-822e-14c84937057b'
const imgPreviewArrow = 'https://www.figma.com/api/mcp/asset/01e41554-beb4-4ac1-9f12-d913c7a182fc'
const imgInfoIcon = 'https://www.figma.com/api/mcp/asset/bac7c23a-8ab9-4852-a0cc-62f6c8467964'
const imgClockIcon = 'https://www.figma.com/api/mcp/asset/c5d4ec1e-7349-4f2c-abbb-8d3effab2f84'
const imgTonIcon = 'https://www.figma.com/api/mcp/asset/3a7f1e29-8618-4ab2-bd8a-eb34c477a444'
const imgTonShape = 'https://www.figma.com/api/mcp/asset/57b4bb15-8b78-43a4-8ac1-4564d955f013'
const imgCalendarIcon = 'https://www.figma.com/api/mcp/asset/9bc37d2e-073b-4701-a54b-1423b98fe5b0'
const imgTrashIcon = 'https://www.figma.com/api/mcp/asset/816be886-dd56-4ba2-bd7a-a9c826e5f519'
const imgCloseX = 'https://www.figma.com/api/mcp/asset/6ed8ba84-c954-4ff4-9dca-90d797d1d5c3'
const imgHeaderRight = 'https://www.figma.com/api/mcp/asset/41c95a7c-ee4d-4a68-838e-f570ce221dc8'
const imgBattery = 'https://www.figma.com/api/mcp/asset/f1c6085c-c6cc-46a2-9616-83a2a8077788'
const imgWifi = 'https://www.figma.com/api/mcp/asset/f616534b-e716-4a2b-979b-d208cc4c85b6'
const imgCellular = 'https://www.figma.com/api/mcp/asset/e0c61989-b2e6-4bce-b11b-afb7b1e4821c'
const imgNavDashboard = 'https://www.figma.com/api/mcp/asset/28483ae7-f078-4162-b93e-91e1866639d7'
const imgNavMegaphone = 'https://www.figma.com/api/mcp/asset/c7489af8-32fd-4eda-b5bc-6a8abbeabb52'
const imgNavProfile = 'https://www.figma.com/api/mcp/asset/572e68c8-309f-47be-97f3-788d1e865bad'

const onboardingSlides = [
  {
    title: 'Покупай рекламу',
    description: 'Начните монетизировать свою рекламу,\nведь покупать и продавать рекламу\nстало удобнее',
  },
  {
    title: 'Продавай рекламу',
    description: 'Добавляйте свои каналы и получайте\nоплату за размещение рекламы\nот рекламодателей',
  },
  {
    title: 'Следи за статистикой',
    description: 'Детальная аналитика по каждому\nразмещению и каналу в реальном\nвремени',
  },
]

const STAR_POSITIONS = [
  { x: 7, y: 19 }, { x: 34, y: 10 }, { x: 80, y: 18 },
  { x: 89, y: 14 }, { x: 83, y: 31 }, { x: 71, y: 26 },
  { x: 61, y: 33 }, { x: 24, y: 29 }, { x: 42, y: 22 },
  { x: 48, y: 16 }, { x: 38, y: 38 }, { x: 67, y: 43 },
  { x: 27, y: 50 }, { x: 81, y: 45 }, { x: 17, y: 42 },
  { x: 58, y: 54 }, { x: 94, y: 38 }, { x: 75, y: 61 },
  { x: 32, y: 58 }, { x: 12, y: 54 }, { x: 46, y: 63 },
  { x: 9, y: 34 }, { x: 65, y: 11 },
]

const S = 0.78

const placementDetails = [
  { icon: imgClockIcon, label: 'Срок размещения', value: '7 дней' },
  { icon: imgTonIcon, label: 'Сумма', value: '340 TON', hasTon: true },
  { icon: imgCalendarIcon, label: 'Дата и время', value: '23 янв., 13:00' },
  { icon: imgTrashIcon, label: 'Время окончания', value: '31 янв., 14:00' },
]

function PhoneMockup() {
  return (
    <div style={{
      flexShrink: 0,
      borderRadius: 38 * S,
      background: 'linear-gradient(165deg, #e8e8e8 0%, #a8a8a8 20%, #d4d4d4 40%, #8a8a8a 60%, #c0c0c0 80%, #9a9a9a 100%)',
      padding: 3 * S,
      boxShadow: `
        0 ${2 * S}px ${4 * S}px rgba(0,0,0,0.3),
        0 ${8 * S}px ${24 * S}px rgba(0,0,0,0.4),
        0 ${20 * S}px ${50 * S}px rgba(0,0,0,0.3),
        inset 0 ${1 * S}px ${2 * S}px rgba(255,255,255,0.6),
        inset 0 -${1 * S}px ${2 * S}px rgba(0,0,0,0.2)
      `,
    }}>
      {/* Inner bezel edge */}
      <div style={{
        borderRadius: 36 * S,
        padding: 1.5 * S,
        background: 'linear-gradient(180deg, #555 0%, #333 50%, #444 100%)',
      }}>
        {/* Screen content */}
        <div style={{
          width: 272 * S,
          height: 620 * S,
          borderRadius: 35 * S,
          overflow: 'hidden',
          background: '#000',
          position: 'relative',
        }}>
        {/* Gradient overlay on screen */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #636363 0%, rgba(0,0,0,0) 100%)',
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 1,
        }} />

        {/* Status bar */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: 42 * S,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `0 ${10 * S}px`,
        }}>
          <span style={{ color: '#fff', fontSize: 13 * S, fontWeight: 700, fontFamily: 'SF Pro, Inter, sans-serif', width: 42 * S, textAlign: 'center' }}>
            9:41
          </span>
          {/* Dynamic Island */}
          <div style={{
            width: 76 * S,
            height: 22 * S,
            borderRadius: 39 * S,
            background: '#000',
          }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 * S }}>
            <img src={imgCellular} alt="" style={{ width: 15 * S, height: 9 * S }} />
            <img src={imgWifi} alt="" style={{ width: 13 * S, height: 9 * S }} />
            <img src={imgBattery} alt="" style={{ width: 21 * S, height: 10 * S }} />
          </div>
        </div>

        {/* Close bar */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `0 ${12 * S}px`,
          height: 23 * S,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8 * S,
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            borderRadius: 79 * S,
            padding: `${8 * S}px ${9 * S}px`,
          }}>
            <img src={imgCloseX} alt="" style={{ width: 7 * S, height: 7 * S }} />
            <span style={{ fontSize: 10.5 * S, fontWeight: 700, color: '#fff', opacity: 0.5, fontFamily: 'SF Pro, Inter, sans-serif' }}>Close</span>
          </div>
          <img src={imgHeaderRight} alt="" style={{ height: 23 * S, width: 56 * S }} />
        </div>

        {/* Post image centered */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 14 * S,
        }}>
          <div style={{
            width: 108 * S,
            height: 108 * S,
            borderRadius: 14 * S,
            overflow: 'hidden',
            position: 'relative',
          }}>
            <img src={imgPostImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {/* Preview badge */}
            <div style={{
              position: 'absolute',
              bottom: 6 * S,
              left: 5 * S,
              display: 'flex',
              alignItems: 'center',
              gap: 3 * S,
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(22px)',
              borderRadius: 9 * S,
              padding: `${9 * S}px ${5 * S}px`,
              height: 22 * S,
              width: 60 * S,
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: 9.2 * S, fontWeight: 600, color: '#fff', letterSpacing: -0.28 * S }}>Превью</span>
              <div style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
                <img src={imgPreviewArrow} alt="" style={{ width: 9 * S, height: 9 * S }} />
              </div>
            </div>
          </div>

          {/* Post title & subtitle */}
          <div style={{ marginTop: 12 * S, textAlign: 'center' }}>
            <div style={{ fontSize: 15.4 * S, fontWeight: 600, color: '#fff', letterSpacing: -0.3 * S, fontFamily: 'SF Pro, Inter, sans-serif' }}>
              Парни, размер не важен!
            </div>
            <div style={{ fontSize: 9.2 * S, fontWeight: 600, color: '#838383', marginTop: 6 * S, letterSpacing: -0.28 * S }}>
              Прикольный пост про размеры
            </div>
          </div>
        </div>

        {/* Channel info */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          margin: `${8 * S}px ${12 * S}px 0`,
          background: '#101010',
          borderRadius: 12 * S,
          padding: 9 * S,
          display: 'flex',
          alignItems: 'center',
          gap: 11 * S,
          height: 50 * S,
        }}>
          <div style={{ width: 31 * S, height: 31 * S, borderRadius: 9 * S, overflow: 'hidden', flexShrink: 0 }}>
            <img src={imgChannelAvatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 * S }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 * S }}>
              <span style={{ fontSize: 9.2 * S, fontWeight: 600, color: '#838383', letterSpacing: -0.28 * S }}>Канал</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 * S }}>
                <span style={{ fontSize: 10.8 * S, fontWeight: 600, color: '#fff', letterSpacing: -0.32 * S }}>ohuenko</span>
                <img src={imgVerify} alt="" style={{ width: 10.5 * S, height: 10.5 * S }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14 * S }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 * S, width: 55 * S }}>
                <span style={{ fontSize: 10.8 * S, fontWeight: 600, color: '#fff', letterSpacing: -0.32 * S }}>120K</span>
                <span style={{ fontSize: 7.7 * S, fontWeight: 600, color: '#838383', letterSpacing: -0.23 * S }}>Подписчики</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 * S, width: 55 * S }}>
                <span style={{ fontSize: 10.8 * S, fontWeight: 600, color: '#fff', letterSpacing: -0.32 * S }}>53.4K</span>
                <span style={{ fontSize: 7.7 * S, fontWeight: 600, color: '#838383', letterSpacing: -0.23 * S }}>Сред. охват</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conditions header */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 6 * S,
          margin: `${8 * S}px ${12 * S}px 0`,
        }}>
          <img src={imgInfoIcon} alt="" style={{ width: 15 * S, height: 15 * S }} />
          <span style={{ fontSize: 15.4 * S, fontWeight: 600, color: '#fff', letterSpacing: -0.3 * S }}>Условия размещения</span>
        </div>

        {/* Placement details table */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          margin: `${6 * S}px ${12 * S}px 0`,
          background: '#101010',
          borderRadius: 12 * S,
          overflow: 'hidden',
        }}>
          <div style={{ padding: `${9 * S}px ${9 * S}px 0` }}>
            <span style={{ fontSize: 9.2 * S, fontWeight: 600, color: '#838383', letterSpacing: -0.28 * S }}>
              ИНФОРМАЦИЯ О РАЗМЕЩЕНИИ
            </span>
          </div>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: `${8 * S}px 0 0` }} />
          <div style={{ padding: `0 ${9 * S}px ${6 * S}px` }}>
            {placementDetails.map((d, i) => (
              <div key={i}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `${7 * S}px 0` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 * S }}>
                    <img src={d.icon} alt="" style={{ width: 11 * S, height: 11 * S }} />
                    <span style={{ fontSize: 9.2 * S, fontWeight: 600, color: '#838383', letterSpacing: -0.28 * S }}>{d.label}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 * S }}>
                    {d.hasTon && (
                      <div style={{
                        width: 11 * S,
                        height: 11 * S,
                        borderRadius: '50%',
                        background: '#35aff1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                      }}>
                        <img src={imgTonShape} alt="" style={{ width: 6 * S, height: 6 * S }} />
                      </div>
                    )}
                    <span style={{ fontSize: 9.2 * S, fontWeight: 600, color: '#fff', letterSpacing: -0.28 * S }}>{d.value}</span>
                  </div>
                </div>
                {i < placementDetails.length - 1 && (
                  <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 135 * S,
          background: 'linear-gradient(0.69deg, #111 1.3%, rgba(0,0,0,0) 98.7%)',
          backdropFilter: 'blur(6px)',
          zIndex: 3,
        }} />

        {/* Status badge */}
        <div style={{
          position: 'relative',
          zIndex: 4,
          margin: `${8 * S}px ${12 * S}px 0`,
          background: 'rgba(255,195,0,0.1)',
          borderRadius: 12 * S,
          height: 37 * S,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 9 * S,
        }}>
          <img src={imgClockIcon} alt="" style={{ width: 12 * S, height: 12 * S }} />
          <span style={{ fontSize: 10.8 * S, fontWeight: 600, color: '#ffc300', letterSpacing: -0.22 * S }}>На модерации</span>
        </div>

        {/* Navbar - tab bar from Figma */}
        <div style={{
          position: 'relative',
          zIndex: 4,
          display: 'flex',
          justifyContent: 'center',
          marginTop: 6 * S,
          padding: `0 ${16 * S}px`,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#161616',
            borderRadius: 771 * S,
            padding: 3 * S,
            height: 48 * S,
            width: 184 * S,
          }}>
            {/* Tab: Main (inactive) */}
            <div style={{
              width: 55 * S,
              height: 42 * S,
              borderRadius: 34 * S,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3 * S,
            }}>
              <img src={imgNavDashboard} alt="" style={{ width: 15 * S, height: 15 * S, opacity: 0.4 }} />
              <span style={{ fontSize: 7.7 * S, fontWeight: 500, color: 'rgba(221,221,221,0.4)', textAlign: 'center' }}>Main</span>
            </div>
            {/* Tab: My Ads (active) */}
            <div style={{
              width: 67 * S,
              height: 42 * S,
              borderRadius: 34 * S,
              background: '#313132',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3 * S,
            }}>
              <img src={imgNavMegaphone} alt="" style={{ width: 18.5 * S, height: 18.5 * S }} />
              <span style={{ fontSize: 7.7 * S, fontWeight: 500, color: '#1689ff', textAlign: 'center' }}>My Ads</span>
            </div>
            {/* Tab: Profile (inactive) */}
            <div style={{
              width: 55 * S,
              height: 42 * S,
              borderRadius: 34 * S,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3 * S,
            }}>
              <img src={imgNavProfile} alt="" style={{ width: 18.5 * S, height: 18.5 * S, opacity: 0.4 }} />
              <span style={{ fontSize: 7.7 * S, fontWeight: 500, color: 'rgba(221,221,221,0.4)', textAlign: 'center' }}>Profile</span>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div style={{
          position: 'relative',
          zIndex: 4,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 6 * S,
          paddingBottom: 6 * S,
        }}>
          <div style={{ width: 112 * S, height: 4 * S, borderRadius: 2.5 * S, background: '#000' }} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default function OnboardingPage() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  const handleNext = () => {
    if (step < onboardingSlides.length - 1) {
      setStep(step + 1)
    } else {
      navigate('/main')
    }
  }

  const slide = onboardingSlides[step]

  return (
    <div className="page" style={{ background: '#000' }}>
      {/* Decorative star particles */}
      <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: 'none' }}>
        {STAR_POSITIONS.map((pos, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2,
              height: 2,
              background: 'rgba(255,255,255,0.25)',
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay fading phone into content */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '50%',
          background: 'linear-gradient(to top, #000 35%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />

      {/* Top content with step indicators */}
      <div className="relative px-4 pt-6" style={{ zIndex: 10 }}>
        <div className="flex items-center gap-1.5">
          {onboardingSlides.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                height: 6,
                width: i === step ? 37 : 15,
                background: i === step ? '#fff' : '#525252',
              }}
            />
          ))}
        </div>
      </div>

      {/* Phone mockup area */}
      <div
        className="relative flex justify-center"
        style={{ zIndex: 2, marginTop: 16, flex: '0 0 auto' }}
      >
        <PhoneMockup />
      </div>

      {/* Bottom content */}
      <div
        className="relative mt-auto px-4 pb-6 flex flex-col gap-4"
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col gap-4">
          <h1
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '-0.48px',
              lineHeight: '1.2',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {slide.title}
          </h1>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#838383',
              letterSpacing: '-0.48px',
              lineHeight: '1.5',
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'pre-line',
            }}
          >
            {slide.description}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center gap-1.5 rounded-2xl w-full"
          style={{ background: '#0084ff', height: 48, marginTop: 8, border: 'none', cursor: 'pointer' }}
        >
          <span
            className="text-white font-semibold"
            style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.28px' }}
          >
            {step < onboardingSlides.length - 1 ? 'Далее' : 'Начать приключение'}
          </span>
          {step < onboardingSlides.length - 1 ? (
            <img src={arrowRight} alt="" style={{ width: 18, height: 18 }} />
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.5 3.5L13 6l-3.5 1.5L8 11l-1.5-3.5L3 6l3.5-1.5L8 1z" fill="#fff" />
              <path d="M12.5 9l.75 1.75L15 11.5l-1.75.75L12.5 14l-.75-1.75L10 11.5l1.75-.75L12.5 9z" fill="#fff" opacity=".7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

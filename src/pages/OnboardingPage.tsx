import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const arrowRight = 'https://www.figma.com/api/mcp/asset/de95db85-5b21-4980-8c12-63c6912229db'

const onboardingSlides = [
  {
    title: 'Покупай рекламу',
    description: 'Начните монетизировать свою рекламу,\nведь покупать и продавать рекламу\nстало удобнее',
    bg: 'https://www.figma.com/api/mcp/asset/5bf2c64b-9115-4930-b8c8-58e204e753ab',
  },
  {
    title: 'Продавай рекламу',
    description: 'Добавляйте свои каналы и получайте\nоплату за размещение рекламы\nот рекламодателей',
    bg: 'https://www.figma.com/api/mcp/asset/5bf2c64b-9115-4930-b8c8-58e204e753ab',
  },
  {
    title: 'Следи за статистикой',
    description: 'Детальная аналитика по каждому\nразмещению и каналу в реальном\nвремени',
    bg: 'https://www.figma.com/api/mcp/asset/5bf2c64b-9115-4930-b8c8-58e204e753ab',
  },
]

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
      {/* Background illustration */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slide.bg}
          alt=""
          className="absolute w-full"
          style={{ top: 80, objectFit: 'contain' }}
        />
        {/* Gradient overlay from bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: 400,
            background: 'linear-gradient(to top, #111 40%, transparent 100%)',
          }}
        />
      </div>

      {/* Top content */}
      <div className="relative z-10 px-4 pt-6" style={{ position: 'relative', zIndex: 10 }}>
        {/* Step indicators */}
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

      {/* Bottom content */}
      <div className="relative z-10 mt-auto px-4 pb-6 flex flex-col gap-4" style={{ position: 'relative', zIndex: 10, marginTop: 'auto' }}>
        <div className="flex flex-col gap-4">
          <h1 style={{ fontSize: 24, fontWeight: 600, color: '#fff', letterSpacing: '-0.48px', lineHeight: '1.2', fontFamily: 'Inter, sans-serif' }}>
            {slide.title}
          </h1>
          <p style={{ fontSize: 16, fontWeight: 600, color: '#838383', letterSpacing: '-0.48px', lineHeight: '1.5', fontFamily: 'Inter, sans-serif', whiteSpace: 'pre-line' }}>
            {slide.description}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="flex items-center justify-center gap-1.5 rounded-2xl w-full"
          style={{ background: '#0084ff', height: 48, marginTop: 8 }}
        >
          <span className="text-white font-semibold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.28px' }}>
            {step < onboardingSlides.length - 1 ? 'Далее' : 'Начать'}
          </span>
          <img src={arrowRight} alt="→" style={{ width: 18, height: 18 }} />
        </button>
      </div>
    </div>
  )
}

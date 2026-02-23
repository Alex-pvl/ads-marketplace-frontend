import { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import AdCard from '../components/AdCard'
import { myAds } from '../data/mockData'

const searchIcon = 'https://www.figma.com/api/mcp/asset/578f0da0-8f5c-48f7-b7e8-a872b38507a8'
const calendarIcon = 'https://www.figma.com/api/mcp/asset/2ae768d6-aca5-4e3e-bcc3-da278ab46843'
const newIcon = 'https://www.figma.com/api/mcp/asset/e154608c-eb09-4969-9dca-a0c99d5866e9'
const clockIcon = 'https://www.figma.com/api/mcp/asset/aeb0a273-0e6e-44e0-9e64-e116e3cc769f'

type FilterType = 'soon' | 'new' | 'long'

export default function MyAdsPage() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<FilterType>('soon')

  return (
    <div className="page">
      <div className="content-scroll">
        <div className="flex flex-col gap-4 pb-28">
          <Header showBanner={true} />

          {/* Title */}
          <div className="px-4 flex items-end gap-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 20, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.4px' }}>
              Ваша реклама
            </span>
            <span className="font-semibold" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.36px', lineHeight: '24px' }}>
              {myAds.length}
            </span>
          </div>

          {/* Search and filter */}
          <div className="px-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              {/* Search */}
              <div
                className="flex items-center gap-1.5 rounded-xl px-2.5"
                style={{ background: '#101010', height: 42, flex: 1 }}
              >
                <img src={searchIcon} alt="search" style={{ width: 16, height: 16 }} />
                <input
                  type="text"
                  placeholder="Поиск"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="flex-1 bg-transparent outline-none font-semibold"
                  style={{ color: search ? '#fff' : '#6c6c6c', fontSize: 12, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.36px' }}
                />
              </div>
              {/* Channel filter */}
              <div
                className="flex flex-col justify-center rounded-xl px-2.5"
                style={{ background: '#101010', height: 42, minWidth: 129 }}
              >
                <span className="font-semibold" style={{ fontSize: 10, color: '#6c6c6c', fontFamily: 'Inter, sans-serif' }}>
                  Канал
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="rounded-xl overflow-hidden" style={{ width: 16, height: 16 }}>
                    <img
                      src="https://www.figma.com/api/mcp/asset/2f1cdb05-3d56-4821-9ee9-02bd5d789327"
                      alt="channel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-semibold" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.42px' }}>
                    Major
                  </span>
                </div>
              </div>
            </div>

            {/* Filter chips */}
            <div className="flex items-center gap-1">
              <FilterChip
                active={activeFilter === 'soon'}
                icon={calendarIcon}
                label="Скоро"
                onClick={() => setActiveFilter('soon')}
              />
              <FilterChip
                active={activeFilter === 'new'}
                icon={newIcon}
                label="Новые"
                onClick={() => setActiveFilter('new')}
              />
              <FilterChip
                active={activeFilter === 'long'}
                icon={clockIcon}
                label="Больше 24ч"
                onClick={() => setActiveFilter('long')}
              />
            </div>
          </div>

          {/* Ads grid */}
          <div className="px-4">
            {myAds.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {myAds.map(ad => (
                  <AdCard key={ad.id} ad={ad} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div
        className="rounded-full flex items-center justify-center"
        style={{ width: 80, height: 80, background: '#101010' }}
      >
        <img
          src="https://www.figma.com/api/mcp/asset/00abee7a-40dc-4085-846b-1f7349360953"
          alt="ads"
          style={{ width: 40, height: 40, opacity: 0.4 }}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-white font-semibold" style={{ fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
          Нет рекламы
        </span>
        <span className="text-center font-semibold" style={{ fontSize: 14, color: '#838383', fontFamily: 'Inter, sans-serif', maxWidth: 240 }}>
          Перейдите на главную страницу и купите рекламу в канале
        </span>
      </div>
    </div>
  )
}

interface FilterChipProps {
  active: boolean
  icon: string
  label: string
  onClick: () => void
}

function FilterChip({ active, icon, label, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 rounded-xl px-2.5 flex-shrink-0"
      style={{
        background: active ? '#0084ff' : '#101010',
        height: 32,
        transition: 'background 0.2s',
      }}
    >
      <img src={icon} alt="" style={{ width: 16, height: 16 }} />
      <span
        className="font-semibold"
        style={{
          fontSize: 12,
          color: active ? '#fff' : '#6c6c6c',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '-0.36px',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </button>
  )
}

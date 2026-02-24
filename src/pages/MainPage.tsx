import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import ChannelCard from '../components/ChannelCard'
import { channels } from '../data/mockData'

const searchIcon = 'https://www.figma.com/api/mcp/asset/3b80519f-5c25-4307-9ace-0c6674dd724c'
const sortIcon = 'https://www.figma.com/api/mcp/asset/46065149-f428-4958-8888-7f30e6b11488'
const verifyFilterIcon = 'https://www.figma.com/api/mcp/asset/22165f7e-ca4a-47f1-9c7a-008a2a985009'
const starsIcon = 'https://www.figma.com/api/mcp/asset/504b5453-77ff-444a-9945-8427ece7b2ff'
const megaphoneSmIcon = 'https://www.figma.com/api/mcp/asset/5e93a36e-3d36-42b2-b139-a3237d801d66'

type FilterType = 'verified' | 'popular' | 'adv'

const SORT_OPTIONS = [
  { key: 'price', label: 'Цена' },
  { key: 'subscribers', label: 'Подписчики' },
  { key: 'avgReach', label: 'Охват' },
] as const

type SortKey = typeof SORT_OPTIONS[number]['key']

export default function MainPage() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<FilterType>('verified')
  const [sortKey, setSortKey] = useState<SortKey>('price')
  const [sortAsc, setSortAsc] = useState(true)
  const [sortOpen, setSortOpen] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: PointerEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false)
      }
    }
    if (sortOpen) document.addEventListener('pointerdown', handler)
    return () => document.removeEventListener('pointerdown', handler)
  }, [sortOpen])

  const sortLabel = SORT_OPTIONS.find(o => o.key === sortKey)!.label

  const filtered = channels.filter(ch => {
    const matchSearch = search === '' ||
      ch.name.toLowerCase().includes(search.toLowerCase()) ||
      ch.username.toLowerCase().includes(search.toLowerCase())
    const matchFilter = activeFilter === 'verified'
      ? ch.verified
      : activeFilter === 'popular'
        ? ch.subscribers > 100000
        : true
    return matchSearch && matchFilter
  }).sort((a, b) => {
    const av = a[sortKey]
    const bv = b[sortKey]
    return sortAsc ? (av as number) - (bv as number) : (bv as number) - (av as number)
  })

  return (
    <div className="page">
      <div className="content-scroll">
        <div className="flex flex-col gap-4 pb-28">
          {/* Header */}
          <Header showBanner={true} />

          {/* Title */}
          <div className="px-4 flex items-end gap-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 20, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.4px' }}>
              Все каналы
            </span>
            <span className="font-semibold" style={{ fontSize: 12, color: '#838383', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.36px', lineHeight: '24px' }}>
              {channels.length}
            </span>
          </div>

          {/* Search and sort */}
          <div className="px-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              {/* Search */}
              <div
                className="flex items-center gap-1.5 flex-1 rounded-xl px-2.5"
                style={{ background: '#101010', height: 42 }}
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
              {/* Sort */}
              <div ref={sortRef} style={{ position: 'relative' }}>
                <button
                  className="flex flex-col justify-center rounded-xl px-2.5"
                  style={{ background: '#101010', height: 42, minWidth: 113 }}
                  onClick={() => setSortOpen(prev => !prev)}
                >
                  <span className="font-semibold text-left" style={{ fontSize: 10, color: '#6c6c6c', fontFamily: 'Inter, sans-serif', lineHeight: '14px' }}>
                    Сортировать по
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-semibold" style={{ fontSize: 12, fontFamily: 'Inter, sans-serif', lineHeight: '16px' }}>
                      {sortLabel}
                    </span>
                    <img
                      src={sortIcon}
                      alt="sort"
                      style={{ width: 12, height: 12, transform: sortAsc ? 'none' : 'rotate(180deg)', transition: 'transform 0.2s' }}
                    />
                  </div>
                </button>

                {sortOpen && (
                  <div
                    className="absolute right-0 rounded-2xl overflow-hidden z-50"
                    style={{
                      top: 'calc(100% + 6px)',
                      background: '#1a1a1a',
                      minWidth: 180,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    }}
                  >
                    {SORT_OPTIONS.map(opt => {
                      const isActive = sortKey === opt.key
                      return (
                        <button
                          key={opt.key}
                          className="flex items-center justify-between w-full px-3.5"
                          style={{
                            height: 44,
                            background: isActive ? 'rgba(0,132,255,0.1)' : 'transparent',
                          }}
                          onClick={() => {
                            if (isActive) {
                              setSortAsc(prev => !prev)
                            } else {
                              setSortKey(opt.key)
                              setSortAsc(true)
                            }
                            setSortOpen(false)
                          }}
                        >
                          <span
                            className="font-semibold"
                            style={{
                              fontSize: 14,
                              color: isActive ? '#fff' : '#6c6c6c',
                              fontFamily: 'Inter, sans-serif',
                              letterSpacing: '-0.28px',
                            }}
                          >
                            {opt.label}
                          </span>
                          {isActive && (
                            <img
                              src={sortIcon}
                              alt="sort"
                              style={{ width: 14, height: 14, transform: sortAsc ? 'none' : 'rotate(180deg)', transition: 'transform 0.2s' }}
                            />
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Filter chips */}
            <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              <FilterChip
                active={activeFilter === 'verified'}
                icon={verifyFilterIcon}
                label="С галочкой"
                onClick={() => setActiveFilter('verified')}
              />
              <FilterChip
                active={activeFilter === 'popular'}
                icon={starsIcon}
                label="Популярные"
                onClick={() => setActiveFilter('popular')}
              />
              <FilterChip
                active={activeFilter === 'adv'}
                icon={megaphoneSmIcon}
                label="Выбор Adv"
                onClick={() => setActiveFilter('adv')}
              />
            </div>
          </div>

          {/* Channel grid */}
          <div className="px-4">
            <div className="grid grid-cols-2 gap-2">
              {filtered.map(channel => (
                <ChannelCard key={channel.id} channel={channel} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavBar />
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

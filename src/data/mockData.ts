export interface Channel {
  id: string
  name: string
  username: string
  avatar: string
  price: number
  subscribers: number
  avgReach: number
  verified: boolean
  category?: string
}

export interface Ad {
  id: string
  channelName: string
  channelAvatar: string
  postImage: string
  postTitle: string
  postText: string
  status: 'pending' | 'approved' | 'cancelled' | 'active'
  price: number
  duration: string
  startDate: string
  endDate: string
  subscribers: number
  avgReach: number
}

export interface Transaction {
  id: string
  type: 'buy' | 'sell'
  title: string
  subtitle: string
  amount: number
  channelAvatar: string
  date: string
}

export const channels: Channel[] = [
  {
    id: '1',
    name: 'ohuenko',
    username: '@ohuenko',
    avatar: 'https://www.figma.com/api/mcp/asset/3da566a8-5272-4037-811f-f50f2216631f',
    price: 120,
    subscribers: 120000,
    avgReach: 53400,
    verified: true,
    category: 'verified',
  },
  {
    id: '2',
    name: 'Pavel Durov',
    username: '@durov',
    avatar: 'https://www.figma.com/api/mcp/asset/88b5378e-7939-4af8-8cbd-7135f59acd0c',
    price: 120,
    subscribers: 980000,
    avgReach: 450000,
    verified: true,
    category: 'popular',
  },
  {
    id: '3',
    name: 'Roxman печатает...',
    username: '@roxtalk',
    avatar: 'https://www.figma.com/api/mcp/asset/1b410b59-2627-45bb-ab5b-dc237fa08144',
    price: 120,
    subscribers: 85000,
    avgReach: 32000,
    verified: false,
    category: 'popular',
  },
  {
    id: '4',
    name: 'Major',
    username: '@major',
    avatar: 'https://www.figma.com/api/mcp/asset/2f1cdb05-3d56-4821-9ee9-02bd5d789327',
    price: 120,
    subscribers: 240000,
    avgReach: 98000,
    verified: false,
    category: 'adv',
  },
  {
    id: '5',
    name: 'TonSecurer',
    username: '@tonsecurer',
    avatar: 'https://www.figma.com/api/mcp/asset/7ce1a0be-ad2f-46e2-ab47-68ac6be4ec26',
    price: 85,
    subscribers: 45000,
    avgReach: 18000,
    verified: true,
    category: 'verified',
  },
  {
    id: '6',
    name: 'CryptoNews',
    username: '@cryptonews',
    avatar: 'https://www.figma.com/api/mcp/asset/3da566a8-5272-4037-811f-f50f2216631f',
    price: 200,
    subscribers: 320000,
    avgReach: 140000,
    verified: true,
    category: 'popular',
  },
]

export const myAds: Ad[] = [
  {
    id: '1',
    channelName: 'GiftUP',
    channelAvatar: 'https://www.figma.com/api/mcp/asset/023dacd2-bc7a-4e02-afe6-534334d36349',
    postImage: 'https://www.figma.com/api/mcp/asset/fd78b9ea-7913-43b4-8dc2-5a2ea774ab4c',
    postTitle: 'Парни, размер не важен!',
    postText: 'Бла-бла-бла, остальной текст поста',
    status: 'pending',
    price: 340,
    duration: '7 дней',
    startDate: '23 янв., 13:00',
    endDate: '31 янв., 14:00',
    subscribers: 120000,
    avgReach: 53400,
  },
  {
    id: '2',
    channelName: 'GiftUP',
    channelAvatar: 'https://www.figma.com/api/mcp/asset/023dacd2-bc7a-4e02-afe6-534334d36349',
    postImage: 'https://www.figma.com/api/mcp/asset/fd78b9ea-7913-43b4-8dc2-5a2ea774ab4c',
    postTitle: 'Парни, размер не важен!',
    postText: 'Бла-бла-бла, остальной текст поста',
    status: 'approved',
    price: 120,
    duration: '24 часа',
    startDate: '20 янв., 10:00',
    endDate: '21 янв., 10:00',
    subscribers: 120000,
    avgReach: 53400,
  },
  {
    id: '3',
    channelName: 'GiftUP',
    channelAvatar: 'https://www.figma.com/api/mcp/asset/023dacd2-bc7a-4e02-afe6-534334d36349',
    postImage: 'https://www.figma.com/api/mcp/asset/fd78b9ea-7913-43b4-8dc2-5a2ea774ab4c',
    postTitle: 'Новый пост рекламы',
    postText: 'Описание рекламного поста',
    status: 'cancelled',
    price: 85,
    duration: '12 часов',
    startDate: '15 янв., 09:00',
    endDate: '15 янв., 21:00',
    subscribers: 85000,
    avgReach: 32000,
  },
  {
    id: '4',
    channelName: 'GiftUP',
    channelAvatar: 'https://www.figma.com/api/mcp/asset/023dacd2-bc7a-4e02-afe6-534334d36349',
    postImage: 'https://www.figma.com/api/mcp/asset/fd78b9ea-7913-43b4-8dc2-5a2ea774ab4c',
    postTitle: 'Акция недели',
    postText: 'Специальное предложение',
    status: 'active',
    price: 200,
    duration: '3 дня',
    startDate: '22 янв., 12:00',
    endDate: '25 янв., 12:00',
    subscribers: 240000,
    avgReach: 98000,
  },
]

export const transactions: Transaction[] = [
  {
    id: '1',
    type: 'buy',
    title: 'Покупка рекламы',
    subtitle: 'в канал @roxman',
    amount: 13.5,
    channelAvatar: 'https://www.figma.com/api/mcp/asset/023dacd2-bc7a-4e02-afe6-534334d36349',
    date: 'ВЧЕРА, 14 МАРТА',
  },
  {
    id: '2',
    type: 'buy',
    title: 'Покупка рекламы',
    subtitle: 'в канал @roxman',
    amount: 13.5,
    channelAvatar: 'https://www.figma.com/api/mcp/asset/023dacd2-bc7a-4e02-afe6-534334d36349',
    date: 'ВЧЕРА, 14 МАРТА',
  },
  {
    id: '3',
    type: 'sell',
    title: 'Продажа рекламы',
    subtitle: 'от @giftup',
    amount: 120,
    channelAvatar: 'https://www.figma.com/api/mcp/asset/3da566a8-5272-4037-811f-f50f2216631f',
    date: 'ВЧЕРА, 14 МАРТА',
  },
  {
    id: '4',
    type: 'buy',
    title: 'Покупка рекламы',
    subtitle: 'в канал @major',
    amount: 13.5,
    channelAvatar: 'https://www.figma.com/api/mcp/asset/2f1cdb05-3d56-4821-9ee9-02bd5d789327',
    date: 'ВЧЕРА, 14 МАРТА',
  },
  {
    id: '5',
    type: 'sell',
    title: 'Продажа рекламы',
    subtitle: 'от @giftup',
    amount: 85,
    channelAvatar: 'https://www.figma.com/api/mcp/asset/3da566a8-5272-4037-811f-f50f2216631f',
    date: '13 МАРТА',
  },
]

export const myChannels: Channel[] = [
  {
    id: '1',
    name: 'ohuenko',
    username: '@ohuenko',
    avatar: 'https://www.figma.com/api/mcp/asset/3da566a8-5272-4037-811f-f50f2216631f',
    price: 120,
    subscribers: 120000,
    avgReach: 53400,
    verified: true,
  },
  {
    id: '2',
    name: 'TonSecurer',
    username: '@tonsecurer',
    avatar: 'https://www.figma.com/api/mcp/asset/7ce1a0be-ad2f-46e2-ab47-68ac6be4ec26',
    price: 85,
    subscribers: 45000,
    avgReach: 18000,
    verified: true,
  },
  {
    id: '3',
    name: 'Major Channel',
    username: '@major_ch',
    avatar: 'https://www.figma.com/api/mcp/asset/2f1cdb05-3d56-4821-9ee9-02bd5d789327',
    price: 200,
    subscribers: 240000,
    avgReach: 98000,
    verified: false,
  },
]

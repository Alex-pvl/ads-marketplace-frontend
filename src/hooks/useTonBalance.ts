import { useState, useEffect, useCallback } from 'react'
import { useTonWallet } from '@tonconnect/ui-react'

const TONCENTER_API = 'https://toncenter.com/api/v2/getAddressBalance'
const POLL_INTERVAL = 30_000

export function useTonBalance() {
  const wallet = useTonWallet()
  const address = wallet?.account?.address ?? ''

  const [balance, setBalance] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchBalance = useCallback(async (addr: string) => {
    if (!addr) return
    try {
      setLoading(true)
      const res = await fetch(`${TONCENTER_API}?address=${encodeURIComponent(addr)}`)
      const data = await res.json()
      if (data.ok && data.result) {
        setBalance(Number(data.result) / 1e9)
      }
    } catch {
      // silently ignore — will retry on next poll
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!address) {
      setBalance(null)
      return
    }

    fetchBalance(address)
    const id = setInterval(() => fetchBalance(address), POLL_INTERVAL)
    return () => clearInterval(id)
  }, [address, fetchBalance])

  return { balance, loading, connected: !!wallet, address }
}

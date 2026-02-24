import { Component, type ReactNode, type ErrorInfo } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          style={{
            minHeight: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            background: '#000',
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            gap: 16,
          }}
        >
          <span style={{ fontSize: 40 }}>⚠️</span>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Что-то пошло не так</h2>
          <pre
            style={{
              fontSize: 12,
              color: '#f87171',
              background: '#1a1a1a',
              borderRadius: 12,
              padding: 16,
              maxWidth: '100%',
              overflow: 'auto',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              margin: 0,
            }}
          >
            {this.state.error.message}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#0084ff',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              padding: '12px 24px',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Перезагрузить
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

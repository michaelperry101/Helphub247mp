export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Arial', padding: '2rem', textAlign: 'center' }}>
      <img src="/logo.svg" alt="HelpHub Logo" width="140" style={{marginBottom:20}} />
      <h1>Welcome to HelpHub 24/7</h1>
      <p>Your AI-powered assistant <strong>Carys</strong> is here to help you anytime.</p>
      <nav style={{marginTop:20}}>
        <a href="/terms" style={{marginRight:12}}>📜 Terms & Conditions</a>
        <a href="/privacy">🔒 Privacy Policy</a>
      </nav>
      <div style={{marginTop:30}}>
        <button style={{background:'#0b69ff', color:'#fff', border:'none', padding:'12px 20px', borderRadius:10, cursor:'pointer'}}>Subscribe £9.99 / month</button>
      </div>
    </div>
  )
}

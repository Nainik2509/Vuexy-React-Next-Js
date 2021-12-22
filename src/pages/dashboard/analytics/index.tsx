const AnalyticsDashboard = () => <h1>Analytics Dashboard</h1>

AnalyticsDashboard.getInitialProps = () => {
  return {
    action: 'read',
    subject: 'analytics'
  }
}
export default AnalyticsDashboard

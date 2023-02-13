import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles';
import App from './payment'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <GlobalStyles />
  </>,
)

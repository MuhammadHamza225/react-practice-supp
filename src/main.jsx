import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './utils/store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    </Provider>
)

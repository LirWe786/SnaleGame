import { StrictMode } from 'react' // необязательно

import { createRoot } from 'react-dom/client'  /// обязательно
import './index.css'
import App from './App'

let root = createRoot(document.getElementById('root'))
root.render(
<StrictMode>
<App></App>
  </StrictMode>,
)


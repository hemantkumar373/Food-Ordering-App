import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
  ,
)
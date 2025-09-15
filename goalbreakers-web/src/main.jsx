import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRoutes'
import { ChampionshipProvider } from './contexts/ChampionshipContext'
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ChampionshipProvider>
        <RouterProvider router={router}/>
      </ChampionshipProvider>
    </AuthProvider>
  </StrictMode>,
)

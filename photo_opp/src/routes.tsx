import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import { CapturePhoto } from './pages/CapturePhoto.tsx'
import PreviewPhoto from './pages/PreviewPhoto.tsx'
import FinishPage from './pages/FinishPhoto.tsx'
import AdminPanel from './pages/AdminPanel.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/capturePhoto",
    element: <CapturePhoto />
  },
  {
    path: "/previewPhoto",
    element: <PreviewPhoto />
  },
  {
    path: "/finishPhoto",
    element: <FinishPage />
  },
  {
    path: "/admin",
    element: <AdminPanel />
  }
])

export default router

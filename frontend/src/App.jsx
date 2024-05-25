
import './App.css'
import NavigationBar from './components/nav'
import Footer from './components/footer';
import Home from './components/home'
import Users from './components/users'
import Contributors from './components/contributors'
import NoPage from './components/nopage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavigationBar /><Home /><Footer /></>
    },
    {
      path: "/users",
      element: <><NavigationBar /><Users /><Footer /></>
    },
    {
      path: "/contributors",
      element: <><NavigationBar /><Contributors /><Footer /></>
    },
    {
      path: "/*",
      element: <><NavigationBar /><NoPage /><Footer /></>
    },
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App
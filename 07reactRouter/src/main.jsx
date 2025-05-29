import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Help from './components/Help/Help.jsx'
import Privacy from './components/privacy.jsx'
import User from './components/User/User.jsx'
import Github,{githubLoader} from './components/Github/Github.jsx'

//we created router that is rendered in Render <strictmode> below
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },//home and about are inside layout so thats why they are children
//       {
//         path:"contact",
//         element: <Contact/>
//       },
//       {
//         path:"help",
//         element: <Help/>
//       },
//       {
//         path:"privacy",
//         element:<Privacy/>
//       }
//     ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(//nesting of routes possible because we make <Outlet/> in Layout.jsx

    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='help' element={<Help/>}/>
      <Route path='privacy' element={<Privacy/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      path='github' element={<Github/>}
      loader={githubLoader}
      
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

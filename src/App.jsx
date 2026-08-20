import React from 'react'
import Home from './Screens/Home'
import Upload from './Screens/Upload'
import Workspace from './Screens/Workspace'
import NotFound from './Screens/NotFound'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const App = () => {

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/upload",
    element:<Upload/>

  },

  {
    path:"/workspace",
    element:<Workspace/>
  },
  {
    path:"/*",
    element:<NotFound/>
  }

])

  return (
    <div className=''> 
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './constants'
const Router = () => {
  return (
    <Routes>
      {PublicRoutes.map((route, index) => {
        const Page = route.component
        return (
          <Route key={index.toString()} path={route.path} element={<Page />} />
        )
      })}
    </Routes>
  )
}

export default Router

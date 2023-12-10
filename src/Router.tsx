import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import React from 'react'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}

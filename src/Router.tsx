import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CID360APP } from './pages/CID360APP'
import { Cid360Terms } from './pages/CID360APP/pages/Terms'
import { Cid360Privacy } from './pages/CID360APP/pages/Privacy'
import React from 'react'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cid360app" element={<CID360APP />} />
        <Route path="/cid360app/termos" element={<Cid360Terms />} />
        <Route path="/cid360app/privacidade" element={<Cid360Privacy />} />
    </Routes>
  )
}

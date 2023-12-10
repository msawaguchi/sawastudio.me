import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  RiMenu5Line,
  RiHome6Line,
  RiAccountPinBoxLine,
  RiMailOpenLine,
  RiBookReadLine,
} from 'react-icons/ri'
import { FaDesktop } from 'react-icons/fa'

import { MenuButton, MenuContainer } from './styles'
import { NeonContentContainer } from '../NeonContentContainer'
import Translator from '../Translator'

export function Menu() {
  const [menuClass, setMenuClass] = useState('none')
  const [isExpanded, setIsExpanded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setMenuClass('show-menu')
      } else {
        setMenuClass('none')
      }
    })
  }, [])

  useEffect(() => {
    setIsExpanded(false)
  }, [location])

  const handleExpandMenu = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <MenuContainer className={menuClass} isExpanded={isExpanded}>
      <NeonContentContainer>
        <MenuButton className="menu-bars">
          <RiMenu5Line onClick={handleExpandMenu} />
        </MenuButton>
        <MenuButton>
          <RiHome6Line />
          <a href="#home">
            <Translator path="hero.menu_home" />
          </a>
        </MenuButton>
        <MenuButton>
          <RiAccountPinBoxLine />
          <a href="#about">
            <Translator path="hero.menu_about" />
          </a>
        </MenuButton>
        <MenuButton>
          <FaDesktop />
          <a href="#projects">
            <Translator path="hero.menu_projects" />
          </a>
        </MenuButton>
        <MenuButton>
          <RiBookReadLine />
          <a href="#blog">blog</a>
        </MenuButton>
        <MenuButton>
          <RiMailOpenLine />
          <a href="#contact">
            <Translator path="hero.menu_contact" />
          </a>
        </MenuButton>
      </NeonContentContainer>
    </MenuContainer>
  )
}

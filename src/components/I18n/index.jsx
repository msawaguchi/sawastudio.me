import React from 'react'
import { useTranslation } from 'react-i18next'

import BrazilFlag from '../../assets/images/pt-br.webp'
import EnglishFlag from '../../assets/images/eng.webp'

const Flag = ({ image, isSelected, ...props }) => (
  <img
    alt="flag"
    src={image}
    className={isSelected ? 'flag selected' : 'flag'}
    {...props}
  />
)

const I18n = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language
  return (
    <div className="flags-container">
      <Flag
        image={BrazilFlag}
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
      <Flag
        image={EnglishFlag}
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
    </div>
  )
}

export default I18n

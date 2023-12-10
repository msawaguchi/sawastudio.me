import { useState } from 'react'
import GlitchClip from 'react-glitch-effect/core/Clip'
import { useTranslation } from 'react-i18next'
import {
  PiBooks,
  PiPottedPlant,
  PiPaintBrush,
  PiCookingPot,
} from 'react-icons/pi'
import { CgGym } from 'react-icons/cg'

import {
  AboutContainer,
  AboutContent,
  AboutContentContainer,
  AboutLanguagesContainer,
  AboutExperienceContent,
  AboutFormationContent,
  AboutSkillsContent,
  AboutHobbiesContent,
} from './styles'
import { Divider } from '../../../../components/Divider'
import { NeonContentContainer } from '../../../../components/NeonContentContainer'
import Translator from '../../../../components/Translator'
import missaeSawaguchi from '../../../../assets/images/profile-photo.webp'

export function About() {
  const [openIndex, setOpenIndex] = useState('')
  const { t } = useTranslation()

  const handleToggle = (index) => (e) => {
    e.preventDefault()
    setOpenIndex(index !== openIndex ? index : '')
  }

  return (
    <AboutContainer id="about">
      <Divider />
      <div className="hero-mask">
        <AboutContent>
          <h1 className="h1-title">
            <Translator path="about.about" />
          </h1>
          <div className="mosaic-container">
            <div className="mosaic">
              <NeonContentContainer>
                <AboutContentContainer>
                  <img src={missaeSawaguchi} alt="" />

                  <h1>Missae Sawaguchi</h1>
                  <p>
                    <Translator path="about.about_intro" />
                  </p>
                </AboutContentContainer>
              </NeonContentContainer>
            </div>
            <div className="mosaic">
              <NeonContentContainer>
                <AboutExperienceContent>
                  <h3>
                    <Translator path="about.about_experience" />
                  </h3>

                  <article>
                    {t('about.about_experience_list', {
                      returnObjects: true,
                    }).map((item, index) => (
                      <details
                        key={item.position}
                        open={openIndex === index}
                        onClick={handleToggle(index)}
                      >
                        <summary>{item.position}</summary>
                        <div>
                          <h4>tasks / responsabilities</h4>
                          <ul>
                            {item.responsabilities.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>
                          <h4>techs & tools </h4>
                          <span>{item.techs}</span>
                        </div>
                      </details>
                    ))}
                  </article>
                </AboutExperienceContent>
              </NeonContentContainer>
            </div>
            <div className="mosaic">
              <NeonContentContainer>
                <AboutFormationContent>
                  <h3>
                    <Translator path="about.about_formation" />
                  </h3>
                  <section>
                    {t('about.about_formation_list', {
                      returnObjects: true,
                    }).map((item) => (
                      <div key={item.name_course}>
                        <strong>{item.name_course}</strong>
                        <span>{item.institution}</span>
                      </div>
                    ))}
                  </section>
                </AboutFormationContent>
              </NeonContentContainer>
              <NeonContentContainer>
                <AboutSkillsContent>
                  <h3>
                    <Translator path="about.about_skills" />
                  </h3>
                  <AboutLanguagesContainer>
                    {/* <h4>
                      <Translator path="about.about_languages" />
                    </h4> */}
                    <div>
                      <label htmlFor="portuguese">
                        <Translator path="about.about_portuguese" />:
                      </label>
                      <progress id="portuguese" value="100" max="100" />
                    </div>
                    <div>
                      <label htmlFor="english">
                        <Translator path="about.about_english" />:
                      </label>
                      <progress id="english" value="85" max="100" />
                    </div>
                    <div>
                      <label htmlFor="japanese">
                        <Translator path="about.about_japanese" />:
                      </label>
                      <progress id="japanese" value="45" max="100" />
                    </div>
                    <div>
                      <GlitchClip onHover={true}>
                        <label htmlFor="social">
                          <Translator path="about.about_social_skills" />:
                        </label>
                        <progress id="social" value="10" max="100" />
                      </GlitchClip>
                    </div>
                  </AboutLanguagesContainer>
                </AboutSkillsContent>
              </NeonContentContainer>
              <NeonContentContainer>
                <AboutHobbiesContent>
                  <h3>Hobbies</h3>
                  <GlitchClip onHover={true}>
                    <PiBooks />
                  </GlitchClip>
                  <GlitchClip onHover={true}>
                    <CgGym />
                  </GlitchClip>
                  <GlitchClip onHover={true}>
                    <PiPottedPlant />
                  </GlitchClip>
                  <GlitchClip onHover={true}>
                    <PiPaintBrush />
                  </GlitchClip>
                  <GlitchClip onHover={true}>
                    <PiCookingPot />
                  </GlitchClip>
                </AboutHobbiesContent>
              </NeonContentContainer>
            </div>
          </div>
        </AboutContent>
      </div>
    </AboutContainer>
  )
}

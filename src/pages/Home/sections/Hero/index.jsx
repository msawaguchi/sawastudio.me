import GlitchClip from 'react-glitch-effect/core/Clip'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {
  RiGraduationCapLine,
  RiReactjsLine,
  RiHtml5Line,
  RiHome6Line,
  RiAccountPinBoxLine,
  RiMailOpenLine,
  RiBookReadLine,
} from 'react-icons/ri'
import {
  TbMapPin,
  TbMail,
  TbBrandJavascript,
  TbBrandTypescript,
} from 'react-icons/tb'
import {
  SiNextdotjs,
  SiGraphql,
  SiSpring,
  SiTailwindcss,
  SiNodedotjs,
} from 'react-icons/si'
import { FaJava, FaDocker, FaDesktop } from 'react-icons/fa'
import { PiFileSqlDuotone } from 'react-icons/pi'

import {
  HeroContainer,
  HeroContent,
  HeroAboutContainer,
  HeroMidSection,
  HeroTechsSection,
  HeroLastPostSection,
  HeroMenuButton,
} from './styles'

import missaeSawaguchi from '../../../../assets/images/profile-photo.webp'
import frontendDeveloper from '../../../../assets/images/frontend-developer.svg'
import iconGithub from '../../../../assets/images/icons/github.png'
import iconLinkedin from '../../../../assets/images/icons/linkedin.png'
import iconInstagram from '../../../../assets/images/icons/instagram.png'
import { NeonContentContainer } from '../../../../components/NeonContentContainer'
import { Button } from '../../../../components/Button'
import Translator from '../../../../components/Translator'
import bgHero from '../../../../assets/images/backgrounds/bg-hero.webp'

export function Hero() {
  return (
    <HeroContainer
      id="home"
      className="background-content lazy-load-image"
      style={{
        backgroundImage: `url('${bgHero}')`,
      }}
    >
      <div className="hero-mask">
        <HeroContent>
          <div className="mosaic">
            <NeonContentContainer>
              <HeroAboutContainer>
                <GlitchClip onHover={true}>
                  <LazyLoadImage alt="" effect="blur" src={missaeSawaguchi} />
                </GlitchClip>
                <h1>Missae Sawaguchi</h1>

                <p>
                  <Translator path="hero.intro" />
                </p>
                <ul>
                  <li>
                    <RiGraduationCapLine />
                    <Translator path="hero.intro_formation" />
                  </li>
                  <li>
                    <TbMapPin />
                    <Translator path="hero.intro_locale" />
                  </li>
                  <li>
                    <TbMail />
                    missae.sawaguchi@gmail.com
                  </li>
                </ul>
              </HeroAboutContainer>
            </NeonContentContainer>
          </div>
          <div className="mosaic">
            <div className="mosaic-child">
              <NeonContentContainer>
                <HeroMidSection>
                  <GlitchClip>
                    <img
                      className="title-glitch"
                      src={frontendDeveloper}
                      alt=""
                    />
                  </GlitchClip>

                  <div className="socials">
                    <a href="https://github.com/msawaguchi">
                      <GlitchClip>
                        <img src={iconGithub} alt="" />
                      </GlitchClip>
                    </a>
                    <a href="https://www.linkedin.com/in/missae-sawaguchi/">
                      <img src={iconLinkedin} alt="" />
                    </a>
                    <a href="https://www.instagram.com/missae.sawaguchi/">
                      <img src={iconInstagram} alt="" />
                    </a>
                  </div>
                </HeroMidSection>
              </NeonContentContainer>
            </div>
            <div className="mosaic-child">
              <NeonContentContainer>
                <HeroTechsSection>
                  <h3>
                    <Translator path="hero.tech" />
                  </h3>
                  <p>
                    <Translator path="hero.tech_about" />
                  </p>
                  <div>
                    <TbBrandJavascript />
                    <TbBrandTypescript />
                    <RiReactjsLine />
                    <SiNextdotjs />
                    <SiGraphql />
                    <SiNodedotjs />
                    <FaJava />
                    <SiSpring />
                    <RiHtml5Line />
                    <SiTailwindcss />
                    <PiFileSqlDuotone />
                    <FaDocker />
                  </div>
                </HeroTechsSection>
              </NeonContentContainer>
              <NeonContentContainer>
                <HeroLastPostSection>
                  <h3>
                    <Translator path="hero.blog_last_post" />
                  </h3>
                  <div>
                    <h4>
                      <Translator path="hero.blog_last_post_title" />
                    </h4>
                    <p>
                      <Translator path="hero.blog_last_post_teaser" />
                    </p>
                    <Button>
                      <Translator path="blog.blog_read_more" />
                    </Button>
                  </div>
                </HeroLastPostSection>
              </NeonContentContainer>
            </div>
          </div>
          <div className="mosaic-child mosaic-menu">
            <NeonContentContainer>
              <HeroMenuButton href="#home">
                <RiHome6Line />
                <span>
                  <Translator path="hero.menu_home" />
                </span>
              </HeroMenuButton>
            </NeonContentContainer>
            <NeonContentContainer>
              <HeroMenuButton href="#about">
                <RiAccountPinBoxLine />
                <span>
                  <Translator path="hero.menu_about" />
                </span>
              </HeroMenuButton>
            </NeonContentContainer>
            <NeonContentContainer>
              <HeroMenuButton href="#projects">
                <FaDesktop />
                <span>
                  <Translator path="hero.menu_projects" />
                </span>
              </HeroMenuButton>
            </NeonContentContainer>
            <NeonContentContainer>
              <HeroMenuButton href="#blog">
                <RiBookReadLine />
                <span>blog</span>
              </HeroMenuButton>
            </NeonContentContainer>
            <NeonContentContainer>
              <HeroMenuButton href="#contact">
                <RiMailOpenLine />
                <span>
                  <Translator path="hero.menu_contact" />
                </span>
              </HeroMenuButton>
            </NeonContentContainer>
          </div>
        </HeroContent>
      </div>
    </HeroContainer>
  )
}

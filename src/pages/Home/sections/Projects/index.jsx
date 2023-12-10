import { RiGithubFill } from 'react-icons/ri'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { Divider } from '../../../../components/Divider'
import { NeonContentContainer } from '../../../../components/NeonContentContainer'
import Translator from '../../../../components/Translator'
import { ProjectsContainer, ProjectsContent, ProjectsList } from './styles'

import { Button } from '../../../../components/Button'

import project1 from '../../../../assets/images/projects/coffee-delivery.webp'
import project2 from '../../../../assets/images/projects/paint.webp'
import project3 from '../../../../assets/images/projects/tender-note.webp'
import project4 from '../../../../assets/images/projects/github-blog.webp'

export function Projects() {
  const { t } = useTranslation()

  const projectsList = [
    {
      title: 'coffee delivery',
      description: t('projects.project1'),
      techs: 'ReactJS, Typescript, axios, styled-components, vite',
      img: project1,
      github: 'https://github.com/msawaguchi/coffee-delivery-frontend',
    },
    {
      title: 'paint xp clone',
      description: t('projects.project2'),
      techs: 'VanillaJS, HTML, CSS',
      img: project2,
      github: 'https://github.com/msawaguchi/paint_xp_clone',
    },
    {
      title: 'tender note',
      description: t('projects.project3'),
      techs: 'ReactJS, Typescript, styled-components, vite',
      img: project3,
      github: 'https://github.com/msawaguchi/tender-note',
    },
    {
      title: 'github blog',
      description: t('projects.project4'),
      techs: 'ReactJS, Typescript, axios, styled-components, vite',
      img: project4,
      github: 'https://github.com/msawaguchi/github-blog',
    },
  ]

  return (
    <ProjectsContainer id="projects">
      <Divider />
      <div className="hero-mask">
        <ProjectsContent>
          <h1 className="h1-title">
            <Translator path="projects.projects" />
          </h1>
          <strong>
            <Translator path="projects.projects_intro" />
          </strong>
          <ProjectsList>
            {projectsList.map((project) => (
              <NeonContentContainer key={project.title}>
                <div key={project.title} className="project-card">
                  <img src={project.img} alt="" loading="lazy" />
                  <div>
                    <h4>{project.title}</h4>
                  </div>

                  <p>{project.description}</p>

                  <h4>Techs</h4>
                  <span>{project.techs}</span>

                  <div>
                    {/* <MdOutlineOpenInNew /> */}
                    <a href={project.github}>
                      <RiGithubFill />
                    </a>
                  </div>
                </div>
              </NeonContentContainer>
            ))}
          </ProjectsList>
          <a href="https://github.com/msawaguchi">
            <Button>
              <Translator path="projects.projects_visit" />
            </Button>
          </a>
        </ProjectsContent>
      </div>
    </ProjectsContainer>
  )
}

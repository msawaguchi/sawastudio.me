import { RiGithubFill } from 'react-icons/ri'
import { TbBrandFigma, TbWorldWww } from 'react-icons/tb'
import { RiGooglePlayFill, RiAppleFill, RiLink } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'

import { Divider } from '../../../../components/Divider'
import { NeonContentContainer } from '../../../../components/NeonContentContainer'
import { NeonContentCianoContainer } from '../../../../components/NeonContentCianoContainer'
import Translator from '../../../../components/Translator'
import { ProjectsContainer, ProjectsContent, ProjectsList, ProjectsSawaStudio, MoreInfoLink, DownloadStoreButton } from './styles'

import { Button } from '../../../../components/Button'

import project1 from '../../../../assets/images/projects/coffee-delivery.webp'
import project2 from '../../../../assets/images/projects/paint.webp'
import project3 from '../../../../assets/images/projects/tender-note.webp'
import project4 from '../../../../assets/images/projects/github-blog.webp'
import project7 from '../../../../assets/images/projects/portfolio_msawaguchi.png'
import project9 from '../../../../assets/images/projects/project9.png'
import project10 from '../../../../assets/images/projects/project10.png'
import project11 from '../../../../assets/images/projects/project11.png'
import cid360Icon from '../../../../assets/images/cid360app/icone.webp'

export function Projects() {
  const { t } = useTranslation()

  const projectsSawaStudioList = [
    {
      title: t('projects.projects_cid360_title'),
      description: t('projects.projects_cid360_description'),
      googlePlay: 'https://play.google.com/store/apps/details?id=sawastudio.me.cid360',
      appStore:
        'https://apps.apple.com/us/app/cid-360-busca-cid-11-cid-10/id6784022155',
      link: './cid360app',
      icon: cid360Icon,
    },
  ]

  const projectsList = [
    {
      title: 'restaurant menu',
      description: t('projects.project9'),
      techs: 'ReactJS, Typescript, Redux, styled-components, vite',
      img: project9,
      github: 'https://github.com/msawaguchi/qskitchen',
      deploy: 'https://qskitchen-msawaguchi.netlify.app/',
    },
    {
      title: 'paint xp clone',
      description: t('projects.project2'),
      techs: 'VanillaJS, HTML, CSS',
      img: project2,
      github: 'https://github.com/msawaguchi/paint_xp_clone',
      deploy: 'https://pastel-paint-xp.netlify.app/',
    },
    {
      title: 'coffee delivery',
      description: t('projects.project1'),
      techs: 'ReactJS, Typescript, axios, styled-components, vite',
      img: project1,
      github: 'https://github.com/msawaguchi/coffee-delivery-frontend',
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
      deploy: 'https://github-issues-as-a-blog.netlify.app/',
    },
    /* {
      title: '[UI Design] jocy flores',
      description: t('projects.project5'),
      techs: 'Figma',
      img: project5,
      github: '',
      figma:
        'https://www.figma.com/file/qtLs8QLLN9bQPGWuP8iG9a/jocy?type=design&node-id=0%3A1&mode=design&t=0p3IJjPQlPJDesim-1',
    },
    {
      title: '[UI Design] Digital bank',
      description: t('projects.project6'),
      techs: 'Figma',
      img: project6,
      github: '',
      figma:
        'https://www.figma.com/file/rRUy8YqLCxIDNdO1gJKxUH/Digital-Bank?type=design&node-id=0%3A1&mode=design&t=o2SfKx5xpJTPZhry-1',
    }, */
    {
      title: 'My Personal Site',
      description: t('projects.project7'),
      techs: 'Figma / ReactJS',
      img: project7,
      github: 'https://github.com/msawaguchi/sawastudio.me',
      figma:
        'https://www.figma.com/file/keAbqIWQ1VCvBmzf1kdzbM/Missae-Sawaguchi-Portfolio?type=design&node-id=0%3A1&mode=design&t=5Ywi39u9aVe3uG21-1',
    },
    {
      title: 'Kana Quiz',
      description: t('projects.project10'),
      techs: 'ReactJS',
      img: project10,
      github: 'https://github.com/msawaguchi/kana-quiz',
      deploy: 'https://kana-quizz.netlify.app/',
    },
    {
      title: 'Svelte Kanban',
      description: t('projects.project11'),
      techs: 'Svelte',
      img: project11,
      github: 'https://github.com/msawaguchi/svelte_basic_kanban',
      deploy: 'https://svelte-basic-kanban.netlify.app/',
    },
    /* {
      title: '[UI Design] HR Star',
      description: t('projects.project8'),
      techs: 'Figma',
      img: project8,
      github: '',
      figma:
        'https://www.figma.com/file/QmjIr5A00IwudBP6OV1KsL/HR-Star?type=design&node-id=0%3A1&mode=design&t=KGGvQEPt5HPDNng5-1',
    }, */
  ]

  return (
    <ProjectsContainer id="projects">
      <Divider />
      <div className="hero-mask">
        <ProjectsContent>
          <h1 className="h1-title">
            <Translator path="projects.projects" />
          </h1>
          <ProjectsSawaStudio>
            <NeonContentCianoContainer>
             <h2>Sawa Studio</h2>
             <strong>
              <Translator path="projects.projects_studio_intro" />
             </strong>
             <ProjectsList>
              {projectsSawaStudioList.map((project) => (
                <NeonContentCianoContainer key={project.title}>
                  <div key={project.title} className="project-card">
                    <img src={project.icon} alt="" loading="lazy" />
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="download-store-buttons">
                      <DownloadStoreButton href={project.googlePlay}>
                        Google Play <RiGooglePlayFill />
                      </DownloadStoreButton>
                      <DownloadStoreButton href={project.appStore}>
                        App Store <RiAppleFill />
                      </DownloadStoreButton>
                    </div>
                    <MoreInfoLink href={project.link}>
                        <Translator path="projects.projects_more_info" /> <RiLink />
                    </MoreInfoLink>
                  </div>
                </NeonContentCianoContainer>
              ))}
              </ProjectsList>
            </NeonContentCianoContainer>
          </ProjectsSawaStudio>
          <ProjectsSawaStudio>
            <NeonContentCianoContainer>
             <h2><Translator path="projects.projects_personal_title" /></h2>
             <strong>
                <Translator path="projects.projects_personal_intro" />
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

                  <h4>Techs / Tools</h4>
                  <span>{project.techs}</span>

                  <div>
                    Checkout it out on:
                    {project.github && (
                      <a href={project.github}>
                        <RiGithubFill />
                      </a>
                    )}
                    {project.deploy && (
                      <a href={project.deploy}>
                        <TbWorldWww />
                      </a>
                    )}
                    {project.figma && (
                      <a href={project.figma}>
                        <TbBrandFigma />
                      </a>
                    )}
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
            </NeonContentCianoContainer>
          </ProjectsSawaStudio>
        </ProjectsContent>
      </div>
    </ProjectsContainer>
  )
}

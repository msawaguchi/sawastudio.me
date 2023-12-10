import styled from 'styled-components'
import bgHero from '../../../../assets/images/backgrounds/bg-hero.webp'

export const BlogContainer = styled.section`
  width: 100%;
  height: auto;
  background: url(${bgHero}) no-repeat center center;
  background-size: cover;

  h1 {
    margin-bottom: 2rem;
  }
`
export const BlogListPostContainer = styled.div`
  width: 80rem;
  /* height: 100vh; */
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  padding-bottom: 4.5rem;

  strong {
    padding: 4rem 0 2rem 0rem;
    color: white;
    margin: 0 auto;
  }

  @media (max-width: 820px) {
    width: 99%;
  }
`

export const PostList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;

  .odd-post {
    flex-direction: row-reverse;
  }

  @media (max-width: 740px) {
    height: auto;
  }
`

export const PostListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .post-item {
    display: flex;
    flex-direction: row !important;

    div {
      display: flex;
      flex-direction: column;
      padding-top: 0.5rem;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }

  img {
    width: 17rem;
    height: fit-content;
    margin-right: 1rem;
  }

  p {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  span {
    color: #56f5ff;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  button {
    margin: 0 auto;
    width: 20rem;
    height: 3rem;
  }

  @media (max-width: 430px) {
    padding: 0rem;
    margin-bottom: 2rem;

    img {
      width: 100%;
    }
  }

  @media (max-width: 940px) {
    flex-direction: column !important;

    .post-item {
      flex-direction: column !important;
    }

    img {
      margin: 0 auto;
    }
  }
`

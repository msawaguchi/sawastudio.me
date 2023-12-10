import { Divider } from '../../../../components/Divider'
import { NeonContentContainer } from '../../../../components/NeonContentContainer'
import { Button } from '../../../../components/Button'
import Translator from '../../../../components/Translator'
import {
  BlogContainer,
  BlogListPostContainer,
  PostList,
  PostListItem,
} from './styles'
import post2 from '../../../../assets/images/posts/2.png'
import post3 from '../../../../assets/images/posts/3.png'
import post4 from '../../../../assets/images/posts/4.png'

export function Blog() {
  return (
    <BlogContainer id="blog">
      <Divider />
      <div className="hero-mask">
        <BlogListPostContainer>
          <h1 className="h1-title">BLOG</h1>
          <strong>
            <Translator path="blog.blog_intro" />
          </strong>
          <PostList>
            <PostListItem>
              <NeonContentContainer>
                <div className="post-item">
                  <img src={post4} alt="" loading="lazy" />
                  <div>
                    <div>
                      <h3>
                        PARADIGMAS DE PROGRAMAÇÃO – IMPERATIVO E DECLARATIVO
                      </h3>
                    </div>

                    <p>
                      Olá!! ~ 🙂 No post passado, tivemos um vislumbre teórico
                      sobre os paradigmas de programação e hoje vamos...
                    </p>
                  </div>
                </div>
              </NeonContentContainer>
              <a href="https://sawastudio.me/blog/index.php/2022/12/29/paradigmas-de-programacao-imperativo-e-declarativo/">
                <Button>
                  <Translator path="blog.blog_read_more" />
                </Button>
              </a>
            </PostListItem>
            <PostListItem className="odd-post">
              <NeonContentContainer>
                <div className="post-item">
                  <img src={post3} alt="" loading="lazy" />
                  <div>
                    <div>
                      <h3>PARADIGMAS DE PROGRAMAÇÃO</h3>
                    </div>

                    <p>
                      Olá 🙂 ✧! Neste post, vamos abordar um conceito teórico
                      imprescindível do mundo da programação: paradigmas. Há
                      muita discussão sobre qual linguagem ou framework é
                      melhor, mas pouco...
                    </p>
                  </div>
                </div>
              </NeonContentContainer>
              <a href="https://sawastudio.me/blog/index.php/2022/12/26/paradigmas-de-programacao/">
                <Button>
                  <Translator path="blog.blog_read_more" />
                </Button>
              </a>
            </PostListItem>
            <PostListItem>
              <NeonContentContainer>
                <div className="post-item">
                  <img src={post2} alt="" loading="lazy" />
                  <div>
                    <div>
                      <h3>
                        ATRAVÉS DOS NÚMEROS – FUNÇÃO QUADRÁTICA E PARÁBOLAS
                      </h3>
                    </div>

                    <p>
                      Olá! Como dito no primeiro post, a falta de
                      contextualização entre a matemática e o mundo real faz com
                      que muitos não vejam sentido em aprendê-la...
                    </p>
                  </div>
                </div>
              </NeonContentContainer>
              <a href="https://sawastudio.me/blog/index.php/2022/10/22/atraves-dos-numeros-funcao-quadratica-e-parabolas/">
                <Button>
                  <Translator path="blog.blog_read_more" />
                </Button>
              </a>
            </PostListItem>
          </PostList>
        </BlogListPostContainer>
      </div>
    </BlogContainer>
  )
}

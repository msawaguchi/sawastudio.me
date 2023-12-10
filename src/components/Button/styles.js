import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-size: 1.45rem;
  color: #56f5ff;
  background: transparent;
  border-radius: 16px;
  border: 2px solid #56f5ff;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #fff;
    border: 2px solid #fff;
    text-shadow: 0 0 3px #dadada;
    box-shadow:
      0px 0px 15px #dadada,
      inset 0px 0px 15px #dadada;
    transition: box-shadow 0.5s;
  }
`

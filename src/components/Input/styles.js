import styled from 'styled-components'

export const InputContainer = styled.input`
  height: 2.5rem;
  border-radius: 1rem;
  background: #172b45;
  padding: 8px;
  border: 2px solid #56f5ff;
  color: #56f5ff;
  font-size: 1.15rem;
  font-weight: bold;

  &:focus {
    box-shadow:
      0px 0px 10px rgba(86, 245, 255, 0.5),
      inset 0px 0px 10px rgba(86, 245, 255, 0.5);
  }
`

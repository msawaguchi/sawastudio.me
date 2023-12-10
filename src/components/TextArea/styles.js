import styled from 'styled-components'

export const TextAreaContainer = styled.textarea`
  border-radius: 1rem;
  background: #172b45;
  padding: 8px;
  border: 2px solid #56f5ff;
  color: #56f5ff;
  font-size: 1.15rem;
  font-weight: bold;
  resize: none;

  &:focus {
    box-shadow:
      0px 0px 10px rgba(86, 245, 255, 0.5),
      inset 0px 0px 10px rgba(86, 245, 255, 0.5);
  }

  .error {
    color: #c53030;
    margin-top: -2%;
    font-weight: bold;
  }
`

import styled from 'styled-components'

export const NeonContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(175, 66, 161, 0.2);
  border: 1px solid #ff56b1;
  border-radius: 8px;
  padding: 1rem;
  box-shadow:
    0px 0px 15px rgba(255, 86, 177, 0.5),
    inset 0px 0px 15px rgba(255, 86, 177, 0.5);

  &:hover {
    box-shadow:
      0px 0px 25px rgba(255, 86, 177, 0.5),
      inset 0px 0px 25px rgba(255, 86, 177, 0.5);
  }
`

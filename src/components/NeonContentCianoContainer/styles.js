import styled from 'styled-components'

export const NeonContentCiano = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(61, 156, 179, 0.2);
  border: 1px solid #3D9CB3;
  border-radius: 8px;
  padding: 2rem;
  box-shadow:
    0px 0px 15px rgba(61, 156, 179, 0.5),
    inset 0px 0px 15px rgba(61, 156, 179, 0.5);

  &:hover {
    box-shadow:
      0px 0px 25px rgba(61, 156, 179, 0.5),
      inset 0px 0px 25px rgba(61, 156, 179, 0.5);
  }
`
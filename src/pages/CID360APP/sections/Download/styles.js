import styled from 'styled-components'

const storeButtonHeight = 'calc(0.75rem * 2 + 1.25rem + 4px)'

export const StoreButton = styled.a`
  display: inline-flex;
  line-height: 0;
  transition: opacity 0.2s ease;

  img {
    display: block;
    height: ${storeButtonHeight};
    width: auto;
  }

  &:hover {
    opacity: 0.9;
  }
`

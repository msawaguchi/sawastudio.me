import styled, { css } from 'styled-components'

export const MenuContainer = styled.div`
  width: 40rem;
  height: 4rem;
  margin: 0 auto;
  border-radius: 6px;
  background: rgb(21, 37, 66, 0.9);
  border: 1px solid #ff56b1;
  box-shadow:
    0px 0px 15px rgba(255, 86, 177, 0.5),
    inset 0px 0px 15px rgba(255, 86, 177, 0.5);
  /* right: 0; */

  div {
    display: flex;
    justify-content: space-around;
  }

  svg {
    font-size: 1.3rem;
  }

  ${(props) =>
    props.isExpanded &&
    css`
      height: 24rem;
      transition: height 0.3s;
    `}

  .menu-bars {
    display: none;
  }

  @media (max-width: 630px) {
    width: 5rem;
    right: 0;

    .menu-bars {
      position: relative;
      width: 100%;
      display: flex;
      color: white;
      svg {
        margin-right: 0rem !important;
      }
    }

    div {
      width: 16rem;
      display: flex;
      visibility: visible;
      position: absolute;
    }

    div:not(.menu-bars) {
      width: 100%;
      display: flex;
      flex-direction: column;
      visibility: hidden;

      div {
        flex-direction: row;
        padding: 1rem 0rem;
      }
    }

    ${(props) =>
      props.isExpanded &&
      css`
        width: 16rem;

        .menu-bars {
          position: relative;
        }

        div:not(.menu-bars) {
          visibility: visible;
          position: relative;
        }
      `}
  }
`

export const MenuButton = styled.div`
  width: 40rem;
  height: 100%;
  display: flex;
  justify-content: center !important;
  align-items: center;
  text-align: center;

  color: #dadada;
  text-transform: lowercase;
  font-size: 1.3rem;
  font-weight: bold;
  text-shadow: 0 0 1px #dadada;

  &:hover {
    cursor: pointer;
    color: white;
    text-shadow: 0 0 8px #fff;
    transition: color 0.5s;
  }

  svg {
    margin-right: 0.5rem;
  }
`

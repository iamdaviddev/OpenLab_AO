import styled from "styled-components";

const TagHeader = styled.header``

const Logo = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1.2em;
  margin-right: 20px;
`

export function Header() {
  return (
    <header>
      <Logo href="">
        OpenLab
      </Logo>
    </header>
  )
}
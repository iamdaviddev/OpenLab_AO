import { Search } from "lucide-react";
import styled from "styled-components";


const TagHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Logo = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 2.2em;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  margin-left: 20px;
  font-size: 1em;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 1em;
  border: none;
  background-color: transparent;
  outline: none;
  color: #333;
  }
`

const Div = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
  
export function Header() {
  return (
    <TagHeader>
      <Logo href="">
        OpenLab
      </Logo>
      <Div>
        <Search size={25} color="#333" />
        <SearchInput type="text" placeholder="Buscar projectos..." />
      </Div>
      <Nav>
        <NavLink href="/articles">
          Blogs
        </NavLink>
        <NavLink href="/projects">
          Projetos
        </NavLink>
      </Nav>
    </TagHeader>
  )
}
import styled from "styled-components";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Main = ({children}: {children: React.ReactNode}) => {
  return (
    <Div>
      {children}
    </Div>
  );
}

import styled from "styled-components";

const HeroDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/Image_fx (2).png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Centraliza o conteúdo filho verticalmente e alinha à direita */
  display: flex;
  flex-direction: column;
  justify-content: center;     // centro vertical (meio da altura)
  align-items: flex-end;       // tudo alinhado à direita
  padding: 0 6% 0 0;           // espaço confortável da borda direita (ajusta % ou px)
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;       // alinha título e parágrafo à direita
  max-width: 600px;            // limita a largura para não ficar muito largo em telas grandes
  text-align: right;           // texto dentro do bloco alinhado à direita
  gap: 1.2rem;                 // espaço entre título e parágrafo
`;

const Title = styled.h1`
  color: white;
  font-size: 3.8rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.8);
`;

const Subtitle = styled.p`
  color: #f0f0f0;
  font-size: 1.4rem;
  font-weight: 400;
  margin: 0;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
  max-width: 500px;
`;

export const HeroSection = () => {
  return (
    <HeroDiv>
      <ContentWrapper>
        <Title>Bem-vindo ao OpenLab</Title>
        <Subtitle>
          Descubra projetos inovadores, conecte-se com criadores e transforme
          ideias em realidade na maior comunidade aberta de Angola.
        </Subtitle>
      </ContentWrapper>
    </HeroDiv>
  );
};
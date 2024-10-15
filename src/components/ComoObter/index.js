import {CircleSpan, Container, ImagemIlustrada, MarkContainer, Subtitle, TextContainer, Title,  } from "./style";

export default function ComoObter(){
   return(
        <Container>
            <ImagemIlustrada src="/images/obter-planta.png" alt="foto ilustrativa" />
            <TextContainer>
                <Subtitle>Como conseguir</Subtitle>
                <Title>minha planta</Title>
                <MarkContainer>
                    <CircleSpan></CircleSpan><Subtitle>Escolha suas plantas</Subtitle>
                </MarkContainer>
                <MarkContainer>
                    <CircleSpan></CircleSpan><Subtitle>Faça seu pedido</Subtitle>
                </MarkContainer>
                <MarkContainer>
                    <CircleSpan></CircleSpan><Subtitle>Aguarde na sua casa</Subtitle>
                </MarkContainer>
            </TextContainer>
        </Container>
   );
}
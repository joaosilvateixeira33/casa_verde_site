import styled from "styled-components";

export const AssinaturaNewsletterContainer = styled.div`
    background-color: #ffe29a;
    padding: 16px;
    margin-top: 16px;
    position: relative;

    @media (min-width: 920px) {
        background-color: transparent;
        margin-top: 155px;
        &:after {
            content: "";
            display: block;
            width: 787px;
            height: 975px;
            background-image: url('/images/hero-image.png');
            position: absolute;
            --baseDistance: -319px;
            top: calc(var(--baseDistance) + 50px);
            right: 0;
            z-index: -1;
            pointer-events: none;
        }
    }
`;

export const AssinaturaNewsletterContent = styled.div`
    max-width: 585px;
`;

export const AssinaturaNewsletterContentText = styled.div`
    max-width: 481px;
    margin-bottom: 32px;
`;

export const AssinaturaNewsletterTitle = styled.h1`
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 24px;
`;

export const AssinaturaNewsletterTitleStrong = styled.strong`
    font-family: Elsie Swash Caps;
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0em;
    text-align: left;

    @media (min-width: 920px) {
        font-size: 82px;
    }
`;

export const AssinaturaNewsletterParagraph = styled.p`
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 16px;
`;

export const Form = styled.form`
  /* Estilos do formulário */
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

export const InputEmail = styled.input.attrs({ type: "email" })`
  padding: 27px;
  padding-left: 55px;
  flex: 1;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  background-image: url("/images/icons/icon-mail.svg");
  background-repeat: no-repeat;
  background-position: 16px center;
  outline-color: #ffcb47;
  box-shadow: 10px 10px 30px 0px #0000000f;
  border: 0;

  &:hover {
    box-shadow: 10px 10px 30px 0px #0000002e;
  }
`;

export const Button = styled.button`
  height: 75px;
  width: 100%;
  border-radius: 0;
  color: #fff;
  background-color: #ffcb47;
  padding: 27px;
  box-shadow: 10px 10px 30px 0px #ffcb474d;
  border: 0;

  @media (min-width: 920px) {
    width: initial;
  }
`;
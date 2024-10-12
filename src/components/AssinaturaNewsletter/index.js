import formStyles from './form.module.css';
import { 
    AssinaturaNewsletterContainer, 
    AssinaturaNewsletterContent, 
    AssinaturaNewsletterContentText, 
    AssinaturaNewsletterTitle, 
    AssinaturaNewsletterTitleStrong,
    AssinaturaNewsletterParagraph,
    Form,
    FieldGroup,
    InputEmail,
    Button
} from './styles';

export default function AssinaturaNewsletter() {
    return (
        <AssinaturaNewsletterContainer>
            <AssinaturaNewsletterContent>
                <AssinaturaNewsletterContentText>
                    <AssinaturaNewsletterTitle>
                        Sua casa com as
                        <br />
                        <AssinaturaNewsletterTitleStrong>
                            melhores <br /> plantas
                        </AssinaturaNewsletterTitleStrong>
                    </AssinaturaNewsletterTitle>
                    <AssinaturaNewsletterParagraph>
                        Encontre aqui uma vasta seleção de AssinaturaNewsletterParagraphlantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                    </AssinaturaNewsletterParagraph>
                </AssinaturaNewsletterContentText>

                <Form action="/">
                    <FieldGroup>
                        <InputEmail placeholder='Insira seu E-mail' />
                        <Button>
                            Assinar Newsletter
                        </Button>
                    </FieldGroup>
                </Form>
            </AssinaturaNewsletterContent>
        </AssinaturaNewsletterContainer>
    );
}
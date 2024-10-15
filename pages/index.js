import Menu from '../src/components/Menu';
import AssinaturaNewsletter from '../src/components/AssinaturaNewsletter';
import ComoObter from '../src/components/ComoObter';
import OfferSection from '../src/components/Ofertas';

export default function HomePage() {
    return (
        <main>
            <Menu />
            <AssinaturaNewsletter />
            <ComoObter/>
            <OfferSection/>
        </main>
    );
}
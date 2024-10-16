import Menu from '../src/components/Menu';
import AssinaturaNewsletter from '../src/components/AssinaturaNewsletter';
import ComoObter from '../src/components/ComoObter';
import NossasPlantas from '../src/components/Ofertas';

export default function HomePage() {
    return (
        <main>
            <Menu />
            <AssinaturaNewsletter />
            <ComoObter/>
            <NossasPlantas/>
        </main>
    );
}
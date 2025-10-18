import Header from "@/ui/header";
import { Container } from "./styles";
import Intro from "./components/intro";
import Why from "./components/why";
import Start from "./components/start";
import Faq from "./components/faq";
import Soon from "./components/soon";
import Footer from "@/ui/footer";

export default function HomePage() {
    return(
        <Container>
            <Header />
            <Intro />
            <Why />
            <Start />
            <Faq />
            <Soon />
            <Footer />
        </Container>
    )
}
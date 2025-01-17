import Container from "./components/Container";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Newsletter from "./components/Newsletter";
import Promotions from "./components/Promotions";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Movies />
        <Newsletter />
        <Services />
        <Promotions />
      </Container>
    </main>
  );
}

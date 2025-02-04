import Container from "./components/ui/Container";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Newsletter from "./components/Newsletter";
import Promotions from "./components/Promotions";
import Services from "./components/Services";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Container className="-mt-10">
        <Movies />
        <Newsletter />
        <Services />
        <Promotions />
      </Container>
    </main>
  );
}

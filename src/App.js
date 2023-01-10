
import Community from './components/community/Community';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Merch from './components/merch/Merch';
import Music from './components/music/Music';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Nav />
      <Music />
      <Merch />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

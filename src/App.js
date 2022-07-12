import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import backgroundHero from './assets/images/bgHero.png';

function App() {
  return (
    <div className="App" style={{
      background: `url(${backgroundHero}) no-repeat center center fixed`,
      backgroundSize: 'cover'
    }}>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;

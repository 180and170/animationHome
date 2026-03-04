import { Suspense, lazy } from 'react';
import './App.css';
import './components/Header.css';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';

const PlasmaWave = lazy(() => import('./components/PlasmaWave'));

function App() {
  return (
    <div className="app">
      <AnnouncementBar
        message="React Bits Pro is here - 65 components, 100+ UI blocks, 5 full templates -"
        link="https://pro.reactbits.dev"
        linkText="check it out!"
      />

      <Header activeItem="home" />

      <section className="hero">
        <Suspense fallback={null}>
          <PlasmaWave
            yOffset={0}
            xOffset={40}
            rotationDeg={-45}
          />
        </Suspense>

        <div className="hero-content">
          <h1 className="hero-title">
            Animation<span className="highlight">Home</span>
          </h1>
          <p className="hero-subtitle">
            Stunning WebGL plasma wave background
            <br />
            powered by GLSL shaders
          </p>
          <div className="hero-buttons">
            <a href="https://github.com/DavidHDev/react-bits" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Browse Components
            </a>
          </div>
        </div>

        <div className="hero-fade" />
      </section>
    </div>
  );
}

export default App;

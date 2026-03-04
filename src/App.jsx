import { Suspense, lazy } from 'react';
import './App.css';

const PlasmaWave = lazy(() => import('./components/PlasmaWave'));

function App() {
  return (
    <div className="app">
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
              View Source
            </a>
            <a href="https://reactbits.dev" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              React Bits
            </a>
          </div>
        </div>

        <div className="hero-fade" />
      </section>
    </div>
  );
}

export default App;

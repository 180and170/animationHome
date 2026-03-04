import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Logo from './Logo';

function formatStarCount(count: number): string {
  if (count >= 1000) return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return String(count);
}

interface HeaderProps {
  activeItem?: string;
}

export default function Header({ activeItem = 'home' }: HeaderProps) {
  const starCountRef = useRef<HTMLSpanElement>(null);
  const [stars, setStars] = useState<string>('');

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch('https://api.github.com/repos/DavidHDev/react-bits');
        if (!res.ok) throw new Error('fetch failed');
        const data = await res.json();
        setStars(formatStarCount(data.stargazers_count));
      } catch {
        setStars('36.4K');
      }
    };
    fetchStars();
  }, []);

  useEffect(() => {
    if (stars && starCountRef.current) {
      gsap.fromTo(
        starCountRef.current,
        { scale: 0, width: 0, opacity: 0 },
        { scale: 1, width: '100px', opacity: 1, duration: 0.8, ease: 'back.out(1)' }
      );
    }
  }, [stars]);

  const navLinks = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'Docs', href: 'https://reactbits.dev/get-started/introduction', id: 'docs' },
    { label: 'Showcase', href: 'https://reactbits.dev/showcase', id: 'showcase' },
    { label: 'Tools', href: 'https://reactbits.dev/tools', id: 'tools' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <Logo />
        </a>

        <div className="nav-cta-group">
          <nav className="landing-nav-items">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`nav-link ${activeItem === link.id ? 'active-link' : ''}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="cta-button"
            onClick={() => window.open('https://github.com/DavidHDev/react-bits', '_blank')}
          >
            Star On GitHub
            <span ref={starCountRef} style={{ opacity: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {stars}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

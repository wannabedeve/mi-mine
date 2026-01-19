'use client';

import { useEffect, useState } from 'react';
import './style.css';

type Spec = {
  label: string;
  value: string;
};

type Badge = {
  text: string;
};

type Slide = {
  id: number;
  image: string;
  brand: string;
  name: string;
  subtitle: string;
  specs: Spec[];
  badges: Badge[];
};

const slidesData: Slide[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    brand: 'BMW M3',
    name: 'BMW M3 Competition',
    subtitle: 'Twin-Turbo Inline-6 Performance',
    specs: [
      { label: 'Engine:', value: '3.0L Twin-Turbo Inline-6' },
      { label: 'Power:', value: '503 HP @ 6,250 RPM' },
      { label: 'Torque:', value: '650 Nm @ 2,750 RPM' },
      { label: 'Transmission:', value: '8-Speed Automatic' },
    ],
    badges: [
      { text: '0-100: 3.9s' },
      { text: 'Top Speed: 290 km/h' },
      { text: 'Price: $73,400' },
    ],
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
    brand: 'Lamborghini Huracán',
    name: 'Lamborghini Huracán',
    subtitle: 'Naturally Aspirated V10 Excellence',
    specs: [
      { label: 'Engine:', value: '5.2L V10 Naturally Aspirated' },
      { label: 'Power:', value: '610 HP @ 8,250 RPM' },
      { label: 'Torque:', value: '560 Nm @ 6,500 RPM' },
      { label: 'Transmission:', value: '7-Speed Dual-Clutch' },
    ],
    badges: [
      { text: '0-100: 3.2s' },
      { text: 'Top Speed: 325 km/h' },
      { text: 'Price: $248,295' },
    ],
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    brand: 'Ferrari SF90',
    name: 'Ferrari SF90 Stradale',
    subtitle: 'Plug-in Hybrid Revolution',
    specs: [
      { label: 'Engine:', value: '4.0L V8 Twin-Turbo + Electric' },
      { label: 'Power:', value: '1000 HP Combined' },
      { label: 'Torque:', value: '800 Nm @ 6,000 RPM' },
      { label: 'Transmission:', value: '8-Speed F1 DCT' },
    ],
    badges: [
      { text: '0-100: 2.5s' },
      { text: 'Top Speed: 340 km/h' },
      { text: 'Price: $625,000' },
    ],
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    brand: 'Porsche 911',
    name: 'Porsche 911 Turbo S',
    subtitle: 'Twin-Turbo Flat-Six Perfection',
    specs: [
      { label: 'Engine:', value: '3.8L Twin-Turbo Flat-6' },
      { label: 'Power:', value: '640 HP @ 6,750 RPM' },
      { label: 'Torque:', value: '800 Nm @ 2,500 RPM' },
      { label: 'Transmission:', value: '8-Speed PDK' },
    ],
    badges: [
      { text: '0-100: 2.7s' },
      { text: 'Top Speed: 330 km/h' },
      { text: 'Price: $207,000' },
    ],
  },
];

export default function AccordionSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleSlide = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === -1 ? 0 : (prev + 1) % slidesData.length
    );
  };

  const previousSlide = () => {
    setActiveIndex((prev) =>
      prev === -1
        ? slidesData.length - 1
        : (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') previousSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="slider-container">
      <div className="now-showing">Now in Showroom</div>

      <div className="accordion-slider">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${activeIndex === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            onClick={() => toggleSlide(index)}
          >
            <div className="slide-content">
              <div className="slide-number">
                {String(slide.id).padStart(2, '0')}
              </div>

              <div className="car-brand">{slide.brand}</div>
              <div className="car-name">{slide.name}</div>
              <div className="car-subtitle">{slide.subtitle}</div>

              <div className="car-specs">
                {slide.specs.map((spec, i) => (
                  <div className="spec-row" key={i}>
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="performance-badges">
                {slide.badges.map((badge, i) => (
                  <div className="badge" key={i}>
                    <div className="badge-icon" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="add-button" />
          </div>
        ))}
      </div>

      <button className="navigation-arrows nav-prev" onClick={previousSlide}>
        ‹
      </button>
      <button className="navigation-arrows nav-next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}

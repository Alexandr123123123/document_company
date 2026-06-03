import './DocumentCard.css';

export const DocumentCard = () => {
  return (
    <div className="document-container offer-container">
      {/* Header */}
      <header className="offer-header">
        <div className="offer-logo-and-photos">
          <div className="offer-logo">
            <h2>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="logo-text">Tempelor</span>
            </h2>
            <p>Electrical solutions for you</p>
          </div>
          
          <div className="offer-photos-row">
            <div className="row-photo" style={{ backgroundImage: "url('/fan-photos/modern_switchboard.png')" }}></div>
          </div>
        </div>

        <div className="features-block">
          <div className="offer-features-grid">
            <div className="offer-feature-card">
              <svg className="offer-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="offer-feature-text">Quality</span>
            </div>
            <div className="offer-feature-card">
              <svg className="offer-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="offer-feature-text">Speed</span>
            </div>
            <div className="offer-feature-card">
              <svg className="offer-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="offer-feature-text">Reliability</span>
            </div>
            <div className="offer-feature-card with-bg" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%), url('/fan-photos/warranty_bg.png')" }}>
              <span className="offer-feature-text">Warranty</span>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Ribbon */}
      <div className="contact-ribbon">
        <div className="contact-item">
          <div className="contact-icons-group" style={{ display: 'flex', gap: '8px' }}>
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h3.013c.66 0 1.25.433 1.436 1.071l1.107 3.873c.15.526-.035 1.099-.46 1.411l-1.928 1.412a14.045 14.045 0 0 0 6.643 6.643l1.412-1.928c.312-.425.885-.61 1.411-.46l3.873 1.107c.638.186 1.071.777 1.071 1.436V18.5c0 1.381-1.119 2.5-2.5 2.5C9.725 21 3 14.275 3 5.5z"/>
              </svg>
            </div>
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
          </div>
          <span>+7 (999) 123-45-67</span>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <span>info@tempelor.com</span>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
            </svg>
          </div>
          <span>tempelor.com</span>
        </div>
      </div>

      {/* Three Text Cards */}
      <div className="text-cards-row">
        <div className="text-card-outline">
          <h4>Smart Solutions</h4>
          <p>Advanced electrical systems tailored for your modern lifestyle.</p>
        </div>
        <div className="text-card-outline">
          <h4>Eco-Friendly</h4>
          <p>Energy efficient components that reduce your carbon footprint.</p>
        </div>
        <div className="text-card-outline">
          <h4>24/7 Support</h4>
          <p>Always available to keep your systems running flawlessly.</p>
        </div>
      </div>

      {/* Core Services */}
      <section className="offer-section">
        <div className="core-services-big-card">
          <h3 className="cs-main-title">Our Core Services</h3>
          <div className="core-services-layout">
            <div className="cs-grid-large">
              {[
                { name: 'Wiring & Cabling', icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
                { name: 'Switchboards', bgImage: '/fan-photos/switchboards_bg.png' },
                { name: 'Smart Home', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
                { name: 'Alternative Energy', bgImage: '/fan-photos/energy_bg.png' }
              ].map((service, index) => (
                <div className={`cs-card cs-large ${service.bgImage ? 'with-bg' : ''}`} key={`large-${index}`}
                     style={service.bgImage ? { backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('${service.bgImage}')` } : {}}>
                  {!service.bgImage && (
                    <div className="cs-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {service.icon}
                      </svg>
                    </div>
                  )}
                  <span className="cs-text">{service.name}</span>
                </div>
              ))}
            </div>
            
            <div className="cs-grid-small">
              {[
                { name: 'Lighting Systems', bgImage: '/fan-photos/lighting_bg.png' },
                { name: 'Backup Power', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
                { name: 'Heating & Climate', bgImage: '/fan-photos/climate_bg.png' },
                { name: 'Security Systems', icon: <><circle cx="12" cy="12" r="3" /><path d="M22 12c-2.66 4.67-6.67 7-10 7s-7.34-2.33-10-7c2.66-4.67 6.67-7 10-7s7.34 2.33 10 7z" /></> },
                { name: 'EV Charging', icon: <><rect x="6" y="4" width="8" height="16" rx="2" /><path d="M14 9h2a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3" /><rect x="20" y="15" width="2" height="4" rx="1" /><path d="M8 10h4M8 14h4" /></> },
                { name: 'Spa Zones & Pools', bgImage: '/fan-photos/pools_bg.png' }
              ].map((service, index) => (
                <div className={`cs-card cs-small ${service.bgImage ? 'with-bg' : ''}`} key={`small-${index}`}
                     style={service.bgImage ? { backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('${service.bgImage}')` } : {}}>
                  {!service.bgImage && (
                    <div className="cs-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {service.icon}
                      </svg>
                    </div>
                  )}
                  <span className="cs-text">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="cs-bottom-ribbon">
            <span className="ribbon-title">Tempelor</span>
            <span className="ribbon-subtitle">Electrical Solutions</span>
          </div>
        </div>
      </section>

    </div>
  );
};

"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

/* ─── SVG Icon Components ─── */
const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconMessageCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
);
const IconHome = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
);
const IconGlobe = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const IconChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
);
const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

/* ─── Feature Icon Components (styled SVGs) ─── */
const FeatureIconWater = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
);
const FeatureIconPower = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const FeatureIconShield = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10" stroke="var(--primary)" strokeWidth="2"/></svg>
);
const FeatureIconLight = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/><circle cx="12" cy="12" r="5"/></svg>
);
const FeatureIconSports = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);
const FeatureIconRecycle = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10"/><path d="M3.51 15A9 9 0 0 0 18.36 18.36L23 14"/></svg>
);
const FeatureIconRoad = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M18 6L6 18"/><path d="M6 6l12 12"/><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
);
const FeatureIconTree = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const WHATSAPP_NUMBER = "2348000000000"; // Replace with actual number

const PROPERTY_OPTIONS = [
  "2 Bedroom Block of Flats — ₦50M",
  "3 Bedroom Block of Flats — ₦60M",
  "3 Bedroom Terrace Duplex — ₦90M",
  "5 Bedroom Terrace Duplex — ₦160M",
  "4 Bed Semi-Detached + BQ — ₦200M",
  "Not sure yet — Need guidance",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const openModal = (source: string) => {
    setModalSource(source);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, property, message } = formData;
    const whatsappText = encodeURIComponent(
      `Hi, I'm interested in Genesis Estate.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Property: ${property}\n` +
      `${message ? `Note: ${message}\n` : ""}` +
      `\nSource: ${modalSource}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`, "_blank");
    setModalOpen(false);
    setFormData({ name: "", phone: "", email: "", property: "", message: "" });
  };

  return (
    <>
      {/* ========== NAVBAR ========== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <a href="#" className="nav-logo">
          Genesis<span>Estate</span>
        </a>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#hero" className="active" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li>
            <button className="nav-cta" onClick={() => { setMenuOpen(false); openModal("Navbar"); }} id="nav-book-btn">
              Book Inspection
            </button>
          </li>
        </ul>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" id="mobile-menu-toggle">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* ========== 1. HERO SECTION ========== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury residential estate with modern architecture at dusk"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Own a Home That Matches Your Status, Not Just Your Budget</h1>
          <p className="hero-subtitle">
            Welcome to Genesis Estate, Apo (Wumba District), where smart investors
            and high-achievers secure premium living and future wealth.
          </p>
          <p className="hero-hook">
            Fully serviced estate · Strategic Abuja location · Flexible 12-month plan · 50% deposit to start
          </p>
          <div className="hero-buttons">
            <button onClick={() => openModal("Hero — Book Inspection")} className="btn-primary" id="hero-cta-inspection">
              <IconMapPin /> Book Inspection Now
            </button>
            <button onClick={() => openModal("Hero — Property Advisor")} className="btn-outline" id="hero-cta-advisor">
              <IconMessageCircle /> Speak With an Advisor
            </button>
          </div>
        </div>
      </section>

      {/* ========== 2. SOCIAL PROOF STRIP ========== */}
      <div className="proof-strip" id="proof-strip">
        <p>
          Join <span>smart investors</span> already securing their place in Abuja&apos;s
          next <span>premium residential hub</span>.
        </p>
      </div>

      {/* ========== 3. OPPORTUNITY SECTION ========== */}
      <section className="section section-white" id="opportunity">
        <div className="container">
          <div className="opportunity-grid">
            <div className="opportunity-content animate-in">
              <p className="section-label">The Opportunity</p>
              <h2 className="section-title">
                Why Smart Investors Are Moving Fast on Apo Axis
              </h2>
              <p>
                Every experienced real estate investor understands one thing:
                <strong> Location timing is everything.</strong>
              </p>
              <p>Think about areas like:</p>
              <div className="location-tags">
                <span className="location-tag">Lokogoma</span>
                <span className="location-tag">Katampe</span>
                <span className="location-tag">Guzape</span>
              </div>
              <p>
                A few years ago, they were undervalued. Today? They&apos;ve multiplied
                in value. <strong>Apo (Wumba District)</strong> is following that same
                trajectory — but this time, <strong>you&apos;re getting in early.</strong>
              </p>
              <ul className="benefit-list">
                <li><span className="check-icon">✓</span> A structured estate (not random development)</li>
                <li><span className="check-icon">✓</span> Immediate livability + long-term appreciation</li>
                <li><span className="check-icon">✓</span> A property that grows in value while you sleep</li>
              </ul>
            </div>
            <div className="opportunity-image animate-in">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Aerial view of a planned residential estate with landscaped surroundings"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. ABOUT THE ESTATE ========== */}
      <section className="section section-light" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image animate-in">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Interior of a modern living room with large windows"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="about-badge">By Henez Homes</div>
            </div>
            <div className="animate-in">
              <p className="section-label">About The Estate</p>
              <h2 className="section-title">Welcome to Genesis Estate</h2>
              <p className="section-subtitle" style={{ marginBottom: "16px" }}>
                Genesis Estate is a premium residential development by Henez Homes,
                designed for individuals who value comfort, security, prestige, and
                long-term investment growth.
              </p>
              <p className="section-subtitle" style={{ marginBottom: "16px" }}>
                Every unit is built with modern architecture and sits within a fully
                planned estate environment that supports both living and rental income.
              </p>
              <p className="accent-text">
                This is not just a house — it&apos;s a lifestyle upgrade and a financial asset.
              </p>
              <div className="about-values">
                <div className="value-item">
                  <span className="value-icon"><IconHome /></span>
                  <span className="value-text">Comfort</span>
                </div>
                <div className="value-item">
                  <span className="value-icon"><FeatureIconShield /></span>
                  <span className="value-text">Security</span>
                </div>
                <div className="value-item">
                  <span className="value-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
                  <span className="value-text">Prestige</span>
                </div>
                <div className="value-item">
                  <span className="value-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></span>
                  <span className="value-text">Investment Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5. CORE FEATURES ========== */}
      <section className="section section-white" id="features">
        <div className="container">
          <div style={{ textAlign: "center" }} className="animate-in">
            <p className="section-label">Estate Features</p>
            <h2 className="section-title">Everything You Need — Already Built In</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Every detail has been planned to deliver a premium, stress-free living experience.
            </p>
          </div>
          <div className="features-grid">
            {[
              { icon: <FeatureIconWater />, title: "Central Water System", desc: "No daily water stress — consistent supply across all units" },
              { icon: <FeatureIconPower />, title: "Stable Electricity", desc: "Live and work without power interruptions" },
              { icon: <FeatureIconShield />, title: "24/7 Security", desc: "Round-the-clock protection for you and your family" },
              { icon: <FeatureIconLight />, title: "Security Lighting", desc: "Well-lit pathways and perimeters across the estate" },
              { icon: <FeatureIconSports />, title: "Sports & Recreation", desc: "Dedicated areas for fitness and leisure activities" },
              { icon: <FeatureIconRecycle />, title: "Waste Management", desc: "Organized waste systems for a clean environment" },
              { icon: <FeatureIconRoad />, title: "Road Network", desc: "Paved internal roads with easy access to the expressway" },
              { icon: <FeatureIconTree />, title: "Serene Environment", desc: "Quiet, family-friendly neighbourhood with green spaces" },
            ].map((f, i) => (
              <div className="feature-card animate-in" key={i} id={`feature-${i}`}>
                <span className="feature-icon-wrap">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. PRICING & PACKAGES ========== */}
      <section className="section section-light" id="pricing">
        <div className="container">
          <div className="pricing-header animate-in">
            <p className="section-label">Pricing &amp; Packages</p>
            <h2 className="section-title">Choose Your Level of Comfort &amp; Investment</h2>
            <div className="pricing-hook">
              Flexible payment plan — spread balance over 12 months · 50% initial deposit
            </div>
          </div>
          <div className="pricing-grid">
            {[
              { type: "2 Bedroom Block of Flats", status: "Advance Carcass", price: "₦50 Million", deposit: "₦25M", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", featured: false },
              { type: "3 Bedroom Block of Flats", status: "Advance Carcass", price: "₦60 Million", deposit: "₦30M", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", featured: true },
              { type: "3 Bedroom Terrace Duplex", status: "Available", price: "₦90 Million", deposit: "₦45M", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", featured: false },
              { type: "5 Bedroom Terrace Duplex", status: "Available", price: "₦160 Million", deposit: "₦80M", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80", featured: false },
              { type: "4 Bed Semi-Detached + BQ", status: "Premium", price: "₦200 Million", deposit: "₦100M", img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80", featured: true },
            ].map((p, i) => (
              <div className={`pricing-card${p.featured ? " featured" : ""} animate-in`} key={i} id={`pricing-${i}`}>
                <div className="pricing-image">
                  <Image src={p.img} alt={p.type} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="pricing-body">
                  <p className="pricing-type">{p.type}</p>
                  <p className="pricing-status">{p.status}</p>
                  <p className="pricing-amount">{p.price}</p>
                  <p className="pricing-plan">From {p.deposit} deposit · 12-month plan</p>
                  <div className="pricing-cta">
                    <button onClick={() => openModal(`Pricing — ${p.type}`)} className="check-btn">Check Availability</button>
                    <button onClick={() => openModal(`Floor Plan — ${p.type}`)} className="plan-btn">Request Floor Plan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. INVESTMENT ANGLE ========== */}
      <section className="section section-white" id="investment">
        <div className="container">
          <div style={{ textAlign: "center" }} className="animate-in">
            <p className="section-label">Investment Angle</p>
            <h2 className="section-title">This Isn&apos;t Just a Home — It&apos;s an Income Asset</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              With Abuja&apos;s growing population and housing demand, premium estates are
              becoming scarce. Position yourself to win — whether you live in it or lease it.
            </p>
          </div>
          <div className="invest-stats">
            <div className="invest-stat animate-in">
              <span className="stat-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              <h3>Earn Rental Income</h3>
              <p>High rental demand in Apo axis means consistent monthly cash flow from your property.</p>
            </div>
            <div className="invest-stat animate-in">
              <span className="stat-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </span>
              <h3>Flip for Capital Gains</h3>
              <p>Property values are rising fast. Buy today and watch your investment multiply over time.</p>
            </div>
            <div className="invest-stat animate-in">
              <span className="stat-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </span>
              <h3>Build Generational Wealth</h3>
              <p>Real estate remains the most reliable way to build wealth that outlasts generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 8. SCARCITY & URGENCY ========== */}
      <section className="section section-dark" id="urgency">
        <div className="container">
          <div className="urgency-content animate-in">
            <p className="section-label" style={{ color: "var(--primary-light)" }}>Act Now</p>
            <h2>Limited Units. High Demand.</h2>
            <p>
              Opportunities like this don&apos;t stay long in Abuja.
              Once early buyers secure the best units:
            </p>
            <ul className="urgency-points">
              <li><span className="dot"></span> Prices increase</li>
              <li><span className="dot"></span> Options reduce</li>
              <li><span className="dot"></span> Entry becomes harder</li>
            </ul>
            <p style={{ fontWeight: 600, color: "var(--primary-light)", fontSize: "1.15rem" }}>
              The smartest move is always early positioning.
            </p>
            <div style={{ marginTop: "36px" }}>
              <button onClick={() => openModal("Urgency CTA")} className="btn-primary" id="urgency-cta">
                Secure Your Unit Now <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 9. TESTIMONIALS ========== */}
      <section className="section section-light" id="testimonials">
        <div className="container">
          <div style={{ textAlign: "center" }} className="animate-in">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">What Smart Buyers Are Saying</h2>
          </div>
          <div className="testimonials-grid">
            {[
              { stars: 5, quote: "I secured my unit early, and within months, I already saw appreciation potential. This is one of the smartest decisions I've made.", name: "Adamu O.", role: "Investor · Abuja", initials: "AO" },
              { stars: 5, quote: "The estate is well-structured, the road network is excellent and the environment is serene. My family loves it here. A true lifestyle upgrade.", name: "Fatima K.", role: "Homeowner · Wumba District", initials: "FK" },
              { stars: 4, quote: "The flexible payment plan made it possible for me to own a premium property without breaking the bank. Henez Homes delivered on every promise.", name: "Chukwudi E.", role: "Investor · Lagos", initials: "CE" },
            ].map((t, i) => (
              <div className="testimonial-card animate-in" key={i}>
                <div className="stars">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. FINAL CTA ========== */}
      <section className="section section-dark final-cta" id="final-cta">
        <div className="container animate-in">
          <p className="section-label" style={{ color: "var(--primary-light)" }}>Don&apos;t Miss Out</p>
          <h2>Secure Your Unit Before Prices Adjust</h2>
          <p>
            You&apos;ve seen the opportunity. You understand the location.
            You know the value. Now the question is:
          </p>
          <p className="final-cta-question">
            Will you act early… or regret later?
          </p>
          <div className="cta-buttons">
            <button onClick={() => openModal("Final CTA — Book Inspection")} className="btn-primary" id="final-cta-inspection">
              <IconMapPin /> Book Physical Inspection
            </button>
            <button onClick={() => openModal("Final CTA — WhatsApp")} className="btn-whatsapp" id="final-cta-whatsapp">
              <IconMessageCircle /> Chat With Sales Advisor
            </button>
            <button onClick={() => openModal("Final CTA — Reserve")} className="btn-outline" id="final-cta-reserve">
              <IconHome /> Reserve My Unit Now
            </button>
          </div>
        </div>
      </section>

      {/* ========== 11. FOOTER ========== */}
      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Genesis<span>Estate</span></h3>
            <p>
              A premium residential development by Henez Homes.
              Located in the heart of Wumba District, Apo, Abuja —
              your gateway to premium living and smart investment.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <span className="fc-icon"><IconMapPin /></span>
              <span>Canary Street, Wumba District, Apo, Abuja</span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon"><IconGlobe /></span>
              <a href="https://henezstrategies.com" target="_blank" rel="noopener noreferrer">henezstrategies.com</a>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon"><IconMail /></span>
              <a href="mailto:info@henezstrategies.com">info@henezstrategies.com</a>
            </div>
          </div>
          <div>
            <h4>Stay Updated</h4>
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", marginBottom: "12px" }}>
              Get exclusive updates on new releases and property insights.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" id="newsletter-email" />
              <button type="submit" id="newsletter-submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Genesis Estate by Henez Homes. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ========== LEAD GEN MODAL ========== */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)} id="lead-modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} id="lead-modal">
            <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close modal" id="modal-close-btn">
              <IconX />
            </button>
            <div className="modal-header">
              <h3>Get in Touch With Our Team</h3>
              <p>Fill in your details and we&apos;ll connect you with a property advisor on WhatsApp.</p>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="lead-name"><IconUser /> Full Name</label>
                <input
                  type="text"
                  id="lead-name"
                  placeholder="e.g. John Doe"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lead-phone"><IconPhone /> Phone Number</label>
                <input
                  type="tel"
                  id="lead-phone"
                  placeholder="e.g. 08012345678"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lead-email"><IconMail /> Email Address</label>
                <input
                  type="email"
                  id="lead-email"
                  placeholder="e.g. john@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lead-property"><IconHome /> Property Interest</label>
                <div className="select-wrap">
                  <select
                    id="lead-property"
                    required
                    value={formData.property}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                  >
                    <option value="" disabled>Select a property type</option>
                    {PROPERTY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <IconChevronDown />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lead-message"><IconMessageCircle /> Additional Notes (optional)</label>
                <textarea
                  id="lead-message"
                  placeholder="Any questions or special requests?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="modal-submit" id="modal-submit-btn">
                <IconArrowRight /> Submit & Connect With Advisor
              </button>
              <p className="modal-disclaimer">
                Your information is secure. We&apos;ll only use it to assist you with your property inquiry.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

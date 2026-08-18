import { useMemo, useState } from 'react'
import {
  CalendarDays,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react'
import './styles.css'

type Vehicle = {
  name: string
  year: number
  status: 'Nuevo' | 'Usado'
  image: string
  category: string
}

const vehicles: Vehicle[] = [
  {
    name: 'BMW M3 Competition',
    year: 2026,
    status: 'Nuevo',
    category: 'Sedán deportivo',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Toyota Sequoia',
    year: 2026,
    status: 'Nuevo',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Ford Mustang GT',
    year: 2020,
    status: 'Usado',
    category: 'Deportivo',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=85',
  },
]

const advisors = [
  { name: 'Jonathan Diselle', initials: 'JD', role: 'Asesor de Élite' },
  { name: 'Rubén Ortiz', initials: 'RO', role: 'Asesor de Élite' },
  { name: 'Javier Rodríguez', initials: 'JR', role: 'Asesor de Élite' },
]

const reviews = [
  { name: 'María Laura Ramos', text: 'Excelente atención. Me acompañaron durante todo el proceso y respondieron cada duda.', stars: 5 },
  { name: 'Yoselin Leal', text: 'Muy buena experiencia, atención rápida y vehículos en excelentes condiciones.', stars: 5 },
  { name: 'Karoll Brown', text: 'Un equipo profesional y transparente. Totalmente recomendados.', stars: 5 },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [sent, setSent] = useState(false)

  const filteredVehicles = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return vehicles
    return vehicles.filter((vehicle) =>
      `${vehicle.name} ${vehicle.year} ${vehicle.status} ${vehicle.category}`.toLowerCase().includes(query),
    )
  }, [search])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="header">
        <button className="brand" onClick={() => scrollTo('inicio')} aria-label="Ir al inicio">
          <img src="/logo-magusa.svg" alt="Autos Magusa" />
          <span><b>AUTOS</b> MAGUSA</span>
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navegación principal">
          <button onClick={() => scrollTo('nosotros')}>Quiénes somos</button>
          <button onClick={() => scrollTo('catalogo')}>Catálogo</button>
          <button onClick={() => scrollTo('ubicacion')}>Ubícanos</button>
          <button onClick={() => scrollTo('contacto')}>Contáctanos</button>
          <button className="nav-app" onClick={() => scrollTo('app')}>Descarga nuestra app</button>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menú">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-shade" />
          <div className="container hero-content">
            <span className="eyebrow light"><Sparkles size={16} /> Selección premium en Caracas</span>
            <h1>Concesionario de<br />Vehículos de Alta Gama</h1>
            <p>Aquí podrás revisar la disponibilidad de nuestros vehículos, organizar una cita en tiempo real o conversar con cualquiera de nuestros asesores.</p>
            <div className="hero-actions">
              <button className="button button-red" onClick={() => scrollTo('contacto')}>
                <CalendarDays size={18} /> Agenda una cita
              </button>
              <label className="search-box">
                <Search size={20} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  onFocus={() => scrollTo('catalogo')}
                  placeholder="Buscar marca, modelo o año..."
                  aria-label="Buscar vehículos"
                />
              </label>
            </div>
          </div>
        </section>

        <section className="stats-wrap" aria-label="Indicadores Autos Magusa">
          <div className="stats-card">
            <div><ShieldCheck /><strong>+3</strong><span>Años de experiencia</span></div>
            <div><Users /><strong>+1000</strong><span>Clientes felices</span></div>
            <div><CalendarDays /><strong>+500</strong><span>Citas online</span></div>
          </div>
        </section>

        <section id="catalogo" className="section featured">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Catálogo seleccionado</span>
              <h2>Vehículos destacados</h2>
              <p>Una muestra de unidades disponibles. En la siguiente fase este catálogo se conectará al inventario administrable.</p>
            </div>

            <div className="vehicle-grid">
              {filteredVehicles.length > 0 ? filteredVehicles.map((vehicle) => (
                <article className="vehicle-card" key={vehicle.name}>
                  <div className="vehicle-image-wrap">
                    <img src={vehicle.image} alt={`${vehicle.name} ${vehicle.year}`} loading="lazy" />
                    <span className="vehicle-year">{vehicle.year}</span>
                  </div>
                  <div className="vehicle-body">
                    <div className="vehicle-meta"><span>{vehicle.status}</span><span>{vehicle.category}</span></div>
                    <h3>{vehicle.name}</h3>
                    <button className="text-link">Ver vehículo <ChevronRight size={17} /></button>
                  </div>
                </article>
              )) : (
                <div className="empty-state">
                  <Search size={34} />
                  <h3>No encontramos coincidencias</h3>
                  <p>Prueba con otro modelo, marca o año.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="nosotros" className="section about">
          <div className="container about-grid">
            <div className="about-mark">
              <img src="/logo-magusa.svg" alt="Símbolo Autos Magusa" />
            </div>
            <div className="about-copy">
              <span className="eyebrow">Quiénes somos</span>
              <h2>Nuestra Historia</h2>
              <p>Somos un concesionario enfocado en vehículos premium, creado para ofrecer una experiencia de compra clara, cercana y respaldada por atención personalizada.</p>
              <p>Seleccionamos cada unidad con criterio y acompañamos a nuestros clientes desde la consulta inicial hasta la entrega.</p>
              <button className="button button-red">Conócenos <ChevronRight size={18} /></button>
            </div>
          </div>
        </section>

        <section className="section advisors">
          <div className="advisors-overlay" />
          <div className="container advisors-content">
            <div className="section-heading centered light-copy">
              <span className="eyebrow light">Atención personalizada</span>
              <h2>Nuestros Asesores</h2>
              <p>Nuestro equipo está preparado para acompañarte durante todo el proceso de selección, compra y entrega de tu vehículo.</p>
            </div>
            <div className="advisor-grid">
              {advisors.map((advisor) => (
                <article className="advisor-card" key={advisor.name}>
                  <div className="advisor-avatar"><span>{advisor.initials}</span></div>
                  <h3>As. {advisor.name}</h3>
                  <p>{advisor.role}</p>
                  <a href="#contacto">Contactar asesor</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reviews">
          <div className="container">
            <div className="review-header">
              <div>
                <span className="eyebrow">Experiencias reales</span>
                <h2>Excelente en Google</h2>
              </div>
              <div className="rating"><strong>5.0</strong><span>{[1,2,3,4,5].map((star) => <Star key={star} size={18} fill="currentColor" />)}</span></div>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="stars">{Array.from({ length: review.stars }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
                  <p>“{review.text}”</p>
                  <strong>{review.name}</strong>
                  <small>Reseña de Google</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section social-proof">
          <div className="container">
            <div className="social-title">
              <div className="instagram-badge"><Instagram size={24} /></div>
              <div><strong>@autosmagusa</strong><span>Síguenos para ver nuevas unidades y novedades</span></div>
              <a className="button button-outline" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Seguir</a>
            </div>
            <div className="social-grid">
              {vehicles.concat(vehicles.slice(0, 2)).map((vehicle, index) => (
                <div className="social-tile" key={`${vehicle.name}-${index}`}>
                  <img src={vehicle.image} alt="Publicación Autos Magusa" loading="lazy" />
                  <span>Ver publicación</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section appointment">
          <div className="appointment-overlay" />
          <div className="container appointment-content">
            <div className="section-heading centered light-copy appointment-heading">
              <span className="eyebrow light">Atención Autos Magusa</span>
              <h2>Agenda tu Cita</h2>
              <p>¿Tienes alguna duda? Nuestro equipo puede asesorarte y coordinar una visita.</p>
            </div>
            <div className="appointment-grid">
              <form className="contact-card" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
                <div className="form-row">
                  <label>Nombre<input name="nombre" required placeholder="Tu nombre" /></label>
                  <label>Apellido<input name="apellido" required placeholder="Tu apellido" /></label>
                </div>
                <div className="form-row">
                  <label>Correo electrónico<input name="email" type="email" required placeholder="correo@ejemplo.com" /></label>
                  <label>WhatsApp<input name="whatsapp" required placeholder="+58 412 000 0000" /></label>
                </div>
                <label>Mensaje<textarea name="mensaje" rows={5} required placeholder="¿Qué vehículo te interesa?" /></label>
                <button className="button button-dark" type="submit">Enviar solicitud</button>
                {sent && <p className="form-success"><CheckCircle2 size={18} /> Demo lista. El backend PHP conectará este formulario al correo y panel de citas.</p>}
              </form>

              <aside className="hours-card">
                <h3>Horarios de Citas</h3>
                {['Lunes','Martes','Miércoles','Jueves','Viernes'].map((day) => <div className="hours-row" key={day}><span>{day}</span><strong>9:00 AM - 12:00 PM</strong></div>)}
                <div className="hours-row"><span>Sábado</span><strong>PREVIA CITA</strong></div>
                <div className="hours-row closed"><span>Domingo</span><strong>CERRADO</strong></div>
                <a className="button button-dark full" href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Contáctenos</a>
              </aside>
            </div>
          </div>
        </section>

        <section id="ubicacion" className="section location">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Visítanos</span>
              <h2>Ubicación</h2>
              <p><MapPin size={18} /> Caracas, Municipio Chacao, Av. Andrés Galarraga.</p>
            </div>
            <div className="location-grid">
              <div className="location-photo">
                <div className="location-photo-copy">
                  <MapPin size={30} />
                  <h3>Autos Magusa</h3>
                  <p>Chacao · Caracas</p>
                </div>
              </div>
              <iframe
                title="Mapa Autos Magusa"
                src="https://www.google.com/maps?q=Av.%20Andr%C3%A9s%20Galarraga%2C%20Chacao%2C%20Caracas&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="app" className="app-banner">
          <div className="container app-grid">
            <div className="phone-mockup">
              <div className="phone-speaker" />
              <img src="/logo-magusa.svg" alt="App Autos Magusa" />
              <strong>Autos<br />Magusa</strong>
            </div>
            <div className="app-copy">
              <span className="eyebrow light">Próximamente</span>
              <h2>Descarga nuestra app</h2>
              <p>Recibe notificaciones y obtén acceso a los vehículos más top antes que otros.</p>
              <div className="store-buttons">
                <button><span>Disponible en</span><strong>App Store</strong></button>
                <button><span>Disponible en</span><strong>Google Play</strong></button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand"><img src="/logo-magusa.svg" alt="Autos Magusa" /><strong>Autos Magusa</strong></div>
            <p>Vehículos premium y atención personalizada en Caracas.</p>
          </div>
          <div className="footer-links">
            <strong>Quiénes somos</strong>
            <button onClick={() => scrollTo('nosotros')}>Historia</button>
            <button onClick={() => scrollTo('catalogo')}>Catálogo</button>
            <button onClick={() => scrollTo('contacto')}>Agenda una cita</button>
            <button onClick={() => scrollTo('app')}>Descarga la app</button>
          </div>
          <div className="footer-contact">
            <strong>Autos Magusa</strong>
            <span><Phone size={16} /> Atención por WhatsApp</span>
            <span><Mail size={16} /> Contacto comercial</span>
            <span><Clock3 size={16} /> Lun–Vie · 9:00 AM–12:00 PM</span>
            <button className="button button-red" onClick={() => scrollTo('app')}>Descarga Ya!</button>
          </div>
        </div>
        <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Autos Magusa</span><span>Caracas, Venezuela</span></div></div>
      </footer>
    </div>
  )
}

export default App

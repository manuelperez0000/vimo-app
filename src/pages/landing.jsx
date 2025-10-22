import { ShieldCheckIcon, CurrencyDollarIcon, ChartBarIcon, GlobeAltIcon, ClockIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import './landing.css';

const LandingPage = () => {
  return (
    <div className="bg-light text-dark">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <div className="h4 fw-bold text-primary">Vimo</div>

          <a href="/auth/registro" className="btn btn-primary rounded-pill px-4">
            Crear Cuenta
          </a>
        </div>
        <div className='bg-primary py-2'>
          <div className='container'>
            <div className="row">
              <div className="col-12">
                <a href="#benefits" className="mx-2 text-muted text-decoration-none">Beneficios</a>
                <a href="#how-it-works" className="mx-2 text-muted text-decoration-none">Cómo funciona</a>
                <a href="#testimonials" className="mx-2 text-muted text-decoration-none">Testimonios</a>
                <a href="#faq" className="mx-2 text-muted text-decoration-none">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="text-center py-5 bg-info-subtle">
          <div className="container">
            <h1 className="display-4 fw-bolder text-dark">Ahorra en dólares desde Venezuela con total seguridad.</h1>
            <p className="lead text-muted mt-3">Protege tu dinero, genera ingresos y accede a tu cuenta desde cualquier dispositivo.</p>
            <a href="/auth/registro" className="btn btn-primary btn-lg rounded-pill px-5 py-3 mt-4 fw-semibold">
              Empieza a ahorrar ahora <GlobeAltIcon className="d-inline-block align-text-bottom" style={{ width: '24px', height: '24px' }} />
            </a>
            <div className="mt-5">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Persona usando la plataforma" className="img-fluid rounded shadow-lg mx-auto" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-5">
          <div className="container text-center">
            <h2 className="h2 fw-bold mb-5">Beneficios destacados</h2>
            <div className="row gy-4">
              <div className="col-lg">
                <CurrencyDollarIcon className="text-primary mb-3 icon-size" />
                <h3 className="h5 fw-semibold">Ahorro en dólares sin comisiones ocultas</h3>
              </div>
              <div className="col-lg">
                <ChartBarIcon className="text-primary mb-3 icon-size" />
                <h3 className="h5 fw-semibold">Intereses mensuales por tu saldo</h3>
              </div>
              <div className="col-lg">
                <ShieldCheckIcon className="text-primary mb-3 icon-size" />
                <h3 className="h5 fw-semibold">Seguridad bancaria internacional</h3>
              </div>
              <div className="col-lg">
                <DevicePhoneMobileIcon className="text-primary mb-3 icon-size" />
                <h3 className="h5 fw-semibold">Acceso desde cualquier navegador</h3>
              </div>
              <div className="col-lg">
                <ClockIcon className="text-primary mb-3 icon-size" />
                <h3 className="h5 fw-semibold">Soporte 24/7 en español</h3>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-5 bg-white">
          <div className="container text-center">
            <h2 className="h2 fw-bold mb-5">Cómo funciona</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="display-4 fw-bold text-primary mb-3">1</div>
                <h3 className="h5 fw-semibold mb-2">Crea tu cuenta</h3>
                <p className="text-muted">Con tu cédula y correo electrónico.</p>
              </div>
              <div className="col-md-3">
                <div className="display-4 fw-bold text-primary mb-3">2</div>
                <h3 className="h5 fw-semibold mb-2">Transfiere</h3>
                <p className="text-muted">Desde tu cuenta local.</p>
              </div>
              <div className="col-md-3">
                <div className="display-4 fw-bold text-primary mb-3">3</div>
                <h3 className="h5 fw-semibold mb-2">Ahorra y gana</h3>
                <p className="text-muted">Comienza a ahorrar y ganar intereses.</p>
              </div>
              <div className="col-md-3">
                <div className="display-4 fw-bold text-primary mb-3">4</div>
                <h3 className="h5 fw-semibold mb-2">Retira</h3>
                <p className="text-muted">Cuando lo necesites.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-5">
          <div className="container text-center">
            <h2 className="h2 fw-bold mb-5">Testimonios de usuarios</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Luis, Valencia" className="rounded-circle mx-auto mb-4 testimonial-img" />
                  <p className="text-muted fst-italic">&ldquo;Mi dinero está más seguro y crece cada mes.&rdquo;</p>
                  <p className="mt-3 fw-semibold">– Luis, Valencia</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Ana, Caracas" className="rounded-circle mx-auto mb-4 testimonial-img" />
                  <p className="text-muted fst-italic">&ldquo;Finalmente una forma fácil de ahorrar en dólares sin complicaciones.&rdquo;</p>
                  <p className="mt-3 fw-semibold">– Ana, Caracas</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                  <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Carlos, Maracaibo" className="rounded-circle mx-auto mb-4 testimonial-img" />
                  <p className="text-muted fst-italic">&ldquo;La plataforma es muy intuitiva y el soporte es excelente.&rdquo;</p>
                  <p className="mt-3 fw-semibold">– Carlos, Maracaibo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-5 bg-white">
          <div className="container">
            <h2 className="h2 fw-bold text-center mb-5">Comparativa de beneficios</h2>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th className="w-25">Característica</th>
                    <th className="bg-primary-subtle text-primary-emphasis">Ahorro en Dólares (Vimo)</th>
                    <th>Ahorro en Bolívares</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-semibold">Estabilidad</td>
                    <td className="bg-info-subtle">Alta</td>
                    <td>Baja</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">Rendimiento</td>
                    <td className="bg-info-subtle">Genera intereses en dólares</td>
                    <td>Nulo o negativo por inflación</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">Protección contra inflación</td>
                    <td className="bg-info-subtle">Total</td>
                    <td>Nula</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-5">
          <div className="container">
            <h2 className="h2 fw-bold text-center mb-5">Preguntas frecuentes</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3 className="h5 fw-semibold">¿Es legal ahorrar en dólares desde Venezuela?</h3>
                  <p className="text-muted mt-2">Sí, es completamente legal. Operamos bajo normativas internacionales que permiten a los venezolanos proteger su capital en moneda extranjera.</p>
                </div>
                <div className="mb-4">
                  <h3 className="h5 fw-semibold">¿Cómo retiro mi dinero?</h3>
                  <p className="text-muted mt-2">Puedes retirar tus fondos a tu cuenta bancaria local en bolívares o a cuentas internacionales en dólares, de forma rápida y segura.</p>
                </div>
                <div className="mb-4">
                  <h3 className="h5 fw-semibold">¿Qué pasa si el dólar sube o baja?</h3>
                  <p className="text-muted mt-2">Tus ahorros están en dólares, por lo que su valor no se ve afectado por la devaluación del bolívar. Si el dólar sube, tu poder de compra en bolívares aumenta.</p>
                </div>
                <div>
                  <h3 className="h5 fw-semibold">¿La plataforma cobra comisiones?</h3>
                  <p className="text-muted mt-2">No cobramos comisiones por mantenimiento de cuenta ni por los ahorros. Nuestras tarifas por retiros son transparentes y de las más bajas del mercado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="h2 fw-bold">Empieza hoy a construir tu futuro financiero.</h2>
            <a href="/auth/registro" className="btn btn-light btn-lg rounded-pill px-5 py-3 mt-4 fw-semibold">
              Empieza a ahorrar ahora
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-4 mb-md-0 text-center text-md-start">
              <div className="h4 fw-bold">Vimo</div>
              <p className="text-white-50">Tu ahorro, tu libertad.</p>
            </div>
            <div className="mb-4 mb-md-0">
              <a href="#" className="mx-2 text-decoration-none text-white-50">Términos y condiciones</a>
              <a href="#" className="mx-2 text-decoration-none text-white-50">Política de privacidad</a>
              <a href="#" className="mx-2 text-decoration-none text-white-50">Contacto</a>
            </div>
            <div>
              <a href="#" className="mx-2 text-decoration-none text-white-50">Instagram</a>
              <a href="#" className="mx-2 text-decoration-none text-white-50">X (Twitter)</a>
              <a href="#" className="mx-2 text-decoration-none text-white-50">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

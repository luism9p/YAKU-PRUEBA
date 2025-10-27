import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Team from '@/components/Team'


import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Droplet, Target, Eye, CheckCircle, Users, Award, Clock, Shield, Droplets, Network, Building2, FlaskConical, FileText, Wrench } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const services = [
    {
      icon: Droplets,
      title: 'Sistemas de Agua Potable',
      description: 'Diseño y ejecución de sistemas de abastecimiento de agua potable para comunidades urbanas y rurales.'
    },
    {
      icon: Network,
      title: 'Redes de Alcantarillado',
      description: 'Proyectos integrales de redes de alcantarillado sanitario y pluvial con tecnología moderna.'
    },
    {
      icon: Building2,
      title: 'Plantas de Tratamiento',
      description: 'Diseño de plantas de tratamiento de agua potable y residual con estándares internacionales.'
    },
    {
      icon: FlaskConical,
      title: 'Estudios Hidrológicos',
      description: 'Análisis detallados de cuencas hidrográficas y disponibilidad de recursos hídricos.'
    },
    {
      icon: FileText,
      title: 'Estudios de Impacto Ambiental',
      description: 'Evaluaciones ambientales completas para proyectos hidráulicos y de saneamiento.'
    },
    {
      icon: Wrench,
      title: 'Supervisión de Obras',
      description: 'Control de calidad y supervisión técnica de proyectos de infraestructura hidráulica.'
    }
  ]

  const features = [
    {
      icon: Users,
      title: 'Equipo Experimentado',
      description: 'Más de 15 años de experiencia en proyectos hidráulicos'
    },
    {
      icon: Award,
      title: 'Calidad Certificada',
      description: 'Proyectos ejecutados con los más altos estándares'
    },
    {
      icon: Clock,
      title: 'Entrega Puntual',
      description: 'Cumplimiento de cronogramas y compromisos'
    },
    {
      icon: Shield,
      title: 'Compromiso Ambiental',
      description: 'Soluciones sostenibles y amigables con el medio ambiente'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/95da7ccc-8556-4b74-8ead-ed0f183e30f9/generated_images/modern-hydraulic-infrastructure-engineer-f8f0213b-20251026034158.jpg"
            alt="Infraestructura Hidráulica"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1976D2]/90 to-[#2E7D32]/80"></div>
          <div className="absolute inset-0 water-flow opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-white text-center">
          <div className="fade-in-up max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img
                src="/logos/yaku-logo-icon.png"
                alt="Yaku Hidro Logo"
                className="h-40 w-auto"  // Sin wave-animation, tamaño fijo
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              YAKU HIDRO ESTUDIO S.A.C.
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Ingeniería Hidráulica y Saneamiento
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95">
              Soluciones integrales en recursos hídricos y saneamiento para el desarrollo sostenible del Perú
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-[#1976D2] text-white hover:bg-[#1565C0] text-lg px-8 py-6 transition-colors duration-200"  // Transición suave, sin ripple agresivo
              >
                <a href="#services">Nuestros Servicios</a>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-2 border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7] hover:text-white text-lg px-8 py-6 transition-colors duration-200"  // Azul claro para que se vea bien en fondo degradado
              >
                <a href="#contact">Contáctanos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/95da7ccc-8556-4b74-8ead-ed0f183e30f9/generated_images/professional-engineering-team-in-modern--20bdb64e-20251026034159.jpg"
                alt="Equipo de Ingeniería"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1976D2]/50 to-transparent"></div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                YAKU HIDRO ESTUDIO S.A.C. es una empresa peruana especializada en el desarrollo
                de proyectos de ingeniería hidráulica y saneamiento. Nuestro compromiso es
                proporcionar soluciones innovadoras y sostenibles que contribuyan al desarrollo
                de nuestro país.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Con un equipo multidisciplinario de ingenieros altamente capacitados, abordamos
                cada proyecto con profesionalismo, eficiencia y responsabilidad ambiental.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-[#4FC3F7]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#1976D2] mb-1">15+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-[#2E7D32]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#2E7D32] mb-1">100+</div>
                  <div className="text-sm text-gray-600">Proyectos Completados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-[#4FC3F7]/10 to-[#2E7D32]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-shadow bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#1976D2]/10 rounded-lg">
                  <Target className="h-8 w-8 text-[#1976D2]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Brindar soluciones integrales en ingeniería hidráulica y saneamiento, mediante
                la aplicación de tecnología moderna y conocimientos especializados, contribuyendo
                al desarrollo sostenible y al mejoramiento de la calidad de vida de la población peruana.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#2E7D32]/10 rounded-lg">
                  <Eye className="h-8 w-8 text-[#2E7D32]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como la empresa líder en ingeniería hidráulica y saneamiento en el
                Perú, destacándonos por la innovación, calidad y compromiso ambiental en cada uno
                de nuestros proyectos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas en ingeniería hidráulica y saneamiento adaptadas
              a las necesidades específicas de cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-t-4 border-[#4FC3F7]"
                >
                  <div className="mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#4FC3F7]/20 to-[#1976D2]/20 rounded-lg inline-block group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-[#1976D2]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#1976D2] to-[#2E7D32] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Características que nos distinguen en el mercado de la ingeniería hidráulica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center group">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors group-hover:scale-110 transform duration-300">
                      <Icon className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-center">Nuestro Compromiso</h3>
              <div className="space-y-3">
                {[
                  'Desarrollo de proyectos con estándares internacionales',
                  'Uso de tecnología de punta en diseño y modelación',
                  'Capacitación continua de nuestro equipo profesional',
                  'Compromiso con la sostenibilidad ambiental',
                  'Transparencia y ética en todos nuestros procesos'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2E7D32] to-[#1976D2] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para Iniciar tu Proyecto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contáctanos hoy y descubre cómo podemos ayudarte a desarrollar
            soluciones hidráulicas sostenibles y eficientes.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-white text-[#1976D2] hover:bg-gray-100 text-lg px-8 py-6"
          >
            <a href="#contact">Solicitar Cotización</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
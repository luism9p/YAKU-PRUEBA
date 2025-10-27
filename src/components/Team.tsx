import { Card } from '@/components/ui/card'
import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesionales altamente capacitados comprometidos con la excelencia en cada proyecto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              {/* Profile Image */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#4FC3F7] shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                    alt="Ing. Manuel Montoya Núñez"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Ing. Manuel Montoya Núñez
                  </h3>
                  <p className="text-[#1976D2] font-semibold mb-2">
                    Director Gerente
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#2E7D32] to-[#4FC3F7] rounded-full"></div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Ingeniero Civil especializado en Recursos Hídricos con más de 15 años de experiencia 
                  en el diseño y ejecución de proyectos hidráulicos y de saneamiento en todo el Perú. 
                  Egresado de la Universidad Nacional de Ingeniería (UNI), con maestría en Gestión 
                  Integrada de Recursos Hídricos.
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Especialidades:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#4FC3F7] rounded-full"></div>
                      Diseño Hidráulico
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#4FC3F7] rounded-full"></div>
                      Gestión de Recursos Hídricos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#4FC3F7] rounded-full"></div>
                      Sistemas de Saneamiento
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#4FC3F7] rounded-full"></div>
                      Modelación Hidrológica
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#1976D2] hover:text-[#2E7D32] transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:mmontoya@yakuhidro.com"
                    className="flex items-center gap-2 text-sm text-[#1976D2] hover:text-[#2E7D32] transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Team Message */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-br from-[#4FC3F7]/10 to-[#2E7D32]/10 border-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Equipo Multidisciplinario
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Contamos con un equipo de ingenieros civiles, sanitarios, ambientales y técnicos 
                especializados, todos comprometidos con entregar proyectos de la más alta calidad 
                que contribuyan al desarrollo sostenible del Perú.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Carlos Xavier</h3>
            <p className="text-sm mb-4">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais memoráveis.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#projetos" className="hover:text-white transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="#habilidades" className="hover:text-white transition-colors">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:carlos.xavier@example.com" className="hover:text-white transition-colors">
                  carlos.xavier@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+258840000000" className="hover:text-white transition-colors">
                  +258 84 000 0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Maputo, Moçambique</span>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/carlosxavier"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/carlosxavier"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Carlos Xavier. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
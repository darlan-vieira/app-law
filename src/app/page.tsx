
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SectionOne } from '@/components/Section1'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center py-8 px-10">
      <Header />
      
      {/* hero */}
      <Hero />
      {/* section1 */}
      <SectionOne />
      {/* section2 */}
      <div>
        <h1>Conheça nossos advogados mais talentosos e qualificados</h1>
        <div>
          <h3>Advogados verificados pelo conselho principal</h3>
          <p>Ao procurar um advogado, você quer um profissional que tenha experiência em lidar com casos como o seu e mantenha a mais alta ética e atendimento ao cliente.</p>
          <Link
              href=""
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              Ler mais
              <ArrowRight className="h-4 w-4" />
            </Link>
            {/* imagem */}
        </div>
      </div>
      {/* section3 */}
      <div>
        <div>
        <h2>Quais benefícios você obterá de nós?</h2>
          <p>Nós fornecemos serviços jurídicos de alta qualidade para você com as melhores pessoas integradas.</p>
          <button>Encontrar advogado</button>
        </div>
        {/* imagem */}
        <div>
          <span>Representação legal</span>
          <p>Isso pode incluir defesa criminal, litígio civil e várias negociações legais</p>

          <span>Alegações</span>
          <p>Você tem o direito de saber todos os detalhes das alegações.</p>

          <span>Suporte</span>
          <p>Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para fornecer ajuda e suporte</p>
        </div>
      </div>

      {/* Rodapé */}
      <footer>
        <div>
          <span>Quer um advogado?</span>
            <div>
              <button></button>
              <span>vamos conversar</span>
            </div>
          <a href="">advogados@gmail.com</a>
        </div>
        <div>
          {/* redes sociais */}
        </div>
        <div>
          {/* copyright */}
        </div>
      </footer>
      
    </main>
     
  )
}

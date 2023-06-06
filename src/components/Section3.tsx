import Image from "next/image"
import advogados from '../assets/advogados (1).png'

export function Section3() {
  return (
    <div className="flex  w-screen  items-center justify-center  gap-8 text-salmon-light bg-stone-900 p-4 mt-24">
        <div className="flex flex-col gap-8 items-start p-8">
          <h2 className="text-2xl font-700">Quais benefícios <br/> você obterá de nós?</h2>
          <p>Nós fornecemos serviços jurídicos  <br/>  de alta qualidade para você  <br/>  com as melhores pessoas integradas.</p>
          <button className="text-center rounded-lg bg-salmon-light px-5 py-3 text-sm font-bold uppercase leading-none text-stone-900 hover:bg-yellow-950">Encontrar advogado</button>
        </div>
        <Image src={advogados} width={396}
          height={640} alt="" />
        <div className="flex flex-col gap-2 p-8">
          <span className="text-lg font-semibold">Representação legal</span>
          <p className="pb-4">Isso pode incluir defesa criminal, <br/> litígio civil e várias negociações legais</p>

          <span className="text-lg font-semibold">Alegações</span>
          <p className="pb-4">Você tem o direito de saber todos <br/> os detalhes das alegações.</p>

          <span className="text-lg font-semibold">Suporte</span>
          <p className="pb-4">Nossa equipe está disponível 24 horas por dia, <br/> 7 dias por semana, para fornecer ajuda e suporte</p>
        </div>
      </div>
  )
}
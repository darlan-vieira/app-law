import Image from "next/image";
import Link from "next/link";
import advogada from '../assets/advogada.png'

export function Section2() {
  return (
    <div className="flex flex-col items-center gap-4 mt-24">
      <h1 className="text-3xl text-center font-700 uppercase">
        Conheça nossos advogados mais <br/> talentosos e qualificados
      </h1>

      <div className="flex  justify-center items-center gap-24 mt-24">
        <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-700 uppercase">Advogados verificados pelo <br/> conselho principal</h3>
            <p>Ao procurar um advogado, você quer um 
              <br/> profissional que tenha experiência em lidar com <br/> casos   como o seu e mantenha a 
              mais alta ética <br/> e atendimento ao cliente.
            </p>
            <Link
                href=""
                className="text-md text-red-500 hover:text-red-300"
              >
                Ler mais
              </Link>
        </div>
        <div>
          <Image src={advogada} alt="" />
        </div>
          
      </div>
    </div>
  )
}
import Image from "next/image";
import estatuaBronze from '../assets/deusa-justica01.png'
import martelo from '../assets/martelo.png'
import { BsArrowDown } from 'react-icons/bs'

export function Hero() {
    return (
      <div>
        <div className='mt-16 text-5xl font-700 text-center '>
          <h1>CONSULTORIA JURÍDICA DE <br/> ALTA QUALIDADE</h1>
        </div>

        <div className='flex justify-between items-center gap-48 pt-24'>
          <div className="flex flex-col gap-4 mt-48">
          <BsArrowDown size={40} />
            <p className='text-xl font-semibold'>Advogados de Família Especializados <br/> e Solicitadores de Divórcio</p>
            {/*
                <Image src={martelo} width={120} height={120} alt="" /> 
            */}
            
          </div>
          

            <Image src={estatuaBronze} width={288}
          height={396} alt="" /> 
          <div className="flex mb-36">
          <p className="text-md font-semibold">Direito de família é tudo o que fazemos, <br/> então seja qual for a sua situação,
          será <br/> familiar para nós. Nós <br/> esforce-se para expandir o tempo.
          </p>
          </div>
        </div>
      </div>
    )
}
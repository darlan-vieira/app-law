import { BsArrowRight, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

export function Footer() {
  return (
    <div className="flex flex-col text-3xl font-700 gap-2 mt-16 ">
      <span>Quer um advogado?</span>
        <div className='flex gap-8 items-center'>
          <button className='border border-chumbo-500 rounded-lg bg-salmon-50 px-5 py-3 text-sm font-semibold uppercase leading-none '>contato</button>
          <BsArrowRight size={30} />
          <span>vamos conversar</span>
        </div>
        <div className='flex justify-end'>
          <a href="">advogados@gmail.com</a>
        </div>   

        <div>
          <div className='flex flex-col gap-4 items-end mt-12'>
            <h3>Redes Sociais</h3>
            <a href="http://" target="_blank">
              <BsTwitter size={30} />
            </a>
            <a href="http://" target="_blank">
              <BsInstagram size={30} />
            </a>
            <a href="http://" target="_blank">
              <BsLinkedin size={30} />
            </a>
          </div>

          <div>
            {/* copyright */}
          </div>
        </div>
    </div>

    
  )
}
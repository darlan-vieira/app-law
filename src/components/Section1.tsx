import {FaUserTie} from 'react-icons/fa'
import { RiCriminalFill } from 'react-icons/ri'
import { HiUserGroup } from 'react-icons/hi'
export function SectionOne() {
    return (
        <div className="flex flex-col items-center gap-4 mt-24">
            <h1 className="text-3xl font-700 uppercase">
                A área onde praticamos a advocacia
            </h1>
            <p className="text-md text-center ">
                Oferecemos uma ampla gama de serviços aos nossos clientes <br/>e vamos
                 além para garantir que a justiça seja feita
            </p>

            <div className="flex justify-center gap-12 mt-24">
                <div className="flex flex-col items-center">
                    <FaUserTie size={40} />
                    <h3 className="text-2xl font-700 mt-4">Direito Empresarial</h3>
                    <p className="text-md text-center mt-4">Existem várias formas de entidades legais <br/> de negócios que vão desde o <br/> comerciante vendido.</p>
                </div>
                <div className="flex flex-col items-center">
                    <RiCriminalFill size={40} />
                    <h3 className="text-2xl  font-700 mt-4">Lei Criminal</h3>
                    <p className="text-md text-center mt-4">O direito penal é o corpo da lei que <br/> se relaciona com o crime. Conduta percebida <br/>  como prejudicial e ameaçadora.</p>
                </div>
                    
                <div className="flex flex-col items-center">
                    <HiUserGroup size={40} />
                    <h3 className="text-2xl font-700 mt-4">Lei familiar</h3>
                    <p className="text-md text-center mt-4">O direito de família é uma área de atuação <br/> jurídica voltada para  as questões que <br/> envolvem as relações familiares.</p>
                </div>       
            </div>
        </div>
    )
}
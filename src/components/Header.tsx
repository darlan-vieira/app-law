export default function Header() {
    return (
        <div className="flex space-x-96">
            <span className="flex text-2xl font-bold">Lawyers</span>
            <div className="flex-1 space-x-10 mt-2">
                <a href="">HOME</a>
                <a href="">SOBRE</a>
                <a href="">LEIS</a>
                <a href="">CONTATO</a>
            </div>
                
            <button className="rounded-lg bg-yellow-900 px-5 py-3 font-alt text-sm uppercase leading-none text-salmon-light hover:bg-stone-900">Iniciar</button>
            </div>
    )
}
import casaVerdeLogo from "../assets/casaVerdeLogo.svg"

export function Header(){
    return(
        <header className="flex row max-w-5xl m-auto justify-between items-baseline relative p-3 font-body">
            <img src={casaVerdeLogo} alt="Casa Verde" />

            <div className="relative bottom-1 flex gap-3">
                <a href="#" className="after:content-['/'] after:ml-3">Como fazer</a>
                <a href="#" className="after:content-['/'] after:ml-3">Ofertas</a>
                <a href="#" className="after:content-['/'] after:ml-3">Depoimentos</a>
                <a href="#" className="after:content-['/'] after:ml-3">Videos</a>
                <a href="#">Meu Carrinho</a>
            </div>
        </header>
    )
}
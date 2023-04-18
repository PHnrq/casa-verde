import imageHero from '../assets/imagem-hero.png'

export function Hero(){
    return(
        <div className='flex items-center max-w-5xl m-auto'>
            <div className='max-w-xl font-body'>
                <p className='text-2xl'>
                    Sua casa com as 
                </p>
                <h2 className='font-elsie text-7xl mt-3 mb-6'>
                melhores plantas
                </h2>
                <p className='text-base mb-9 max-w-[481px]'>
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </p>
                <form action="" className='text-base flex'>
                    <input type="email" name="email" id="email" placeholder="insira seu email" className='grow' />
                    <button className='py-7 px-6 bg-[#FFCB47]'>
                        Assinar newsletter
                    </button>
                </form>
            </div>

            <img src={imageHero} alt="Planta" className='w-[500px]'/>
        </div>
    )
}
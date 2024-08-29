import Vani from '../assets/Vani.png'

export default function AboutMe() {
    return (
        <>
            <div className='xl:flex mb-5  xl:max-w-screen-2xl'>
                <div className="max-w-screen-sm mx-auto relative flex h-1/2 xl:w-1/2 xl:mt-9">
                    <section className='ml-14'>
                        <img className="rounded-lg h-auto object-cover" src={Vani} alt="Profile picture of Vanina Orellana" />
                    </section>
                    <section className='p-9 inset-x-0 -bottom-16 w-4/5 bg-green text-pink rounded-full absolute flex flex-col justify-center items-center'>
                        <h5 className="text-1xl font-bold">Vanina Orellana Herrera</h5>
                        <p>Fundadora</p>
                    </section>
                </div>
                <div className="mt-14 pt-5 w-full h-1/2 xl:w-1/2 xl:m-0 ">
                    <p className='mt-9 xl:mt-0 xl:mx-3'>Nació en Argentina pero ha vivido en más de 10 países. Es mamá de Fede de 5 años y amante de los deportes, principalmente natación y yoga.
                    </p>
                    <p className='mt-9 xl:mx-3'>Es administradora de empresas de la Universidad de Los Andes (Colombia) y cuenta con una maestría en Marketing & Comunicaciones de ESIC (España). Adicionalmente acaba de completar un curso intensivo de Liderazgo en London School of Economics y es Coach Ejecutivo.</p>
                    <p className='mt-9 xl:mx-3'>Tiene +15 años de experiencia laboral en gestión de personas, liderando áreas de talent acquisition, employer branding, talent management, cultura, entre otras apoyando a organizaciones en la búsqueda, selección y desarrollo del mejor talento.</p>
                    <p className='mt-9 xl:mx-3'>Desde el 2015 está radicada en Perú y ha sido Head de Talent Acquisition & Employer Branding en BBVA Perú hasta 2023, año en la que pasó a un siguiente reto en BBVA como Talent & Culture Unit Partner.
                    </p>
                    <p className='mt-9 xl:mx-3'>Ha sido docente, consultora y colaboradora en empresas como BBVA , Yanbal y LIQUID, una empresa de consultoría en innovación que brinda servicios a bancos y empresas medianas y grandes en Perú, Ecuador y Chile.</p>
                    <p className='mt-9 xl:mx-3'>En su tiempo libre escribe en su blog Pausa Activa que pueden encontrar en Linkedin y hace contenido en TikTok como @coachvanina.</p>
                </div>
            </div>

        </>
    )

}
import { Link } from "react-router-dom"

function Header() {

    const menu = [
        {name: 'Home', path: '/'},
        {name: 'Admin', path: '/admin'}
    ]


    return(
        <>
            <section className="flex flex-row justify-between items-center">
                <h1 className='text-4xl'>
                    <img src="https://static.vecteezy.com/ti/vettori-gratis/p3/10994232-nike-logo-nero-abiti-design-icona-astratto-calcio-vettore-illustrazione-con-bianca-sfondo-gratuito-vettoriale.jpg" alt="" className="w-16"/>
        
                </h1>
                <div>
                    <ul className="flex flex-row gap-5">
                        {
                            menu.map((el, i) => (
                                <Link key={i} to={el.path}>{el.name}</Link>
                                )
                            )
                        }
                    </ul>
                </div>
            </section>
            <section>
                {
                    window.location.pathname == "/" && <img src="https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg" alt="" className="rounded w-full h-[50vh] object-cover"/>
                }
            </section>
        </>
    )
}

export default Header
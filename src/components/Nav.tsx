import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className="flex flex-col items-center gap-2 xl:flex-row lg:gap-6">
            <Typography as="li" variant="small" color="pink" className="p-1 font-medium"   placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <a href="/sobreMi" className="flex items-center  hover:text-black transition-colors">
                    Sobre mi
                </a>
            </Typography>
            <Typography as="li" variant="small" color="pink" className="p-1 font-medium"   placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <a href="/blog" className="flex items-center hover:text-black transition-colors">
                    Blog
                </a>
            </Typography>
            <Typography as="li" variant="small" color="pink" className="p-1 font-medium"   placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <a href="/funciones" className="flex items-center  hover:text-black transition-colors">
                    Funciones
                </a>
            </Typography>
            <Typography as="li" variant="small" color="pink" className="p-1 font-medium"   placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <a href="/colaboraciones" className="flex items-center  hover:text-black transition-colors">
                    Colaboraciones
                </a>
            </Typography>
            <Typography as="li" variant="small" color="pink" className="p-1 font-medium"   placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <a href="/contactanos" className="flex items-center  hover:text-black transition-colors">
                    Contactanos
                </a>
            </Typography>
        </ul>
    );
}

export default function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 1024 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3"   placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="flex items-center justify-between">
                <Typography
                    as="a"
                    href="/"
                    variant="h4"
                    className="mr-4 cursor-pointer py-1.5 font-extrabold"   placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                    VOH
                </Typography>
                <div className="hidden xl:flex lg:justify-center flex-grow">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="mr-3 mb-8 xl:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}   placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                    {openNav ? (
                        <XMarkIcon className="h-8 w-8" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-8 w-8" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="flex justify-center">
                    <NavList />
                </div>
            </Collapse>
        </Navbar>
    );
}
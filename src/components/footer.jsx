import Logo from "./logo";

function Footer(){
    return(
        <footer className="w-full bg-[#0B0B0B] text-white text-center flex flex-col justify-center items-center gap-5 p-10 md:p-20">
            <div className="flex flex-row justify-between items-center w-full">
                <Logo/>
            </div>
            <div className="flex flex-row justify-between items-center w-full text-xs md:text-base">
                <div className="text-left">
                    <p>INSPIRE Lab. - Telecommunication Program Lab. Building, Politeknik Negeri Bandung.</p>
                    <p>Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Bandung Barat, Jawa Barat 40559</p>
                </div>
                <div>
                    <p>© 2025 INSPIRE Laboratory. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
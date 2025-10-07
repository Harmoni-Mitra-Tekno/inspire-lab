import Logo from "./logo";

function Footer(){
    return(
        <footer className="w-full bg-[#0B0B0B] text-white text-center h-[200px] flex flex-col justify-center items-center gap-5 p-20">
            <div className="flex flex-row justify-between items-center w-full">
                <Logo/>
                <div>
                    <p>Connect with Us</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="text-left">
                    <p>INSPIRE Lab. - Telecommunication Program Lab. Building, Politeknik Negeri Bandung.</p>
                    <p>Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Bandung Barat, Jawa Barat 40559</p>
                </div>
                <div>
                    <p>© 2024 INSPIRE Laboratory. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
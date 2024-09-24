import React, { useState } from 'react';
// Importar el ícono desde la nueva versión de Heroicons
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'; // Puedes usar solid o outline dependiendo del estilo
import ModeToggle from './ModeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false); // Estado para el tema oscuro

    // Asegurarnos que la función toggleMenu esté dentro del componente Navbar
    const toggleMenu = () => setIsOpen(!isOpen);

    // Función para alternar el modo oscuro/claro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <nav className={`bg-primary shadow-lg px-6 py-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className=" h-10">
                        <svg width="39px" height="100%" viewBox="0 0 475 593" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {<svg width="475" height="593" viewBox="0 0 475 593" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="..." fill="url(#paint0_linear_354_10357)" />
                                {<svg width="475" height="593" viewBox="0 0 475 593" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M90.1754 40.7713C-1.88184 102.064 -6.71819 183.76 4.12189 215.473C28.1368 196.95 80.6126 178.401 139.206 152.748C200.744 125.807 224.476 124.394 247.774 115.282C281.948 101.917 344.834 130.016 335.328 191.898C326.553 249.02 280.461 240.31 252.276 233.995L225.76 249.571V356.917C299.305 369.546 409.775 366.095 461.407 249.571C513.039 133.047 405.205 47.2261 344.834 18.881C298.305 0.639095 182.233 -20.5215 90.1754 40.7713Z" fill="url(#paint0_linear_354_10357)" />
                                    <path d="M206.196 164.059C132.65 188.475 40.5166 237.588 3.56962 259.198V305.083C3.56962 296.243 218.11 208.261 251.724 208.261C256.227 208.261 265.948 144.223 206.196 164.059Z" fill="url(#paint1_linear_354_10357)" />
                                    <path d="M134.651 277.299C134.651 261.976 79.6169 298.348 3.56943 340.865C-23.9477 490.309 140.155 601.865 138.654 567.767C137.153 533.668 134.651 292.623 134.651 277.299Z" fill="url(#paint2_linear_354_10357)" />
                                    <path d="M156.165 413.272C165.671 416.219 243.219 505.885 319.767 408.22C351.286 403.59 417.227 378.163 460.854 352.232C467.025 398.398 458.053 502.18 372.8 547.981C335.111 572.257 240.12 612.726 161.668 580.396L159.062 501.254L156.165 413.272Z" fill="url(#paint3_radial_354_10357)" />
                                    <path d="M5.6963 302.132C5.03456 302.606 4.48711 303.043 4.06962 303.439V259.485C41.169 237.807 133.021 188.879 206.353 164.534C221.227 159.596 231.686 159.909 238.952 163.056C246.206 166.198 250.374 172.207 252.581 178.878C254.79 185.558 255.021 192.867 254.415 198.512C254.113 201.333 253.603 203.719 253.038 205.388C252.754 206.225 252.464 206.859 252.193 207.273C252.057 207.48 251.939 207.613 251.844 207.689C251.75 207.766 251.712 207.761 251.724 207.761C247.449 207.761 240.362 209.153 231.281 211.576C222.184 214.002 211.034 217.478 198.609 221.673C173.758 230.063 143.78 241.34 114.856 252.893C85.9325 264.445 58.0563 276.275 37.4079 285.771C27.0851 290.518 18.5609 294.686 12.6135 297.946C9.64181 299.575 7.30021 300.985 5.6963 302.132ZM385.953 388.679C411.592 378.596 438.723 365.9 460.457 353.048C463.419 376.124 462.607 413.13 450.635 450.089C438.535 487.444 415.046 524.717 372.563 547.541L372.546 547.55L372.529 547.561C353.728 559.671 320.61 575.833 282.404 584.929C244.293 594.003 201.172 596.034 162.157 580.056L159.562 501.237L156.691 414.049C157.15 414.297 157.73 414.673 158.436 415.18C159.533 415.966 160.882 417.025 162.472 418.297C163.019 418.735 163.594 419.197 164.196 419.681C167.089 422.006 170.61 424.836 174.675 427.861C184.496 435.169 197.52 443.635 212.659 448.947C227.805 454.261 245.08 456.424 263.387 451.106C281.653 445.8 300.892 433.062 320.037 408.686C335.86 406.328 360.172 398.818 385.953 388.679ZM4.37399 214.651C-6.0982 182.698 -0.790126 101.938 90.4526 41.1875C136.377 10.6105 188.305 0.591705 234.579 0.500628C280.846 0.409565 321.426 10.2436 344.636 19.3405C374.766 33.4897 416.73 61.9796 444.714 101.448C472.686 140.902 486.679 191.302 460.95 249.368C435.194 307.493 394.784 337.392 351.648 351.2C308.654 364.964 262.923 362.749 226.26 356.496V249.857L252.36 234.526C266.414 237.671 285.003 241.408 301.206 237.22C309.362 235.111 316.923 230.993 322.995 223.784C329.064 216.58 333.619 206.321 335.822 191.974C340.607 160.826 327.162 138.15 308.217 124.962C289.303 111.798 264.864 108.062 247.591 114.817C239.66 117.919 231.691 120.122 222.161 122.756C217.727 123.983 212.954 125.302 207.689 126.849C191.133 131.715 169.795 138.81 139.005 152.29C124.362 158.702 110.099 164.669 96.5649 170.305C95.0315 170.944 93.5074 171.578 91.9931 172.208C80.1436 177.139 68.8961 181.82 58.4982 186.326C35.4165 196.327 16.4668 205.488 4.37399 214.651ZM61.7301 522.813C24.427 480.613 -9.5888 415.605 4.01877 341.187C21.5225 331.399 37.8985 321.945 52.742 313.376C70.0921 303.36 85.3485 294.553 97.8647 287.833C109.499 281.585 118.715 277.17 125.009 275.267C128.172 274.31 130.508 274.018 132.023 274.374C132.764 274.548 133.278 274.87 133.614 275.32C133.953 275.774 134.151 276.414 134.151 277.299C134.151 292.622 136.653 533.678 138.154 567.789C138.244 569.824 137.714 571.222 136.744 572.111C135.762 573.01 134.238 573.475 132.161 573.437C127.996 573.36 121.904 571.265 114.549 567.275C99.8676 559.31 80.3998 543.933 61.7301 522.813Z" stroke="url(#paint4_linear_354_10357)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_354_10357" x1="786.772" y1="-1.31799" x2="786.772" y2="592.418" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.104" stop-color="#55CBE1" />
                                            <stop offset="0.679" stop-color="#FF5DA2" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_354_10357" x1="237.5" y1="0" x2="237.5" y2="592.417" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF5DA2" />
                                            <stop offset="1" stop-color="#08FDFD" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_354_10357" x1="237.5" y1="0" x2="237.5" y2="592.417" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.379" stop-color="#FF5DA2" />
                                            <stop offset="1" stop-color="#08FDFD" />
                                        </linearGradient>
                                        <radialGradient id="paint3_radial_354_10357" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(268.786 323.249) rotate(74.8483) scale(246.926 285.243)">
                                            <stop offset="0.544" stop-color="#FF5DA2" />
                                            <stop offset="0.784" stop-color="#84ADCF" />
                                            <stop offset="0.956376" stop-color="#08FDFD" />
                                        </radialGradient>
                                        <linearGradient id="paint4_linear_354_10357" x1="236.948" y1="5.41748" x2="236.948" y2="592.417" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.685" stop-color="#FF5DA2" />
                                            <stop offset="0.925" stop-color="#2DE5EF" />
                                        </linearGradient>
                                    </defs>
                                </svg>}
                            </svg>}
                        </svg>
                    </div>
                    <span className="font-poppins font-bold text-[36px] leading-[120%] text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient)' }}>Pair Connect</span>
                </div>

                {/* Links para escritorio */}
                <div className="hidden md:flex space-x-8">
                    {['Home', 'Sobre nosotros', 'Pair programming'].map((item) => (
                        <a key={item} href="#" className="text-gray-800 hover:text-blue-600">{item}</a>
                    ))}
                </div>

                {/* Botones: Modo oscuro/claro y Login */}
                <div className="flex items-center space-x-4">
                    {/* Botón para alternar el tema */}
                    <ModeToggle/>
                    {/* Botón de Login */}
                
                </div>

                {/* Botón de menú móvil */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div >

            {/* Menú móvil */}
            {
                isOpen && (
                    <div className="md:hidden flex flex-col items-left space-y-2 py-5">
                        {['Home', 'Sobre nosotros', 'Pair programming'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-800 hover:text-blue-600"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;

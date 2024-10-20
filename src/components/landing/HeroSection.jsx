/* eslint-disable react/prop-types */
import HeroButton from "@/components/landing/HeroButton";
import '@/styles/shooting-stars.css';
import 'animate.css';

const HeroSection = ({ handleRegisterClick, onArrowClick  }) => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center hero-section bg-background motion-reduce:transform-none">
            <div className="shooting-star-cyan"></div>
            <div className="shooting-star-pink"></div>
            <div className="shooting-star-cyan"></div>
            <div className="shooting-star-pink"></div>
            <div className="shooting-star-cyan"></div>
            <div className="shooting-star-pink"></div>
            <div className="shooting-star-cyan"></div>
            <div className="shooting-star-pink"></div>
            <div className="shooting-star-cyan"></div>
            <div className="shooting-star-pink"></div>

            <h1
                className="mb-4 font-poppins font-bold text-6xl md:text-7xl lg:text-9xl leading-[120%] gradient-text cursor-pointer animate__zoomIn animate__animated motion-reduce:transform-none"
                style={{ backgroundImage: 'var(--gradient)' }}
            >
                Pair Connect
            </h1>
            <p className="mb-16 text-xl md:text-2xl lg:text-3xl text-foreground">
                Conecta, programa y crece en equipo
            </p>
            <HeroButton text="Regístrate aquí" onClick={handleRegisterClick} />


            <p className="mt-8 text-xs md:text-sm lg:text-sm text-foreground">
                Echa un vistazo a las próximas sesiones
            </p>

            <img
                src="/arrow-gradient.svg"
                alt="Down Arrow"
                className="w-12 h-12 mt-10 cursor-pointer animate-bounce motion-reduce:transform-none slow-bounce"
                onClick={onArrowClick} 
            />
        </section>
    );
};

export default HeroSection

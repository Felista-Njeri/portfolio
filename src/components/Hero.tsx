import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollToSection";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative">
          {/* Decorative element */}
          <div className="mt-4 text-center text-muted-foreground/80 text-sm tracking-widest">
            CRAFTING DIGITAL GOODS SINCE — Y.2022
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center text-center space-y-3 animate-fade-in">
            {/* Name with integrated profile image */}
            <div className="relative">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none">
                FELISTA
                <br />
                NJERI
              </h1>
              
              {/* Profile image integrated into text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={"/pic.jpg"}
                  alt="Felista Njeri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative star */}
            <div className="text-4xl">✦</div>

            {/* Description */}
            <div className="max-w-2xl space-y-3">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Frontend Developer
              </p>
              <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed max-w-xl mx-auto">
                Passionate about building innovative software solutions that bridge traditional web development with cutting-edge blockchain technology
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3">
              <Button size="lg" className="font-medium" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

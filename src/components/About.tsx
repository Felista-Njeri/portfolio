const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
            <p>
              I'm a passionate frontend developer with a keen interest in blockchain technology and Web3 innovation. 
              My journey in software development has led me to specialize in creating seamless user experiences 
              while exploring the limitless possibilities of decentralized applications.
            </p>
            <p>
              With expertise spanning from modern web frameworks to smart contract development, I bring a unique 
              perspective to every project. I believe in writing clean, efficient code that not only functions 
              beautifully but also pushes the boundaries of what's possible in the digital space.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest in blockchain technology, contributing to 
              open-source projects, or mentoring fellow developers in their journey to master the art of 
              software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

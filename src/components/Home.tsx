const Home = () => {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-[#000000] text-center py-9 px-4 text-[#9c31b9]">
      <div className="mb-8 md:mb-0 md:w-1/3 flex justify-center">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFDHY5D1g2q6A/profile-displayphoto-shrink_400_400/B4DZVO3V7rHYAg-/0/1740784887223?e=1747872000&v=beta&t=P3StenYw3pleimH4F8CH1YcpBsvD2uZf7v0HmyPZ4Uo"

          alt="Daffne Dev"
          className="rounded-full w-56 h-56 md:w-80 md:h-80 object-cover border-4 border-[#4F6D7A]"
        />
      </div>
      <div className="md:w-2/3 md:ml-8 w-full max-w-screen-lg">
        <h1 className="text-6xl md:text-4xl font-bold mb-4">Olá, eu sou a Daffne!</h1>
        <h2 className="text-xl md:text-2xl mb-6">
          <span className="block">Bem-vindo ao meu portfólio!</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/daffne-vieira/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 bg-[#82299b] text-white font-semibold rounded-lg hover:bg-[#A8007E] transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://docs.google.com/document/d/18uZ0cM-koKYgg6bQxEi3yX35L5qRYVLf/edit?usp=sharing&ouid=103991299677459177453&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 bg-[#82299b] text-white font-semibold rounded-lg hover:bg-[#A8007E] transition duration-300"
          >
            Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

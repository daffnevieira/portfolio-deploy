import login from '../assets/projetos/login.png'
import fittech from '../assets/projetos/fittech.webp'
import pizzaria from '../assets/projetos/pizzaria.png'
import blog from '../assets/projetos/blog.png'

const projects = [
  {
    title: 'Sistema em Construção',
    description: '',
    image: 'https://app.cotripal.com.br/img/construcao.png' 
  },
  {
    title: 'Sistema Blog Pessoal',
    description: 'Blog criado com Java SpringBoot, MySQL, React, TypeScript e TailwindCSS.',
    github: 'https://github.com/daffnevieira/blogpessoal',
    image: blog
  },
  {
    title: 'Sistema FitTech',
    description: 'Projeto em equipe no bootcamp Generation. Atuei no back-end e front-end.',
    github: 'https://github.com/Projeto-Integrador-Grupo-3/fittech_frontend',
    demo: 'https://fittech-frontend.netlify.app/',
    image: fittech
  },
  {
    title: 'Sistema de Pizzaria',
    description: 'Sistema simples com Node.js, MySQL, HTML e JS.',
    github: 'https://github.com/daffnevieira/pizzaria',
    image: pizzaria
  },
  {
    title: 'Sistema de Login',
    description: 'Autenticação com Node.js, MySQL, HTML e CSS.',
    github: 'https://github.com/daffnevieira/mongooseAuth',
    image: login
  },
];

const Projetos = () => {
  return (
    <section id="projects" className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#d16cff]">Projetos</h2>
        <p className="text-base text-gray-300 mb-12">
          Alguns dos meus projetos favoritos, onde apliquei minha criatividade, lógica e todo meu aprendizado!
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#CEC2FF] mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
                <div className="flex gap-2 mt-4 justify-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-[#82299b] text-white text-sm rounded-full hover:bg-[#A8007E] transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-indigo-600 text-white text-sm rounded-full hover:bg-indigo-800 transition"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;

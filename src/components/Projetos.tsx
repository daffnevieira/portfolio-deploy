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
    description: 'Desenvolvido com as Tecnologias Java SpringBoot, Mysql, React, TypeScript e TailwindCSS.',
    github: 'https://github.com/daffnevieira/blogpessoal',
    image: blog
  },
  {
    title: 'Sistema FitTech',
    description: 'Desenvolvido em equipe no Bootcamp da Generation, onde atuei desde o desenvolvimento back-end com Java SpringBoot e Mysql até o front com React, TypeScript e Tailwind.',
    github: 'https://github.com/Projeto-Integrador-Grupo-3/fittech_frontend',
    demo: 'https://fittech-frontend.netlify.app/',
    image: fittech
  },
  {
    title: 'Sistema de Pizzaria',
    description: 'Sistema desenvolvido com HTML, CSS e JS no front, e Node.js e Mysql no back-end.',
    github: 'https://github.com/daffnevieira/pizzaria',
    image: pizzaria
  },
  {
    title: 'Sistema de Login',
    description: 'Sistema de Login desenvolvido com Node.js, Mysql, HTML e CSS na estilização.',
    github: 'https://github.com/daffnevieira/mongooseAuth',
    image: login
  },
];

const Projetos = () => {
  return (
    <section id="projects" className="bg-[#000000] py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Projetos</h2>
        <p className="text-lg mb-12 text-white">
          Aqui estão alguns dos projetos que desenvolvi, utilizando diversas tecnologias.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#f8e6ff] rounded-3xl shadow-2xl transform hover:scale-105 hover:shadow-2xl transition duration-500"
            >
              <div className="p-6">
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-[#000000] mb-4">{project.title}</h3>
              
                <p className="text-gray-700 mb-6">{project.description}</p>

                <div className="flex justify-center space-x-6 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#82299b] text-white rounded-full hover:bg-[#A8007E] transition duration-300"
                  >
                    GitHub
                  </a>
                   {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-indigo-700 text-white rounded-full hover:bg-sky-900 transition duration-300"
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

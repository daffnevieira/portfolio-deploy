import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#dfdde4] text-zinc-950 py-16 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-8">Contato</h2>
        <p className="text-lg mb-12 px-4">
          Estou à disposição para conversar sobre oportunidades ou dúvidas. Entre em contato comigo através dos links abaixo!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          <div className="flex items-center space-x-2">
            <FaEnvelope size={30} className="text-slate-950" />
            <a href="mailto:daffnevieira@gmail.com" className="text-xl hover:text-indigo-500">Email</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin size={30} className="text-slate-950" />
            <a href="https://www.linkedin.com/in/daffne-vieira/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">LinkedIn</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub size={30} className="text-slate-950" />
            <a href="https://github.com/daffnevieira" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">GitHub</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt size={30} className="text-slate-950" />
            <a href="tel:+5511988242348" className="text-xl hover:text-blue-700">Telefone</a>
          </div>
        </div>

        <div className="border-t-2 border-gray-950 pt-4 mt-8">
          <p className="text-sm text-gray-900">
            © 2025 Daffne. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
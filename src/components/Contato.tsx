import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0A0A0A] text-[#E3A7FF] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#d16cff]">Contato</h2>
        <p className="text-base text-[#b179c5] mb-12 max-w-2xl mx-auto">
          Fique à vontade para me chamar caso tenha dúvidas, propostas ou convites profissionais. Será um prazer conversar!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <a
            href="mailto:daffnevieira@gmail.com"
            className="flex flex-col items-center p-4 bg-[#1a1a1a] text-white shadow-md rounded-xl hover:bg-[#2b2b2b] transition-all duration-300"
          >
            <FaEnvelope size={28} className="mb-2 text-[#E3A7FF]" />
            <span className="text-base font-medium hover:text-[#d16cff] transition">Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/daffne-vieira/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-[#1a1a1a] text-white shadow-md rounded-xl hover:bg-[#2b2b2b] transition-all duration-300"
          >
            <FaLinkedin size={28} className="mb-2 text-[#0A66C2]" />
            <span className="text-base font-medium hover:text-[#d16cff] transition">LinkedIn</span>
          </a>

          <a
            href="https://github.com/daffnevieira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 bg-[#1a1a1a] text-white shadow-md rounded-xl hover:bg-[#2b2b2b] transition-all duration-300"
          >
            <FaGithub size={28} className="mb-2 text-white" />
            <span className="text-base font-medium hover:text-[#d16cff] transition">GitHub</span>
          </a>

          <a
            href="tel:+5511988242348"
            className="flex flex-col items-center p-4 bg-[#1a1a1a] text-white shadow-md rounded-xl hover:bg-[#2b2b2b] transition-all duration-300"
          >
            <FaPhoneAlt size={28} className="mb-2 text-[#22c55e]" />
            <span className="text-base font-medium hover:text-[#d16cff] transition">Telefone</span>
          </a>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-4">
          <p className="text-sm text-[#7a7a7a]">© 2025 Daffne. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import profile from "./profile.png";
import curriculum from "./Felipe_Escarban_Donatto.pdf";
import githubLogo from "./github-mark.png";
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };
  const projects = [
    {
      title: "API para gerenciamento de clientes e vendas",
      description:
        "Uma API para gerenciamento de clientes e vendas com AdonisJS, MySQL e Typescript",
      technologies: ["AdonisJS", "MySQL", "Typescript"],
      link: "https://github.com/FelipeDonatto/BeTalent",
    },
    {
      title: "Repo feito durante estágio em análise de dados",
      description:
        "Um repo feito durante estágio em análise de dados com Python, PySpark e Docker",
      technologies: ["Docker", "Python", "PySpark", "AWS Services"],
      link: "https://github.com/FelipeDonatto/compass",
    },
    {
      title: "QuitaBoletos",
      description:
        "Projeto feito para um teste técnico com foco em React, Typescript e Tailwind CSS",
      technologies: [
        "Typescript",
        "Tailwind CSS",
        "React",
        "Mobile First Design",
      ],
      link: "https://github.com/FelipeDonatto/Quita_Boletos",
    },
  ];

  const skills = [
    {
      name: "Frontend",
      technologies: [
        "React",
        "Vue.js",
        "Tailwind CSS",
        "Bootstrap",
        "CSS",
        "HTML",
        "JavaScript",
        "TypeScript",
        "Redux",
      ],
    },
    {
      name: "Backend",
      technologies: [
        "Node.js",
        "Spring Boot",
        "Python",
        "Java",
        "Jest",
        "PySpark",
      ],
    },
    {
      name: "Databases",
      technologies: [
        "MySQL",
        "MongoDB",
        "Sequelize",
        "AWS S3",
        "DATA ETL",
        "DataLakes",
      ],
    },
    { name: "DevOps", technologies: ["Docker", "Kubernetes", "AWS"] },
  ];

  const experiences = [
    {
      company: "Quita Boletos",
      role: "Full Stack Developer",
      period: "Abril 2023 - Dezembro 2023",
      description:
        "Desenvolvimento de aplicações web escaláveis e arquitetura de microserviços",
    },
    {
      company: "Compass UOL",
      role: "Estagiário em Analise de Dados",
      period: "Junho 2024 - Outubro 2024",
      description: "Criação de DataLakes e ETLs para processamento de dados",
    },
  ];

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      } p-8 overflow-hidden`}
    >
      {/* Nuvens */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute cloud opacity-50 ${
              darkMode ? "text-gray-700" : "text-gray-300"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              fontSize: `${101 + Math.random() * 202}px`,
              animation: `cloudMove linear infinite, float ${
                5 + Math.random() * 5
              }s ease-in-out infinite`,
            }}
          >
            {darkMode ? "☁️" : "🌥️"}
          </div>
        ))}
      </div>

      {/* Botão de Dark Mode */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition-all duration-300 ${
            darkMode
              ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
              : "bg-gray-800 text-yellow-300 hover:bg-gray-700"
          }`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-12">
          {/* Espaço para foto de perfil */}
          <div
            className={`mx-auto mb-6 w-36 h-36 rounded-full border-4 ${
              darkMode
                ? "border-gray-700 bg-gray-800"
                : "border-white bg-gray-200"
            } flex items-center justify-center overflow-hidden shadow-lg`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url("${profile}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          <h1
            className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Felipe Escarban Donatto
          </h1>
          <p
            className={`text-xl transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Desenvolvedor Full Stack
          </p>
        </header>

        <section
          className={`${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
          } shadow-md rounded-lg p-8 mb-8 transition-colors duration-300`}
        >
          <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
          <p>
            Desenvolvedor full stack apaixonado por criar soluções tecnológicas
            inovadoras, com experiência em desenvolvimento web e arquitetura de
            sistemas.
          </p>
        </section>
        {/* Currículo */}
        <section
          className={`my-6 flex items-center justify-between ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
          } shadow-md rounded-lg p-8 transition-colors duration-300`}
        >
          <h2 className="text-2xl font-semibold ">Currículo</h2>
          <div className="flex items-center space-x-4">
            <a
              href={curriculum}
              download
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                darkMode
                  ? "bg-green-800 text-green-200 hover:bg-green-700"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
            >
              Baixar PDF
            </a>
          </div>
        </section>
        {/* Habilidades */}
        <section
          className={`${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
          } shadow-md rounded-lg p-8 mb-8 transition-colors duration-300`}
        >
          <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-50"
                }`}
              >
                <h3 className="font-bold mb-2">{skillGroup.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded-full text-sm ${
                        darkMode
                          ? "bg-blue-900 text-blue-300"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experiência Profissional */}
        <section
          className={`${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
          } shadow-md rounded-lg p-8 mb-8 transition-colors duration-300`}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Experiência Profissional
          </h2>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-4 p-4 rounded-lg transition-all duration-300 ${
                darkMode ? "bg-gray-700" : "bg-gray-50"
              }`}
            >
              <h3 className="font-bold text-xl">{exp.role}</h3>
              <p className="text-gray-600">
                {exp.company} | {exp.period}
              </p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projetos */}
        <section
          className={`${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
          } shadow-md rounded-lg p-8 mb-8 transition-colors duration-300`}
        >
          <h2 className="underline text-2xl font-semibold mb-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/FelipeDonatto?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Projetos
              </a>

              <a
                href="https://github.com/FelipeDonatto?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <img width={25} src={githubLogo} alt="GitHub Logo"></img>{" "}
              </a>
            </div>
          </h2>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`mb-6 p-4 border rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                darkMode
                  ? "border-gray-700 bg-gray-700/30"
                  : "border-gray-200 bg-gray-50"
              }`}
              onClick={() => handleProjectClick(project.link)}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 py-1 rounded-full text-sm transition-colors duration-300 ${
                      darkMode
                        ? "bg-blue-900 text-blue-300"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <style jsx global>{`
        @keyframes cloudMove {
          0% {
            transform: translateX(-100%) rotate(0deg);
          }
          100% {
            transform: translateX(100vw) rotate(10deg);
          }
        }
        .cloud {
          position: absolute;
          animation: cloudMove linear infinite, float linear infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;


// ==========================================
// 1. DADOS DO CURRÍCULO (JSON COMO VARIÁVEL)
// ==========================================

const curriculo = {
    cv: {
      metadata: {
        version: "1.0",
        language: "pt-BR",
        lastUpdated: "2026-11-05"
      },
  
      personalInformation: {
        fullName: "Emillyn Lauryn Barbosa da Silva",
        professionalTitle: "Analista de Dados Júnior",
        profilePhoto: "image/imagem.jpeg",
        email: "emillyn101@gmail.com",
        phone: "1140028922",
        whatsapp: "11940028922",
        location: {
          city: "Suzano",
          state: "SP",
          country: "Brasil",
          address: "Av. Mogi das Cruzes"
        },
        linkedin: "EmillynLauryn",
        github: "EmillynLauryn",
        portfolio: "github.com/EmillynLauryn",
        website: "https://github.com/EmillynLauryn"
      },
  
      professionalSummary: {
        description: "Estudante na área de tecnologia em Análise e Desenvolvimento de Sistemas, trabalhando com análise e planejamento de materiais.",
        yearsOfExperience: 1,
        mainSpecialization: "Análise de Dados e Business Intelligence",
        careerObjective: "Atuar como Analista de Dados Júnior ou Analista de BI Júnior, utilizando Power BI, SAP e ferramentas em nuvem para otimizar processos e apoiar a tomada de decisões."
      },
  
      professionalExperience: [
        {
          company: "Suzano SA",
          position: "Planejamento de Materiais MRO",
          employmentType: "Estágio",
          location: "Suzano",
          startDate: "Março de 2026",
          endDate: "Março de 2027",
          current: true,
          description: "Responsável por gerir o estoque de materiais de manutenção, reparo e operação das unidades industriais.",
          responsibilities: [
            "Atendimento a clientes internos.",
            "Acompanhamento de pedidos de compras.",
            "Análise, parametrização e categorização de materiais.",
            "Solicitação e acompanhamento de fretes.",
            "Elaboração de informes mensais.",
            "Criação de Procedimentos Operacionais Padrão (POP)."
          ],
          achievements: [
            "Participação em projeto de melhoria e otimização de processos."
          ],
          technologies: [
            "SAP",
            "Office",
            "Power BI",
            "GCP",
            "Google Workspace"
          ]
        }
      ],
  
      projects: [
        {
          name: "Previsibilidade de Estoque",
          description: "Dashboard que apresenta a previsibilidade do estoque de materiais em até 6 meses, ajudando a prever situações de overstock, apoiando a tomada de decisões e otimizando a rotina em 94%.",
          role: "Criadora",
          technologies: [
            "SAP",
            "GCP",
            "Power BI",
            "Copilot"
          ],
          url: "",
          startDate: "Outubro de 2026",
          endDate: "Março de 2027"
        }
      ],
  
      education: [
        {
          institution: "Unipiaget",
          degree: "Tecnólogo",
          fieldOfStudy: "Análise e Desenvolvimento de Sistemas",
          level: "Segundo semestre",
          startDate: "Janeiro de 2026",
          endDate: "Julho de 2028",
          current: true,
          description: ""
        }
      ],
  
      skills: {
        technical: [
          {
            name: "Administração",
            level: "Intermediário"
          }
        ],
        behavioral: [
          "Trabalho em equipe"
        ],
        tools: [
          "Google Workspace"
        ],
        methodologies: [
          "PDCA"
        ]
      },
  
      languages: [
        {
          name: "Inglês",
          proficiency: "A2"
        }
      ],
  
      certifications: [
        {
          name: "Computer Hardware Basics e Introduction to Cybersecurity",
          issuer: "Cisco",
          issueDate: "2025",
          expirationDate: "",
          credentialUrl: "https://www.credly.com/users/emillyn-lauryn-barbosa-da-silva"
        }
      ],
  
      courses: [
        {
          name: "Técnico Administrativo",
          institution: "IFSP",
          completionDate: "Dezembro de 2025",
          workloadHours: 0
        }
      ],
  
      additionalInformation: {
        availability: "Manhã",
        workModel: "Híbrido",
        travelAvailability: false,
        additionalNotes: ""
      },
  
      preferences: {
        targetPositions: [
          "Analista de Dados Júnior",
          "Analista BI Júnior"
        ],
        targetIndustries: [],
        preferredLocations: ["São Paulo"],
        preferredWorkModel: "Híbrido"
      }
    }
  };
  
  
  // ==========================================
  // 2. FUNÇÕES AUXILIARES
  // ==========================================
  
  function criarElemento(tag, classe, texto) {
    const elemento = document.createElement(tag);
  
    if (classe) elemento.className = classe;
    if (texto !== undefined) elemento.textContent = texto;
  
    return elemento;
  }
  
  
  // ==========================================
  // 3. CARREGAMENTO DO CURRÍCULO
  // ==========================================
  
  function carregarCurriculo() {
  
    const dados = curriculo.cv;
  
    // CABEÇALHO
    const pessoal = dados.personalInformation;
  
    document.getElementById("nome").textContent =
      pessoal.fullName;
  
    document.getElementById("titulo").textContent =
      pessoal.professionalTitle;
  
    // FOTO
    const foto = document.getElementById("foto-perfil");
  
    if (foto) {
      foto.src = pessoal.profilePhoto;
      foto.alt = "Foto de " + pessoal.fullName;
    }
  
    // CONTATO
    const contato = document.getElementById("contato");
    const local = pessoal.location;
  
    contato.textContent =
      `${local.city}, ${local.state} • ${local.country} • ` +
      `Modelo ${dados.additionalInformation.workModel} • ${pessoal.email}`;
  
    // LINKEDIN
    if (pessoal.linkedin) {
      const link = criarElemento("a", "", "LinkedIn");
      link.href = `https://linkedin.com/in/${pessoal.linkedin}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
  
      contato.appendChild(document.createTextNode(" • "));
      contato.appendChild(link);
    }
  
    // GITHUB
    if (pessoal.github) {
      const link = criarElemento("a", "", "GitHub");
      link.href = `https://github.com/${pessoal.github}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
  
      contato.appendChild(document.createTextNode(" • "));
      contato.appendChild(link);
    }
  
    // RESUMO PROFISSIONAL
    document.getElementById("resumo-desc").textContent =
      dados.professionalSummary.description;
  
    document.getElementById("resumo-objetivo").textContent =
      dados.professionalSummary.careerObjective;
  
  
    // ==========================================
    // 4. EXPERIÊNCIA PROFISSIONAL
    // ==========================================
  
    const expContainer =
      document.getElementById("lista-experiencias");
  
    dados.professionalExperience.forEach(exp => {
  
      const item = criarElemento("div", "item");
  
      const header = criarElemento("div", "item-header");
  
      const cargo = criarElemento("span", "",
        `${exp.position} — `);
  
      const empresa = criarElemento("span", "company",
        exp.company);
  
      cargo.appendChild(empresa);
  
      const data = criarElemento("span", "date",
        `${exp.startDate} – ${exp.current ? "Atual" : exp.endDate} • ${exp.location}`);
  
      header.append(cargo, data);
  
      const descricao = criarElemento("p", "item-desc",
        exp.description);
  
      const lista = document.createElement("ul");
  
      exp.responsibilities.forEach(resp => {
        lista.appendChild(criarElemento("li", "", resp));
      });
  
      exp.achievements.forEach(ach => {
        const li = document.createElement("li");
        const strong = criarElemento("strong", "", "Destaque: ");
  
        li.append(strong, document.createTextNode(ach));
        lista.appendChild(li);
      });
  
      item.append(header, descricao, lista);
      expContainer.appendChild(item);
  
    });
  
  
    // ==========================================
    // 5. PROJETOS
    // ==========================================
  
    const projContainer =
      document.getElementById("lista-projetos");
  
    dados.projects.forEach(proj => {
  
      const item = criarElemento("div", "item");
  
      const header = criarElemento("div", "item-header");
  
      const nome = criarElemento("span", "",
        `${proj.name} (${proj.role})`);
  
      const data = criarElemento("span", "date",
        `${proj.startDate} – ${proj.endDate}`);
  
      header.append(nome, data);
  
      const descricao = criarElemento("p", "item-desc",
        proj.description);
  
      const tags = criarElemento("div", "tags");
  
      proj.technologies.forEach(tech => {
        tags.appendChild(criarElemento("span", "tag", tech));
      });
  
      item.append(header, descricao, tags);
      projContainer.appendChild(item);
  
    });
  
  
    // ==========================================
    // 6. FORMAÇÃO ACADÊMICA
    // ==========================================
  
    const formContainer =
      document.getElementById("lista-formacao");
  
    dados.education.forEach(edu => {
  
      const item = criarElemento("div", "item");
  
      const header = criarElemento("div", "item-header");
  
      const curso = criarElemento("span", "",
        `${edu.degree} em ${edu.fieldOfStudy} — `);
  
      const instituicao = criarElemento("span", "company",
        edu.institution);
  
      curso.appendChild(instituicao);
  
      const data = criarElemento("span", "date",
        `${edu.startDate} – ${edu.current ? "Em andamento" : edu.endDate} (${edu.level})`);
  
      header.append(curso, data);
      item.appendChild(header);
  
      formContainer.appendChild(item);
  
    });
  
  
    // CURSOS
    dados.courses.forEach(curso => {
  
      const item = criarElemento("div", "item");
  
      const header = criarElemento("div", "item-header");
  
      const nome = criarElemento("span", "",
        `${curso.name} — `);
  
      const instituicao = criarElemento("span", "company",
        curso.institution);
  
      nome.appendChild(instituicao);
  
      const data = criarElemento("span", "date",
        `Concluído em ${curso.completionDate}`);
  
      header.append(nome, data);
      item.appendChild(header);
  
      formContainer.appendChild(item);
  
    });
  
  
    // ==========================================
    // 7. FERRAMENTAS E METODOLOGIAS
    // ==========================================
  
    const toolsContainer =
      document.getElementById("lista-ferramentas");
  
    const ferramentas = [
      ...dados.skills.tools,
      ...dados.skills.methodologies
    ];
  
    ferramentas.forEach(tool => {
      toolsContainer.appendChild(
        criarElemento("span", "tag", tool)
      );
    });
  
  
    // ==========================================
    // 8. CERTIFICAÇÕES E IDIOMAS
    // ==========================================
  
    const certContainer =
      document.getElementById("lista-certificacoes");
  
    dados.certifications.forEach(cert => {
  
      const li = document.createElement("li");
  
      const strong = criarElemento("strong", "", cert.name);
  
      li.append(
        strong,
        document.createTextNode(
          ` – ${cert.issuer} (${cert.issueDate}) `
        )
      );
  
      if (cert.credentialUrl) {
        const link = criarElemento("a", "", "Credencial");
  
        link.href = cert.credentialUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
  
        li.appendChild(link);
      }
  
      certContainer.appendChild(li);
  
    });
  
  
    dados.languages.forEach(lang => {
  
      const li = document.createElement("li");
  
      const strong = criarElemento("strong", "",
        `${lang.name}: `);
  
      li.append(
        strong,
        document.createTextNode(`Nível ${lang.proficiency}`)
      );
  
      certContainer.appendChild(li);
  
    });
  
  
    console.log("Currículo carregado com sucesso!");
  
  }
  
  
  // ==========================================
  // 9. EXECUTAR
  // ==========================================
  
  document.addEventListener("DOMContentLoaded", carregarCurriculo);
  
async function carregarCurriculo() {
    try {
      const resposta = await fetch('./curriculo.json');
      if (!resposta.ok) throw new Error('Erro ao carregar o JSON');
      const dados = await resposta.json();
  
      // 1. Cabeçalho e Foto
      if (dados.personalInfo) {
        document.getElementById('nome').textContent = dados.personalInfo.fullName || '';
        document.getElementById('titulo').textContent = dados.personalInfo.headline || '';
  
        const imgFoto = document.getElementById('foto-perfil');
        if (imgFoto && dados.personalInfo.photo) {
          imgFoto.src = dados.personalInfo.photo;
        }
  
        const contatoDiv = document.getElementById('contato');
        contatoDiv.textContent = `${dados.personalInfo.location || ''} • Modelo ${dados.personalInfo.workModel || ''} • `;
  
        if (dados.personalInfo.credlyUrl) {
          const linkCredly = document.createElement('a');
          linkCredly.href = dados.personalInfo.credlyUrl;
          linkCredly.target = '_blank';
          linkCredly.textContent = 'Certificações Credly';
          contatoDiv.appendChild(linkCredly);
        }
      }
  
      // 2. Resumo Profissional
      if (dados.professionalSummary) {
        document.getElementById('resumo-desc').textContent = dados.professionalSummary.description;
        document.getElementById('resumo-objetivo').textContent = dados.professionalSummary.careerObjective;
      }
  
      // 3. Experiências Profissionais
      const expContainer = document.getElementById('lista-experiencias');
      dados.professionalExperience.forEach(exp => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
  
        // Cabeçalho do item (Cargo, Empresa e Data)
        const headerDiv = document.createElement('div');
        headerDiv.className = 'item-header';
  
        const cargoSpan = document.createElement('span');
        cargoSpan.textContent = `${exp.position} — `;
  
        const empresaSpan = document.createElement('span');
        empresaSpan.className = 'company';
        empresaSpan.textContent = exp.company;
        cargoSpan.appendChild(empresaSpan);
  
        const dataSpan = document.createElement('span');
        dataSpan.className = 'date';
        dataSpan.textContent = `${exp.startDate} – ${exp.endDate} • ${exp.location}`;
  
        headerDiv.appendChild(cargoSpan);
        headerDiv.appendChild(dataSpan);
  
        // Descrição
        const descP = document.createElement('p');
        descP.className = 'item-desc';
        descP.textContent = exp.description;
  
        // Lista de responsabilidades e conquistas
        const ul = document.createElement('ul');
  
        exp.responsibilities.forEach(resp => {
          const li = document.createElement('li');
          li.textContent = resp;
          ul.appendChild(li);
        });
  
        exp.achievements.forEach(ach => {
          const li = document.createElement('li');
          const strong = document.createElement('strong');
          strong.textContent = 'Destaque: ';
          li.appendChild(strong);
          li.appendChild(document.createTextNode(ach));
          ul.appendChild(li);
        });
  
        // Monta o bloco final da experiência
        itemDiv.appendChild(headerDiv);
        itemDiv.appendChild(descP);
        itemDiv.appendChild(ul);
        expContainer.appendChild(itemDiv);
      });
  
      // 4. Projetos
      const projContainer = document.getElementById('lista-projetos');
      dados.projects.forEach(proj => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
  
        const headerDiv = document.createElement('div');
        headerDiv.className = 'item-header';
  
        const nomeSpan = document.createElement('span');
        nomeSpan.textContent = `${proj.name} (${proj.role})`;
  
        const dataSpan = document.createElement('span');
        dataSpan.className = 'date';
        dataSpan.textContent = `${proj.startDate} – ${proj.endDate}`;
  
        headerDiv.appendChild(nomeSpan);
        headerDiv.appendChild(dataSpan);
  
        const descP = document.createElement('p');
        descP.className = 'item-desc';
        descP.textContent = proj.description;
  
        // Tags de tecnologias
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'tags';
        proj.technologies.forEach(tech => {
          const tagSpan = document.createElement('span');
          tagSpan.className = 'tag';
          tagSpan.textContent = tech;
          tagsDiv.appendChild(tagSpan);
        });
  
        itemDiv.appendChild(headerDiv);
        itemDiv.appendChild(descP);
        itemDiv.appendChild(tagsDiv);
        projContainer.appendChild(itemDiv);
      });
  
      // 5. Formação Acadêmica e Cursos
      const formContainer = document.getElementById('lista-formacao');
      
      dados.education.forEach(edu => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
  
        const headerDiv = document.createElement('div');
        headerDiv.className = 'item-header';
  
        const cursoSpan = document.createElement('span');
        cursoSpan.textContent = `${edu.degree} em ${edu.fieldOfStudy} — `;
  
        const instSpan = document.createElement('span');
        instSpan.className = 'company';
        instSpan.textContent = edu.institution;
        cursoSpan.appendChild(instSpan);
  
        const dataSpan = document.createElement('span');
        dataSpan.className = 'date';
        dataSpan.textContent = `${edu.startDate} – ${edu.endDate} (${edu.level})`;
  
        headerDiv.appendChild(cursoSpan);
        headerDiv.appendChild(dataSpan);
        itemDiv.appendChild(headerDiv);
        formContainer.appendChild(itemDiv);
      });
  
      if (dados.courses) {
        dados.courses.forEach(curso => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'item';
  
          const headerDiv = document.createElement('div');
          headerDiv.className = 'item-header';
  
          const cursoSpan = document.createElement('span');
          cursoSpan.textContent = `${curso.name} — `;
  
          const instSpan = document.createElement('span');
          instSpan.className = 'company';
          instSpan.textContent = curso.institution;
          cursoSpan.appendChild(instSpan);
  
          const dataSpan = document.createElement('span');
          dataSpan.className = 'date';
          dataSpan.textContent = `Concluído em ${curso.completionDate}`;
  
          headerDiv.appendChild(cursoSpan);
          headerDiv.appendChild(dataSpan);
          itemDiv.appendChild(headerDiv);
          formContainer.appendChild(itemDiv);
        });
      }
  
      // 6. Ferramentas e Metodologias
      const toolsContainer = document.getElementById('lista-ferramentas');
      const todasFerramentas = [...dados.skills.tools, ...dados.skills.methodologies];
      todasFerramentas.forEach(tool => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tool;
        toolsContainer.appendChild(tagSpan);
      });
  
      // 7. Certificações e Idiomas
      const certContainer = document.getElementById('lista-certificacoes');
      dados.certifications.forEach(cert => {
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = cert.name;
        li.appendChild(strong);
        li.appendChild(document.createTextNode(` – ${cert.issuer} (${cert.issueDate})`));
        certContainer.appendChild(li);
      });
  
      dados.languages.forEach(lang => {
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = `${lang.name}: `;
        li.appendChild(strong);
        li.appendChild(document.createTextNode(`Nível ${lang.proficiency}`));
        certContainer.appendChild(li);
      });
  
    } catch (erro) {
      console.error('Erro ao processar dados:', erro);
      document.getElementById('nome').textContent = 'Erro ao carregar o currículo.';
    }
  }
  
  carregarCurriculo();
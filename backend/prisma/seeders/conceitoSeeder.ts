import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const conceitoSeeder = async () => {
  await prisma.conceito.createMany({
    data: [
      {
        id: 1,
        nome: "imersão",
        descricao:
          'No contexto de aulas remotas, "imersão" refere-se ao grau em que um estudante se sente completamente envolvido e absorvido pelo conteúdo educacional, como em videoaulas ou realidade virtual educativa. Esse envolvimento profundo pode levar a uma percepção diminuída do ambiente físico real do estudante, aumentando a eficácia do aprendizado.',
        IdPai: 0,
      },
      {
        id: 2,
        nome: "socialidade",
        descricao:
          'Em aulas remotas, "socialidade" descreve a capacidade das plataformas de ensino online de criar um senso de comunidade e conexão entre alunos e professores. Isso é particularmente importante em formatos como fóruns de discussão e trabalhos em grupo, onde a interação é crucial para a experiência educacional.',
        IdPai: 0,
      },
      {
        id: 3,
        nome: "solidão",
        descricao:
          "A solidão pode ser uma preocupação significativa em aulas remotas, onde alunos podem se sentir isolados devido à falta de interação física com colegas e professores. Estratégias para mitigar a solidão incluem o aumento da interatividade e o fomento de um ambiente comunitário online.",
        IdPai: 0,
      },
      {
        id: 4,
        nome: "Interatividade",
        descricao:
          "Refere-se à capacidade das plataformas educacionais de permitir interações bidirecionais entre estudantes e o sistema de ensino. Isso inclui ferramentas como quizzes interativos, perguntas e respostas ao vivo e atividades colaborativas que engajam os alunos ativamente no processo de aprendizado.",
        IdPai: 0,
      },
      {
        id: 5,
        nome: "Imediatismo",
        descricao:
          "Em aulas ao vivo, o imediatismo permite que os alunos vejam e interajam com o conteúdo e o professor em tempo real. Isso pode melhorar a atenção e o engajamento dos alunos, pois a natureza ao vivo do ensino gera uma sensação de urgência e relevância.",
        IdPai: 0,
      },
      {
        id: 6,
        nome: "Efervescência Coletiva",
        descricao:
          "Este conceito pode ser observado durante atividades de aula que envolvem a participação simultânea de muitos alunos, como em debates ao vivo ou eventos interativos online, onde a energia e entusiasmo compartilhados elevam a experiência de aprendizado.",
        IdPai: 0,
      },
      {
        id: 7,
        nome: "Excitação",
        descricao:
          "No ensino remoto, o arousal pode ser entendido como o nível de alerta e engajamento emocional que os alunos experimentam durante as sessões. Técnicas como multimídia envolvente e interações em tempo real são usadas para manter os alunos estimulados e focados.",
        IdPai: 0,
      },
      {
        id: 8,
        nome: "Valência",
        descricao:
          "Refere-se à percepção positiva ou negativa dos alunos em relação ao conteúdo ou à experiência de aprendizado. Em aulas remotas, uma valência positiva pode ser fomentada através de feedback construtivo, conteúdo relevante e suporte emocional adequado.",
        IdPai: 0,
      },
      {
        id: 9,
        nome: "Reflexivo",
        descricao:
          "Em aulas remotas, a reflexão é crucial após as aulas e atividades. Incentivar os alunos a refletir sobre o que aprenderam e como se sentiram durante a aula pode ajudar a consolidar o conhecimento e a melhorar as técnicas de ensino.",
        IdPai: 0,
      },
      {
        id: 10,
        nome: "Imediato",
        descricao:
          "Refere-se à resposta rápida e direta em aulas interativas, permitindo que alunos e professores ajustem a dinâmica da aula em tempo real com base na recepção do conteúdo pelos alunos.",
        IdPai: 0,
      },
      {
        id: 11,
        nome: "Situação",
        descricao:
          "No ambiente de aulas remotas, a situação pode variar entre ser completamente virtual, híbrida ou uma combinação de presencial e remoto. A situação impacta diretamente como o conteúdo é entregue e recebido pelos alunos, bem como a interação entre alunos e professores.",
        IdPai: 0,
      },
      {
        id: 12,
        nome: "Perspectiva",
        descricao:
          "Em aulas remotas, a perspectiva de cada aluno pode variar dependendo de sua localização física, recursos tecnológicos disponíveis e preferências de aprendizado. Isso afeta como cada aluno experimenta e interage com o conteúdo da aula.",
        IdPai: 0,
      },
      {
        id: 13,
        nome: "Constitutivo",
        descricao:
          "No ensino remoto, as qualidades constitutivas envolvem como as interações e as normas culturais dos participantes influenciam a dinâmica da aula. Isso inclui a forma como os estudantes se identificam com o grupo e com o material de estudo, contribuindo para uma experiência de aprendizado personalizada e inclusiva.",
        IdPai: 0,
      },
      {
        id: 14,
        nome: "Epistêmico",
        descricao:
          "Em aulas remotas, o conhecimento é frequentemente construído de maneira colaborativa e interativa. Os alunos ganham insights não apenas através do conteúdo apresentado, mas também através de discussões e trocas com colegas e professores, ampliando seu entendimento sobre os tópicos abordados.",
        IdPai: 0,
      },
      {
        id: 15,
        nome: "Crítico",
        descricao:
          "As qualidades críticas em aulas remotas referem-se à capacidade dos alunos de analisar e questionar o conteúdo aprendido, bem como as estruturas subjacentes de poder e valores que podem influenciar o material de estudo. Isso é essencial para um aprendizado profundo e consciente.",
        IdPai: 0,
      },
      {
        id: 16,
        nome: "Colaboração",
        descricao:
          "Em aulas remotas, a colaboração é fundamental para o sucesso dos projetos de grupo e para a construção de conhecimento coletivo. Plataformas de ensino online facilitam a colaboração através de ferramentas como fóruns de discussão, trabalhos em grupo e atividades interativas.",
        IdPai: 0,
      },
      {
        id: 17,
        nome: "Competição",
        descricao:
          "A competição em aulas remotas pode ser promovida através de gamificação e desafios que incentivam os alunos a superar uns aos outros de forma saudável e produtiva. Isso pode aumentar o engajamento e a motivação, desde que bem gerenciada para garantir uma atmosfera positiva.",
        IdPai: 0,
      },
      {
        id: 18,
        nome: "Co-Presença",
        descricao:
          "Refere-se à sensação de estar presente com outros em um ambiente virtual. Em aulas remotas, isso é alcançado através de videoconferências, onde a visualização de rostos e a interação em tempo real ajudam a simular a presença física.",
        IdPai: 0,
      },
      {
        id: 19,
        nome: "Presença Social",
        descricao:
          "A presença social em aulas remotas é a percepção dos alunos de que outros estão presentes e envolvidos na mesma atividade. Isso é crucial para criar uma atmosfera de sala de aula virtual onde os alunos se sentem parte de uma comunidade.",
        IdPai: 0,
      },
      {
        id: 20,
        nome: "Senso de unidade",
        descricao: "",
        IdPai: 0,
      },
      {
        id: 21,
        nome: "Senso de Pertencimento",
        descricao: "",
        IdPai: 0,
      },
      {
        id: 22,
        nome: "Flow",
        descricao: "",
        IdPai: 23,
      },
      {
        id: 23,
        nome: "Liveness",
        descricao: "",
        IdPai: 0,
      },
    ],
  });
};

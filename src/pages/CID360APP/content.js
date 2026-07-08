export const APP = {
  name: 'CID 360°',
  tagline: 'Consulta rápida CID-10 e CID-11',
  shortDescription:
    'App para buscar códigos CID-10 e CID-11 por nome da doença, termo clínico ou número do código offline.',
}

export const LINKS = {
  contactEmail: 'contact@sawastudio.me',
  privacy: '/cid360app/privacidade',
  terms: '/cid360app/termos',
  support: '#',
  googlePlay:
    'https://play.google.com/store/apps/details?id=sawastudio.me.cid360',
  appStore:
    'https://apps.apple.com/us/app/cid-360-busca-cid-11-cid-10/id6784022155',
}

export const SEO = {
  title: 'Busca CID-11 offline em português | Aplicativo CID 360°',
  description:
    'Consulte códigos CID-11 por nome, código ou termo clínico. O CID 360° ajuda médicos, estudantes e profissionais da saúde a encontrar CIDs rapidamente.',
  keywords:
    'CID, CID-10, CID-11, consulta CID, código CID, classificação internacional de doenças, SIGTAP, TUSS, saúde',
  robots: 'index, follow',
  canonical: 'https://sawastudio.me/cid360app',
  og: {
    title: 'CID 360°',
    description: 'Consulta rápida CID-10 e CID-11 para rotina da saúde.',
    image: '',
    type: 'website',
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CID 360',
    applicationCategory: 'MedicalApplication',
    operatingSystem: 'iOS, Android',
    description:
      'Aplicativo para busca e consulta de códigos CID-11 em português.',
    url: 'https://sawastudio.me/cid360app',
    creator: {
      '@type': 'Organization',
      name: 'Sawa Studio',
    },
  },
}

export const NAV_ITEMS = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Download', href: '#download' },
  { label: 'Contato', href: '#contato' },
]

export const HERO = {
  title: 'Consulta CID-10 e CID-11 em uma experiência simples e completa.',
  subtitle:
    'Busque códigos por doença, termo clínico ou número do CID no aplicativo CID 360°. Organize favoritos, anotações e acesse recursos profissionais em um app feito para a rotina da saúde.',
  availabilityNote: 'Disponível gratuitamente nas lojas oficiais.',
  ctaPrimary: 'Baixar e começar agora',
  androidLabel: 'Baixar para Android',
  iosLabel: 'Baixar para iPhone',
}

export const WHY = {
  title: 'Mais agilidade para consultar códigos CID.',
  cards: [
    {
      title: 'Busca rápida',
      text: 'Encontre códigos CID-10 e CID-11 offline, pesquisando por termo clínico, nome da condição ou número do código.',
    },
    {
      title: 'Detalhes organizados',
      text: 'Veja informações como descrição, termos relacionados, exclusões e equivalências quando disponíveis.',
    },
    {
      title: 'Favoritos e anotações',
      text: 'Salve códigos frequentes e mantenha anotações úteis para sua rotina, com limites conforme o plano.',
    },
    {
      title: 'Recursos profissionais',
      text: 'Acesse recursos extras como pós-coordenação CID-11, SIGTAP e TUSS conforme disponibilidade e plano.',
    },
  ],
}

export const FEATURES = {
  title: 'CID 360° - Tudo em um só lugar para consulta CID.',
  items: [
    {
      title: 'Busca CID-10 e CID-11',
      text: 'Pesquise rapidamente em bases CID-10 e CID-11.',
    },
    {
      title: 'Equivalência CID-10 ↔ CID-11',
      text: 'Visualize correspondências oficiais quando disponíveis.',
    },
    {
      title: 'Inclusões e exclusões',
      text: 'Consulte informações complementares do código de forma organizada.',
    },
    {
      title: 'Pós-coordenação CID-11',
      text: 'Recurso avançado para visualizar eixos de detalhamento da CID-11 nos planos compatíveis.',
    },
    {
      title: 'SIGTAP',
      text: 'Baixe o pacote SIGTAP para consultar procedimentos SUS vinculados a CIDs quando disponíveis.',
    },
    {
      title: 'TUSS via SIGTAP',
      text: 'No Plano Pro, visualize códigos TUSS equivalentes aos procedimentos SIGTAP encontrados, com base em mapeamento administrativo.',
    },
  ],
  note: 'As informações de SIGTAP e TUSS são referências administrativas. O TUSS é exibido por equivalência com procedimentos SIGTAP, não por vínculo direto com o CID.',
}

export const AUDIENCE = {
  title: 'Feito para quem precisa consultar CIDs com frequência.',
  items: [
    'Médicos e médicas',
    'Psicólogos e profissionais de saúde mental',
    'Fisioterapeutas e terapeutas ocupacionais',
    'Clínicas e consultórios',
    'Estudantes da área da saúde',
    'Profissionais administrativos da saúde',
  ],
  disclaimer:
    'O CID 360° ajuda a consultar e organizar códigos, mas não substitui julgamento profissional, avaliação clínica ou consulta às fontes oficiais.',
}

export const PLANS = {
  title: 'Escolha o plano ideal para sua rotina',
  subtitle:
    'Use gratuitamente ou desbloqueie recursos extras para organizar melhor suas consultas.',
  note: 'Valores e recursos podem variar conforme disponibilidade nas lojas. Assinaturas e compras são gerenciadas pela App Store ou Google Play.',
  main: [
    {
      id: 'free',
      name: 'Grátis',
      price: 'R$ 0',
      period: '',
      description: 'Ideal para começar e fazer consultas rápidas.',
      badge: 'Para começar',
      included: [
        'Busca CID-10 e CID-11',
        'Favoritos locais',
        'Até 10 anotações',
        'Exibe anúncios',
        'Pacote SIGTAP baixável',
      ],
      excluded: [
        'Sem anúncios no app',
        'Backup em nuvem',
        'Pós-coordenação CID-11',
        'TUSS via SIGTAP',
        'Sincronização entre dispositivos',
      ],
      cta: 'Começar grátis',
      footnote: '',
    },
    {
      id: 'plus',
      name: 'Plus',
      price: 'R$ 19,90',
      period: '/ ano',
      description:
        'Mais organização, backup e recursos extras para a rotina clínica.',
      badge: 'Melhor custo-benefício',
      included: [
        'Sem anúncios no app',
        'Até 50 anotações',
        'Backup em nuvem semanal',
        'Pós-coordenação CID-11',
        'Pacote SIGTAP baixável',
      ],
      excluded: [
        'Anotações ilimitadas',
        'Sincronização diária',
        'TUSS via SIGTAP',
        'Recursos profissionais futuros',
      ],
      cta: 'Assinar Plus',
      footnote: '',
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 'R$ 59,90',
      period: '/ ano',
      description: 'Plano mais completo para uso frequente e profissional.',
      badge: 'Mais completo',
      included: [
        'Sem anúncios no app',
        'Anotações ilimitadas',
        'Sincronização diária',
        'Pós-coordenação CID-11',
        'TUSS via SIGTAP',
        'Recursos profissionais futuros',
      ],
      excluded: [],
      cta: 'Assinar Pro',
      footnote: 'Ideal para uso frequente.',
    },
  ],
  secondary: {
    id: 'no-ads',
    title: 'Só quer remover os anúncios?',
    price: 'R$ 9,90',
    period: 'Pagamento único, sem assinatura.',
    description:
      'Use o CID 360°sem anúncios mantendo os recursos do plano gratuito.',
    features: [
      'Sem anúncios',
      'Compra única',
      'Até 10 anotações',
      'SIGTAP gratuito baixável',
    ],
    cta: 'Remover anúncios',
  },
}

export const PACKAGES = {
  title: 'Recursos extras sem deixar o app pesado.',
  intro:
    'O CID 360° usa pacotes opcionais para manter o aplicativo mais leve. Você baixa apenas os recursos que deseja usar.',
  items: [
    {
      title: 'SIGTAP',
      text: 'Pacote gratuito com procedimentos SUS vinculados a CIDs quando disponíveis.',
    },
    {
      title: 'Pós-coordenação CID-11',
      text: 'Pacote Plus/Pro com eixos avançados de detalhamento da CID-11.',
    },
    {
      title: 'TUSS Premium',
      text: 'Pacote Pro com equivalências administrativas TUSS via SIGTAP.',
    },
  ],
  note: 'Após o download, os pacotes podem ser usados offline no aparelho, conforme disponibilidade do plano.',
}

export const DOWNLOAD = {
  title: 'Baixe o CID 360°.',
  text: 'Disponível para Android e iOS.',
  googlePlayLabel: 'Google Play',
  appStoreLabel: 'App Store',
  comingSoonLabel: 'Em breve',
  notifyText: 'Disponível para download nas lojas oficiais.',
}

export const FAQ = {
  title: 'Perguntas frequentes',
  items: [
    {
      question: 'O CID 360° faz diagnóstico?',
      answer:
        'Não. O CID 360° é uma ferramenta de consulta e organização de códigos. Ele não substitui avaliação clínica, diagnóstico ou orientação profissional.',
    },
    {
      question: 'O app funciona offline?',
      answer:
        'A busca principal pode funcionar offline conforme os dados instalados no app. Pacotes extras, como SIGTAP, TUSS e pós-coordenação, precisam ser baixados uma vez.',
    },
    {
      question: 'O que é SIGTAP?',
      answer:
        'SIGTAP é a tabela de procedimentos, medicamentos e OPM do SUS. No app, ela é usada como referência administrativa quando houver vínculo com CID.',
    },
    {
      question: 'O que é TUSS?',
      answer:
        'TUSS é uma terminologia de procedimentos e eventos usada na saúde suplementar. No CID 360°, ela aparece no Plano Pro por equivalência administrativa com procedimentos SIGTAP, não como vínculo direto com CID.',
    },
    {
      question: 'Preciso criar conta?',
      answer:
        'Não para usar a busca básica. A conta é usada para recursos como backup, sincronização e gerenciamento de plano.',
    },
    {
      question: 'Posso usar dados de pacientes nas anotações?',
      answer:
        'Recomendamos evitar inserir dados identificáveis de pacientes nas anotações.',
    },
  ],
}

export const CONTACT = {
  title: 'Contato',
  text: 'Tem dúvidas, sugestões ou encontrou algum problema? Fale com a equipe do CID 360°.',
  emailLabel: 'Enviar e-mail',
  privacyLabel: 'Política de Privacidade',
  termsLabel: 'Termos de Uso',
}

export const LEGAL = {
  terms: {
    title: 'Termos de Uso',
    paragraphs: [
      'Última atualização: 16 de junho de 2026.',
      'Estes Termos de Uso (“Termos”) regulam o acesso e o uso do aplicativo CID 360°(“Aplicativo”), desenvolvido e disponibilizado por Sawa Studio (“nós”, “nosso” ou “desenvolvedor”).',
      'Ao acessar, instalar ou utilizar o Aplicativo, você declara que leu, compreendeu e concorda com estes Termos. Caso não concorde com qualquer disposição, não utilize o Aplicativo.',
      'O uso continuado do Aplicativo após alterações nestes Termos implica aceitação das novas condições.',
      '1. Finalidade do Aplicativo',
      'O CID 360°é uma ferramenta de consulta, organização e apoio à busca de códigos relacionados à Classificação Internacional de Doenças, incluindo CID-10 e CID-11, além de recursos complementares como favoritos, anotações, equivalências, SIGTAP, TUSS via SIGTAP e pós-coordenação CID-11, conforme disponibilidade e plano contratado.',
      'O Aplicativo é destinado a profissionais da saúde, estudantes, clínicas, consultórios, profissionais administrativos e demais usuários interessados em consultar códigos e informações relacionadas.',
      'O objetivo do Aplicativo é facilitar a consulta rápida e organizada de códigos e informações de referência. O Aplicativo não substitui fontes oficiais, avaliação profissional ou validação técnica especializada.',
      '2. Natureza Informativa — Não É Conselho Médico',
      'As informações disponibilizadas no CID 360°são meramente informativas, educacionais, administrativas e de referência.',
      'O Aplicativo não constitui aconselhamento médico, diagnóstico, prescrição, tratamento, orientação terapêutica, codificação definitiva, faturamento definitivo, auditoria ou qualquer forma de serviço de saúde.',
      'A presença de um código, termo, procedimento, equivalência, exclusão, inclusão, pós-coordenação, item SIGTAP ou item TUSS no Aplicativo não substitui a avaliação clínica, o julgamento profissional, a consulta às fontes oficiais ou a codificação realizada por profissional habilitado.',
      'Decisões clínicas, diagnósticas, administrativas, de codificação, faturamento, auditoria ou autorização devem ser tomadas por profissional habilitado, considerando o contexto completo do paciente, a regulamentação aplicável e as fontes oficiais vigentes.',
      'O uso das informações do Aplicativo é de exclusiva responsabilidade do usuário.',
      '3. Público-Alvo',
      'O Aplicativo pode ser utilizado por profissionais da saúde; estudantes da área da saúde; profissionais administrativos de clínicas, consultórios, hospitais e operadoras; pesquisadores e demais interessados em códigos de classificação e referência.',
      'O Aplicativo não é direcionado a crianças. Caso menores de idade utilizem o Aplicativo, o uso deve ocorrer sob supervisão de um responsável legal.',
      '4. Fontes dos Dados e Referências de Terceiros',
      'O CID 360°pode utilizar, organizar ou apresentar dados provenientes de fontes públicas, institucionais ou técnicas, incluindo, conforme disponibilidade: CID-10 em português disponibilizada por fontes oficiais brasileiras; CID-11 disponibilizada pela Organização Mundial da Saúde; equivalências CID-10 ↔ CID-11 quando disponíveis; SIGTAP, relacionado a procedimentos, medicamentos e OPM do SUS; TUSS, terminologia de procedimentos e eventos em saúde suplementar; mapeamentos administrativos entre TUSS e SIGTAP; outros dados públicos ou técnicos utilizados para fins de consulta e referência.',
      'O Aplicativo não é afiliado, patrocinado, aprovado ou endossado pela Organização Mundial da Saúde, DATASUS, Ministério da Saúde, ANS, CBCD, SUS ou qualquer outro órgão público ou entidade mencionada, salvo se expressamente indicado.',
      'Marcas, nomes, siglas, classificações e bases de dados citadas pertencem aos seus respectivos titulares.',
      'O desenvolvedor busca organizar os dados de forma clara e útil, mas não garante que todas as informações estejam completas, atualizadas, livres de erro, adequadas a qualquer finalidade específica ou equivalentes às fontes oficiais vigentes.',
      '5. CID, SIGTAP e TUSS',
      'O usuário reconhece que CID, SIGTAP e TUSS têm naturezas diferentes.',
      'CID é uma classificação relacionada a doenças, condições de saúde e causas.',
      'SIGTAP é uma tabela administrativa relacionada a procedimentos, medicamentos e OPM no âmbito do SUS.',
      'TUSS é uma terminologia de procedimentos e eventos em saúde utilizada na saúde suplementar.',
      'Quando o Aplicativo exibe códigos TUSS relacionados a um CID, essa exibição ocorre de forma indireta, por meio de equivalência administrativa entre procedimentos SIGTAP e códigos TUSS, quando disponível.',
      'Portanto: TUSS não possui vínculo direto com CID no Aplicativo; a relação exibida pode seguir o fluxo CID → SIGTAP → TUSS; essa relação é administrativa e de referência; ela não representa recomendação clínica, indicação terapêutica, autorização de procedimento, cobertura obrigatória ou faturamento definitivo.',
      'O usuário deve sempre consultar as normas, contratos, fontes oficiais e profissionais responsáveis antes de utilizar essas informações para fins administrativos, assistenciais ou financeiros.',
      '6. Conta de Usuário',
      'O Aplicativo pode permitir o uso sem criação de conta para funcionalidades básicas.',
      'Alguns recursos, como backup, sincronização, gerenciamento de plano, restauração de compras ou acesso a recursos premium, podem exigir login ou criação de conta.',
      'Ao criar uma conta, o usuário se compromete a fornecer informações corretas e manter seus dados atualizados.',
      'O usuário é responsável por manter a segurança de sua conta e por qualquer atividade realizada a partir dela, salvo quando houver falha atribuível ao Aplicativo ou a terceiros responsáveis pelo serviço.',
      '7. Favoritos, Anotações e Dados Inseridos pelo Usuário',
      'O Aplicativo pode permitir que o usuário salve códigos como favoritos e crie anotações pessoais.',
      'As anotações são de responsabilidade exclusiva do usuário.',
      'O CID 360°não foi criado para armazenar dados identificáveis de pacientes. Recomendamos expressamente que o usuário não insira nas anotações nomes de pacientes, CPF, número de prontuário, telefone, endereço, dados de contato, informações clínicas individualizadas ou qualquer dado que permita identificar uma pessoa.',
      'Caso o usuário insira dados pessoais ou dados sensíveis de terceiros nas anotações, ele será responsável por garantir que possui base legal, autorização e legitimidade para tal uso.',
      'O desenvolvedor não se responsabiliza pelo conteúdo inserido livremente pelo usuário nas anotações.',
      '8. Planos, Compras e Assinaturas',
      'O Aplicativo pode oferecer recursos gratuitos e recursos pagos.',
      'Os planos e compras podem incluir, conforme disponibilidade: plano gratuito com anúncios; compra única para remoção de anúncios; plano Plus; plano Pro; pacotes baixáveis; recursos adicionais ou profissionais.',
      'Os valores, recursos, duração, disponibilidade e condições dos planos podem variar conforme plataforma, loja, região, promoções e atualizações do Aplicativo.',
      'Compras e assinaturas realizadas por meio da App Store ou Google Play são processadas pelas respectivas lojas, conforme seus próprios termos, políticas, regras de cobrança, renovação, cancelamento e reembolso.',
      'O desenvolvedor não processa diretamente dados completos de cartão de crédito ou métodos de pagamento utilizados nas lojas.',
      'O acesso a recursos pagos pode depender da confirmação da compra, da assinatura ativa, da restauração de compras e da validação do plano do usuário.',
      '9. Pacotes Baixáveis',
      'Para manter o Aplicativo mais leve, alguns recursos podem ser disponibilizados por meio de pacotes baixáveis, como SIGTAP, TUSS e pós-coordenação CID-11.',
      'O usuário poderá baixar pacotes compatíveis com seu plano e disponibilidade.',
      'Alguns pacotes podem ser gratuitos, enquanto outros podem exigir plano Plus ou Pro.',
      'Após baixados, os pacotes podem funcionar offline no aparelho, salvo se removidos, corrompidos, atualizados, expirados ou se houver necessidade de validação do plano.',
      'O desenvolvedor pode atualizar, substituir, corrigir, remover ou descontinuar pacotes baixáveis a qualquer momento, especialmente para corrigir dados, reduzir tamanho, melhorar desempenho ou adequar o Aplicativo a novas versões das fontes utilizadas.',
      '10. Anúncios',
      'A versão gratuita do Aplicativo pode exibir anúncios.',
      'Usuários que adquirirem remoção de anúncios ou assinarem planos que incluam esse benefício poderão deixar de visualizar anúncios, conforme as regras do plano.',
      'Os anúncios podem ser fornecidos por redes de terceiros, que podem coletar dados técnicos, identificadores, eventos de uso ou informações relacionadas a publicidade conforme suas próprias políticas de privacidade e permissões do sistema operacional.',
      '11. Uso Permitido e Condutas Proibidas',
      'O usuário concorda em utilizar o Aplicativo apenas para fins lícitos, pessoais, profissionais ou educacionais compatíveis com estes Termos.',
      'É proibido: copiar, revender, sublicenciar ou redistribuir o Aplicativo ou seus bancos de dados; tentar extrair, raspar, descompilar, reverter engenharia ou replicar substancialmente os dados e funcionalidades do Aplicativo; utilizar o Aplicativo para tomar decisões clínicas sem avaliação profissional adequada; inserir dados de terceiros sem autorização ou base legal; violar direitos de propriedade intelectual de terceiros; tentar burlar bloqueios de plano, pagamento, assinatura ou acesso premium; comprometer a segurança, estabilidade ou funcionamento do Aplicativo; utilizar o Aplicativo de forma contrária à legislação aplicável.',
      '12. Propriedade Intelectual',
      'O Aplicativo, sua marca, interface, organização, design, código, textos próprios, ícones, elementos visuais, estrutura de navegação, funcionalidades, recursos e demais materiais desenvolvidos pelo CID 360°ou por Sawa Studio são protegidos por direitos de propriedade intelectual.',
      'O uso do Aplicativo não confere ao usuário qualquer direito de propriedade sobre o Aplicativo, marca, código-fonte, design, bancos de dados derivados ou materiais próprios.',
      'As bases, classificações, marcas, siglas e dados de terceiros pertencem aos seus respectivos titulares e são utilizados como referência, quando permitido, citado ou disponibilizado publicamente.',
      '13. Disponibilidade, Atualizações e Alterações',
      'O desenvolvedor poderá modificar, atualizar, corrigir, suspender ou descontinuar funcionalidades do Aplicativo a qualquer momento.',
      'O Aplicativo pode depender de sistemas de terceiros, lojas de aplicativos, serviços de autenticação, armazenamento, pagamento, anúncios, conectividade, servidores e pacotes baixáveis.',
      'Não garantimos que o Aplicativo estará sempre disponível, livre de falhas, livre de erros, compatível com todos os dispositivos ou atualizado em relação a todas as fontes oficiais.',
      'O usuário é responsável por manter o Aplicativo atualizado e por verificar informações críticas em fontes oficiais.',
      '14. Isenção de Garantias',
      'O Aplicativo é fornecido “no estado em que se encontra” e “conforme disponível”, sem garantias de qualquer natureza, expressas ou implícitas, na máxima extensão permitida pela legislação aplicável.',
      'O desenvolvedor não garante: precisão absoluta das informações; completude das bases; atualização em tempo real; ausência de erros, omissões ou inconsistências; adequação a finalidade clínica, administrativa, financeira ou jurídica específica; aceitação por operadoras, órgãos públicos, auditorias, sistemas de faturamento ou instituições; disponibilidade contínua de recursos, pacotes, downloads ou serviços.',
      '15. Limitação de Responsabilidade',
      'Na máxima extensão permitida por lei, o desenvolvedor não se responsabiliza por danos diretos, indiretos, incidentais, especiais, morais, materiais, lucros cessantes, perdas de receita, perdas de dados ou prejuízos decorrentes de uso ou impossibilidade de uso do Aplicativo; decisões clínicas, diagnósticas, administrativas, de codificação, faturamento ou auditoria tomadas com base no Aplicativo; erros, omissões, desatualizações ou inconsistências nas informações; uso inadequado das informações pelo usuário; inserção de dados pessoais ou sensíveis nas anotações; falhas de terceiros, lojas de aplicativos, redes de anúncios, serviços de autenticação, serviços de pagamento, armazenamento ou infraestrutura; indisponibilidade de internet, servidores, pacotes baixáveis ou sistemas externos.',
      'Nada nestes Termos exclui responsabilidades que não possam ser excluídas pela legislação aplicável.',
      '16. Indenização',
      'O usuário concorda em indenizar e isentar o desenvolvedor, seus sócios, colaboradores, fornecedores, parceiros e prestadores de serviço contra reclamações, perdas, responsabilidades, danos, custos e despesas decorrentes de uso indevido do Aplicativo; violação destes Termos; violação de direitos de terceiros; inserção ou tratamento indevido de dados pessoais ou sensíveis; uso das informações do Aplicativo para decisões clínicas, administrativas, financeiras ou jurídicas sem validação adequada; tentativa de acesso não autorizado, cópia, redistribuição ou exploração comercial indevida dos dados ou funcionalidades.',
      '17. Privacidade e Proteção de Dados',
      'O tratamento de dados pessoais pelo Aplicativo é descrito na Política de Privacidade do CID 360.',
      'Ao utilizar o Aplicativo, o usuário reconhece que leu e compreendeu a Política de Privacidade.',
      'A Política de Privacidade explica quais dados podem ser coletados, como são usados, com quem podem ser compartilhados, por quanto tempo são mantidos e quais direitos o usuário possui.',
      '18. Encerramento de Uso',
      'O usuário pode parar de utilizar o Aplicativo a qualquer momento.',
      'O usuário também pode remover o Aplicativo do dispositivo, excluir dados locais ou solicitar exclusão de conta e dados em nuvem, quando aplicável.',
      'O desenvolvedor poderá suspender ou limitar o acesso de usuários que violem estes Termos, tentem burlar recursos pagos, comprometam a segurança do Aplicativo ou façam uso abusivo dos serviços.',
      '19. Alterações nestes Termos',
      'Estes Termos podem ser atualizados periodicamente para refletir mudanças no Aplicativo, em recursos, planos, bases de dados, legislação, exigências das lojas ou práticas operacionais.',
      'A versão atualizada será disponibilizada no Aplicativo ou no site oficial.',
      'O uso continuado do Aplicativo após a publicação das alterações representa concordância com os novos Termos.',
      '20. Lei Aplicável e Foro',
      'Estes Termos serão regidos pelas leis da República Federativa do Brasil.',
      'Eventuais controvérsias serão resolvidas conforme a legislação aplicável e, quando permitido, no foro da comarca de [inserir cidade/estado], com renúncia a qualquer outro, por mais privilegiado que seja.',
      '21. Contato',
      'Em caso de dúvidas, solicitações, suporte ou questões relacionadas a estes Termos, entre em contato:',
      'Sawa Studio',
      'E-mail: contact@sawastudio.me',
      'Site: https://sawastudio.me/cid360app',
    ],
  },
  privacy: {
    title: 'Política de Privacidade',
    paragraphs: [
      'Última atualização: 16 de junho de 2026.',
      'Esta Política de Privacidade explica como o aplicativo CID 360°(“Aplicativo”) coleta, utiliza, armazena, compartilha e protege informações relacionadas aos usuários.',
      'O CID 360°é desenvolvido e disponibilizado por Sawa Studio (“nós”, “nosso” ou “desenvolvedor”).',
      'Ao utilizar o Aplicativo, você declara que leu e compreendeu esta Política de Privacidade.',
      '1. Quem Somos',
      'O CID 360°é um aplicativo de consulta e organização de códigos CID-10, CID-11 e recursos relacionados, como equivalências, favoritos, anotações, SIGTAP, TUSS via SIGTAP e pós-coordenação CID-11, conforme disponibilidade e plano.',
      'Controlador dos dados, quando aplicável: Sawa Studio. E-mail de contato: contact@sawastudio.me. Site: https://sawastudio.me/cid360app',
      '2. Escopo desta Política',
      'Esta Política se aplica ao uso do Aplicativo CID 360, incluindo suas funcionalidades gratuitas e pagas, conta de usuário, favoritos, anotações, backup, sincronização, pacotes baixáveis, compras, anúncios e recursos premium.',
      'Esta Política não se aplica a sites, serviços, lojas, plataformas ou sistemas de terceiros, ainda que acessados por meio do Aplicativo. Esses terceiros possuem suas próprias políticas de privacidade.',
      '3. Dados Que Podemos Coletar',
      'O CID 360°busca coletar apenas os dados necessários para funcionamento, segurança, melhoria e disponibilização dos recursos do Aplicativo.',
      'Os dados coletados podem variar conforme o uso do Aplicativo, plano contratado, permissões concedidas e recursos ativados.',
      '4. Dados de Conta',
      'Caso você crie uma conta ou faça login, poderemos tratar dados como: nome informado pelo usuário; endereço de e-mail; identificador interno de usuário; data de criação da conta; status de autenticação; informações necessárias para login sem senha, confirmação por código ou autenticação.',
      'Esses dados são usados para permitir acesso à conta, restauração de sessão, gerenciamento de plano, backup, sincronização e suporte.',
      '5. Favoritos e Anotações',
      'O Aplicativo pode permitir que você salve códigos favoritos e crie anotações.',
      'Dependendo do plano e das configurações, esses dados podem ficar armazenados localmente no dispositivo; sincronizados ou armazenados em nuvem, quando o recurso estiver disponível e ativado; incluídos em backup, conforme o plano contratado.',
      'As anotações são criadas livremente pelo usuário.',
      'O CID 360°não foi desenvolvido para armazenar dados identificáveis de pacientes. Recomendamos que você não insira nomes, CPF, número de prontuário, telefone, endereço, dados clínicos individualizados ou qualquer informação que identifique pacientes.',
      'Caso você insira dados pessoais ou sensíveis nas anotações, você é responsável por garantir que possui autorização, base legal e legitimidade para tal uso.',
      '6. Dados de Plano, Compras e Assinaturas',
      'Para liberar recursos pagos, remover anúncios, validar assinaturas ou restaurar compras, poderemos tratar dados relacionados ao status comercial do usuário, como: plano atual; status da assinatura; identificador do produto adquirido; data de expiração, quando aplicável; informação sobre compra única de remoção de anúncios; provedor da compra ou assinatura; eventos necessários para validar ou restaurar acesso.',
      'Compras e assinaturas feitas pela App Store ou Google Play são processadas pelas respectivas lojas. O CID 360°não recebe nem armazena dados completos de cartão de crédito ou forma de pagamento.',
      'Caso seja utilizado um serviço de gerenciamento de compras, como RevenueCat ou equivalente, esse serviço poderá processar identificadores e informações relacionadas ao status da compra para validar o acesso aos recursos pagos.',
      '7. Dados Técnicos e de Uso',
      'Podemos coletar ou receber dados técnicos e de uso necessários para funcionamento, segurança, diagnóstico e melhoria do Aplicativo, incluindo: tipo de dispositivo; sistema operacional; versão do Aplicativo; idioma; país ou região aproximada; eventos de uso; telas acessadas; erros, falhas e logs técnicos; informações de desempenho; identificadores técnicos ou de instalação, quando aplicável.',
      'Esses dados são utilizados para melhorar o Aplicativo, corrigir falhas, entender uso agregado, manter segurança e prestar suporte.',
      '8. Anúncios',
      'A versão gratuita do Aplicativo pode exibir anúncios.',
      'Redes de anúncios podem coletar ou processar dados técnicos, identificadores, eventos de uso, informações do dispositivo e dados relacionados à publicidade, conforme permissões do sistema operacional e políticas próprias desses terceiros.',
      'Quando aplicável, o usuário poderá gerenciar preferências de anúncios por meio das configurações do dispositivo, das permissões do sistema operacional ou das opções disponibilizadas pelas plataformas de anúncios.',
      'Usuários que adquirirem remoção de anúncios ou assinarem planos que incluam esse benefício poderão deixar de visualizar anúncios no Aplicativo, conforme as regras do plano.',
      '9. Pacotes Baixáveis',
      'O Aplicativo pode oferecer pacotes baixáveis para recursos como SIGTAP, TUSS via SIGTAP e pós-coordenação CID-11.',
      'Ao baixar pacotes, poderemos tratar dados técnicos necessários para verificar disponibilidade do pacote; validar se o plano permite acesso; realizar o download; confirmar instalação local; corrigir falhas; atualizar ou substituir pacotes.',
      'Os pacotes baixados podem ficar armazenados localmente no dispositivo.',
      '10. Dados Coletados por Terceiros',
      'O Aplicativo pode utilizar serviços de terceiros para autenticação, banco de dados, armazenamento, compras, anúncios, analytics, diagnóstico de falhas e distribuição.',
      'Esses serviços podem incluir, conforme a implementação real do Aplicativo: Supabase, para autenticação, banco de dados, armazenamento, backup, sincronização e pacotes baixáveis; Apple App Store e Google Play Store, para processamento de compras, assinaturas, distribuição do app e diagnósticos conforme suas próprias políticas; RevenueCat ou serviço equivalente, para gerenciamento de compras, assinaturas e status de acesso, se utilizado; Google AdMob ou rede equivalente, para exibição e mensuração de anúncios, se utilizado; serviços de analytics ou crash reporting, para análise de uso, desempenho e falhas, se utilizados.',
      'Cada terceiro processa dados conforme suas próprias políticas de privacidade, termos e configurações.',
      'O CID 360°não controla integralmente as práticas de dados de plataformas terceiras, lojas, sistemas operacionais, redes de anúncios ou provedores externos.',
      'Antes de publicar esta Política, remova desta seção qualquer serviço que não seja efetivamente utilizado pelo Aplicativo e acrescente qualquer serviço adicional que esteja integrado ao app.',
      '11. Finalidades do Tratamento',
      'Podemos tratar dados para as seguintes finalidades: permitir o funcionamento do Aplicativo; autenticar usuários; manter favoritos e anotações; realizar backup e sincronização, quando disponíveis; gerenciar planos, compras e assinaturas; remover anúncios para usuários elegíveis; exibir anúncios para usuários da versão gratuita; disponibilizar pacotes baixáveis; prestar suporte; corrigir falhas; melhorar desempenho e experiência de uso; prevenir abuso, fraude e acesso indevido; cumprir obrigações legais, regulatórias ou exigências das lojas de aplicativos.',
      '12. Bases Legais',
      'Quando aplicável, o tratamento de dados pessoais pode se basear em uma ou mais das seguintes bases legais previstas na legislação brasileira de proteção de dados: execução de contrato ou procedimentos preliminares relacionados ao uso do Aplicativo; cumprimento de obrigação legal ou regulatória; legítimo interesse, respeitados os direitos e liberdades do usuário; consentimento, quando exigido; exercício regular de direitos; proteção contra fraudes e segurança do usuário.',
      'Quando dados sensíveis forem inseridos voluntariamente pelo usuário em campos livres, como anotações, o usuário reconhece que não deve inserir dados identificáveis de pacientes e que é responsável pelo conteúdo registrado.',
      '13. Compartilhamento de Dados',
      'Podemos compartilhar dados com terceiros apenas quando necessário para as finalidades descritas nesta Política, como: provedores de autenticação, banco de dados, hospedagem e armazenamento; lojas de aplicativos; provedores de pagamento e assinatura; serviços de anúncios; serviços de análise e diagnóstico de falhas; prestadores de suporte técnico; autoridades públicas, quando exigido por lei ou ordem válida.',
      'Não vendemos dados pessoais dos usuários.',
      '14. Armazenamento e Retenção',
      'Os dados são mantidos pelo tempo necessário para cumprir as finalidades descritas nesta Política, respeitando obrigações legais, regulatórias, contratuais e necessidades legítimas do Aplicativo.',
      'Dados armazenados localmente podem ser removidos pelo usuário ao apagar dados do Aplicativo ou desinstalá-lo.',
      'Dados em nuvem, quando existentes, podem permanecer vinculados à conta até que o usuário solicite exclusão, encerre a conta ou até que deixem de ser necessários.',
      'Registros relacionados a compras, assinaturas, segurança, suporte ou obrigações legais podem ser mantidos por período adicional quando necessário.',
      '15. Segurança',
      'Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados tratados pelo Aplicativo contra acesso não autorizado, perda, alteração, uso indevido ou divulgação indevida.',
      'Apesar dos esforços de segurança, nenhum sistema é totalmente imune a falhas, ataques, interrupções ou acessos indevidos.',
      'O usuário também deve adotar cuidados, como manter seu dispositivo protegido, não compartilhar códigos de acesso e evitar inserir dados sensíveis desnecessários nas anotações.',
      '16. Transferência Internacional de Dados',
      'Alguns serviços utilizados pelo Aplicativo podem armazenar ou processar dados em servidores localizados fora do Brasil.',
      'Quando isso ocorrer, os dados poderão estar sujeitos às leis e medidas de proteção aplicáveis aos países onde forem processados, observadas as regras da legislação brasileira de proteção de dados quando aplicável.',
      '17. Direitos do Usuário',
      'Nos termos da legislação aplicável, o usuário pode ter direitos relacionados aos seus dados pessoais, incluindo: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade; portabilidade, quando aplicável; informação sobre compartilhamento; revogação de consentimento, quando aplicável; oposição ao tratamento em determinadas situações; solicitação de exclusão de conta e dados associados, quando aplicável.',
      'Para exercer seus direitos, entre em contato pelo e-mail indicado nesta Política.',
      'Poderemos solicitar informações adicionais para confirmar a identidade do solicitante e proteger a segurança da conta.',
      '18. Exclusão de Conta e Dados',
      'Quando houver conta de usuário, o usuário poderá solicitar a exclusão da conta e dos dados associados, observadas obrigações legais, registros necessários para segurança, prevenção de fraude, histórico de compras, suporte ou cumprimento de requisitos das lojas.',
      'A exclusão da conta pode não cancelar automaticamente assinaturas ativas na App Store ou Google Play. O cancelamento de assinaturas deve ser realizado diretamente na loja correspondente, conforme as regras da plataforma.',
      '19. Dados de Pacientes e Informações de Saúde',
      'O CID 360°não solicita que o usuário insira dados de pacientes.',
      'As anotações são campos livres criados para organização pessoal do usuário. Recomendamos expressamente que não sejam inseridos dados identificáveis de pacientes, informações clínicas individualizadas, CPF, telefone, endereço, número de prontuário, número de documento ou qualquer informação que permita identificar uma pessoa.',
      'Caso o usuário utilize o Aplicativo para registrar dados de terceiros, ele será responsável por obter autorizações necessárias e cumprir a legislação aplicável.',
      '20. Crianças e Adolescentes',
      'O Aplicativo não é direcionado a crianças.',
      'Caso menores de idade utilizem o Aplicativo, o uso deve ocorrer sob supervisão de responsável legal.',
      'Não coletamos intencionalmente dados de crianças para fins comerciais.',
      'Se você acredita que dados de criança foram fornecidos indevidamente, entre em contato para que possamos avaliar e tomar as providências cabíveis.',
      '21. Landing Page, Cookies e Contato',
      'Caso o CID 360°possua site ou landing page, poderemos coletar dados técnicos básicos de navegação, como endereço IP, tipo de navegador, páginas acessadas e informações de dispositivo, conforme a ferramenta de hospedagem ou analytics utilizada.',
      'Se forem utilizados cookies, pixels ou ferramentas de análise, isso deverá ser informado ao usuário na página correspondente.',
      'Formulários de contato, quando existentes, podem coletar nome, e-mail e mensagem para fins de atendimento e suporte.',
      '22. Alterações nesta Política',
      'Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças no Aplicativo, nos recursos, nos serviços de terceiros, nas práticas de dados, nos planos ou na legislação aplicável.',
      'A versão atualizada será disponibilizada no Aplicativo ou no site oficial.',
      'O uso continuado do Aplicativo após alterações representa ciência da nova versão da Política.',
      '23. Contato',
      'Para dúvidas, solicitações, suporte, privacidade ou exercício de direitos relacionados a dados pessoais, entre em contato:',
      'Sawa Studio',
      'E-mail: contact@sawastudio.me',
      'Site: https://sawastudio.me/cid360app',
      'Ao entrar em contato, informe de forma clara sua solicitação para que possamos responder adequadamente.',
    ],
  },
}

export const FOOTER = {
  tagline: 'Consulta CID-10 e CID-11 para rotina da saúde.',
  legal:
    'CID 360° é uma ferramenta de consulta. As informações exibidas não substituem avaliação clínica, julgamento profissional ou fontes oficiais.',
  copyright: '© 2026 Sawa Studio. Todos os direitos reservados.',
  links: [
    { label: 'Privacidade', href: LINKS.privacy },
    { label: 'Termos', href: LINKS.terms },
    { label: 'Contato', href: '#contato' },
  ],
}

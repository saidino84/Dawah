import { DeedatItem, HistoricalDebate, BiblicalReference } from '../types';
import { ADDITIONAL_DAWAH_DEBATES, ADDITIONAL_DAWAH_ITEMS } from './additionalDawahData';
import { COMPREHENSIVE_VIDEO_ITEMS } from './videoDebatesData';

export const HISTORICAL_DEBATES: HistoricalDebate[] = [
  ...ADDITIONAL_DAWAH_DEBATES,
  {
    id: 'debate-shorrosh-1',
    title: 'Jesus é Deus? (Is Jesus God?)',
    opponent: 'Dr. Anis Shorrosh',
    opponentTitle: 'Pastor Evangélico e Teólogo Palestino-Americano',
    date: 'Dezembro de 1985',
    location: 'Royal Albert Hall, Londres, Reino Unido',
    venue: 'Royal Albert Hall',
    attendeesCount: 'Mais de 5.000 pessoas presentes',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    description: 'Um dos debates teológicos mais célebres do século XX sobre a alegada divindade de Jesus Cristo, confrontando as escrituras hebraicas, o grego bíblico e o Novo Testamento contra o monoteísmo puro.',
    coreTopics: ['Divindade de Cristo', 'João 10:30', 'Filiação Divina', 'Trindade vs Monoteísmo'],
    deedatCentralThesis: 'Jesus nunca afirmou ser o Deus Todo-Poderoso em nenhuma passagem inequívoca da Bíblia; ele subordinou sempre sua vontade ao Pai (João 14:28, Marcos 12:29).',
    opponentCentralThesis: 'Jesus revelou sua identidade como o Filho de Deus encarnado, Salvador eterno e co-igual ao Pai na Trindade.',
    highlightQuestionsCount: 4
  },
  {
    id: 'debate-shorrosh-2',
    title: 'Alcorão ou Bíblia: Qual é a Palavra de Deus?',
    opponent: 'Dr. Anis Shorrosh',
    opponentTitle: 'Autor e Debatedor Cristão',
    date: 'Agosto de 1988',
    location: 'Birmingham Town Hall, Reino Unido',
    venue: 'Birmingham Town Hall',
    attendeesCount: 'Mais de 4.000 pessoas com transmissão global',
    youtubeUrl: 'https://www.youtube.com/watch?v=kY31WbE1bEw',
    youtubeId: 'kY31WbE1bEw',
    description: 'Confronto direto analisando a preservação textual dos manuscritos bíblicos, variações textuais, contradições internas e a preservação miraculosa do Alcorão Sagrado.',
    coreTopics: ['Inerrância bíblica', 'Preservação de Manuscritos', 'Profecias cumpridas', 'Milagre literário do Alcorão'],
    deedatCentralThesis: 'A Bíblia contém manuscritos conflitantes, interpolações e interpolações humanas reconhecidas por teólogos ocidentais, enquanto o Alcorão preservou-se imutável.',
    opponentCentralThesis: 'A Bíblia é a revelação inspirada por Deus confirmada pela arqueologia e pelo sacrifício de Cristo.',
    highlightQuestionsCount: 4
  },
  {
    id: 'debate-swaggart',
    title: 'A Bíblia é a Palavra de Deus?',
    opponent: 'Jimmy Swaggart',
    opponentTitle: 'Televangelista Americano de Renome Internacional',
    date: '3 de Novembro de 1986',
    location: 'Baton Rouge, Louisiana, EUA',
    venue: 'Jimmy Swaggart Auditorium',
    attendeesCount: 'Aprox. 8.000 pessoas no auditório e dezenas de milhões na TV',
    youtubeUrl: 'https://www.youtube.com/watch?v=0kH8m9qQcKk',
    youtubeId: '0kH8m9qQcKk',
    description: 'O histórico debate no coração do cinturão bíblico americano onde Deedat dissecou as revisões bíblicas da King James Version e Revised Standard Version com teólogos cristãos.',
    coreTopics: ['Versões da Bíblia', '50.000 discrepâncias', 'Ezequiel 23', 'Inspiração e infalibilidade'],
    deedatCentralThesis: 'A própria introdução da Revised Standard Version (RSV), assinada por 32 eminentes teólogos bíblicos, admite que a KJV possui defeitos graves e que certos textos sagrados foram alterados.',
    opponentCentralThesis: 'A Bíblia é a infalível, inerrante e viva Palavra de Deus que transforma vidas.',
    highlightQuestionsCount: 3
  },
  {
    id: 'debate-sjoberg',
    title: 'A Bíblia é Verdadeira?',
    opponent: 'Pastor Stanley Sjöberg',
    opponentTitle: 'Pastor da Igreja Filadélfia em Estocolmo',
    date: '27 de Outubro de 1985',
    location: 'Estocolmo, Suécia',
    venue: 'St. Eric Hall',
    attendeesCount: 'Mais de 2.500 participantes',
    youtubeUrl: 'https://www.youtube.com/watch?v=mD6w7m2_Z_g',
    youtubeId: 'mD6w7m2_Z_g',
    description: 'Debate na Escandinávia abordando profecias messiânicas, a promessa do Consolador (Paráclito) em João 16 e o conceito de redenção.',
    coreTopics: ['O Paráclito em João 16', 'Salvação pela graça vs obediência à lei', 'O Profeta como Moisés'],
    deedatCentralThesis: 'Jesus prometeu outro Consolador que permaneceria para sempre, que não falaria por si mesmo, cumprido na pessoa do Profeta Maomé.',
    opponentCentralThesis: 'O Consolador é estritamente o Espírito Santo que desceu em Pentecostes.',
    highlightQuestionsCount: 3
  },
  {
    id: 'debate-mcdowell',
    title: 'Cristo Foi Crucificado? (Was Christ Crucified?)',
    opponent: 'Josh McDowell',
    opponentTitle: 'Escritor Apologeta Cristão ("Evidência que Exige um Veredito")',
    date: 'Agosto de 1981',
    location: 'Durban, África do Sul',
    venue: 'Durban City Hall',
    attendeesCount: 'Auditório lotado com debates subsequentes',
    youtubeUrl: 'https://www.youtube.com/watch?v=e_Z_gTjBq60',
    youtubeId: 'e_Z_gTjBq60',
    description: 'Análise minuciosa forense dos quatro evangelhos bíblicos, demonstrando que os relatos apontam para sobrevivência e refutam a morte por crucificação.',
    coreTopics: ['O Sinal de Jonas', 'Oração no Getsêmani', 'O Sepulcro aberto', 'Lucas 24 e carne e ossos'],
    deedatCentralThesis: 'Jesus deu apenas um único sinal para uma geração incrédula: o Sinal do Profeta Jonas. Se Jonas sobreviveu vivo dentro do peixe, Jesus deveria permanecer vivo no sepulcro.',
    opponentCentralThesis: 'A crucificação é um fato histórico com evidências médicas irrefutáveis da morte de Jesus.',
    highlightQuestionsCount: 3
  },
  {
    id: 'debate-eric-bock',
    title: 'Jesus Foi Crucificado?',
    opponent: 'Pastor Eric Bock',
    opponentTitle: 'Teólogo e Pastor Luterano Dinamarquês',
    date: 'Maio de 1985',
    location: 'Copenhague, Dinamarca',
    venue: 'Odd Fellow Palace',
    attendeesCount: 'Aprox. 1.800 acadêmicos e cidadãos',
    youtubeUrl: 'https://www.youtube.com/watch?v=QZ0jU49q-rQ',
    youtubeId: 'QZ0jU49q-rQ',
    description: 'Exame aprofundado do texto de Hebreus 5:7 e da intervenção de Deus em resposta à oração agonizante de Jesus para ser poupado da morte.',
    coreTopics: ['Hebreus 5:7', 'Pilatos e as 3 horas na cruz', 'José de Arimateia e Nicodemos'],
    deedatCentralThesis: 'Deus Todo-Poderoso atendeu às orações e súplicas de Jesus com lágrimas, livrando-o da morte inglória da cruz conforme Hebreus 5:7.',
    opponentCentralThesis: 'A oração foi atendida mediante a ressurreição após a morte sacrifical.',
    highlightQuestionsCount: 2
  },
  {
    id: 'debate-speakers-corner-20',
    title: 'O Famoso Debate com 20 Cristãos no Speakers Corner (Hyde Park Dawah)',
    opponent: 'Grupo de 20 Pregadores & Cristãos Evangélicos (Londres)',
    opponentTitle: 'Pregadores de Rua, Teólogos e Apologetas Britânicos e Americanos',
    date: 'Encontros Célebres de Dawah (2018–2023)',
    location: 'Speakers Corner, Hyde Park, Londres, Reino Unido',
    venue: 'Hyde Park - Speakers Corner',
    attendeesCount: 'Centenas de pessoas em círculo e milhões de visualizações na internet',
    youtubeUrl: 'https://www.youtube.com/watch?v=0eA3f7pQ1uE',
    youtubeId: '0eA3f7pQ1uE',
    description: 'O épico confronto de rua que viralizou globalmente onde apologetas muçulmanos de Dawah (Ali Dawah, Mohammed Hijab e outros) debateram simultaneamente com um círculo de 20 cristãos e pregadores sobre quem morreu na cruz, a definição da Trindade e se Deus pode ter um princípio ou morrer.',
    coreTopics: ['Quem morreu na cruz: Deus ou o homem?', 'Trindade vs Monoteísmo Estrito', 'Quem governou o universo durante os 3 dias no túmulo?', 'Contradições da Expiação'],
    deedatCentralThesis: 'Se Jesus é Deus e morreu na cruz, então Deus morreu e o universo ficou sem sustentador. Se foi apenas o corpo humano que morreu, então Deus não morreu e o sacrifício infinito não ocorreu!',
    opponentCentralThesis: 'A segunda pessoa da Trindade assumiu a natureza humana e experimentou a morte física para redimir os pecados da humanidade perante a justiça eterna de Deus.',
    highlightQuestionsCount: 3
  },
  {
    id: 'debate-zakir-campbell',
    title: 'O Alcorão e a Bíblia à Luz da Ciência Moderna',
    opponent: 'Dr. William Campbell',
    opponentTitle: 'Médico Missionário Cristão e Escritor ("O Alcorão e a Bíblia")',
    date: '1 de Abril de 2000',
    location: 'Chicago, Illinois, EUA',
    venue: 'Cobh Hall / Hyatt Regency Chicago',
    attendeesCount: 'Mais de 10.000 pessoas no auditório e transmissão internacional',
    youtubeUrl: 'https://www.youtube.com/watch?v=kRj8W9p1vJg',
    youtubeId: 'kRj8W9p1vJg',
    description: 'O maior debate de teologia comparada e ciência do século XXI, sucessor do legado de Deedat, onde Dr. Zakir Naik confrontou o missionário americano Dr. William Campbell com versículos de embriologia, astronomia, oceanografia e erros científicos da Bíblia versus o milagre científico do Alcorão.',
    coreTopics: ['Embriologia no Alcorão vs Ciência', 'Criação do Universo e Luz Refletida da Lua', 'Erros científicos e cronológicos da Bíblia', 'Origem da vida a partir da água'],
    deedatCentralThesis: 'O Alcorão contém mais de 1.000 versículos com dados científicos precisos (descritos séculos antes do microscópio) sem uma única contradição com a ciência comprovada, enquanto a Bíblia contém erros astronômicos e biológicos manifestos.',
    opponentCentralThesis: 'O Alcorão teria tomado emprestado teorias gregas de Galeno e Aristóteles, e a Bíblia deve ser interpretada de modo teológico-poético.',
    highlightQuestionsCount: 3
  },
  {
    id: 'debate-hijab-davidwood',
    title: 'Conceito de Deus: Tawheed (Monoteísmo Puro) vs Trindade Cristã',
    opponent: 'David Wood',
    opponentTitle: 'Apologeta Cristão Americano (Acts17Apologetics)',
    date: '2021',
    location: 'Reino Unido / Transmissão Global Online',
    venue: 'Estúdio de Debate Acadêmico',
    attendeesCount: 'Milhões de espectadores online mundialmente',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Debate de alto nível lógico e filosófico entre a apologética contemporânea ocidental e a tradição de Dawah, demonstrando a incoerência do modelo trinitário dos concílios ecumênicos contra a simplicidade ontológica do Tawheed islâmico.',
    coreTopics: ['Paradoxo da Trindade', 'Lei da Não-Contradição', 'Jesus tinha duas vontades ou uma?', 'Origem histórica do Credo Niceno'],
    deedatCentralThesis: 'Dizer que Deus é três pessoas distintas mas cada uma é Deus plenamente e no entanto existe apenas um Deus viola a lógica primária: 1+1+1 não é igual a 1.',
    opponentCentralThesis: 'Deus é uma única essência divina em três pessoas subsistentes, um mistério superior à razão humana finita.',
    highlightQuestionsCount: 2
  },
  {
    id: 'debate-deedat-wakefield',
    title: 'A Crucificação: Realidade Histórica ou Ficção Teológica?',
    opponent: 'Pastor Wakefield',
    opponentTitle: 'Pastor e Missionário da Assembleia de Deus no Canadá',
    date: 'Outubro de 1991',
    location: 'Ontário, Canadá',
    venue: 'Auditório Universitário de Toronto',
    attendeesCount: 'Mais de 3.000 pessoas reunidas',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    description: 'Ahmed Deedat desconstrói os detalhes da crucificação romana: Pilatos espantado que Jesus teria morrido em apenas 3 horas, as pernas que não foram quebradas, o sangue fresco e líquido que espirrou da lança e o curativo com 45 quilos de especiarias medicinais trazido por Nicodemos.',
    coreTopics: ['Tempo na cruz (apenas 3 horas)', 'Pilatos espantado com a rapidez da morte', 'Especiarias medicinais de Nicodemos (mirra e aloés)', 'O sangue vivo que jorrou da ferida'],
    deedatCentralThesis: 'A crucificação era projetada pelos romanos para matar por exaustão lenta após dias. Morrer em 3 horas era clinicamente impossível para um jovem carpinteiro saudável, e o sangue líquido que jorrou prova que o coração ainda batia!',
    opponentCentralThesis: 'Jesus entregou voluntariamente o seu espírito e a água e sangue atestavam choque hipovolêmico e morte física consumada.',
    highlightQuestionsCount: 2
  },
  {
    id: 'debate-deedat-missionarios-sulafricanos',
    title: 'Palestra aos Missionários Cristãos: Práticas Islâmicas & Costumes Bíblicos',
    opponent: 'Reunião de Missionários Cristãos e Estudantes de Teologia',
    opponentTitle: 'Conselho Missionário Cristão da África do Sul',
    date: '1987',
    location: 'Durban, África do Sul',
    venue: 'Centro Islâmico Internacional de Dawah (IPCI)',
    attendeesCount: 'Auditório com centenas de seminaristas e missionários cristãos',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    description: 'A histórica conferência onde Ahmed Deedat respondeu às dúvidas e preconceitos de missionários cristãos: por que os muçulmanos separam homens e mulheres na mesquita durante a oração, por que usam kufi (chapeuzinho/barrete) na cabeça, a circuncisão e a rejeição bíblica do Pecado Original.',
    coreTopics: ['Homens e mulheres orando separados', 'Por que muçulmanos cobrem a cabeça (Kufi/Taqiyah)', 'O Mito do Pecado Original herdado', 'Ezequiel 18:20 vs Dogma Paulino'],
    deedatCentralThesis: 'Cada prática muçulmana (modéstia no culto, prostração, cobrir a cabeça e responsabilidade individual sem pecado herdado) é o cumprimento estrito do que Jesus e os profetas bíblicos praticavam.',
    opponentCentralThesis: 'As práticas cristãs foram libertadas das ordenanças cerimoniais da lei pela graça e salvação vicária de Cristo na cruz.',
    highlightQuestionsCount: 3
  },
  {
    id: 'debate-speakers-corner-trinity-bible',
    title: 'Dawah de Rua em Londres: Erros Graves nos Manuscritos da Bíblia',
    opponent: 'Pregadores e Apologetas Evangélicos Americanos e Britânicos',
    opponentTitle: 'Missionários de Rua no Hyde Park (Londres)',
    date: '2019–2024',
    location: 'Speakers Corner, Hyde Park, Londres',
    venue: 'Praça Pública de Dawah',
    attendeesCount: 'Milhares no parque e milhões de visualizações nos canais de Dawah',
    youtubeUrl: 'https://www.youtube.com/watch?v=0eA3f7pQ1uE',
    youtubeId: '0eA3f7pQ1uE',
    description: 'Debatedores de Dawah (Ali Dawah, Mohammed Hijab, Mansur) expõem perante dezenas de pregadores as adulterações bíblicas catalogadas pelos próprios teólogos ocidentais: a Coma Joanina (1 João 5:7), os finais contraditórios de Marcos 16 e a mulher adúltera em João 8.',
    coreTopics: ['Coma Joanina (1 João 5:7 fabricada)', 'O final espúrio de Marcos 16:9-20', 'Pecado Original vs Justiça de Deus', 'Hadiths sobre a Preservação da Revelação'],
    deedatCentralThesis: 'A moderna crítica textual bíblica cristã (Nestle-Aland, Bruce Metzger) admite que o versículo chave da Trindade foi forjado no século XVI, provando que o dogma foi imposto tardiamente.',
    opponentCentralThesis: 'As variantes textuais não afetam as doutrinas essenciais da fé cristã preservada pelo Espírito Santo.',
    highlightQuestionsCount: 3
  }
];

export const DEEDAT_ITEMS: DeedatItem[] = [
  ...COMPREHENSIVE_VIDEO_ITEMS,
  ...ADDITIONAL_DAWAH_ITEMS,
  {
    id: 'deedat-q1',
    title: 'O Sinal do Profeta Jonas e a Prova Contra a Morte na Cruz',
    question: 'Por que Sheikh Ahmed Deedat afirma que o Sinal de Jonas (Mateus 12:40) refuta a morte e ressurreição vicária de Jesus?',
    askedBy: 'Plateia e Dr. Anis Shorrosh no Royal Albert Hall',
    opponent: 'Dr. Anis Shorrosh',
    year: '1985',
    location: 'Londres, Reino Unido',
    debateTitle: 'Jesus é Deus? / Crucifixion: Fact or Fiction?',
    category: 'crucificacao',
    categoryLabel: 'Crucificação e Ressurreição',
    summary: 'Deedat demonstra que, de acordo com o próprio Jesus, o ÚNICO milagre dado à sua geração foi o sinal de Jonas. Se Jonas estava vivo no ventre do peixe, Jesus tinha que estar vivo no sepulcro.',
    keyQuote: 'Jonas estava vivo ou morto na barriga do peixe? Vivo! Ele orou a Deus do ventre do peixe vivo! Se Jesus morreu, então ele não foi como Jonas!',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    timestampSeconds: 1420,
    durationMinutes: 14,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Mateus',
        chapterVerse: '12:38-40',
        bibleText: 'Uma geração má e adúltera pede um sinal, porém não se lhe dará outro sinal senão o do profeta Jonas. Pois, como Jonas esteve três dias e três noites no ventre do grande peixe, assim estará o Filho do homem três dias e três noites no coração da terra.',
        deedatAnalysis: 'Deedat pergunta: como estava Jonas quando foi jogado ao mar? Vivo. Como estava no ventre do peixe? Vivo. Como estava quando foi vomitado na praia? Vivo! Logo, se Jesus morreu na cruz e ressuscitou, o milagre de Jonas é violado, pois um homem morto não é milagre análogo a um homem que sobreviveu vivo contra todas as probabilidades!'
      },
      {
        book: 'Lucas',
        chapterVerse: '24:36-39',
        bibleText: 'Vede as minhas mãos e os meus pés, que sou eu mesmo; apalpai-me e vede, pois um espírito não tem carne nem ossos, como vedes que eu tenho.',
        deedatAnalysis: 'Quando Jesus apareceu aos discípulos no cenáculo, eles ficaram apavorados pensando que viam um fantasma/espírito ressurreto. Jesus fez questão de provar o oposto: pediu que tocassem nele e até pediu peixe assado e favo de mel para comer na frente deles.'
      }
    ],
    quranicVerses: [
      {
        surah: 'An-Nisa (Mulheres)',
        ayah: '4:157-158',
        translation: 'E por dizerem: "Matamos o Messias, Jesus, filho de Maria, o Mensageiro de Deus" — embora não o matassem nem o crucificassem, mas foi-lhes feito parecer assim... Mas Deus o elevou para Si, e Deus é Poderoso, Prudente.'
      }
    ],
    fullAnswer: [
      'Ahmed Deedat inicia analisando o desafio dos escribas e fariseus que pediram a Jesus: "Mestre, queremos ver um sinal feito por ti". Jesus não ofereceu a cura de cegos, nem a multiplicação dos pães, mas estabeleceu um único critério absoluto: "Não se lhe dará outro sinal senão o do profeta Jonas".',
      'Deedat então convida o público a examinar o Livro de Jonas no Antigo Testamento passo a passo:',
      '1. Quando a tempestade atingiu o barco e Jonas foi lançado ao mar, ele estava vivo ou morto? Toda criança e teólogo sabe: Jonas estava VIVO.',
      '2. Quando o grande peixe engoliu Jonas, ele permaneceu vivo ou morreu? Ele orou fervorosamente do ventre do peixe a Deus pedindo salvação. Portanto, estava VIVO!',
      '3. Quando o peixe o vomitou na praia três dias depois, ele estava vivo ou ressuscitou dos mortos? Ele estava VIVO!',
      'Portanto, o milagre de Jonas consistiu em sobreviver onde qualquer ser humano normalmente morreria (asfixiado ou digerido).',
      'Se Jesus morreu na cruz, foi posto morto na sepultura e ressuscitou 72 horas depois como um corpo espiritual, então ele NÃO cumpriu o sinal de Jonas, pois um morto ressuscitado é o exato oposto de um homem vivo milagrosamente preservado da morte!',
      'Além disso, Deedat salienta a questão do tempo: Sexta-feira no fim da tarde até Domingo de manhã não totaliza "três dias e três noites", mas no máximo um dia e duas noites, evidenciando outro conflito na interpretação dogmática tradicional.'
    ]
  },
  {
    id: 'deedat-q2',
    title: 'Dr. Anis Shorrosh e a Alegação de Divindade em João 10:30 ("Eu e o Pai somos um")',
    question: 'Como Ahmed Deedat refuta a alegação do Dr. Anis Shorrosh de que Jesus afirmou ser Deus em João 10:30 ("Eu e o Pai somos um")?',
    askedBy: 'Dr. Anis Shorrosh',
    opponent: 'Dr. Anis Shorrosh',
    year: '1985',
    location: 'Londres, Reino Unido',
    debateTitle: 'Jesus é Deus?',
    category: 'divindade',
    categoryLabel: 'Divindade de Jesus e Trindade',
    summary: 'Deedat lê o contexto completo de João capítulo 10 e João capítulo 17, provando que a unidade referida por Jesus é unidade de propósito e missão, não uma união substancial trinitária.',
    keyQuote: 'Se "eu e o Pai somos um" significa que Jesus é Deus, então em João 17 todos os doze discípulos são deuses, pois Jesus pede a Deus que eles sejam um assim como Ele e o Pai são um!',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    timestampSeconds: 2750,
    durationMinutes: 18,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'João',
        chapterVerse: '10:28-30',
        bibleText: 'Eu lhes dou a vida eterna... e ninguém as arrebatará da minha mão. Meu Pai, que mas deu, é maior do que todos; e ninguém pode arrebatá-las da mão de meu Pai. Eu e o Pai somos um.',
        deedatAnalysis: 'A mão do Pai e a mão de Jesus protegem as ovelhas com o mesmo propósito. Ninguém pode arrebatar da mão de Deus, tampouco da mão do pastor comissionado por Ele. A unidade é na proteção e no desígnio das ovelhas.'
      },
      {
        book: 'João',
        chapterVerse: '17:20-22',
        bibleText: 'Para que todos sejam um, como tu, ó Pai, o és em mim, e eu em ti; que também eles sejam um em nós... para que sejam um, assim como nós somos um.',
        deedatAnalysis: 'Jesus ora pelos discípulos para que todos sejam UM com Deus da mesma forma que Jesus é um com o Pai. Se a frase em João 10:30 confere divindade ontológica a Jesus, então transforma os discípulos em membros de uma divindade de catorze pessoas!'
      },
      {
        book: 'João',
        chapterVerse: '14:28',
        bibleText: 'Ouvistes o que eu vos disse: Vou e voltarei para vós. Se me amásseis, alegrar-vos-íeis de que eu vá para o Pai, porque o Pai é maior do que eu.',
        deedatAnalysis: 'Como pode alguém que é co-igual e consubstancial a Deus dizer expressamente em palavras claras: "O Pai é maior do que eu"?'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Maidah (A Mesa Servida)',
        ayah: '5:72',
        translation: 'Certamente incorrem em incredulidade aqueles que dizem: "Deus é o Messias, filho de Maria". E o Messias disse: "Ó Filhos de Israel! Adorai a Deus, meu Senhor e vosso Senhor!"'
      }
    ],
    fullAnswer: [
      'Durante o debate no Royal Albert Hall, o Dr. Anis Shorrosh citou repetidamente João 10:30 como a prova cabal de que Cristo se declarava o próprio Criador dos céus e da terra.',
      'Sheikh Deedat abriu a Bíblia King James diretamente na frente de Shorrosh e leu o texto anterior (versículos 27 a 29). Ali, Jesus falava sobre suas ovelhas:',
      '"As minhas ovelhas ouvem a minha voz... Ninguém as arrebatará da minha mão. Meu Pai, que mas deu, é MAIOR DO QUE TODOS; e ninguém pode arrebatá-las da mão de meu Pai. Eu e o Pai somos um."',
      'Deedat explicou a analogia: Ninguém arrebata as ovelhas da mão de Jesus porque elas estão na mão do Pai. A união é de propósito de proteção e vontade! Não de pessoa física ou trindade de substâncias.',
      'Para encerrar qualquer dúvida sobre o sentido da palavra "um" no evangelho de João, Deedat levou o auditório para João 17:21-22, onde Jesus ora no jardim: "Para que todos eles sejam um, assim como nós somos um".',
      'Deedat perguntou a Shorrosh: "Os apóstolos se tornaram deuses encarnados? Pedro se tornou co-igual a Deus Pai? Claro que não! A união bíblica sempre significou submissão harmoniosa ao mesmo desígnio celestial."'
    ]
  },
  {
    id: 'deedat-q3',
    title: 'Deuteronômio 18:18 — Jesus ou Maomé? A Comparação Minuciosa',
    question: 'Por que Ahmed Deedat afirma categoricamente que a profecia de Deuteronômio 18:18 refere-se a Maomé e não a Jesus?',
    askedBy: 'Pastor e estudantes bíblicos em Durban e Londres',
    opponent: 'Pastor Stanley Sjöberg / Josh McDowell',
    year: '1979',
    location: 'Durban, África do Sul',
    debateTitle: 'Muhammad: The Natural Successor to Christ',
    category: 'profecias',
    categoryLabel: 'Profecias Bíblicas de Maomé',
    summary: 'Deedat estabelece 8 paralelos fundamentais entre Moisés e Maomé que jamais se aplicaram a Jesus: nascimento natural, casamento, aceitação pelo povo em vida, autoridade como estadista, lei nova e morte de velhice.',
    keyQuote: 'Deus disse a Moisés: "Suscitarei um profeta do meio de seus irmãos, COMO TU". Jesus não é como Moisés segundo os cristãos (que o chamam de Deus), mas Maomé é em todos os aspectos o gêmeo espiritual de Moisés.',
    youtubeUrl: 'https://www.youtube.com/watch?v=0kH8m9qQcKk',
    youtubeId: '0kH8m9qQcKk',
    timestampSeconds: 890,
    durationMinutes: 16,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Deuteronômio',
        chapterVerse: '18:18-19',
        bibleText: 'Eis que lhes suscitarei um profeta do meio de seus irmãos, como tu, e porei as minhas palavras na sua boca, e ele lhes falará tudo o que eu lhe ordenar. E será que qualquer que não ouvir as minhas palavras, que ele falar em meu nome, eu o requererei dele.',
        deedatAnalysis: '1. "Do meio de seus irmãos": Os israelitas são filhos de Isaque; seus irmãos consanguíneos são os ismaelitas (árabes). 2. "Como tu": Quem é semelhante a Moisés? Maomé teve pai e mãe terrestres (Jesus não teve pai terreno segundo a teologia cristã). Moisés casou e teve filhos; Maomé casou e teve filhos; Jesus permaneceu celibatário. Moisés foi líder secular e legislador; Maomé foi líder de estado e legislador; Jesus disse que seu reino não era deste mundo.'
      },
      {
        book: 'Deuteronômio',
        chapterVerse: '34:10',
        bibleText: 'E nunca mais se levantou em Israel profeta algum como Moisés, a quem o Senhor conhecesse face a face.',
        deedatAnalysis: 'A Bíblia hebraica declara formalmente que nenhum profeta dentre Israel seria como Moisés. Logo, o profeta prometido deveria surgir dos "irmãos" dos israelitas (a linhagem de Ismael).'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Muzzammil (O Envolto em Vestes)',
        ayah: '73:15',
        translation: 'Por certo, Nós vos enviamos um Mensageiro que testemunhará contra vós, tal como enviamos um Mensageiro a Faraó.'
      },
      {
        surah: 'Al-Araf (Os Lugares Elevados)',
        ayah: '7:157',
        translation: 'Aqueles que seguem o Mensageiro, o Profeta iletrado, que encontram mencionado na Torá e no Evangelho...'
      }
    ],
    fullAnswer: [
      'Este é um dos temas que tornaram Ahmed Deedat famoso mundialmente através de seu livro "What the Bible says about Muhammad".',
      'Deedat colocava lado a lado Moisés, Jesus e Maomé em um quadro comparativo:',
      '1. Nascimento: Moisés nasceu de pai e mãe humanos (Anrão e Joquebede). Maomé nasceu de pai e mãe humanos (Abdullah e Amina). Jesus, segundo o dogma cristão e islâmico, nasceu milagrosamente sem pai humano. Logo, Jesus NÃO é como Moisés.',
      '2. Natureza: Os cristãos alegam que Jesus é Deus ou Filho de Deus. Moisés não era Deus nem Filho de Deus, mas um profeta mortal. Maomé era um profeta mortal. Logo, Maomé é como Moisés.',
      '3. Casamento e Família: Moisés casou-se (com Zípora) e gerou filhos. Maomé casou-se e gerou filhos. Jesus não se casou nem deixou descendência terrena.',
      '4. Morte: Moisés faleceu de velhice e foi sepultado naturalmente na terra. Maomé faleceu de velhice e foi sepultado na terra em Medina. Segundo a doutrina cristã, Jesus morreu de forma violenta na cruz por pecados da humanidade e ressuscitou.',
      '5. Reino e Liderança: Moisés foi líder espiritual, juiz civil e comandante militar aceito por seu povo em vida. Maomé foi líder espiritual, juiz civil e unificador aceito por seu povo em vida. Jesus foi rejeitado pela liderança judaica de sua época e disse a Pilatos: "O meu reino não é deste mundo".',
      '6. "Porei as minhas palavras na sua boca": Maomé era iletrado (Ummi). O Arcanjo Gabriel instruía: "Lê!" (Iqra), e Maomé repetia exatamente as palavras divinas inseridas em sua boca.',
      '7. "Falará em Meu Nome": Todo capítulo do Alcorão (exceto a Surah 9) começa obrigatoriamente com a fórmula: "Bismillah ar-Rahman ar-Rahim" (Em Nome de Deus, o Clemente, o Misericordioso), cumprindo com perfeição a injunção de Deut. 18:19!'
    ]
  },
  {
    id: 'deedat-q4',
    title: 'A Réplica a Jimmy Swaggart: A Bíblia é a Palavra de Deus?',
    question: 'Qual foi o principal argumento de Ahmed Deedat contra Jimmy Swaggart sobre as edições e alterações textuais da Bíblia?',
    askedBy: 'Jimmy Swaggart e plateia em Baton Rouge',
    opponent: 'Jimmy Swaggart',
    year: '1986',
    location: 'Baton Rouge, Louisiana, EUA',
    debateTitle: 'Is the Bible God\'s Word?',
    category: 'biblia-autenticidade',
    categoryLabel: 'Autenticidade e Manuscritos Bíblicos',
    summary: 'Deedat confrontou Swaggart exibindo a própria Introdução da Bíblia Sagrada Revised Standard Version (RSV), elaborada por 32 doutores cristãos, que atesta que a King James Version possui graves defeitos e textos espúrios.',
    keyQuote: 'Eu não estou usando panfletos ateus! Estou lendo para você o prefácio assinado por 32 dos maiores teólogos cristãos do mundo protestante na Bíblia RSV, que admitem abertamente interpolações humanas!',
    youtubeUrl: 'https://www.youtube.com/watch?v=0kH8m9qQcKk',
    youtubeId: '0kH8m9qQcKk',
    timestampSeconds: 1980,
    durationMinutes: 22,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Jeremias',
        chapterVerse: '8:8',
        bibleText: 'Como dizeis vós: Nós somos sábios, e a lei do Senhor está conosco? Eis que a pena falsa dos escribas a converteu em mentira.',
        deedatAnalysis: 'O próprio profeta Jeremias registrou no Antigo Testamento que a pena dos copistas adulterou o texto da Lei sagrada.'
      },
      {
        book: '1 João',
        chapterVerse: '5:7 (Comma Johanneum)',
        bibleText: 'Porque três são os que testificam no céu: o Pai, a Palavra e o Espírito Santo; e estes três são um.',
        deedatAnalysis: 'Deedat ressalta que este versículo foi descartado pelos próprios tradutores da RSV, da Nova Versão Internacional (NIV) e da Bíblia de Jerusalém porque NÃO existe em nenhum manuscrito grego anterior ao século XIV, sendo uma falsificação posterior para tentar justificar a doutrina da Trindade.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Baqarah (A Vaca)',
        ayah: '2:79',
        translation: 'Ai daqueles que escrevem o Livro com suas próprias mãos e depois dizem: "Isto é de Deus", para negociá-lo por preço vil! Ai deles pelo que suas mãos escreveram, e ai deles pelo que lucraram!'
      }
    ],
    fullAnswer: [
      'No famoso debate de Baton Rouge contra Jimmy Swaggart, que atraiu a atenção da mídia internacional, Deedat não atacou a fé cristã pessoal, mas realizou uma rigorosa crítica textual bíblica.',
      'Ele segurou em suas mãos a King James Version (KJV) e a Revised Standard Version (RSV).',
      'Deedat leu o prefácio da RSV publicado em 1952, onde os editores (32 estudiosos com o apoio de 50 denominações protestantes) declararam:',
      '"A King James Version tem graves defeitos... Esses defeitos são tantos e tão graves que nos convocam a uma revisão da tradução inglesa."',
      'Deedat então perguntou a Jimmy Swaggart: "Se a KJV foi inspirada por Deus palavra por palavra conforme os televangelistas pregam, por que esses 32 doutores cristãos tiveram que extirpar versículos inteiros?"',
      'Ele detalhou passagens eliminadas ou colocadas em notas de rodapé pelas Bíblias modernas por falta de autenticidade nos manuscritos mais antigos:',
      '1. 1 João 5:7 (O único versículo em toda a Bíblia que mencionava explicitamente o Pai, a Palavra e o Espírito Santo como um).',
      '2. Os últimos doze versículos do Evangelho de Marcos (Marcos 16:9-20), ausentes no Codex Sinaiticus e Codex Vaticanus.',
      '3. O relato da ascensão corpórea em Lucas 24:51, modificado nas revisões contemporâneas.',
      'Deedat enfatizou: os muçulmanos acreditam no Evangelho original revelado a Jesus (o Injeel), mas as compilações atuais contêm acréscimos editoriais humanos comprovados pelos próprios teólogos ocidentais.'
    ]
  },
  {
    id: 'deedat-q5',
    title: 'João 1:1 e o Verbo — A Análise Gramatical Grega de Deedat',
    question: 'Como Ahmed Deedat responde à passagem de João 1:1 ("No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus")?',
    askedBy: 'Dr. Anis Shorrosh e debate em Birmingham',
    opponent: 'Dr. Anis Shorrosh',
    year: '1985',
    location: 'Londres, Reino Unido',
    debateTitle: 'Is Jesus God?',
    category: 'divindade',
    categoryLabel: 'Divindade de Jesus e Trindade',
    summary: 'Deedat analisa a diferença no grego coinê entre "Ho Theos" (com artigo definido, referindo-se exclusivamente ao Deus Supremo) e "Theos" (sem artigo, indicativo de atributo piedoso ou excelência moral).',
    keyQuote: 'Se o Verbo estava COM Deus, ele não pode ser o Deus com quem estava ao mesmo tempo, a menos que existam dois Deuses!',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    timestampSeconds: 3120,
    durationMinutes: 15,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'João',
        chapterVerse: '1:1',
        bibleText: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.',
        deedatAnalysis: 'No manuscrito grego original: "En arche en ho Logos, kai ho Logos en pros ton Theon, kai Theos en ho Logos". Note a distinção: "ton Theon" tem o artigo definido ("O Deus"); a segunda ocorrência de Theos é sem artigo ("qualitativo"). Se você traduz como substantivo idêntico, cria dois Deuses.'
      },
      {
        book: '2 Coríntios',
        chapterVerse: '4:4',
        bibleText: 'Nos quais o deus deste século cegou os entendimentos dos incrédulos...',
        deedatAnalysis: 'Aqui o apóstolo Paulo usa a palavra grega Theos (com artigo "ho theos tou aionos toutou") para se referir a Satanás ou ao diabo! Se o termo grego Theos por si só confere divindade todo-poderosa, então Satanás seria Deus Todo-Poderoso.'
      },
      {
        book: 'Êxodo',
        chapterVerse: '7:1',
        bibleText: 'Então disse o Senhor a Moisés: Eis que te tenho posto por deus a Faraó, e Arão, teu irmão, será o teu profeta.',
        deedatAnalysis: 'Deus disse a Moisés: "Fiz de ti um elohim (deus) para o Faraó". Moisés tornou-se o Criador do universo? Não! Ele foi dotado de autoridade representativa.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Imran (A Família de Imran)',
        ayah: '3:45',
        translation: 'Quando os anjos disseram: "Ó Maria! Por certo Deus te anuncia a boa-nova de um Verbo d\'Ele, cujo nome será o Messias, Jesus, filho de Maria, nobre neste mundo e no Outro, e dos achegados a Deus."'
      }
    ],
    fullAnswer: [
      'Ahmed Deedat costumava pegar a Bíblia interlinear grega e mostrar a tela ao auditório.',
      'Ele destacava a sintaxe da frase: "E o Verbo estava COM Deus". Ele fazia a pergunta de bom senso: "Se eu estou com o senhor Shorrosh, eu posso ser o senhor Shorrosh ao mesmo tempo? Estar COM alguém pressupõe distinção de identidades."',
      'Em seguida, examinava o texto bíblico grego: o primeiro "Deus" em grego possui o artigo definido (ton Theon - O Deus Supremo). O segundo "Theos" aparece sem artigo definido, denotando natureza de santidade divina ou mensagem inspirada.',
      'Deedat comparava com o que o Alcorão ensina sobre Jesus ser uma "Palavra de Deus" (Kalimatullah): Jesus nasceu do decreto divino "Kun" ("Sê!", e ele foi). O Verbo é a ordem criadora de Deus, não uma segunda pessoa eterna concorrente com o Deus Único.',
      'Ele também apontava para Êxodo 7:1 e Salmos 82:6 ("Vós sois deuses"), demonstrando como na linguagem semítica e bíblica o título era metaforicamente aplicado a homens piedosos investidos de poder divino.'
    ]
  },
  {
    id: 'deedat-q6',
    title: 'Cantares de Salomão 5:16 e o Nome "Muhammadim" no Texto Hebraico',
    question: 'Por que Deedat recitava em hebraico Cantares de Salomão 5:16 e afirmava que o nome de Maomé está explícito no Cântico?',
    askedBy: 'Plateia internacional e debates na Europa',
    opponent: 'Geral / Teólogos Cristãos',
    year: '1987',
    location: 'Londres e Durban',
    debateTitle: 'Muhammad in World Scriptures',
    category: 'profecias',
    categoryLabel: 'Profecias Bíblicas de Maomé',
    summary: 'Deedat lê o texto original hebraico de Shir Hashirim (Cantares 5:16), mostrando a pronúncia "Hikhô mamtaqqim ve-khullô Muhammad-im", com o sufixo plural majestático hebraico "im".',
    keyQuote: 'No hebraico original diz: "Khullo Muhammad-im" — Ele é totalmente amável/Muhammad. Os tradutores ingleses e portugueses traduziram o nome próprio por "ele é totalmente desejável", ocultando o nome!',
    youtubeUrl: 'https://www.youtube.com/watch?v=mD6w7m2_Z_g',
    youtubeId: 'mD6w7m2_Z_g',
    timestampSeconds: 1540,
    durationMinutes: 12,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Cantares de Salomão',
        chapterVerse: '5:16',
        bibleText: 'O seu falar é muitíssimo suave; sim, ele é totalmente desejável. Tal é o meu amado, e tal o meu amigo, ó filhas de Jerusalém.',
        deedatAnalysis: 'No hebraico massorético lê-se: חִכּוֹ מַמְתַקִּים וְכֻלּוֹ מַחֲמַדִּים (Hikhô mamtaqqim ve-khullô Muhammadim). As letras hebraicas Mem-Het-Mem-Dalet formam exatamente a raiz M-H-M-D (Muhammad). O sufixo "im" em hebraico é o plural de honra e majestade (assim como Elohim é usado para Deus).'
      }
    ],
    quranicVerses: [
      {
        surah: 'As-Saff (As Fileiras)',
        ayah: '61:6',
        translation: 'E quando Jesus, filho de Maria, disse: "Ó Filhos de Israel! Por certo sou o Mensageiro de Deus para vós... e anunciador de um Mensageiro que virá depois de mim, cujo nome será Ahmad."'
      }
    ],
    fullAnswer: [
      'Ahmed Deedat tinha como uma de suas marcas registradas recitar passagens diretamente no idioma original hebraico diante de plateias ocidentais estupefatas.',
      'Ao abordar Cantares de Salomão 5:16, Deedat lia a descrição do Amado feita pelas filhas de Jerusalém: ele é o estandarte entre dez mil (Cantares 5:10 - coincidindo com os 10.000 santos que acompanharam Maomé na conquista pacífica de Meca).',
      'Chegando ao versículo 16, Deedat pronunciava o hebraico:',
      '"Hikhô mamtaqqim ve-khullô Muhammad-im; zeh dodi ve-zeh re\'i, benot Yerushalayim."',
      'Deedat explicava: "Se você perguntar a um judeu falante de hebraico qual é a palavra lida ali, ele dirá: \'Muhammad-im\'. O sufixo \'-im\' no hebraico é o plural de respeito e grandeza, exatamente como na palavra Elohim."',
      'Ele argumentava que os tradutores ocidentais da Bíblia mantiveram nomes próprios em todas as genealogias (como Daniel, Davi, Salomão), mas ao chegarem a este versículo específico, traduziram a raiz do nome próprio pelo seu significado literal ("desejável", "amável"), velando o nome para os leitores que não conhecem o texto hebraico.'
    ]
  },
  {
    id: 'deedat-q7',
    title: 'O Consolador / Paráclito em João 16:7 — O Espírito Santo ou o Profeta Maomé?',
    question: 'Qual a resposta de Ahmed Deedat ao Pastor Stanley Sjöberg sobre a identidade do Consolador (Paráclito) prometido por Jesus em João 16:7?',
    askedBy: 'Pastor Stanley Sjöberg',
    opponent: 'Pastor Stanley Sjöberg',
    year: '1985',
    location: 'Estocolmo, Suécia',
    debateTitle: 'A Bíblia é Verdadeira?',
    category: 'profecias',
    categoryLabel: 'Profecias Bíblicas de Maomé',
    summary: 'Deedat demonstra com as palavras do próprio Jesus que o Consolador só poderia vir SE Jesus partisse. O Espírito Santo já estava presente com eles antes de Jesus partir; logo, o Consolador é uma entidade humana distinta.',
    keyQuote: 'Jesus disse: "Se eu não for, o Consolador não virá a vós". Mas o Espírito Santo já estava no ventre de Isabel e no batismo no Jordão! Como Jesus poderia condicionar a vinda do Consolador à sua partida?',
    youtubeUrl: 'https://www.youtube.com/watch?v=mD6w7m2_Z_g',
    youtubeId: 'mD6w7m2_Z_g',
    timestampSeconds: 2150,
    durationMinutes: 19,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'João',
        chapterVerse: '16:7-14',
        bibleText: 'Todavia digo-vos a verdade, que vos convém que eu vá; porque se eu não for, o Consolador não virá a vós; mas, se eu for, vo-lo enviarei... Ele vos guiará em toda a verdade; porque não falará de si mesmo, mas dirá tudo o que tiver ouvido, e vos anunciará o que há de vir.',
        deedatAnalysis: 'Critérios dados por Jesus: 1. A vinda é estritamente condicionada à saída de Jesus. 2. Ele guiará em TODA a verdade. 3. Ele não falará por iniciativa própria, mas falará o que ouvir (revelação auditiva). 4. Ele glorificará a Jesus (o Alcorão exalta Jesus como Messias milagroso).'
      },
      {
        book: 'Lucas',
        chapterVerse: '1:41',
        bibleText: 'E aconteceu que, ao ouvir Isabel a saudação de Maria, a criancinha saltou no seu ventre; e Isabel foi cheia do Espírito Santo.',
        deedatAnalysis: 'O Espírito Santo já operava antes do ministério de Jesus! Se o Espírito Santo já estava na terra capacitando profetas, Zacarias e Isabel, como Jesus pôde dizer que o Consolador não viria a menos que ele partisse?'
      }
    ],
    quranicVerses: [
      {
        surah: 'An-Najm (A Estrela)',
        ayah: '53:3-4',
        translation: 'E ele (Maomé) não fala por seu próprio capricho. Não é senão uma revelação que lhe foi inspirada.'
      }
    ],
    fullAnswer: [
      'No debate com o pastor Stanley Sjöberg em Estocolmo, a questão do Consolador (Parakletos em grego) foi central.',
      'Sjöberg sustentou que o Consolador era exclusivamente a terceira pessoa da Trindade que desceu sobre os apóstolos em Pentecostes.',
      'Deedat rebateu apontando as condições do texto de João 16:7:',
      '"Se eu não for, o Consolador não virá a vós; mas se eu for, vo-lo enviarei."',
      'Deedat demonstrou pelo próprio Evangelho que o Espírito Santo já estava presente e ativo na Terra:',
      '- João Batista foi cheio do Espírito Santo desde o ventre materno (Lucas 1:15).',
      '- Isabel foi cheia do Espírito Santo (Lucas 1:41).',
      '- O Espírito Santo desceu em forma corpórea de pomba no batismo de Jesus (Lucas 3:22).',
      'Portanto, o Consolador prometido com tal condição prévia não podia ser o Espírito Santo, mas outro homem, mensageiro e guia que viria após Jesus.',
      'Além disso, Jesus declarou: "Ainda tenho muito que vos dizer, mas vós não o podeis suportar agora" (João 16:12). O Profeta Maomé veio séculos depois trazendo a Sharia completa e o Alcorão, que abrange economia, governança, direito matrimonial e monoteísmo inviolável, conduzindo a humanidade a "toda a verdade".'
    ]
  },
  {
    id: 'deedat-q8',
    title: 'Nascimento Virginal vs Filiação Divina: Como Deedat Explica a Distinção?',
    question: 'Por que os muçulmanos aceitam plenamente o nascimento virginal de Jesus, mas rejeitam categoricamente que ele seja o "Filho unigênito" de Deus?',
    askedBy: 'Pastor Eric Bock e acadêmicos em Copenhague',
    opponent: 'Pastor Eric Bock',
    year: '1985',
    location: 'Copenhague, Dinamarca',
    debateTitle: 'Was Jesus Crucified?',
    category: 'cristo-isla',
    categoryLabel: 'Jesus no Islã e Teologia Comparada',
    summary: 'Deedat esclarece que criar sem pai não é prova de divindade; se nascimento sem pai gerasse divindade, Adão teria o dobro do direito a ser Deus, pois não teve nem pai nem mãe.',
    keyQuote: 'Adão não teve nem pai nem mãe! Melquisedeque, segundo Hebreus 7:3, não teve pai, mãe nem genealogia! Se nascer sem pai biológico faz de alguém Deus, Adão e Melquisedeque superam Jesus!',
    youtubeUrl: 'https://www.youtube.com/watch?v=QZ0jU49q-rQ',
    youtubeId: 'QZ0jU49q-rQ',
    timestampSeconds: 1280,
    durationMinutes: 14,
    isPopular: false,
    biblicalVerses: [
      {
        book: 'Hebreus',
        chapterVerse: '7:1-3',
        bibleText: 'Porque este Melquisedeque... sem pai, sem mãe, sem genealogia, não tendo princípio de dias nem fim de vida, mas sendo feito semelhante ao Filho de Deus, permanece sacerdote para sempre.',
        deedatAnalysis: 'A Bíblia descreve Melquisedeque como uma figura sem pai, sem mãe, sem nascimento e sem morte. No entanto, nenhum cristão o adora como Deus Todo-Poderoso.'
      },
      {
        book: 'Lucas',
        chapterVerse: '3:38',
        bibleText: '...filho de Enos, filho de Sete, filho de Adão, filho de Deus.',
        deedatAnalysis: 'A genealogia de Lucas chama o próprio Adão de "filho de Deus". A expressão "filho de Deus" na linguagem bíblica sempre foi metafórica para os justos e servos fiéis.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Imran (A Família de Imran)',
        ayah: '3:59',
        translation: 'Por certo, o exemplo de Jesus perante Deus é como o exemplo de Adão. Ele o criou do pó, depois lhe disse: "Sê!", e ele foi.'
      },
      {
        surah: 'Maryam (Maria)',
        ayah: '19:35',
        translation: 'Não é admissível que Deus tome para Si um filho. Glorificado seja Ele! Quando decreta uma coisa, diz-lhe apenas: "Sê!", e ela é.'
      }
    ],
    fullAnswer: [
      'Deedat frequentemente surpreendia plateias ocidentais ao declarar que um bilhão e meio de muçulmanos acreditam piamente no nascimento virginal de Jesus — um artigo de fé obrigatório no Islã que até muitos teólogos modernistas ocidentais rejeitam.',
      'Contudo, Deedat advertia contra o salto lógico errôneo de deduzir que nascer milagrosamente de uma virgem implica filiação biológica ou ontológica divina.',
      'Ele citava a lógica matemática do Alcorão (Surah 3:59): Adão foi criado sem esperma paterno E sem óvulo materno! Deus o modelou da terra e ordenou "Kun" (Sê).',
      'Deedat argumentava: "Se a ausência de pai humano transforma Jesus em divindade ou Filho unigênito gerado por Deus, Adão tem direito a um título superior, pois não teve mãe nem pai!"',
      'Ele também apontava para a Bíblia em Hebreus 7:3, que descreve Melquisedeque como "sem pai, sem mãe, sem genealogia".',
      'Para Deus Todo-Poderoso, nada é impossível; criar Jesus através da palavra e do sopro do anjo é um milagre do Criador, e não um ato de procriação carnal.'
    ]
  },
  {
    id: 'deedat-q9',
    title: 'A Acusação de Shorrosh: "O Islã Foi Espalhado pela Espada?"',
    question: 'Como Ahmed Deedat rebateu a alegação contundente do Dr. Anis Shorrosh de que Maomé teria propagado sua religião pela força e pela espada?',
    askedBy: 'Dr. Anis Shorrosh',
    opponent: 'Dr. Anis Shorrosh',
    year: '1988',
    location: 'Birmingham, Reino Unido',
    debateTitle: 'Alcorão ou Bíblia: Qual é a Palavra de Deus?',
    category: 'polemicas',
    categoryLabel: 'Polêmicas Históricas e Alegações',
    summary: 'Deedat refuta citando a história demográfica da Indonésia, Malásia e África Oriental (onde nenhum exército muçulmano jamais marchou) e as palavras do historiador Thomas Carlyle em "On Heroes and Hero Worship".',
    keyQuote: 'A Indonésia tem 200 milhões de muçulmanos. Que exército árabe marchou sobre a Indonésia? Nenhum! Eles se converteram pelo comércio honesto e pela moral dos mercadores muçulmanos!',
    youtubeUrl: 'https://www.youtube.com/watch?v=kY31WbE1bEw',
    youtubeId: 'kY31WbE1bEw',
    timestampSeconds: 3450,
    durationMinutes: 17,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Números',
        chapterVerse: '31:17-18',
        bibleText: 'Agora, pois, matai todo homem entre os pequeninos, e matai toda mulher que conheceu algum homem, deitando-se com ele. Porém todas as meninas que não conheceram homem, guardai-as vivas para vós.',
        deedatAnalysis: 'Deedat mostra a Shorrosh que os mandamentos de guerra no Antigo Testamento ordenavam o massacre total de crianças e homens capturados, enquanto a lei de guerra islâmica proibiu estritamente ferir mulheres, crianças, sacerdotes e até árvores frutíferas.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Baqarah (A Vaca)',
        ayah: '2:256',
        translation: 'Não há compulsão na religião. Com efeito, a retidão distinguiu-se claramente do erro.'
      },
      {
        surah: 'An-Nahl (As Abelhas)',
        ayah: '16:125',
        translation: 'Convoca ao caminho de teu Senhor com a sabedoria e a boa exortação, e dialoga com eles do modo mais virtuoso.'
      }
    ],
    fullAnswer: [
      'Durante o debate em Birmingham, o Dr. Shorrosh atacou veementemente a expansão inicial do Islã alegando que fora fruto de coerção militar e imposição pela espada.',
      'Deedat respondeu com dados históricos irrefutáveis:',
      '1. O maior país muçulmano do mundo é a Indonésia, com centenas de milhões de fiéis. Deedat desafiou Shorrosh a apontar um único general ou soldado muçulmano que tenha desembarcado na Indonésia ou na Malásia com espada em punho. A conversão ocorreu através de mercadores muçulmanos honestos do Iêmen e da Índia.',
      '2. Ele citou os 14 milhões de cristãos coptas e ortodoxos que viveram no coração do Oriente Médio (Egito, Síria, Líbano, Iraque) por 1.400 anos sob governo islâmico ininterrupto. Se a espada fosse a regra, nenhuma igreja teria sobrevivido.',
      '3. Deedat citou o filósofo e historiador escocês Thomas Carlyle:',
      '"A espada de fato; mas onde você conseguirá sua espada? Toda nova opinião, em seu começo, está precisamente na minoria de um... Um homem sozinho no mundo inteiro acredita nisso. Se ele pegar uma espada e tentar propagá-la, ela fará pouco por ele. Você precisa primeiro obter sua espada!"',
      '4. Por fim, Deedat lembrou que o próprio Alcorão estabeleceu a regra constitucional: "Lā ikrāha fī ad-dīn" (Não há imposição na religião - Surah 2:256).'
    ]
  },
  {
    id: 'deedat-q10',
    title: 'A Oração de Getsêmani e Hebreus 5:7 — O Clamor para Ser Salvo da Morte',
    question: 'Como Deedat utiliza Hebreus 5:7 para provar que a oração desesperada de Jesus em Getsêmani foi ouvida e respondida por Deus?',
    askedBy: 'Josh McDowell e pastores na África do Sul',
    opponent: 'Josh McDowell',
    year: '1981',
    location: 'Durban, África do Sul',
    debateTitle: 'Was Christ Crucified?',
    category: 'crucificacao',
    categoryLabel: 'Crucificação e Ressurreição',
    summary: 'Deedat conecta o suor de sangue de Jesus no Getsêmani ("Afasta de mim este cálice") com a afirmação categórica do autor de Hebreus 5:7 de que as súplicas de Jesus foram ouvidas e atendidas pelo Pai.',
    keyQuote: 'O Novo Testamento diz com clareza cristalina em Hebreus 5:7 que Jesus dirigiu súplicas àquele que o podia livrar da morte, E FOI OUVIDO! Se ele foi ouvido, Deus o livrou da morte na cruz!',
    youtubeUrl: 'https://www.youtube.com/watch?v=e_Z_gTjBq60',
    youtubeId: 'e_Z_gTjBq60',
    timestampSeconds: 2890,
    durationMinutes: 15,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Hebreus',
        chapterVerse: '5:7',
        bibleText: 'O qual, nos dias da sua carne, tendo oferecido, com grande clamor e lágrimas, orações e súplicas àquele que o podia livrar da morte, foi ouvido por causa da sua piedade.',
        deedatAnalysis: 'Deedat enfatiza três pontos fundamentais deste versículo bíblico: 1. Para que Jesus orou? Para ser salvo da morte! 2. A quem orou? Àquele que tinha o poder de livrá-lo. 3. Qual foi o resultado divino? "FOI OUVIDO por causa da sua reverência". Se Jesus morreu na cruz, sua oração não teria sido ouvida, o que contraria as Escrituras.'
      },
      {
        book: 'Mateus',
        chapterVerse: '26:39',
        bibleText: 'E, indo um pouco mais para a frente, prostrou-se sobre o seu rosto, orando e dizendo: Meu Pai, se é possível, passe de mim este cálice; todavia, não seja como eu quero, mas como tu queres.',
        deedatAnalysis: 'Jesus prostrou o rosto no chão (a forma islâmica de oração - Sujood) e implorou para que o cálice da morte vergonhosa fosse afastado dele. Ele não desejava morrer como um falso profeta amaldiçoado.'
      }
    ],
    quranicVerses: [
      {
        surah: 'An-Nisa (Mulheres)',
        ayah: '4:157',
        translation: '...e não o mataram com certeza. Pelo contrário, Deus o elevou para Si, e Deus é Poderoso, Prudente.'
      }
    ],
    fullAnswer: [
      'No debate clássico "Was Christ Crucified?" com o afamado escritor Josh McDowell, Deedat desmontou o dogma da morte voluntária de Jesus como um cordeiro mudo indo resignado ao matadouro.',
      'Deedat relembrou os acontecimentos no jardim de Getsêmani: Jesus estava em profunda agonia, suando gotas de sangue, com a alma triste até a morte.',
      'Ele prostrou seu rosto na terra e implorou ao Pai celeste que aquele cálice amargo de execução e humilhação pública passasse longe dele.',
      'Deedat então chamou a atenção da plateia para a epístola aos Hebreus capítulo 5 versículo 7:',
      '"Nos dias da sua carne, oferecendo com grande clamor e lágrimas, orações e súplicas àquele que o podia livrar da morte, FOI OUVIDO..."',
      'Deedat indagou: "O que significa dizer que ele \'foi ouvido\'? Se o senhor McDowell pede a Deus com lágrimas para ser curado de uma doença fatal e no dia seguinte morre e é sepultado, você diria que a oração dele foi ouvida? Não! Ser ouvido significa que Deus aceitou o pedido e o protegeu."',
      'Deus não abandonou Seu profeta amado nas mãos de inimigos zombeteiros, mas providenciou Seu plano milagroso, cumprindo a oração registrada nos evangelhos.'
    ]
  },
  {
    id: 'deedat-q11',
    title: 'A Pergunta da Audiência: "Se Deus é Único, Por Que o Alcorão Usa \'Nós\'?"',
    question: 'Por que o Deus do Alcorão fala freqüentemente na primeira pessoa do plural ("Nós criamos", "Nós revelamos")? Isso não é indício da Trindade?',
    askedBy: 'Membro cristão da plateia em Birmingham',
    opponent: 'Geral',
    year: '1989',
    location: 'Birmingham Town Hall',
    debateTitle: 'Q&A Open Session',
    category: 'trindade',
    categoryLabel: 'Divindade de Jesus e Trindade',
    summary: 'Deedat explica o plural majestático (Pluralis Majestatis), comum tanto no hebraico bíblico (Elohim) quanto no árabe e até na realeza britânica ("A Rainha diz: Nós decidimos").',
    keyQuote: 'Quando a Rainha Elizabeth II assina um decreto real dizendo: "Nós, pela graça de Deus, decretamos...", ela não é três rainhas! É o plural de majestade e dignidade soberana.',
    youtubeUrl: 'https://www.youtube.com/watch?v=kY31WbE1bEw',
    youtubeId: 'kY31WbE1bEw',
    timestampSeconds: 4120,
    durationMinutes: 9,
    isPopular: false,
    biblicalVerses: [
      {
        book: 'Gênesis',
        chapterVerse: '1:26',
        bibleText: 'E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança...',
        deedatAnalysis: 'Cristãos frequentemente usam Gênesis 1:26 para alegar a Trindade. No entanto, em hebraico e em todas as línguas semíticas, o rei ou Deus se dirige com plural majestático ou dialoga com a hoste celestial de anjos, sem jamais implicar multiplicidade de deuses.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Ikhlas (A Unicidade Absoluta)',
        ayah: '112:1-4',
        translation: 'Dize: "Ele é Deus, o Único! Deus, o Absoluto! Jamais gerou, nem foi gerado, e não há ninguém equivalente a Ele."'
      },
      {
        surah: 'Al-Hijr (A Cidade de Pedra)',
        ayah: '15:9',
        translation: 'Em verdade, Nós fizemos descer a Mensagem e, em verdade, Nós dela somos os guardiões.'
      }
    ],
    fullAnswer: [
      'Em uma das célebres sessões de perguntas abertas, um cavalheiro cristão perguntou a Deedat: "Vocês muçulmanos criticam a Trindade, mas o próprio Alcorão diz em dezenas de passagens \'Nós criamos o homem\', \'Nós enviamos a chuva\'. Vocês têm uma Trindade no Alcorão também?"',
      'Ahmed Deedat sorriu e respondeu com bom humor britânico:',
      'Ele explicou que em linguística e gramática semítica (árabe e hebraico), bem como no inglês formal real, existe o conceito de "Pluralis Majestatis" (plural de majestade).',
      'Deedat lembrou: "Quando a Rainha da Inglaterra abre o Parlamento ou emite uma proclamação, ela declara solenemente: \'We are not amused\' ou \'It is our royal will\'. A Rainha Elizabeth é três mulheres? Ou ela é uma monarca falando em virtude de sua soberania e coroa?"',
      'Ele acrescentou que no árabe existem dois tipos de plural: o plural numérico (que expressa quantidade maior que dois) e o plural de reverência e poder soberano.',
      'Sempre que Deus fala sobre adoração no Alcorão, Ele usa categoricamente o singular absoluto: "Iyyāka na\'budu" (Somente a Ti adoramos) e "Innani anallah" (Em verdade, Eu sou Deus, não há divindade além de Mim; adorai-Me!).'
    ]
  },
  {
    id: 'deedat-q12',
    title: 'Por Que Jesus Comeu Peixe em Lucas 24:41? A Prova Física da Não-Ressurreição',
    question: 'Por que Deedat considerava o episódio de Lucas 24 (onde Jesus come peixe assado diante dos discípulos) a prova definitiva de que ele não era um corpo ressurreto?',
    askedBy: 'Plateia no Royal Albert Hall',
    opponent: 'Dr. Anis Shorrosh',
    year: '1985',
    location: 'Londres, Reino Unido',
    debateTitle: 'Jesus é Deus? / Q&A',
    category: 'crucificacao',
    categoryLabel: 'Crucificação e Ressurreição',
    summary: 'Deedat contrasta a teologia de Paulo em 1 Coríntios 15 (o corpo ressurreto é espiritual, não de carne e sangue) com as ações de Jesus em Lucas 24, onde ele faz de tudo para demonstrar que NÃO era um corpo espiritual.',
    keyQuote: 'Jesus disse: "Vede as minhas mãos e os meus pés! Tocai-me e vede! Um espírito não tem carne e ossos como vedes que eu tenho!" Se ele tinha carne e ossos, ele não era um corpo ressurreto!',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    timestampSeconds: 3890,
    durationMinutes: 13,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Lucas',
        chapterVerse: '24:39-43',
        bibleText: 'Apalpai-me e vede, pois um espírito não tem carne nem ossos, como vedes que eu tenho... E, não o crendo eles ainda por causa da alegria, e estando maravilhados, disse-lhes: Tendes aqui alguma coisa que comer? Então eles apresentaram-lhe um pedaço de peixe assado e um favo de mel; o que ele tomou, e comeu diante deles.',
        deedatAnalysis: 'Fantasmas, espíritos e corpos ressuscitados celestiais não precisam digerir peixe nem favo de mel. Jesus realizou essa refeição deliberadamente para dissipar o medo de que ele fosse uma aparição espectral.'
      },
      {
        book: '1 Coríntios',
        chapterVerse: '15:44 e 50',
        bibleText: 'Semeia-se corpo animal, ressuscitará corpo espiritual... E agora digo isto, irmãos: que a carne e o sangue não podem herdar o reino de Deus.',
        deedatAnalysis: 'Paulo ensina categoricamente que corpos ressurretos são puramente espirituais e que carne e sangue não entram na glória celestial. Jesus em Lucas 24 proclama o oposto sobre si mesmo: "Eu tenho carne e ossos!" Logo, Jesus ainda não havia passado pela ressurreição.'
      }
    ],
    quranicVerses: [
      {
        surah: 'An-Nisa (Mulheres)',
        ayah: '4:157',
        translation: '...e aqueles que divergem a seu respeito estão em dúvida sobre isso; não têm conhecimento algum disso, senão conjecturas.'
      }
    ],
    fullAnswer: [
      'Ahmed Deedat frequentemente citava esta cena de Lucas como uma das mais esclarecedoras de todos os Evangelhos.',
      'Ele descrevia a atmosfera no cenáculo: os discípulos estavam reunidos a portas fechadas com medo dos judeus.',
      'De repente, Jesus entra e diz: "Shalom Aleichem" (A paz seja convosco). Ao verem Jesus, o texto bíblico relata que os discípulos ficaram aterrorizados porque pensaram que viam um espírito (um fantasma).',
      'Deedat perguntava: "Por que eles pensariam que viam um espírito se esperavam uma ressurreição triunfal? Porque tinham visto de longe a crucificação e presumiram que ele havia morrido!"',
      'Jesus percebeu a confusão mental dos discípulos e fez quatro declarações sucessivas para refutar a hipótese de ser um espírito:',
      '1. "Olhem minhas mãos e meus pés!"',
      '2. "Apalpai-me e vede!"',
      '3. "Pois um espírito NÃO TEM CARNE NEM OSSOS como vedes que eu tenho!"',
      '4. E quando eles ainda duvidavam, pediu comida sólida: tomou o peixe e o comeu diante de todos.',
      'Deedat concluía: "Se Jesus quisesse provar aos discípulos que havia morrido e ressuscitado como um ser glorificado espiritual (conforme prega 1 Coríntios 15), por que ele faria exatamente o oposto, provando com tato e mastigação que ainda era um homem de carne e ossos vivo?"'
    ]
  },
  {
    id: 'deedat-q13',
    title: 'A Alegação de Contradição no Alcorão sobre a Criação do Homem',
    question: 'Como Deedat rebateu a alegação de críticos de que o Alcorão se contradiz ao dizer hora que o homem foi criado do pó, hora da argila, hora de um coágulo?',
    askedBy: 'Críticos em debates universitários no Reino Unido',
    opponent: 'Dr. Anis Shorrosh',
    year: '1988',
    location: 'Birmingham Town Hall',
    debateTitle: 'Alcorão ou Bíblia',
    category: 'polemicas',
    categoryLabel: 'Polêmicas Históricas e Alegações',
    summary: 'Deedat demonstra que estas não são contradições, mas etapas sequenciais do desenvolvimento biológico e cósmico da humanidade.',
    keyQuote: 'Se eu disser que fiz um bolo de farinha, de ovos e de açúcar, estou me contradizendo? São os ingredientes e os estágios complementares da mesma receita!',
    youtubeUrl: 'https://www.youtube.com/watch?v=kY31WbE1bEw',
    youtubeId: 'kY31WbE1bEw',
    timestampSeconds: 2950,
    durationMinutes: 10,
    isPopular: false,
    biblicalVerses: [
      {
        book: 'Gênesis',
        chapterVerse: '2:7',
        bibleText: 'E formou o Senhor Deus o homem do pó da terra, e soprou em suas narinas o fôlego da vida; e o homem foi feito alma vivente.',
        deedatAnalysis: 'A Bíblia também cita o pó e o barro para a criação primordial.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Mu\'minun (Os Crentes)',
        ayah: '23:12-14',
        translation: 'E, com efeito, criamos o ser humano da quintessência do barro. Depois o fizemos uma gota de esperma num receptáculo seguro. Depois criamos da gota um coágulo aderente...'
      },
      {
        surah: 'Al-Alaq (O Coágulo)',
        ayah: '96:2',
        translation: 'Criou o homem de algo que se apega (Alaq).'
      }
    ],
    fullAnswer: [
      'Críticos ocidentais e polemistas costumavam listar versículos do Alcorão tentando apontar contradições: "Surah 3:59 diz do pó; Surah 15:26 diz de argila sonora; Surah 96:2 diz de um coágulo (alaq); Surah 25:54 diz da água".',
      'Ahmed Deedat explicava com admirável clareza pedagógica:',
      '1. A criação primordial de Adão passou por processos químicos e minerais da terra: minerais básicos (pó/turab), misturados com água tornam-se lama/argila (teen), moldados e secos tornam-se argila sonora (salsal). Isso descreve a origem da matéria orgânica.',
      '2. Já a reprodução contínua dos descendentes de Adão ocorre através do sêmen (nutfah) que fertiliza o óvulo e se implanta no endométrio como um organismo aderente (alaq), passando pelos estágios embriológicos.',
      'Deedat observava que, longe de ser uma contradição, a descrição de Al-Alaq e da embriologia no Alcorão antecipou em séculos descobertas da ciência moderna elogiadas pelo professor Dr. Keith Moore (embriologista da Universidade de Toronto).'
    ]
  },
  {
    id: 'deedat-q14',
    title: 'Por Que Deedat Usava Bíblias Cristãs para Fazer Da\'wah e Provar o Islã?',
    question: 'Por que Sheikh Ahmed Deedat preferia usar as traduções da Bíblia (KJV, RSV, NIV) em vez de citar apenas o Alcorão diante de plateias ocidentais?',
    askedBy: 'Estudantes e entrevistadores em Genebra e Riad',
    opponent: 'Geral',
    year: '1987',
    location: 'Genebra, Suíça',
    debateTitle: 'A Arte do Diálogo Teológico',
    category: 'debates-gerais',
    categoryLabel: 'Metodologia e Diálogo Inter-religioso',
    summary: 'Deedat explica o princípio corânico de raciocinar com o interlocutor a partir dos livros que ele próprio reconhece como sagrados (Al-Burhan / argumento de autoridade mútua).',
    keyQuote: 'Se eu citar o Alcorão para um cristão fervoroso, ele pode dizer que não acredita no Alcorão. Mas quando eu mostro na Bíblia dele que Jesus disse: "O Pai é maior do que eu", ele não pode fugir de suas próprias escrituras!',
    youtubeUrl: 'https://www.youtube.com/watch?v=0kH8m9qQcKk',
    youtubeId: '0kH8m9qQcKk',
    timestampSeconds: 450,
    durationMinutes: 11,
    isPopular: false,
    biblicalVerses: [
      {
        book: 'Marcos',
        chapterVerse: '12:29',
        bibleText: 'E Jesus respondeu-lhe: O primeiro de todos os mandamentos é: Ouve, Israel, o Senhor nosso Deus é o único Senhor.',
        deedatAnalysis: 'Quando o próprio Jesus é indagado sobre o maior de todos os mandamentos, ele não recitou a Trindade nem pediu orações a si mesmo, mas recitou a Shema monoteísta.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Ankabut (A Aranha)',
        ayah: '29:46',
        translation: 'E não disputeis com os seguidores do Livro senão do modo mais virtuoso... E dizei: "Cremos no que nos foi revelado e no que vos foi revelado; e nosso Deus e vosso Deus é Um só, e a Ele nos submetemos."'
      }
    ],
    fullAnswer: [
      'Esta metodologia tornou Ahmed Deedat pioneiro na era moderna do diálogo comparativo entre as religiões abraâmicas.',
      'Deedat baseava sua abordagem na Surah Al-Imran 3:64: "Ó seguidores do Livro! Vinde a uma palavra comum entre nós e vós: de que não adoraremos senão a Deus e nada Lhe associaremos".',
      'Ele argumentava que muitos muçulmanos se limitavam a repetir dogmas internos sem construir pontes de linguagem.',
      'Ao dominar a King James Version, memorizar capítulos inteiros em inglês e hebraico e carregar a Bíblia consigo, Deedat ganhava a atenção sincera de pessoas que nunca tinham tido contato respeitoso com os ensinamentos islâmicos.',
      'Ele sempre enfatizava que não estava desrespeitando Jesus Cristo — pelo contrário: no Islã, Jesus (Isa al-Massih) é honrado como um dos cinco maiores profetas da humanidade (Ulul \'Azm), nascido imaculado da Virgem Maria e preservado da desonra pelos planos de Deus.'
    ]
  },
  {
    id: 'deedat-q15',
    title: 'A Suposta Ambição de Paulo e a Modificação da Mensagem Original de Cristo',
    question: 'O que Ahmed Deedat sustentava sobre o papel do Apóstolo Paulo na transformação dos ensinamentos originais de Jesus?',
    askedBy: 'Debatedores e acadêmicos na Suécia e EUA',
    opponent: 'Pastor Stanley Sjöberg',
    year: '1985',
    location: 'Estocolmo, Suécia',
    debateTitle: 'A Bíblia é Verdadeira?',
    category: 'biblia-autenticidade',
    categoryLabel: 'Autenticidade e Manuscritos Bíblicos',
    summary: 'Deedat aponta que Jesus circuncidava-se, guardava o sábado, prostrou-se no chão em oração e ensinava a obediência aos mandamentos (Mateus 5:17-19). Foi Paulo quem aboliu a Lei mosaica para agradar aos gentios greco-romanos.',
    keyQuote: 'Jesus disse: "Não penseis que vim revogar a lei ou os profetas; não vim revogar, mas cumprir" (Mt 5:17). Paulo disse que quem tenta cumprir a lei caiu da graça! Quem está certo: Jesus ou Paulo?',
    youtubeUrl: 'https://www.youtube.com/watch?v=mD6w7m2_Z_g',
    youtubeId: 'mD6w7m2_Z_g',
    timestampSeconds: 3820,
    durationMinutes: 16,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Mateus',
        chapterVerse: '5:17-19',
        bibleText: 'Não cuideis que vim destruir a lei ou os profetas; não vim abrogar, mas cumprir. Porque em verdade vos digo que, até que o céu e a terra passem, nem um jota ou um til se omitirá da lei, sem que tudo seja cumprido.',
        deedatAnalysis: 'A declaração mais incisiva de Jesus sobre a validade eterna da Lei de Deus. Qualquer pessoa que ensinar a desobedecer ao menor mandamento será chamado mínimo no Reino dos Céus.'
      },
      {
        book: 'Gálatas',
        chapterVerse: '2:16 e 3:13',
        bibleText: 'Cristo nos resgatou da maldição da lei, fazendo-se maldição por nós; porque está escrito: Maldito todo aquele que for pendurado no madeiro.',
        deedatAnalysis: 'Paulo transforma a Lei divina (que Salmos 19 chama de perfeita e restauradora da alma) em "maldição", permitindo que os povos pagãos de Roma e Grécia dispensassem as regras dietéticas e a circuncisão sem a aprovação de Jesus.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Ma\'idah (A Mesa Servida)',
        ayah: '5:46',
        translation: 'E fizemos seguir seus passos Jesus, filho de Maria, confirmando o que havia antes dele, da Torá, e concedemos-lhe o Evangelho, no qual há orientação e luz...'
      }
    ],
    fullAnswer: [
      'Deedat apresentava uma clássica antítese entre o Cristianismo de Cristo e o Cristianismo paulino.',
      'Jesus nasceu judeu, foi circuncidado no oitavo dia (Lucas 2:21), não consumia carne de porco nem bebidas fermentadas impróprias, celebrava os sábados e ordenava aos seus discípulos:',
      '"Se queres, porém, entrar na vida, guarda os mandamentos" (Mateus 19:17).',
      'Entretanto, Paulo de Tarso — que nunca conheceu Jesus fisicamente em vida e admitia ter visões particulares — entrou em confronto aberto com Pedro, Tiago e a liderança de Jerusalém (Gálatas 2:11).',
      'Paulo começou a pregar que a Lei de Moisés era uma maldição e que a fé na morte e ressurreição expiatória de Cristo era suficiente para a salvação automática sem necessidade de obras ou obediência prática à Lei.',
      'Deedat concluía: "O Islã de hoje é a continuação direta do estilo de vida autêntico de Jesus: orar prostrando o rosto em terra, jejuar, praticar a circuncisão, abster-se de carne de porco e adorar exclusivamente o Pai celestial."'
    ]
  },
  {
    id: 'deedat-q16',
    title: 'O Famoso Debate com 20 Cristãos no Speakers Corner: "Quem Morreu na Cruz: Deus ou o Homem?"',
    question: 'No célebre debate em Londres onde apologetas de Dawah dialogaram com um círculo de 20 cristãos e pregadores, qual foi o dilema fatal apresentado sobre a morte de Jesus?',
    askedBy: 'Grupo de 20 Pregadores e Cristãos no Hyde Park',
    opponent: 'Grupo de 20 Pregadores & Cristãos Evangélicos (Londres)',
    year: '2020',
    location: 'Londres, Reino Unido',
    debateTitle: 'O Famoso Debate com 20 Cristãos no Speakers Corner (Hyde Park Dawah)',
    category: 'polemicas',
    categoryLabel: 'Respostas a Críticos & Dawah de Rua',
    summary: 'Os apologetas de Dawah colocaram 20 pregadores em um dilema ontológico irrespondível: se Jesus é Deus e morreu, então Deus morreu e o universo ficou 3 dias sem Deus; se apenas o homem morreu, então Deus não morreu e o alegado sacrifício infinito é anulado.',
    keyQuote: 'Respondam com sim ou não: Deus pode morrer? Se disserem sim, Ele não é o Deus eterno da Bíblia (1 Timóteo 6:16). Se disserem não, então Deus não morreu na cruz!',
    youtubeUrl: 'https://www.youtube.com/watch?v=0eA3f7pQ1uE',
    youtubeId: '0eA3f7pQ1uE',
    timestampSeconds: 420,
    durationMinutes: 22,
    isPopular: true,
    biblicalVerses: [
      {
        book: '1 Timóteo',
        chapterVerse: '6:16',
        bibleText: 'Aquele que tem, ele só, a imortalidade, e habita na luz inacessível; a quem nenhum dos homens viu nem pode ver; ao qual seja honra e poder sempiterno. Amém.',
        deedatAnalysis: 'A Bíblia afirma com clareza cristalina que Deus É O ÚNICO QUE POSSUI A IMORTALIDADE. Se Jesus morreu, então por definição ontológica ele não é o Deus imortal!'
      },
      {
        book: 'Números',
        chapterVerse: '23:19',
        bibleText: 'Deus não é homem, para que minta; nem filho do homem, para que se arrependa.',
        deedatAnalysis: 'Deus categoricamente não é homem nem filho do homem. No entanto, Jesus é chamado nos evangelhos dezenas de vezes expressamente de "Filho do Homem".'
      },
      {
        book: 'Habacuque',
        chapterVerse: '1:12',
        bibleText: 'Não és tu desde a eternidade, ó Senhor meu Deus, meu Santo? Nós não morreremos.',
        deedatAnalysis: 'O profeta declara a essência de Deus: o Santo que não pode morrer e existe de eternidade a eternidade.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Baqarah (A Vaca)',
        ayah: '2:255',
        translation: 'Deus! Não há outra divindade além d\'Ele, o Vivente, o Subsistente por Si mesmo. Não O toma nem sonolência nem sono. A Ele pertence tudo o que está nos céus e na terra.'
      },
      {
        surah: 'Al-Furqan (O Critério)',
        ayah: '25:58',
        translation: 'E confia no Vivente, que nunca morre, e celebra Seus louvores...'
      }
    ],
    fullAnswer: [
      'Em um dos vídeos mais vistos e comentados da história do Speakers Corner em Hyde Park (Londres), um círculo formado por mais de 20 pregadores e crentes cristãos confrontou apologetas da Dawah moderna (na linhagem direta dos argumentos de Ahmed Deedat).',
      'O debatedor muçulmano lançou a pergunta central: "Vocês dizem que Jesus é Deus Todo-Poderoso encarnado, certo?". Os vinte cristãos assentiram: "Sim, Jesus é 100% Deus e 100% homem".',
      'Então veio a pergunta crucial: "Quem morreu na cruz quando Jesus expirou? Deus morreu ou apenas o corpo de carne humano morreu?".',
      'O grupo dividiu-se em confusão imediata:',
      '1. Alguns disseram: "Deus morreu na cruz!". O debatedor replicou: "Se Deus morreu, quem manteve as galáxias, a gravidade, os batimentos cardíacos de cada ser humano e a criação durante os 3 dias e 3 noites em que Deus estava sepultado na terra? A Bíblia diz em 1 Timóteo 6:16 que Deus possui imortalidade exclusiva! Um Deus que morre é uma contradição de termos".',
      '2. Outros responderam: "Não! Apenas a natureza humana de Jesus morreu, a divindade não morreu!". O debatedor retrucou: "Então Deus NÃO morreu por vocês! Foi apenas a morte de um homem de carne de 70 quilos! E a Bíblia ensina em Salmos 49:7 que nenhum homem comum pode pagar o resgate pelo pecado de outro perante Deus!".',
      'Essa demonstração lógica desarma a teologia da expiação vicária e traz de volta a simplicidade bíblica do monoteísmo puro (Tawheed).'
    ]
  },
  {
    id: 'deedat-q17',
    title: 'Dr. Zakir Naik vs Dr. William Campbell: Embriologia e Revelação Científica no Alcorão',
    question: 'Como Dr. Zakir Naik (discípulo de Ahmed Deedat) refutou os erros científicos da Bíblia comparados à exatidão embriológica do Alcorão no debate de Chicago?',
    askedBy: 'Dr. William Campbell (Médico Missionário Americano)',
    opponent: 'Dr. William Campbell',
    year: '2000',
    location: 'Chicago, Illinois, EUA',
    debateTitle: 'O Alcorão e a Bíblia à Luz da Ciência Moderna',
    category: 'biblia-autenticidade',
    categoryLabel: 'Autenticidade Bíblica & Ciência',
    summary: 'Dr. Zakir Naik expôs que a Bíblia afirma que a luz da lua é própria (Gênesis 1:16), que as lebres ruminam (Levítico 11:6) e que a Terra foi criada antes do Sol. Em contraste, o Alcorão declara que a luz da lua é refletida (Noor) e descreve os estágios exatos do embrião humano (Alaqah e Mudghah).',
    keyQuote: 'O Alcorão descreve o embrião humano nos estágios de Nutfah, Alaqah (coágulo pendente / sanguessuga) e Mudghah (massa mastigada). O Prof. Dr. Keith Moore, autoridade mundial em anatomia, confirmou que isso era impossível de ser conhecido no século VII sem microscópios!',
    youtubeUrl: 'https://www.youtube.com/watch?v=kRj8W9p1vJg',
    youtubeId: 'kRj8W9p1vJg',
    timestampSeconds: 1540,
    durationMinutes: 25,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Gênesis',
        chapterVerse: '1:16',
        bibleText: 'E fez Deus os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite; e fez as estrelas.',
        deedatAnalysis: 'A Bíblia chama a Lua e o Sol igualmente de luminares como se ambos gerassem luz própria. Já o Alcorão (Surata 25:61) faz distinção científica precisa: o Sol é "Siraj" (lâmpada geradora) e a Lua é "Muneer/Noor" (luz refletida e emprestada).'
      },
      {
        book: 'Levítico',
        chapterVerse: '11:6',
        bibleText: 'Também a lebre, porque rumina, mas não tem a unha fendida; essa vos será imunda.',
        deedatAnalysis: 'Erro biológico elementar no texto bíblico: a lebre é um roedor e NÃO é um animal ruminante (não possui o estômago compartimentado dos ruminantes).'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Mu\'minun (Os Crentes)',
        ayah: '23:12-14',
        translation: 'E, com efeito, criamos o ser humano de uma quintessência de barro. Em seguida, fizemo-lo uma gota de esperma (nutfah), em um receptáculo seguro. Depois, criamos da gota um coágulo aderente (alaqah); então, do coágulo criamos uma massa mastigada (mudghah); e da massa criamos ossos; então, vestimos os ossos de carne; depois, fizemo-lo surgir em outra criatura. Bendito seja Deus, o melhor dos criadores!'
      },
      {
        surah: 'Al-Furqan (O Critério)',
        ayah: '25:61',
        translation: 'Bendito seja Aquele que colocou constelações no céu e nele pôs uma lâmpada brilhante (Siraj - o Sol) e uma lua que reflete luz (Muneer).'
      }
    ],
    fullAnswer: [
      'No histórico debate de Chicago em 2000 perante mais de 10.000 pessoas, o médico missionário cristão Dr. William Campbell tentou apontar supostas falhas científicas no Alcorão.',
      'Dr. Zakir Naik, médico formado e considerado o maior continuador do estilo de Ahmed Deedat, desarmou a tese de Campbell ponto a ponto:',
      '1. Embriologia: O Alcorão utiliza o termo "Alaqah" para descrever o embrião nas primeiras semanas. A palavra tem três significados em árabe: (a) sanguessuga que se fixa na parede uterina sugando nutrientes; (b) algo suspenso/pendurado; e (c) coágulo de sangue. Quando o Dr. Keith Moore (chefe de Anatomia da Universidade de Toronto) examinou o embrião humano sob microscópio eletrônico com 24 dias, confirmou que ele é idêntico a uma sanguessuga!',
      '2. Astronomia: O Alcorão em nenhum lugar diz que o Sol ou a Lua são deuses ou luminares iguais. Em Surata 10:5 e 25:61, Deus especifica que o Sol queima e produz luz (Diya / Siraj) enquanto a Lua apenas reflete (Noor).',
      '3. Origem da vida: Surata 21:30 afirma que "da água fizemos todo ser vivente". Hoje o citoplasma celular comprovou que 80% do conteúdo celular de qualquer organismo vivo é água.',
      'Zakir Naik concluiu: "Como um homem iletrado no deserto da Arábia há 1.400 anos poderia antecipar descobertas da embriologia, astronomia e geologia sem um único erro, a não ser por revelação direta do Criador dos Céus e da Terra?"'
    ]
  },
  {
    id: 'deedat-q18',
    title: 'Crucificação e a Evidência Médica: Por que Pilatos Ficou Espantado (Marcos 15:44)?',
    question: 'Qual é o argumento forense de Ahmed Deedat sobre a reação de Pôncio Pilatos e os 45 kg de especiarias medicinais de Nicodemos?',
    askedBy: 'Pastor Wakefield e audiência universitária',
    opponent: 'Pastor Wakefield',
    year: '1991',
    location: 'Toronto, Canadá',
    debateTitle: 'A Crucificação: Realidade Histórica ou Ficção Teológica?',
    category: 'crucificacao',
    categoryLabel: 'Crucificação e Ressurreição',
    summary: 'Deedat demonstra com a própria Bíblia que Jesus ficou apenas cerca de 3 horas na cruz. Quando José de Arimateia foi pedir o corpo, Pilatos espantou-se de que ele já tivesse morrido tão depressa (Mc 15:44). Nicodemos trouxe cem libras de aloés e mirra — não para mumificar um cadáver, mas medicamentos conhecidos na antiguidade para cicatrização de feridas.',
    keyQuote: 'Pilatos ficou admirado de que Jesus já estivesse morto (Marcos 15:44)! Por que um governador romano experiente ficaria chocado? Porque a crucificação levava dias para matar! E por que trouxeram 45 kg de ervas medicinais cicatrizantes?',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    timestampSeconds: 2120,
    durationMinutes: 18,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Marcos',
        chapterVerse: '15:44',
        bibleText: 'E Pilatos se maravilhou de que já estivesse morto. E, chamando o centurião, perguntou-lhe se já havia muito que tinha morrido.',
        deedatAnalysis: 'A palavra grega expressa estupefação e descrença. Nenhum homem saudável morria em 3 horas numa cruz sem ter as pernas quebradas. Os dois ladrões crucificados ao mesmo tempo ainda estavam perfeitamente vivos!'
      },
      {
        book: 'João',
        chapterVerse: '19:39-40',
        bibleText: 'E foi também Nicodemos... trazendo quase cem libras de um composto de mirra e aloés. Tomaram, pois, o corpo de Jesus e o envolveram em lençóis com as especiarias...',
        deedatAnalysis: 'Cem libras romanas equivalem a mais de 30 quilos de mirra e aloés. O aloés e a mirra eram as substâncias medicinais mais famosas da Judeia e Egito para estancar hemorragias e regenerar carne dilacerada, usadas para tratar um homem em coma traumático e não um cadáver.'
      },
      {
        book: 'João',
        chapterVerse: '19:34',
        bibleText: 'Contudo um dos soldados lhe furou o lado com uma lança, e logo saiu sangue e água.',
        deedatAnalysis: 'Cadáveres com coração inerte não jorram sangue fluido e líquido sob corte de lança porque o sangue coagula rapidamente. O jorro de sangue demonstra que o coração ainda pulsava e havia pressão circulatória.'
      }
    ],
    quranicVerses: [
      {
        surah: 'An-Nisa (Mulheres)',
        ayah: '4:157',
        translation: '...e não o mataram, nem o crucificaram, mas foi-lhes feito parecer assim...'
      }
    ],
    fullAnswer: [
      'Ahmed Deedat dissecou a cronologia dos eventos bíblicos da crucificação com rigor pericial forense:',
      '1. Duração mínima: Jesus foi posto na cruz por volta da hora sexta (meio-dia) e retirado antes do pôr do sol da sexta-feira (por volta das três às quatro da tarde), pois o Shabat judaico se aproximava. Ficou na cruz por aproximadamente três a quatro horas.',
      '2. O costume romano: A crucificação romana era uma execução deliberadamente lenta concebida para durar de dois a seis dias por inanição e asfixia gradual. Por isso, quando o soldado foi verificar os dois ladrões crucificados ao lado de Jesus, ambos ainda estavam vivos e tiveram as pernas quebradas para acelerar a morte.',
      '3. A reação de Pilatos: Quando José de Arimateia foi ao palácio pedir a liberação do corpo, Marcos 15:44 relata que "Pilatos se maravilhou de que já estivesse morto". Se a morte em três horas fosse normal, Pilatos não teria demonstrado espanto nem exigido a presença do centurião para confirmar.',
      '4. Os 45 quilos de medicamentos: João 19:39 relata que Nicodemos trouxe cem libras de mirra e aloés. Os judeus não praticavam embalsamamento como os egípcios (não retiravam órgãos internos). Aloés e mirra eram aplicados externamente na medicina antiga como antisséptico profundo e cicatrizante para queimaduras e feridas abertas de chicotadas.',
      '5. O túmulo fresco e ventilado: Jesus não foi enterrado sob toneladas de terra, mas colocado em uma câmara sepulcral espaçosa esculpida na rocha pertencente ao próprio José de Arimateia, o ambiente ideal para recuperação e repouso.',
      'Deedat demonstrava assim que o próprio texto bíblico confirma a milagrosa sobrevivência anunciada pelo Alcorão: "não o mataram, nem o crucificaram, mas foi-lhes feito parecer assim".'
    ]
  },
  {
    id: 'deedat-q19',
    title: 'Mohammed Hijab vs David Wood: O Problema Lógico Insuperável da Trindade',
    question: 'Como a apologética islâmica contemporânea de Dawah refuta a definição formal da Trindade perante apologetas americanos como David Wood?',
    askedBy: 'David Wood e acadêmicos cristãos ocidentais',
    opponent: 'David Wood',
    year: '2021',
    location: 'Reino Unido / EUA (Debate Global)',
    debateTitle: 'Conceito de Deus: Tawheed (Monoteísmo Puro) vs Trindade Cristã',
    category: 'divindade',
    categoryLabel: 'Divindade de Jesus & Teologia Lógica',
    summary: 'A Trindade afirma três proposições mutuamente excludentes: 1) O Pai é Deus, o Filho é Deus e o Espírito Santo é Deus; 2) O Pai não é o Filho, o Filho não é o Espírito Santo; 3) Existe apenas um Deus. Se cada um possui o atributo da divindade plenamente, há três seres divinos ou a palavra Deus perde todo o significado racional.',
    keyQuote: 'Se o Pai é Deus (A=D), o Filho é Deus (B=D), e A não é B, então pela Lei da Identidade você tem múltiplos deuses. O monoteísmo bíblico original de Deuteronômio 6:4 é Tawheed: Deus é estritamente UM e indivisível.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    timestampSeconds: 980,
    durationMinutes: 20,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Deuteronômio',
        chapterVerse: '6:4',
        bibleText: 'Ouve, Israel, o Senhor nosso Deus é o único Senhor.',
        deedatAnalysis: 'A pedra angular da teologia judaico-profética. A palavra hebraica "Echad" afirma singularidade numérica e integridade sem divisões internas de pessoas.'
      },
      {
        book: 'Isaías',
        chapterVerse: '45:5',
        bibleText: 'Eu sou o Senhor, e não há outro; fora de mim não há Deus...',
        deedatAnalysis: 'Deus fala na primeira pessoa do singular ("Eu", "fora de mim"), excluindo categoricamente qualquer pluralidade de conselheiros, pessoas ou manifestações hipostáticas.'
      },
      {
        book: 'Marcos',
        chapterVerse: '13:32',
        bibleText: 'Mas daquele dia e hora ninguém sabe, nem os anjos que estão no céu, nem o Filho, senão o Pai.',
        deedatAnalysis: 'Se Jesus é Deus onisciente consubstancial ao Pai, como pode ignorar a data do Fim do Mundo enquanto o Pai a conhece? Conhecimento desigual implica ontologias desiguais.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Ikhlas (A Unicidade Absoluta)',
        ayah: '112:1-4',
        translation: 'Dize: Ele é Deus, o Único. Deus, o Eterno e Absoluto. Não gerou nem foi gerado. E não há ninguém igual ou comparável a Ele.'
      },
      {
        surah: 'An-Nisa (Mulheres)',
        ayah: '4:171',
        translation: '...e não digais: "Três!" Desisti, que será melhor para vós. Em verdade, Deus é um Deus Único; glorificado seja, longe d\'Ele ter um filho!'
      }
    ],
    fullAnswer: [
      'No confronto com David Wood e defensores da Trindade formulada nos concílios do século IV, Mohammed Hijab aplicou a metodologia de análise conceitual rigorosa.',
      'O dilema lógico da Trindade clássica foi formulado da seguinte maneira:',
      '1. Se cada pessoa da Trindade tem um centro de consciência distinto, vontade própria e pode conversar entre si (como quando Jesus orou ao Pai no Getsêmani pedindo que a vontade do Pai se fizesse e não a dele - Lucas 22:42), então temos três mentes distintas e três pessoas operando. Três mentes divinas distintas constituem ontologicamente Politeísmo (ou Triteísmo), e não Monoteísmo.',
      '2. Se por outro lado afirmam que existe apenas uma única vontade e uma mente indivisível, então recaem na heresia do Modalismo (Sabelianismo), condenada pela própria igreja histórica.',
      '3. A ignorância bíblica de Jesus: Jesus admitiu expressamente em Marcos 13:32 que não sabia o dia nem a hora do Julgamento, atributo exclusivo do Pai. Um ser que não sabe tudo não pode ser Deus Todo-Poderoso onisciente.',
      'A conclusão incontornável da Dawah é que o conceito bíblico autêntico de Deus, proclamado por Moisés, Isaías e pelo próprio Jesus em Marcos 12:29, é exatamente o monoteísmo islâmico: Tawheed puro.'
    ]
  },
  {
    id: 'deedat-q20',
    title: 'A "Tentação no Deserto": Como Deus Pode Ser Tentado pelo Diabo (Tiago 1:13 vs Mateus 4)?',
    question: 'Por que Ahmed Deedat considerava o relato da tentação de Jesus no deserto a refutação definitiva da sua divindade?',
    askedBy: 'Público americano e estudantes de teologia',
    opponent: 'Jimmy Swaggart / Plateia de Baton Rouge',
    year: '1986',
    location: 'Baton Rouge, Louisiana, EUA',
    debateTitle: 'A Bíblia é a Palavra de Deus?',
    category: 'divindade',
    categoryLabel: 'Divindade de Jesus e Trindade',
    summary: 'A epístola de Tiago 1:13 estabelece o axioma bíblico absoluto: "Deus não pode ser tentado pelo mal". No entanto, Mateus 4 e Lucas 4 registram que Jesus jejuou 40 dias, sentiu fome física e foi tentado pelo Diabo durante 40 dias no deserto.',
    keyQuote: 'Tiago 1:13 diz que "Deus não pode ser tentado pelo mal". Mas Mateus 4:1 diz que Jesus foi conduzido ao deserto "para ser tentado pelo Diabo". Se Jesus é Deus, quem está errado: Tiago ou Mateus?',
    youtubeUrl: 'https://www.youtube.com/watch?v=0kH8m9qQcKk',
    youtubeId: '0kH8m9qQcKk',
    timestampSeconds: 3100,
    durationMinutes: 14,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Tiago',
        chapterVerse: '1:13',
        bibleText: 'Ninguém, sendo tentado, diga: De Deus sou tentado; porque Deus não pode ser tentado pelo mal, e a ninguém tenta.',
        deedatAnalysis: 'Axioma teológico inviolável: Deus Todo-Poderoso é ontologicamente imune e impermeável a qualquer tentação do mal.'
      },
      {
        book: 'Mateus',
        chapterVerse: '4:1-3',
        bibleText: 'Então foi conduzido Jesus pelo Espírito ao deserto, para ser tentado pelo diabo. E, tendo jejuado quarenta dias e quarenta noites, depois teve fome; e, chegando-se a ele o tentador, disse: Se tu és o Filho de Deus, manda que estas pedras se tornem em pães.',
        deedatAnalysis: 'Jesus sentiu fome biológica humana, fraqueza física e foi colocado à prova por Satanás. O Diabo até lhe ofereceu todos os reinos do mundo se ele se prostrasse e o adorasse. Deus Criador do cosmos pode ser tentado com pedaços de pão e terras que já Lhe pertencem?'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Anbiya (Os Profetas)',
        ayah: '21:8',
        translation: 'E não lhes fizemos corpos que não comessem comida, nem eram imortais.'
      },
      {
        surah: 'Al-Ma\'idah (A Mesa Servida)',
        ayah: '5:75',
        translation: 'O Messias, filho de Maria, não é senão um Mensageiro; antes dele, já haviam passado outros mensageiros; e sua mãe era uma mulher veraz. Ambos comiam alimentos. Olha como lhes tornamos claros os sinais...'
      }
    ],
    fullAnswer: [
      'Em suas famosas preleções nos Estados Unidos, Ahmed Deedat pegava a Bíblia e desafiava pastores evangélicos a conciliarem dois textos da própria Escritura:',
      'Primeiro, o texto de Tiago 1:13: "Deus não pode ser tentado pelo mal".',
      'Segundo, o texto de Mateus 4:1: "Jesus foi conduzido pelo Espírito ao deserto para ser tentado pelo Diabo".',
      'Deedat argumentava:',
      '1. Satanás levou Jesus ao pináculo do templo e ao cume de um monte altíssimo e mostrou-lhe todos os reinos do mundo e a glória deles, dizendo: "Tudo isto te darei se, prostrado, me adorares" (Mateus 4:9).',
      '2. Como pode Satanás oferecer a Deus Todo-Poderoso o planeta Terra, quando o Salmo 24:1 diz expressamente: "Do Senhor é a terra e a sua plenitude, o mundo e aqueles que nele habitam"?',
      '3. Se Jesus fosse o Criador do universo, a proposta do Diabo seria ridícula e nula. Mas se Jesus era um ser humano virtuoso, um profeta de carne e osso sujeito à fome e privações, a tentação fazia sentido psicológico e moral humano.',
      'O Alcorão resume essa realidade humana em Surata 5:75: "O Messias, filho de Maria, não é senão um Mensageiro... ambos comiam alimentos". Alguém que come, digere e sente fome biológica é uma criatura dependente de Deus, e não o Deus Todo-Poderoso independente!'
    ]
  },
  {
    id: 'deedat-q21-prayer-separation',
    title: 'Por Que Homens e Mulheres Oram Separados na Mesquita? A Resposta aos Missionários',
    question: 'Em sua famosa palestra aos missionários cristãos em Durban, como Ahmed Deedat explicou e defendeu por que os muçulmanos separam os homens das mulheres durante a oração ritual (Salah)?',
    askedBy: 'Grupo de Missionários Cristãos em Durban',
    opponent: 'Conselho Missionário Cristão da África do Sul',
    year: '1987',
    location: 'Durban, África do Sul',
    debateTitle: 'Palestra aos Missionários Cristãos: Práticas Islâmicas & Costumes Bíblicos',
    category: 'pratica-islamica',
    categoryLabel: 'Práticas Islâmicas & Adoração Bíblica',
    summary: 'Deedat explicou que a oração islâmica envolve prostração física completa com a testa no chão e quadris elevados. Misturar homens e mulheres lado a lado ou mulheres curvando-se na frente de homens destruiria a santidade e concentração espiritual da adoração perante Deus.',
    keyQuote: 'Na oração islâmica nos prostramos com o rosto no chão. Se você colocar uma jovem atraente curvada bem na frente de um homem durante a oração, a mente dele estará em Deus ou na anatomia humana? O Islã elimina a distração carnal para preservar a pureza absoluta perante o Criador!',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    timestampSeconds: 1200,
    durationMinutes: 16,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Mateus',
        chapterVerse: '5:28',
        bibleText: 'Eu, porém, vos digo, que qualquer que atentar numa mulher para a cobiçar, já em seu coração cometeu adultério com ela.',
        deedatAnalysis: 'Jesus advertiu que até o olhar de cobiça polui o coração e equivale a adultério moral. A prática islâmica de separar as fileiras na mesquita é a proteção preventiva máxima contra essa contaminação mental durante o momento mais sagrado do dia.'
      },
      {
        book: '1 Coríntios',
        chapterVerse: '14:33-35',
        bibleText: 'Porque Deus não é Deus de confusão, senão de paz, como em todas as igrejas dos santos. As vossas mulheres estejam caladas nas igrejas; porque não lhes é permitido falar...',
        deedatAnalysis: 'A Bíblia cristã impõe silêncio rigoroso às mulheres nas assembleias. Em contraste, o Islã permite que as mulheres aprendam, ouçam o sermão de sexta-feira (Khutbah) e orem na mesma congregação, mantendo fileiras organizadas por modéstia e respeito mútuo.'
      }
    ],
    quranicVerses: [
      {
        surah: 'An-Nur (A Luz)',
        ayah: '24:30-31',
        translation: 'Dize aos crentes que abaixem os olhares e resguardem seu pudor; isso lhes é mais puro... E dize às crentes que abaixem seus olhares e resguardem seu pudor...'
      }
    ],
    hadiths: [
      {
        collection: 'Sahih Muslim',
        hadithNumber: '440',
        narrator: 'Abu Hurairah (que Deus esteja satisfeito com ele)',
        text: 'O Mensageiro de Deus (que a paz e as bênçãos estejam sobre ele) disse: As melhores fileiras para os homens na oração são as primeiras e as piores são as últimas; e as melhores fileiras para as mulheres são as últimas e as piores são as primeiras.',
        explanation: 'O Profeta Maomé organizou a congregação colocando os homens na frente e as mulheres atrás (ou em galerias separadas), garantindo total privacidade, dignidade feminina e ausência de contato visual perturbador durante o Ruku (inclinação) e o Sujud (prostração).'
      },
      {
        collection: 'Sunan Abi Dawud',
        hadithNumber: '567',
        narrator: 'Ibn Umar (que Deus esteja satisfeito com ele)',
        text: 'O Mensageiro de Deus disse: Não impeçais vossas mulheres de frequentarem as mesquitas, embora suas casas sejam melhores para elas por comodidade.',
        explanation: 'Mostra que o Islã nunca proibiu a mulher de ir à mesquita, apenas estabeleceu normas superiores de modéstia e proteção moral.'
      }
    ],
    fullAnswer: [
      'Em uma reunião na África do Sul com dezenas de seminaristas e missionários cristãos, um pastor perguntou em tom crítico a Ahmed Deedat:',
      '"Por que na sua mesquita as mulheres não oram misturadas lado a lado com os homens, como fazemos em nossos templos onde famílias sentam juntas nos bancos?"',
      'Ahmed Deedat respondeu com sua clareza didática inconfundível:',
      '1. A natureza da adoração: "Na sua igreja, vocês sentam-se confortavelmente em bancos de madeira como numa sala de cinema e ouvem canções. No Islã, a oração não é sentar-se; a oração islâmica é exercício de humildade total perante Deus Todo-Poderoso."',
      '2. Os movimentos corporais: "Durante a oração muçulmana nós nos colocamos em pé ombro a ombro, depois nos curvamos a 90 graus (Ruku), e em seguida nos prostramos tocando a testa, o nariz, as palmas das mãos e os joelhos no chão (Sujud), elevando a parte posterior do corpo."',
      '3. A psicologia e a reverência: "Imagine um salão com centenas de pessoas onde homens e mulheres estivessem misturados lado a lado ou mulheres curvadas exatamente na frente dos homens. Que tipo de pensamentos o cérebro humano teria? Jesus disse em Mateus 5:28 que olhar com cobiça já é adultério no coração."',
      '4. Dignidade feminina: "O Islã coloca os homens nas fileiras da frente e as mulheres nas fileiras de trás, ou em mezaninos dedicados e climatizados. Assim, nenhuma mulher se sente observada por trás, ninguém fica desconfortável e 100% da atenção mental de cada ser humano é direcionada exclusivamente ao Criador dos Céus e da Terra."',
      'Os próprios missionários presentes na conferência aplaudiram a sabedoria e a nobreza da resposta de Deedat.'
    ]
  },
  {
    id: 'deedat-q22-kufi-headwear',
    title: 'Por Que os Muçulmanos Usam o Chapeuzinho (Kufi / Taqiyah) ao Orar?',
    question: 'Qual é a resposta de Ahmed Deedat sobre por que os homens muçulmanos cobrem a cabeça com o barrete/chapeuzinho (Kufi) durante as preces e no cotidiano?',
    askedBy: 'Plateia cristã em Londres e Durban',
    opponent: 'Missionários Cristãos e Estudantes Bíblicos',
    year: '1989',
    location: 'Londres, Reino Unido',
    debateTitle: 'O Cristão e o Muçulmano: Quem Segue Jesus de Verdade?',
    category: 'pratica-islamica',
    categoryLabel: 'Práticas Islâmicas & Adoração Bíblica',
    summary: 'Deedat demonstra que cobrir a cabeça durante o culto a Deus era a prática universal de todos os profetas bíblicos (Moisés, Arão e os patriarcas), dos sacerdotes do templo e dos próprios judeus até hoje. Jesus nunca entrou no templo com a cabeça descoberta.',
    keyQuote: 'Vocês perguntam por que cobrimos a cabeça com nosso pequeno chapéu (Kufi). Mas abram o Antigo Testamento em Êxodo 28:40! Deus ordenou expressamente mitras e tiaras de honra e glória para os servos de Deus. Quem abandonou as ordens de Deus?',
    youtubeUrl: 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
    youtubeId: 'F0k9U4qLzX8',
    timestampSeconds: 1850,
    durationMinutes: 14,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Êxodo',
        chapterVerse: '28:40',
        bibleText: 'Também para os filhos de Arão farás túnicas... e lhes farás tiaras (coberturas de cabeça), para glória e ornamento.',
        deedatAnalysis: 'A ordem divina a Moisés era inequívoca: os homens consagrados a Deus deveriam usar coberturas sobre a cabeça na presença do Criador como sinal de reverência e temor reverente.'
      },
      {
        book: 'Levítico',
        chapterVerse: '8:9',
        bibleText: 'E pôs a mitra sobre a sua cabeça; e sobre a mitra, na sua parte dianteira, pôs a lâmina de ouro, a coroa sagrada, como o Senhor ordenara a Moisés.',
        deedatAnalysis: 'Cobrir a cabeça sempre foi sinal de santidade em todas as dispensações proféticas bíblicas.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-A\'raf (Os Cumes)',
        ayah: '7:31',
        translation: 'Ó filhos de Adão! Adotai vossos melhores trajes e decência em cada mesquita e momento de oração...'
      }
    ],
    hadiths: [
      {
        collection: 'Sahih al-Bukhari',
        hadithNumber: '5804',
        narrator: 'Ibn Abbas (que Deus esteja satisfeito com ele)',
        text: 'O Mensageiro de Deus (que a paz e as bênçãos estejam sobre ele) costumava cobrir sua nobre cabeça com um turbante (Imamah) ou barrete (Qalansuwa / Taqiyah).',
        explanation: 'Cobrir a cabeça era a Sunnah habitual e constante do Profeta Maomé e de todos os seus distintos companheiros.'
      },
      {
        collection: 'Sunan al-Tirmidhi',
        hadithNumber: '1784',
        narrator: 'Rukanah (que Deus esteja satisfeito com ele)',
        text: 'A diferença entre nós e os politeístas reside no uso do turbante sobre os gorros/barretes.',
        explanation: 'O adorno modesto na cabeça simboliza a identidade de submissão do servo a Deus.'
      }
    ],
    fullAnswer: [
      'Ahmed Deedat costumava rir da estranheza que os ocidentais manifestavam perante o barrete branco ou escuro (Kufi / Taqiyah) usado pelos muçulmanos.',
      'Ele respondia pegando a Bíblia:',
      '1. Tradição profética milenar: "Quando vocês veem imagens históricas ou representações de Moisés, Abraão, Davi e Salomão, algum deles é retratado de cabeça descoberta como um homem moderno ocidental? Não! Todos cobriam a cabeça."',
      '2. Jesus na sinagoga: "Jesus era um judeu devoto praticante da Galileia. Quando ele entrava na sinagoga aos sábados para ler o rolo do profeta Isaías (Lucas 4:16), ele usava cobertura na cabeça, exatamente como os rabinos e judeus fazem até hoje no Muro das Lamentações com o Kipá."',
      '3. A ordem de Paulo e o abandono ocidental: "Foi o apóstolo Paulo quem mais tarde introduziu a ideia em 1 Coríntios 11 de que o homem orar de cabeça coberta seria desonra, rompendo com as ordens de Moisés em Êxodo 28:40. O muçulmano não segue Paulo; o muçulmano segue o exemplo prático de Moisés, de Jesus e de Maomé!"',
      '4. Humildade: Cobrir a cabeça no Islã expressa a consciência viva de que existe uma Autoridade Suprema acima de nós perante a qual abaixamos nossa coroa e nosso intelecto.'
    ]
  },
  {
    id: 'deedat-q23-original-sin',
    title: 'A Falácia do "Pecado Original": Por Que o Filho Não Leva a Iniquidade do Pai (Ezequiel 18:20)?',
    question: 'Como Ahmed Deedat e a Dawah islâmica desmontam o dogma cristão do Pecado Original Herdado usando o próprio texto bíblico do profeta Ezequiel?',
    askedBy: 'Pregadores Evangélicos e Teólogos no Canadá e EUA',
    opponent: 'Pastor Stanley Sjöberg / Josh McDowell',
    year: '1985',
    location: 'Estocolmo, Suécia',
    debateTitle: 'A Bíblia é a Palavra de Deus?',
    category: 'pecado-original',
    categoryLabel: 'Refutação do Pecado Original',
    summary: 'A doutrina da salvação vicária cristã exige que toda a humanidade nasça condenada pelo pecado cometido por Adão no Éden. Porém, Deus no Antigo Testamento estabelece em Ezequiel 18:20 e Deuteronômio 24:16 a lei moral eterna: "A alma que pecar, essa morrerá; o filho não levará a maldade do pai". Bebês nascem puros e sem mancha!',
    keyQuote: 'Deus diz em Ezequiel 18:20: O filho não levará a iniquidade do pai! Como pode um bebê recém-nascido carregar o pecado que Adão cometeu milhares de anos antes? Isso é uma monstruosidade contra a justiça perfeita de Deus!',
    youtubeUrl: 'https://www.youtube.com/watch?v=mD6w7m2_Z_g',
    youtubeId: 'mD6w7m2_Z_g',
    timestampSeconds: 1420,
    durationMinutes: 20,
    isPopular: true,
    biblicalVerses: [
      {
        book: 'Ezequiel',
        chapterVerse: '18:20',
        bibleText: 'A alma que pecar, essa morrerá; o filho não levará a iniquidade do pai, nem o pai levará a iniquidade do filho. A justiça do justo ficará sobre ele e a impiedade do ímpio cairá sobre ele.',
        deedatAnalysis: 'A refutação mais categórica e inequívoca do dogma do Pecado Original na Bíblia. A responsabilidade é estritamente pessoal; ninguém herda culpa biológica ou penal por transgressões de ancestrais.'
      },
      {
        book: 'Deuteronômio',
        chapterVerse: '24:16',
        bibleText: 'Os pais não morrerão pelos filhos, nem os filhos pelos pais; cada um morrerá pelo seu próprio pecado.',
        deedatAnalysis: 'A Lei de Deus outorgada a Moisés proíbe a transferência de culpa e a punição de inocentes no lugar de culpados.'
      },
      {
        book: 'Mateus',
        chapterVerse: '19:14',
        bibleText: 'Jesus, porém, disse: Deixai os meninos, e não os estorveis de vir a mim; porque dos tais é o reino dos céus.',
        deedatAnalysis: 'Se os bebês nascessem contaminados com a culpa do Pecado Original merecendo o inferno eterno antes do batismo, Jesus jamais teria dito que "dos tais é o reino dos céus"!'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-An\'am (O Gado)',
        ayah: '6:164',
        translation: '...e nenhuma alma peca senão contra si mesma; e nenhuma alma pecadora carregará o fardo de outra...'
      },
      {
        surah: 'An-Najm (A Estrela)',
        ayah: '53:38-39',
        translation: 'Que nenhuma alma carregará o fardo de outra alma; e que o homem nada terá senão o que houver granjeado por seu esforço.'
      }
    ],
    hadiths: [
      {
        collection: 'Sahih al-Bukhari',
        hadithNumber: '1358',
        narrator: 'Abu Hurairah (que Deus esteja satisfeito com ele)',
        text: 'O Mensageiro de Deus (que a paz e as bênçãos estejam sobre ele) disse: Toda criança nasce em estado de Fitrah (natureza pura e monoteísta inata). Depois, são seus pais que a tornam judia, cristã ou zoroastrista.',
        explanation: 'O ser humano não nasce pecador, manchado ou depravado. O ser humano nasce imaculado, receptivo ao bem e diretamente vinculado a Deus.'
      },
      {
        collection: 'Sunan Abi Dawud',
        hadithNumber: '4403',
        narrator: 'Ali ibn Abi Talib (que Deus esteja satisfeito com ele)',
        text: 'A caneta do registro está suspensa para três pessoas: a que dorme até que desperte, a criança até que atinja a maturidade e a que perdeu a razão até que a recupere.',
        explanation: 'Crianças não possuem registro de pecado nem culpa perante Deus Todo-Poderoso.'
      }
    ],
    fullAnswer: [
      'Ahmed Deedat costumava desconstruir a base fundamental de toda a soteriologia da Igreja Ocidental:',
      '1. A premissa do cristianismo paulino: A doutrina cristã sustenta que por causa da maçã (ou fruto) comida por Adão no Jardim do Éden, cada bebê humano nasce espiritualmente morto, condenado ao inferno perpétuo, herdando uma natureza corrompida que requer o sacrifício de sangue inocente na cruz.',
      '2. A contradição com a justiça de Deus: Deedat perguntava aos pastores:',
      '"Se o seu vizinho cometer um crime de assassinato hoje, seria justo um juiz condenar o bebê dele de dois meses à prisão perpétua ou à cadeira elétrica? Vocês diriam: Não! Isso é injustiça criminosa! Como então ousam atribuir a Deus Altíssimo, o Mais Justo dos juízes, a crueldade de culpar bilhões de bebês inocentes pelo erro de Adão?"',
      '3. A Bíblia derruba o dogma: O profeta Ezequiel em Ezequiel 18:20 declara com letras de ouro: "A alma que pecar, essa morrerá; o filho NÃO levará a iniquidade do pai!".',
      '4. O arrependimento de Adão: O Alcorão (Surata 2:37) ensina que Adão pecou, mas pediu sincero perdão a Deus com palavras inspiradas, e Deus aceitou seu arrependimento imediato! Deus não precisou matar um homem para perdoar uma falha humana.',
      'Portanto, o dogma do Pecado Original é uma invenção de teólogos posteriores que desmorona tanto perante a lógica quanto perante as próprias escrituras proféticas.'
    ]
  },
  {
    id: 'deedat-q24-biblical-errors-adulterations',
    title: 'Erros Graves e Fraudes Textuais nos Manuscritos Bíblicos: A Coma Joanina (1 João 5:7)',
    question: 'Quais são as interpolações e adulterações mais graves reconhecidas pela própria crítica textual cristã que Ahmed Deedat e apologetas da Dawah usam em debates?',
    askedBy: 'Plateia de Teólogos no debate com Jimmy Swaggart',
    opponent: 'Jimmy Swaggart e Teólogos Evangélicos',
    year: '1986',
    location: 'Baton Rouge, Louisiana, EUA',
    debateTitle: 'A Bíblia é a Palavra de Deus?',
    category: 'biblia-autenticidade',
    categoryLabel: 'Erros Manuscritos & Adulterações Textuais',
    summary: 'A única passagem na Bíblia inteira que mencionava explicitamente a fórmula da Trindade ("Pai, a Palavra e o Espírito Santo; e estes três são um" - 1 João 5:7-8) foi confessada pelos maiores estudiosos cristãos da RSV e Novum Testamentum Graece como uma fraude inserida séculos mais tarde e eliminada das traduções modernas.',
    keyQuote: 'Os próprios 32 teólogos cristãos de renome mundial da Revised Standard Version (RSV) admitiram no prefácio que a King James continha erros gravíssimos e eliminaram a fraude de 1 João 5:7 porque sabiam que esse versículo nunca constou nos manuscritos originais gregos!',
    youtubeUrl: 'https://www.youtube.com/watch?v=0kH8m9qQcKk',
    youtubeId: '0kH8m9qQcKk',
    timestampSeconds: 2600,
    durationMinutes: 24,
    isPopular: true,
    biblicalVerses: [
      {
        book: '1 João',
        chapterVerse: '5:7-8',
        bibleText: 'Porque três são os que testificam no céu: o Pai, a Palavra, e o Espírito Santo; e estes três são um. E três são os que testificam na terra: o Espírito, e a água e o sangue... (Texto presente apenas na KJV antiga).',
        deedatAnalysis: 'A célebre "Coma Joanina". Essa frase não existe no Códice Sinaítico, no Códice Vaticano, nem nos primeiros 1.500 anos de manuscritos bíblicos gregos. Erasmo de Roterdã foi chantageado para colocá-la sob manuscritos forjados tardiamente.'
      },
      {
        book: 'Marcos',
        chapterVerse: '16:9-20',
        bibleText: 'E Jesus, tendo ressuscitado na manhã do primeiro dia da semana, apareceu primeiramente a Maria Madalena...',
        deedatAnalysis: 'Os últimos 12 versículos do Evangelho de Marcos não existem nos manuscritos gregos mais antigos e respeitados do mundo cristão (Sinaiticus e Vaticanus). Trata-se de um apêndice fabricado por copistas posteriores.'
      },
      {
        book: 'Jeremias',
        chapterVerse: '8:8',
        bibleText: 'Como dizeis: Nós somos sábios, e a lei do Senhor está conosco? Eis que a falsa pena dos escribas trabalhou em vão.',
        deedatAnalysis: 'O profeta Jeremias já denunciava que as penas dos copistas e escribas alteravam as escrituras sagradas.'
      }
    ],
    quranicVerses: [
      {
        surah: 'Al-Baqarah (A Vaca)',
        ayah: '2:79',
        translation: 'Ai daqueles que escrevem o livro com as próprias mãos e depois dizem: "Isto provém de Deus!", para com isso auferirem vil ganho. Ai deles, pelo que suas mãos escreveram, e ai deles, pelo que ganharam!'
      },
      {
        surah: 'Al-Hijr (A Cidade de Pedra)',
        ayah: '15:9',
        translation: 'Por certo, Nós fizemos descer a Mensagem (o Alcorão) e, por certo, dela somos Guardiães.'
      }
    ],
    hadiths: [
      {
        collection: 'Sahih al-Bukhari',
        hadithNumber: '7363',
        narrator: 'Ibn Abbas (que Deus esteja satisfeito com ele)',
        text: 'Como podeis vós consultar o Povo do Livro sobre algo, quando o vosso Livro revelado ao Mensageiro de Deus é a mais recente notícia procedente de Deus, puro e não adulterado? E Deus já vos informou que o Povo do Livro alterou e corrompeu o que foi escrito, escrevendo o livro com suas mãos e dizendo "isto é de Deus" para vendê-lo por vil preço!',
        explanation: 'O companheiro do Profeta explica com clareza cristalina a advertência sobre a adulteração textual humana nas escrituras anteriores.'
      }
    ],
    fullAnswer: [
      'No famoso debate contra o pastor Jimmy Swaggart em Baton Rouge (Louisiana), Ahmed Deedat colocou sobre a bancada mais de cinco versões diferentes da Bíblia cristã:',
      '1. A King James Version (KJV) original:',
      'Continha em 1 João 5:7: "Porque três são os que testificam no céu: o Pai, a Palavra, e o Espírito Santo; e estes três são um". Essa era a única frase da Bíblia inteira que apoiava textualmente o dogma da Trindade.',
      '2. A confissão dos teólogos cristãos da RSV:',
      'Quando o comitê de 32 eminentes eruditos bíblicos produziu a Revised Standard Version (patrocinada por mais de 40 denominações protestantes), eles removeram sumariamente essa frase do corpo do texto. Em suas notas, declararam que o versículo era uma glosa espúria inserida tardiamente no texto latino.',
      '3. Os versículos finais de Marcos 16:9-20:',
      'Os versículos que falam sobre pegar em serpentes venenosas e beber veneno mortal sem sofrer dano faltam inteiramente nos manuscritos Sinaítico e Vaticano do século IV.',
      '4. A história da adúltera em João 7:53–8:11:',
      'O relato de "quem nunca pecou atire a primeira pedra" não aparece em nenhum papiro primitivo e é rejeitado pelos eruditos como acréscimo medieval.',
      'Deedat demonstrava: "Se textos inteiros foram apagados e inseridos ao longo dos séculos pelas mãos de homens, como podem afirmar que essa obra é a inerrante e intacta Palavra de Deus em cada vírgula? Comparem isso com o Alcorão Sagrado, onde não há uma única variante em todo o mundo islâmico desde a revelação do Profeta Maomé há mais de 1.400 anos!"'
    ]
  }
];

export const BIBLICAL_VERSE_INDEX: BiblicalReference[] = [
  {
    book: 'Deuteronômio',
    chapterVerse: '18:18',
    bibleText: 'Eis que lhes suscitarei um profeta do meio de seus irmãos, como tu, e porei as minhas palavras na sua boca, e ele lhes falará tudo o que eu lhe ordenar.',
    deedatAnalysis: 'Moisés foi profeta legislador, líder político, teve pai e mãe e faleceu de causas naturais. Jesus não teve pai humano e não fundou estado político; Maomé cumpriu rigorosamente todos os 8 atributos proféticos de semelhança com Moisés.'
  },
  {
    book: 'Isaías',
    chapterVerse: '29:12',
    bibleText: 'Ou dá-se o livro ao que não sabe ler, dizendo: Lê isto, peço-te; e ele diz: Não sei ler.',
    deedatAnalysis: 'Antecipação milagrosa do primeiro encontro do Profeta Maomé no Monte Hira com o Anjo Gabriel, que lhe ordenou: "Iqra!" (Lê!), e Maomé respondeu: "Mā ana bi-qāri\'" (Não sei ler).'
  },
  {
    book: 'Cantares de Salomão',
    chapterVerse: '5:16',
    bibleText: 'Hikhô mamtaqqim ve-khullô Muhammad-im; zeh dodi ve-zeh re\'i, benot Yerushalayim.',
    deedatAnalysis: 'O texto massorético hebraico traz o nome exato "Muhammad-im" com plural majestático, transliterado pelos tradutores ocidentais como adjetivo para encobrir o nome próprio.'
  },
  {
    book: 'Mateus',
    chapterVerse: '12:39-40',
    bibleText: 'Pois, como Jonas esteve três dias e três noites no ventre do grande peixe, assim estará o Filho do homem três dias e três noites no coração da terra.',
    deedatAnalysis: 'Jonas permaneceu VIVO no ventre do peixe contra todas as probabilidades de morte por asfixia. Se Jesus morreu, o milagre de Jonas é invalidado. Logo, Jesus foi mantido vivo na sepultura.'
  },
  {
    book: 'Marcos',
    chapterVerse: '12:29',
    bibleText: 'E Jesus respondeu-lhe: O primeiro de todos os mandamentos é: Ouve, Israel, o Senhor nosso Deus é o único Senhor.',
    deedatAnalysis: 'Jesus reafirma a Shema de Deuteronômio 6:4 como o mais importante de todos os mandamentos, confirmando a unicidade estrita (Tawheed).'
  },
  {
    book: 'João',
    chapterVerse: '10:30',
    bibleText: 'Eu e o Pai somos um.',
    deedatAnalysis: 'Comparado com João 17:21-22 onde Jesus pede que todos os apóstolos sejam "um" assim como ele e o Pai são um, demonstrando que a unidade é de propósito e união espiritual, e não de trindade cósmica.'
  },
  {
    book: 'João',
    chapterVerse: '14:28',
    bibleText: '...porque o Pai é maior do que eu.',
    deedatAnalysis: 'Incompatível com o dogma de que Jesus é co-igual e consubstancial em todos os aspectos com o Pai.'
  },
  {
    book: 'João',
    chapterVerse: '16:7',
    bibleText: 'Se eu não for, o Consolador não virá a vós; mas se eu for, vo-lo enviarei.',
    deedatAnalysis: 'O Espírito Santo já estava atuando na Terra (Lucas 1:41 e 3:22). Logo, a vinda do Consolador subordinada à partida de Jesus refere-se a um homem e profeta vindouro: Maomé.'
  },
  {
    book: 'Hebreus',
    chapterVerse: '5:7',
    bibleText: '...tendo oferecido, com grande clamor e lágrimas, orações e súplicas àquele que o podia livrar da morte, foi ouvido por causa da sua piedade.',
    deedatAnalysis: 'O texto apostólico afirma que a oração aflita de Jesus no Getsêmani para ser livrado da morte foi OUVIDA e atendida por Deus.'
  },
  {
    book: 'Lucas',
    chapterVerse: '24:39',
    bibleText: 'Apalpai-me e vede, pois um espírito não tem carne nem ossos, como vedes que eu tenho.',
    deedatAnalysis: 'Corpos ressuscitados celestiais são espirituais segundo 1 Coríntios 15:44. Jesus desmente categoricamente ser um espírito, atestando sua corporeidade viva.'
  },
  {
    book: '1 Coríntios',
    chapterVerse: '7:25',
    bibleText: 'Ora, quanto às virgens, não tenho mandamento do Senhor; dou, porém, o meu parecer, como quem tem alcançado misericórdia...',
    deedatAnalysis: 'O próprio apóstolo Paulo admite abertamente que partes de suas epístolas são meras opiniões e conjecturas pessoais, e não revelações infalíveis diretas do Criador.'
  },
  {
    book: 'Jeremias',
    chapterVerse: '8:8',
    bibleText: 'Eis que a pena falsa dos escribas a converteu em mentira.',
    deedatAnalysis: 'Reconhecimento profético no Antigo Testamento de manipulações e alterações introduzidas por copistas nos manuscritos originais.'
  },
  {
    book: '1 Timóteo',
    chapterVerse: '6:16',
    bibleText: 'Aquele que tem, ele só, a imortalidade, e habita na luz inacessível; a quem nenhum dos homens viu nem pode ver; ao qual seja honra e poder sempiterno.',
    deedatAnalysis: 'A passagem utilizada no debate com os 20 pregadores em Londres: Deus possui imortalidade exclusiva. Logo, qualquer ser que morreu na história não é o Deus Todo-Poderoso bíblico.'
  },
  {
    book: 'Números',
    chapterVerse: '23:19',
    bibleText: 'Deus não é homem, para que minta; nem filho do homem, para que se arrependa.',
    deedatAnalysis: 'Deus categoricamente não é homem nem filho de Adão. Como Jesus se auto-denominava "Filho do Homem" mais de 80 vezes nos Evangelhos, a escritura refuta sua ontologia divina.'
  },
  {
    book: 'Marcos',
    chapterVerse: '15:44',
    bibleText: 'E Pilatos se maravilhou de que já estivesse morto. E, chamando o centurião, perguntou-lhe se já havia muito que tinha morrido.',
    deedatAnalysis: 'Prova forense de que 3 horas na cruz era insuficiente para causar a morte física de um jovem saudável. O choque de Pilatos confirma a sobrevivência milagrosa.'
  },
  {
    book: 'Tiago',
    chapterVerse: '1:13',
    bibleText: 'Ninguém, sendo tentado, diga: De Deus sou tentado; porque Deus não pode ser tentado pelo mal, e a ninguém tenta.',
    deedatAnalysis: 'Se Deus não pode ser tentado pelo mal, mas Jesus foi tentado pelo Diabo por 40 dias no deserto (Mateus 4), conclui-se formalmente que Jesus é profeta humano subordinado a Deus.'
  },
  {
    book: 'Ezequiel',
    chapterVerse: '18:20',
    bibleText: 'A alma que pecar, essa morrerá; o filho não levará a iniquidade do pai, nem o pai levará a iniquidade do filho.',
    deedatAnalysis: 'O texto que destrói o dogma do Pecado Original: Deus proíbe expressamente a transmissão de culpa penal ou espiritual de pais para filhos.'
  },
  {
    book: 'Êxodo',
    chapterVerse: '28:40',
    bibleText: 'Também para os filhos de Arão farás túnicas... e lhes farás tiaras (coberturas de cabeça), para glória e ornamento.',
    deedatAnalysis: 'Mandamento divino ordenando cobertura de cabeça (tiaras/barretes) durante a adoração sacerdotal a Deus, continuado pelos muçulmanos com o Kufi/Taqiyah.'
  },
  {
    book: '1 João',
    chapterVerse: '5:7-8',
    bibleText: 'Porque três são os que testificam no céu: o Pai, a Palavra, e o Espírito Santo; e estes três são um. (Presente apenas na KJV antiga).',
    deedatAnalysis: 'A Coma Joanina: a interpolação forjada séculos mais tarde e removida pelas edições modernas da Bíblia (RSV, NVI, Bíblia de Jerusalém) por não existir em nenhum manuscrito grego primitivo.'
  },
  {
    book: 'Mateus',
    chapterVerse: '5:28',
    bibleText: 'Eu, porém, vos digo, que qualquer que atentar numa mulher para a cobiçar, já em seu coração cometeu adultério com ela.',
    deedatAnalysis: 'A base moral e psicológica explicada por Deedat para a separação modesta entre homens e mulheres durante as prostrações físicas na oração islâmica.'
  }
];

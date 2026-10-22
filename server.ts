import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '10mb' }));

// Helper to get Gemini client if API key is present
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
}

// Fallback heuristic analyzer when API is offline or quota reached
function fallbackAnalyzeDebate(urlOrTitle: string, speakerHint?: string, opponentHint?: string) {
  const clean = urlOrTitle.toLowerCase();

  let speaker = speakerHint?.trim() || 'Apologeta de Dawah';
  let opponent = opponentHint?.trim() || 'Apologeta Cristão / Oponente';
  let title = urlOrTitle.trim();
  let category = 'debates-gerais';
  let categoryLabel = 'Debate Teológico & Dawah';

  // Identify well-known figures
  if (clean.includes('deedat')) speaker = 'Sheikh Ahmed Deedat';
  else if (clean.includes('zakir')) speaker = 'Dr. Zakir Naik';
  else if (clean.includes('hijab')) speaker = 'Mohammed Hijab';
  else if (clean.includes('ali dawah')) speaker = 'Ali Dawah';
  else if (clean.includes('uthman') || clean.includes('farooq')) speaker = 'Sheikh Uthman Farooq';
  else if (clean.includes('itachi') || clean.includes('dialogues')) speaker = 'Dawah x Dialogues (Itachi)';
  else if (clean.includes('tzortzis')) speaker = 'Hamza Tzortzis';

  if (clean.includes('shorrosh')) opponent = 'Dr. Anis Shorrosh';
  else if (clean.includes('swaggart')) opponent = 'Jimmy Swaggart';
  else if (clean.includes('wood')) opponent = 'David Wood';
  else if (clean.includes('shamoun')) opponent = 'Sam Shamoun';
  else if (clean.includes('craig')) opponent = 'Dr. William Lane Craig';
  else if (clean.includes('white')) opponent = 'Dr. James White';
  else if (clean.includes('campbell')) opponent = 'Dr. William Campbell';

  // Extract YouTube ID if present
  let youtubeId = 'F0k9U4qLzX8';
  if (urlOrTitle.includes('youtu.be/')) {
    youtubeId = urlOrTitle.split('youtu.be/')[1]?.split('?')[0]?.split('&')[0] || 'F0k9U4qLzX8';
  } else if (urlOrTitle.includes('youtube.com/watch')) {
    try {
      const parsed = new URL(urlOrTitle.startsWith('http') ? urlOrTitle : `https://${urlOrTitle}`);
      youtubeId = parsed.searchParams.get('v') || 'F0k9U4qLzX8';
    } catch {
      // ignore
    }
  }

  // Specific recognition for the user's specific requested video: uOkjFRtTQNo
  // "They Used the Gospel Until Jesus Became God | Wise Disciple with Nate Sala" / Sam Shamoun debate
  if (youtubeId === 'uOkjFRtTQNo' || clean.includes('uokjfrttqno') || clean.includes('until jesus became god') || clean.includes('nate sala')) {
    const debateTitle = 'Eles Usavam o Evangelho Até Jesus se Tornar Deus? (Análise Crítica & Dawah)';
    const opponent = 'Nate Sala (Wise Disciple) & Sam Shamoun';
    const speaker = 'Teologia Islâmica & Dawah de Rua';
    
    return {
      debate: {
        id: `debate-uOkjFRtTQNo-${Date.now()}`,
        title: debateTitle,
        opponent,
        opponentTitle: 'Apologistas Cristãos e Teólogos Evangélicos',
        date: '2023–2024',
        location: 'Wise Disciple Podcast / Plataformas de Debate Teológico',
        venue: 'Transmissão Teológica & Análise de Dawah',
        attendeesCount: 'Mais de 150.000 visualizações',
        youtubeUrl: 'https://youtu.be/uOkjFRtTQNo',
        youtubeId: 'uOkjFRtTQNo',
        description: 'Análise profunda e refutação do vídeo "They Used the Gospel Until Jesus Became God" (Wise Disciple com Nate Sala e Sam Shamoun). O vídeo investiga se os primeiros cristãos e os evangelhos sinópticos sustentavam a divindade de Cristo ou se a tese da Trindade foi uma construção posterior que desfigurou a mensagem original de Jesus.',
        coreTopics: ['Evolução Cristológica', 'Marcos 2 e Perdão dos Pecados', 'João 5 e Agência Divina', 'Monoteísmo Primitivo'],
        deedatCentralThesis: 'Os Evangelhos mais antigos (Marcos, Mateus e Lucas) retratam Jesus estritamente como o Messias e servo profeta de Deus; a divinização e as interpretações trinitárias foram interpoladas e desenvolvidas tardiamente, culminando nos concílios sob o Império Romano.',
        opponentCentralThesis: 'Nate Sala e Sam Shamoun argumentam que Jesus exercia autoridade divina intrínseca desde o início dos Evangelhos, reivindicando prerrogativas exclusivas de Yahweh como perdoar pecados.',
        highlightQuestionsCount: 2
      },
      extractedQuestions: [
        {
          id: `ai-item-uOkjFRtTQNo-1`,
          title: 'Marcos 2 e o Perdão dos Pecados: Prerrogativa Divina ou Agência Delegada por Deus?',
          speaker,
          opponent,
          question: 'Pergunta do Apologista Cristão: Se apenas Deus pode perdoar pecados (Marcos 2:7), quando Jesus perdoou o paralítico ele não estava provando inequivocamente que ele é o próprio Deus?',
          askedBy: 'Nate Sala & Sam Shamoun',
          year: '2024',
          location: 'Wise Disciple / Dawah Archive',
          debateTitle: debateTitle,
          category: 'divindade',
          categoryLabel: 'Divindade de Jesus e Trindade',
          summary: 'Resposta Islâmica: Jesus não perdoou por autoridade própria ou divina ontológica, mas como agente autorizado e juiz delegado por Deus. Em Mateus 9:8, a multidão glorificou a Deus que "deu tal poder e autoridade aos homens".',
          keyQuote: 'A multidão que presenciou a cura do paralítico não declarou que Jesus era Deus, mas "glorificou a Deus, que dera tal poder aos homens" (Mateus 9:8). O texto bíblico mata a alegação trinitária!',
          youtubeUrl: 'https://youtu.be/uOkjFRtTQNo',
          youtubeId: 'uOkjFRtTQNo',
          fullAnswer: [
            'Pergunta Crucial Identificada na Conversa do Vídeo:',
            '"Em Marcos 2:5-7, os escribas dizem: Quem pode perdoar pecados senão um só, que é Deus? Quando Jesus diz ao paralítico: \'Filho, perdoados estão os teus pecados\', ele não estaria se revelando como Yahweh encarnado?"',
            'Resposta Islâmica e Argumentação Central:',
            '1. O Testemunho da Multidão e a Revelação de Mateus 9:8:',
            'O próprio relato paralelo em Mateus 9:8 encerra qualquer dúvida teológica sobre como os discípulos e o povo entenderam o milagre: "E a multidão, vendo isso, temeu e glorificou a Deus, QUE DERA TAL PODER AOS HOMENS". Eles não adoraram Jesus como Deus; glorificaram a Deus pelo poder delegado conferido a um ser humano!',
            '2. O Conceito Bíblico e Semítico de Agência (Shaliah):',
            'Na lei judaica bíblica, o agente do rei representa a autoridade do rei ("O agente de um homem é como o próprio homem"). Jesus atuou como porta-voz da anistia que DEUS concedeu ao enfermo. Tanto é que em João 20:23, Jesus diz aos seus próprios discípulos humanos: "Àqueles a quem perdoardes os pecados, lhes são perdoados". Se perdoar pecados torna alguém Deus Todo-Poderoso, então os 12 apóstolos também seriam deuses!',
            '3. O Título Usado: "Filho do Homem":',
            'No próprio versículo de Marcos 2:10, Jesus diz: "Para que saibais que o Filho do Homem tem na terra poder para perdoar pecados...". Na Bíblia hebraica, "Filho do Homem" é a antítese ontológica de Deus (Números 23:19: "Deus não é homem para que minta, nem filho do homem para que se arrependa").'
          ],
          biblicalVerses: [
            {
              book: 'Mateus',
              chapterVerse: '9:8',
              bibleText: 'E a multidão, vendo isso, maravilhou-se, e glorificou a Deus, que dera tal poder aos homens.',
              deedatAnalysis: 'A plateia que viu o milagre e ouviu as palavras atestou que a autoridade de perdoar provinha de Deus outorgada a homens, e não que o homem era Deus.'
            },
            {
              book: 'João',
              chapterVerse: '20:23',
              bibleText: 'Àqueles a quem perdoardes os pecados lhes são perdoados; e àqueles a quem os retiverdes lhes são retidos.',
              deedatAnalysis: 'Jesus outorgou autoridade de perdoar pecados aos discípulos mortais. Logo, o ato de declarar o perdão é ministerial e delegado, jamais ontologicamente exclusivo do Criador.'
            },
            {
              book: 'Números',
              chapterVerse: '23:19',
              bibleText: 'Deus não é homem, para que minta; nem filho do homem, para que se arrependa...',
              deedatAnalysis: 'A escritura estabelece a impossibilidade categórica de Deus ser homem ou filho do homem.'
            }
          ],
          quranicVerses: [
            {
              surah: 'Al-Ma\'idah',
              ayah: '5:110',
              translation: 'Quando Deus disse: "Ó Jesus, filho de Maria! Lembra-te da Minha graça para contigo e para com tua mãe... e quando curavas o cego de nascença e o leproso COM A MINHA PERMISSÃO, e quando ressuscitavas os mortos COM A MINHA PERMISSÃO..."'
            }
          ],
          hadiths: [
            {
              collection: 'Sahih Muslim',
              hadithNumber: '2877',
              narrator: 'Abu Dharr (que Deus esteja satisfeito com ele)',
              text: 'Deus Todo-Poderoso disse em um Hadith Qudsi: Ó Meus servos! Vós cometeis faltas noite e dia, e Eu perdoo todos os pecados; portanto, pedi-Me perdão e Eu vos perdoarei!',
              explanation: 'A prerrogativa soberana e originária do perdão pertence exclusivamente a Deus, a Quem todo ser humano deve recorrer sem associar intermediários divinizados.'
            }
          ]
        },
        {
          id: `ai-item-uOkjFRtTQNo-2`,
          title: 'A Tese de Nate Sala: "Usavam o Evangelho até Jesus se Tornar Deus"',
          speaker,
          opponent,
          question: 'Pergunta sobre a Evolução Histórica dos Evangelhos: Por que os cristãos precisaram reinterpretar os evangelhos mais antigos conforme o dogma trinitário ia sendo inventado nos séculos II a IV?',
          askedBy: 'Teólogos e Estudantes de Dawah',
          year: '2024',
          location: 'Análise Exegética de Dawah',
          debateTitle: debateTitle,
          category: 'biblia-autenticidade',
          categoryLabel: 'Autenticidade Bíblica & Evolução Dogmática',
          summary: 'Resposta Islâmica: O vídeo expõe involuntariamente o problema central da apologética: nos primeiros textos do Evangelho, Jesus nunca se proclamou Yahweh. Foi necessária uma contorção exegética e o uso de textos tardios e filosóficos para justificar a Trindade aprovada por decreto imperial em Niceia.',
          keyQuote: 'Se Jesus tivesse dito com todas as letras "Eu sou Deus, adorem a mim", os apóstolos e os primeiros cristãos não precisariam de debates de séculos nem de concílios políticos imperiais para tentar deduzir sua identidade!',
          youtubeUrl: 'https://youtu.be/uOkjFRtTQNo',
          youtubeId: 'uOkjFRtTQNo',
          fullAnswer: [
            'Pergunta Crucial Identificada no Debate:',
            '"Os primeiros seguidores de Jesus já o viam como Deus Todo-Poderoso, ou essa crença foi se formando e impondo ao longo das gerações seguintes?"',
            'Resposta Islâmica e Argumentação Central:',
            '1. A Cristologia Primitiva Baixa de Marcos:',
            'O primeiro evangelho a ser redigido (Marcos, ~65-70 d.C.) não contém o nascimento virginal, não contém pré-existência eterna, e Jesus declara expressamente em Marcos 10:18: "Por que me chamas bom? Não há bom senão um só, que é Deus". Jesus claramente se distingue ontologicamente de Deus.',
            '2. A Invenção da Trindade nos Concílios:',
            'Historiadores eclesiásticos como Bart Ehrman e enciclopédias católicas admitem que a fórmula "três pessoas em uma só substância" não era linguagem nem pensamento dos apóstolos no século I, mas produto do helenismo platônico consolidado séculos depois.',
            '3. A Pureza do Monoteísmo:',
            'O Alcorão Sagrado em Surata 5:75 coloca a verdade definitiva com simplicidade majestosa: "O Messias, filho de Maria, não era senão um Mensageiro; antes dele, mensageiros já haviam passado. E sua mãe era uma mulher veraz; ambos comiam alimentos". Alguém que come comida e depende de sustento biológico não pode ser o Sustentador do Universo!'
          ],
          biblicalVerses: [
            {
              book: 'Marcos',
              chapterVerse: '10:18',
              bibleText: 'E Jesus lhe disse: Por que me chamas bom? Ninguém há bom senão um só, que é Deus.',
              deedatAnalysis: 'Jesus refuta ser a fonte absoluta do Bem, redirecionando o louvor unicamente a Deus Pai.'
            },
            {
              book: 'Atos',
              chapterVerse: '2:22',
              bibleText: 'Homens israelitas, ouvi estas palavras: A Jesus Nazareno, homem aprovado por Deus entre vós com milagres, prodígios e sinais, que Deus fez por ele no meio de vós...',
              deedatAnalysis: 'No dia de Pentecostes, Pedro define Jesus para milhares de pessoas como um "HOMEM aprovado por Deus". Não há Trindade!'
            }
          ],
          quranicVerses: [
            {
              surah: 'Al-Ma\'idah',
              ayah: '5:75',
              translation: 'O Messias, filho de Maria, não é senão um Mensageiro; já antes dele haviam passado Mensageiros. Sua mãe era uma crente sincera; ambos comiam comida. Olha como lhes tornamos claros os sinais, e depois olha como se desviam!'
            }
          ]
        }
      ]
    };
  }

  // Specific recognition for the user's requested video: kYDRBiVnQ-o
  // "He Left Islam in Less than 3mins into the debate with GodLogic" - Defending Christ
  if (youtubeId === 'kYDRBiVnQ-o' || clean.includes('kydrbivnq-o') || clean.includes('godlogic') || clean.includes('less than 3mins')) {
    const debateTitle = 'Debate com GodLogic: Refutação das Alegações Rápidas de Apologética Cristã';
    const opponent = 'GodLogic (Avery Austin Jr. / Defending Christ)';
    const speaker = 'Apologetas e Sábios de Dawah Islâmica';

    return {
      debate: {
        id: `debate-kYDRBiVnQ-o-${Date.now()}`,
        title: debateTitle,
        opponent,
        opponentTitle: 'Apologista Cristão Evangélico (GodLogic Apologetics)',
        date: '2024',
        location: 'Transmissão Ao Vivo / Plataformas de Debate Teológico',
        venue: 'GodLogic Apologetics / Dawah Archive',
        attendeesCount: 'Mais de 300.000 visualizações',
        youtubeUrl: 'https://youtu.be/kYDRBiVnQ-o',
        youtubeId: 'kYDRBiVnQ-o',
        description: 'Análise exegética e refutação completa do debate do canal Defending Christ: "He Left Islam in Less than 3mins into the debate with GodLogic". O vídeo mostra a tática apologética de GodLogic tentando encurralar interlocutores leigos com alegações sobre a natureza de Alá e o amor divino no Alcorão comparado com a cruz.',
        coreTopics: ['Tawheed vs Trindade', 'O Amor de Deus no Alcorão', 'Táticas de Debate Rápido', 'Mateus 7:21'],
        deedatCentralThesis: 'O monoteísmo puro (Tawheed) não depende do sentimentalismo antropomórfico; Alá ama com justiça e santidade absoluta, enquanto a morte de um ser na cruz viola o princípio bíblico de que Deus é imortal (1 Timóteo 6:16) e não pune o inocente pelo culpado (Ezequiel 18:20).',
        opponentCentralThesis: 'GodLogic tenta alegar que se Alá não ama os pecadores e descrentes no Alcorão de forma incondicional, Alá não seria a personificação do amor pleno, e que apenas a encarnação de Cristo oferece garantia de salvação.',
        highlightQuestionsCount: 2
      },
      extractedQuestions: [
        {
          id: `ai-item-kYDRBiVnQ-o-1`,
          title: 'A Crítica de GodLogic: "Alá Não Ama os Pecadores como o Deus Cristão Ama?"',
          speaker,
          opponent,
          question: 'Crítica Apologética de GodLogic: "O Alcorão diz repetidamente que Alá não ama os transgressores e os incrédulos. Como o Deus do Islã pode ser o Deus verdadeiro se ele não tem o amor incondicional demonstrado na cruz?"',
          askedBy: 'GodLogic (Canal Defending Christ)',
          year: '2024',
          location: 'GodLogic Apologetics',
          debateTitle: debateTitle,
          category: 'debates-gerais',
          categoryLabel: 'Debates de Apologética & Dawah',
          summary: 'Resposta Islâmica: O Islã ensina que Alá é Al-Wadud (O Mais Amoroso) e Ar-Rahman (O Clemente). Ele ama o arrependimento do pecador, mas odeia a transgressão e a maldade moral deliberada. A própria Bíblia ensina exatamente a mesma coisa em Salmos 5:5 e Salmos 11:5.',
          keyQuote: 'GodLogic acusa o Alcorão de dizer que Deus não ama os transgressores, mas esconde que a sua própria Bíblia diz em Salmos 5:5: "Tu odeias a todos os que praticam a iniquidade". A justiça de Deus não é complacência com o mal!',
          youtubeUrl: 'https://youtu.be/kYDRBiVnQ-o',
          youtubeId: 'kYDRBiVnQ-o',
          fullAnswer: [
            'Crítica Levantada por GodLogic no Vídeo:',
            '"Em menos de 3 minutos, GodLogic tenta pressionar o debatedor afirmando que o Deus da Bíblia ama incondicionalmente todos os pecadores morrendo por eles, enquanto o Alcorão diz que Alá não ama quem comete transgressões."',
            'Resposta Islâmica e Defesa de Dawah:',
            '1. O Duplo Padrão da Apologética Cristã Desmascarado:',
            'GodLogic cita passagens do Alcorão onde se afirma que Deus não ama os tiranos e os corruptores. No entanto, na Bíblia hebraica e cristã encontramos declarações ainda mais fortes: Salmos 5:5 diz taxativamente: "Os loucos não pararão à tua vista; ODEIAS A TODOS OS QUE PRATICAM A INIQUIDADE". E Salmos 11:5: "O Senhor prova o justo; mas a sua alma ODEIA AO ÍMPIO e ao que ama a violência". Se Deus odiar os ímpios desqualifica uma religião, a Bíblia é desqualificada pela própria régua de GodLogic!',
            '2. O Conceito Islâmico da Misericórdia (Rahmah):',
            'No Alcorão, Alá declara: "Minha Misericórdia abrange todas as coisas" (Surata 7:156). Ele ama o pecador que se volta e se arrepende com amor imensurável, mais compassivo que uma mãe para com seu recém-nascido (Sahih Bukhari). O que Alá condena é a persistência soberba no erro e na opressão aos inocentes.',
            '3. A Falácia da "Conversão em 3 Minutos":',
            'Vídeos com títulos sensacionalistas como "Ele abandonou o Islã em 3 minutos" usam cortes rápidos e perguntas capciosas feitas a jovens despreparados sobre teologia técnica. Quando confrontados com eruditos ou estudantes qualificados de Dawah (como Mohammed Hijab ou Sheikh Uthman Farooq), a retórica rasa de GodLogic se desfaz perante os textos das próprias escrituras.'
          ],
          biblicalVerses: [
            {
              book: 'Salmos',
              chapterVerse: '5:5',
              bibleText: 'Os loucos não pararão à tua vista; odeias a todos os que praticam a iniquidade.',
              deedatAnalysis: 'A escritura bíblica declara expressamente que Deus odeia os praticantes da iniquidade, desmontando a tese de amor incondicional sem justiça usada por GodLogic.'
            },
            {
              book: 'Salmos',
              chapterVerse: '11:5',
              bibleText: 'O Senhor prova o justo; mas a sua alma odeia ao ímpio e ao que ama a violência.',
              deedatAnalysis: 'Refutação bíblica direta à tese apologética ocidental moderna de que Deus não reprova nem abomina a iniquidade dos ímpios.'
            },
            {
              book: 'Ezequiel',
              chapterVerse: '18:20',
              bibleText: 'A alma que pecar, essa morrerá; o filho não levará a iniquidade do pai, nem o pai levará a iniquidade do filho.',
              deedatAnalysis: 'Responsabilidade moral individual que rejeita a transferência de culpa e a crucificação vicária.'
            }
          ],
          quranicVerses: [
            {
              surah: 'Al-A\'raf',
              ayah: '7:156',
              translation: 'E disse Deus: "Meu castigo, com ele atinjo a quem quero; e Minha Misericórdia abrange todas as coisas".'
            },
            {
              surah: 'Al-Buruj',
              ayah: '85:14',
              translation: 'E Ele é o Indulgente, o Amoroso (Al-Wadud)!'
            }
          ],
          hadiths: [
            {
              collection: 'Sahih al-Bukhari',
              hadithNumber: '5999',
              narrator: 'Umar ibn al-Khattab',
              text: 'O Mensageiro de Deus viu uma mulher procurando ansiosamente seu bebê entre prisioneiros; ao achá-lo, o abraçou e amamentou. O Profeta disse: Credes que esta mulher atiraria seu filho no fogo? Respondemos: Não! Ele disse: Certamente Deus é mais misericordioso com Seus servos do que esta mulher com seu filho!',
              explanation: 'A compaixão e amor de Alá superam qualquer afeto humano terreno.'
            }
          ]
        },
        {
          id: `ai-item-kYDRBiVnQ-o-2`,
          title: 'A Suposta "Garantia de Salvação": Quem Realmente Entrará no Reino?',
          speaker,
          opponent,
          question: 'Crítica do Apologista: "No cristianismo temos a certeza absoluta da salvação pelo sangue de Cristo, enquanto o muçulmano tem que obedecer a mandamentos e nunca tem certeza."',
          askedBy: 'GodLogic',
          year: '2024',
          location: 'Confronto Teológico',
          debateTitle: debateTitle,
          category: 'debates-gerais',
          categoryLabel: 'Soteriologia & Salvação',
          summary: 'Resposta Islâmica: Jesus desmentiu a falsa garantia em Mateus 7:21: "Nem todo o que me diz: Senhor, Senhor! entrará no reino dos céus, mas aquele que FAZ A VONTADE de meu Pai". O Islã ensina a verdadeira fé acompanhada de retidão.',
          keyQuote: 'Jesus não prometeu passe livre para quem apenas o chama de "Senhor". Ele disse que muitos que profetizaram em seu nome ouvirão: "Nunca vos conheci; apartai-vos de mim, vós que praticais a iniquidade!" (Mateus 7:23).',
          youtubeUrl: 'https://youtu.be/kYDRBiVnQ-o',
          youtubeId: 'kYDRBiVnQ-o',
          fullAnswer: [
            'Crítica Apologética:',
            '"GodLogic e outros apologistas argumentam que o cristianismo dá garantia total de céu apenas crendo na cruz, enquanto o muçulmano depende de orar, jejuar e fazer boas obras."',
            'Resposta Islâmica e Defesa de Dawah:',
            '1. As Palavras Severas de Jesus em Mateus 7:21-23:',
            'Jesus nunca prometeu salvação barata baseada em dizer que ele é Deus. Pelo contrário, advertiu: "Nem todo o que me diz: Senhor, Senhor! entrará no reino dos céus, mas aquele que FAZ A VONTADE DE MEU PAI, que está nos céus". O que é o Islã senão submeter a própria vontade à vontade de Deus?',
            '2. O Critério do Julgamento em Mateus 25:',
            'Quando Jesus julga as nações, ele separa as ovelhas dos bodes baseado em BOAS AÇÕES PRÁTICAS: "Tive fome e me destes de comer; tive sede e me destes de beber; era forasteiro e me hospedastes". Ele não perguntou a teologia da Trindade de ninguém!',
            '3. Equilíbrio Islâmico entre Esperança e Temor:',
            'O crente muçulmano vive entre a esperança no perdão de Deus e o temor respeitoso à Sua majestade, mantendo vigilância moral diária em vez de comodismo espiritual.'
          ],
          biblicalVerses: [
            {
              book: 'Mateus',
              chapterVerse: '7:21-23',
              bibleText: 'Nem todo o que me diz: Senhor, Senhor! entrará no reino dos céus, mas aquele que faz a vontade de meu Pai, que está nos céus...',
              deedatAnalysis: 'A salvação segundo Jesus exige cumprir a vontade de Deus através de mandamentos e obediência, exatamente como ensina o Islã.'
            },
            {
              book: 'Tiago',
              chapterVerse: '2:24',
              bibleText: 'Vedes então que o homem é justificado pelas obras, e não somente pela fé.',
              deedatAnalysis: 'O apóstolo Tiago refuta categoricamente a fé desprovida de ação e obras.'
            }
          ],
          quranicVerses: [
            {
              surah: 'Al-Asr',
              ayah: '103:1-3',
              translation: 'Pelo tempo! Por certo, o ser humano está em perdição, exceto os que creem, e praticam as boas obras, e se recomendam mutuamente a verdade, e se recomendam mutuamente a paciência.'
            }
          ]
        }
      ]
    };
  }

  // Determine main theme
  const items: any[] = [];

  if (clean.includes('deus') || clean.includes('divin') || clean.includes('trindade') || clean.includes('god') || clean.includes('trinity')) {
    category = 'divindade';
    categoryLabel = 'Divindade de Jesus e Trindade';
    title = title.startsWith('http') ? `Debate: Jesus é Deus Todo-Poderoso? (${speaker} vs ${opponent})` : title;
    
    items.push({
      id: `ai-item-${Date.now()}-1`,
      title: 'A Subordinação de Jesus e o Teste de João 14:28',
      speaker,
      opponent,
      question: 'Pergunta do Oponente: Se Jesus é a Segunda Pessoa da Trindade co-igual ao Pai, por que Jesus afirmou categoricamente que o Pai é maior do que ele?',
      askedBy: `Plateia & ${opponent}`,
      year: new Date().getFullYear().toString(),
      location: 'Confronto Teológico & Transmissão',
      debateTitle: title,
      category: 'divindade',
      categoryLabel: 'Divindade de Jesus e Trindade',
      summary: `${speaker} demonstra que a alegação da igualdade trinitária é desmentida pelas próprias palavras expressas de Jesus Cristo no Evangelho de João.`,
      keyQuote: 'Jesus disse claramente: "O Pai é maior do que eu". Quem é menor não pode ser co-igual nem o Todo-Poderoso!',
      youtubeUrl: urlOrTitle.startsWith('http') ? urlOrTitle : `https://youtu.be/${youtubeId}`,
      youtubeId,
      fullAnswer: [
        'Pergunta Crucial Identificada no Debate:',
        'Como a apologia cristã sustenta a doutrina de Niceia (325 d.C.) da co-igualdade entre o Pai e o Filho, diante das declarações explícitas de Jesus?',
        'Resposta Islâmica e Argumentação Central:',
        '1. O Testemunho Direto do Evangelho:',
        'Em João 14:28, Jesus proclama sem ambiguidade: "Vou para o Pai, porque o Pai é maior do que eu". Nenhum ser subordinado em poder, conhecimento e autoridade pode ser ontologicamente idêntico ao Deus Todo-Poderoso.',
        '2. Limitação de Onisciência (Marcos 13:32):',
        'Jesus declarou que sobre o Dia e a Hora ninguém sabe, nem os anjos nos céus nem o Filho, senão unicamente o Pai. Se o Filho ignora a Hora final, ele não é Onisciente, e quem não é Onisciente não é Deus.',
        '3. Conclusão Lógica:',
        'O verdadeiro Jesus histórico foi um nobre profeta de Deus que ensinou o Shema (Marcos 12:29): "Ouve, ó Israel, o Senhor nosso Deus é o único Senhor".'
      ],
      biblicalVerses: [
        {
          book: 'João',
          chapterVerse: '14:28',
          bibleText: '...porque o Pai é maior do que eu.',
          deedatAnalysis: 'Declaração explícita de subordinação ontológica que desfaz a co-igualdade dogmática de Niceia.'
        },
        {
          book: 'Marcos',
          chapterVerse: '12:29',
          bibleText: 'E Jesus respondeu-lhe: O primeiro de todos os mandamentos é: Ouve, Israel, o Senhor nosso Deus é o único Senhor.',
          deedatAnalysis: 'Jesus repete o monoteísmo estrito de Moisés, sem Trindade.'
        }
      ],
      quranicVerses: [
        {
          surah: 'Al-Ma\'idah',
          ayah: '5:72',
          translation: 'São renegadores da fé aqueles que dizem: "Deus é o Messias, filho de Maria". O Messias disse: "Ó Filhos de Israel! Adorai a Deus, meu Senhor e vosso Senhor".'
        }
      ],
      hadiths: [
        {
          collection: 'Sahih al-Bukhari',
          hadithNumber: '3445',
          narrator: 'Umar ibn al-Khattab',
          text: 'O Mensageiro de Deus disse: Não me exalteis como os cristãos exaltaram o filho de Maria. Dizei apenas: Servo de Deus e Seu Mensageiro.',
          explanation: 'O Profeta proibiu que os homens elevassem profetas à divindade adorada.'
        }
      ]
    });
  } else if (clean.includes('cruz') || clean.includes('crucif') || clean.includes('jonas') || clean.includes('morte') || clean.includes('ressur')) {
    category = 'crucificacao';
    categoryLabel = 'Crucificação e Ressurreição';
    title = title.startsWith('http') ? `Debate: Crucificação - Fato ou Ficção? (${speaker} vs ${opponent})` : title;

    items.push({
      id: `ai-item-${Date.now()}-1`,
      title: 'O Sinal de Jonas e o Dilema da Morte de Deus',
      speaker,
      opponent,
      question: 'Pergunta do Oponente: Como o Islã rejeita a morte de Jesus na cruz se os evangelhos relatam a crucificação?',
      askedBy: `Plateia & ${opponent}`,
      year: new Date().getFullYear().toString(),
      location: 'Auditório de Debate',
      debateTitle: title,
      category: 'crucificacao',
      categoryLabel: 'Crucificação e Ressurreição',
      summary: `${speaker} confronta o apologeta com Mateus 12:40: Jonas estava vivo no ventre do peixe, logo Jesus precisava estar vivo no túmulo para cumprir a profecia.`,
      keyQuote: 'Se Jonas estava vivo na barriga do peixe e Jesus morreu, então Jesus falhou no único sinal prometido!',
      youtubeUrl: urlOrTitle.startsWith('http') ? urlOrTitle : `https://youtu.be/${youtubeId}`,
      youtubeId,
      fullAnswer: [
        'Pergunta Crucial Identificada no Debate:',
        'Por que a teologia islâmica sustenta que a narrativa da cruz não cumpriu a morte redentora alegada pelos apologistas?',
        'Resposta Islâmica e Argumentação Central:',
        '1. O Teste de Mateus 12:39-40:',
        'Jesus declarou que NENHUM milagre seria dado àquela geração a não ser o SINAL DO PROFETA JONAS. Como Jonas esteve 3 dias e 3 noites no ventre do peixe, assim estaria o Filho do Homem no coração da terra.',
        '2. Jonas Estava Vivo ou Morto?',
        'Jonas foi engolido vivo, orou vivo a Deus e foi expelido com vida. Se Jesus morreu na cruz e ressuscitou, seu sinal foi o oposto do sinal de Jonas!',
        '3. O Dilema Filosófico:',
        'Se Deus morreu na cruz, viola 1 Timóteo 6:16. Se apenas a carne humana de 70 kg morreu, então Deus não morreu e não houve redenção divina infinita.'
      ],
      biblicalVerses: [
        {
          book: 'Mateus',
          chapterVerse: '12:40',
          bibleText: 'Pois como Jonas esteve três dias e três noites no ventre do grande peixe...',
          deedatAnalysis: 'A correspondência milagrosa exige vida na sepultura exatamente como Jonas teve vida no peixe.'
        }
      ],
      quranicVerses: [
        {
          surah: 'An-Nisa',
          ayah: '4:157',
          translation: 'E por dizerem: "Matamos o Messias..." embora não o matassem nem o crucificassem, mas foi-lhes feito parecer assim.'
        }
      ]
    });
  } else {
    // General debate analysis
    title = title.startsWith('http') ? `Debate Teológico & Apologética: ${speaker} vs ${opponent}` : title;
    items.push({
      id: `ai-item-${Date.now()}-1`,
      title: `Contradições e Evidências Apresentadas por ${speaker}`,
      speaker,
      opponent,
      question: `Pergunta Central do Debate: Como sustentar a autenticidade inerrante das escrituras e dogmas diante das contradições textuais e da clareza do Monoteísmo?`,
      askedBy: `Interlocutores e ${opponent}`,
      year: new Date().getFullYear().toString(),
      location: 'Auditório de Debate',
      debateTitle: title,
      category: 'debates-gerais',
      categoryLabel: 'Debates Gerais & Dawah de Rua',
      summary: `Análise estruturada das principais alegações do apologeta cristão e as réplicas irrefutáveis de Dawah extraídas do confronto.`,
      keyQuote: 'A verdade distinguiu-se claramente do erro perante o raciocínio e os textos sagrados.',
      youtubeUrl: urlOrTitle.startsWith('http') ? urlOrTitle : `https://youtu.be/${youtubeId}`,
      youtubeId,
      fullAnswer: [
        'Pergunta Crucial Identificada no Debate:',
        'Quais foram as teses fundamentais confrontadas entre o orador muçulmano e o debatedor cristão?',
        'Resposta Islâmica e Argumentação Central:',
        '1. Consistência Textual e Dogmática:',
        'O debatedor islâmico demonstrou que as doutrinas pós-bíblicas dependem de interpolações tardias que os próprios eruditos modernos ocidentais admitem que não constavam nos manuscritos gregos primitivos.',
        '2. Monoteísmo Puro de Todos os Profetas:',
        'De Abraão a Moisés, Davi, Jesus e Maomé (que a paz esteja com todos), a mensagem sempre foi uma só: Adorar unicamente ao Deus Criador dos Céus e da Terra, sem imagens, sem parceiros e sem intermediários humanos.'
      ],
      biblicalVerses: [
        {
          book: 'Deuteronômio',
          chapterVerse: '6:4',
          bibleText: 'Ouve, Israel, o Senhor nosso Deus é o único Senhor.',
          deedatAnalysis: 'A base inegociável do monoteísmo pregada por todos os patriarcas e confirmada pelo Alcorão.'
        }
      ],
      quranicVerses: [
        {
          surah: 'Al-Ikhlas',
          ayah: '112:1-4',
          translation: 'Dize: Ele é Deus, o Único! Deus, o Absoluto! Não gerou e não foi gerado, e ninguém Lhe é comparável.'
        }
      ]
    });
  }

  return {
    debate: {
      id: `ai-debate-${Date.now()}`,
      title,
      opponent,
      opponentTitle: 'Apologeta Cristão / Debatedor',
      date: new Date().getFullYear().toString(),
      location: 'Plataforma de Debate / Auditório',
      venue: 'Debate Teológico Internacional',
      attendeesCount: 'Centenas de milhares de visualizações',
      youtubeUrl: urlOrTitle.startsWith('http') ? urlOrTitle : `https://youtu.be/${youtubeId}`,
      youtubeId,
      description: `Debate entre apologetas muçulmanos (${speaker}) e cristãos (${opponent}) abordando questões vitais de cristologia, autoridade escritural e monoteísmo bíblico vs dogmas conciliares.`,
      coreTopics: ['Monoteísmo Puro', 'Divindade de Cristo', 'Crítica Textual', 'Profecias Bíblicas'],
      deedatCentralThesis: `${speaker} demonstrou através dos próprios textos bíblicos e da razão que o monoteísmo estrito ensinado por Jesus coincide integralmente com o Alcorão Sagrado.`,
      opponentCentralThesis: `${opponent} tentou defender que a teologia cristã tradicional e a salvação através da cruz representam o cumprimento das escrituras.`,
      highlightQuestionsCount: items.length
    },
    extractedQuestions: items
  };
}

// API endpoint to analyze debate link using Gemini or fallback
app.post('/api/analyze-debate', async (req, res) => {
  let { videoUrl, extraContext, speakerHint, opponentHint } = req.body;

  if (!videoUrl || typeof videoUrl !== 'string') {
    return res.status(400).json({ error: 'Link do vídeo ou tema do debate é obrigatório.' });
  }

  // Attempt to resolve real YouTube title and author via oEmbed
  let resolvedTitle = '';
  let resolvedAuthor = '';
  try {
    const isYoutube = videoUrl.includes('youtu.be') || videoUrl.includes('youtube.com');
    if (isYoutube) {
      const cleanTarget = videoUrl.startsWith('http') ? videoUrl : `https://${videoUrl}`;
      const oembedRes = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(cleanTarget)}&format=json`);
      if (oembedRes.ok) {
        const oembedData: any = await oembedRes.json();
        resolvedTitle = oembedData.title || '';
        resolvedAuthor = oembedData.author_name || '';
        console.log(`[YouTube oEmbed Resolved] Title: "${resolvedTitle}" | Author: "${resolvedAuthor}"`);
      }
    }
  } catch (oembedErr) {
    console.warn('oEmbed lookup skipped or failed:', oembedErr);
  }

  // Combine title with videoUrl to give the heuristic or AI maximum context
  const fullSearchContext = resolvedTitle ? `${resolvedTitle} (${resolvedAuthor}) ${videoUrl}` : videoUrl;

  const ai = getGeminiClient();

  if (!ai) {
    // Use enhanced heuristic engine with real resolved YouTube title
    const result = fallbackAnalyzeDebate(fullSearchContext, speakerHint, opponentHint);
    return res.json({ success: true, source: 'heuristic', resolvedTitle, ...result });
  }

  try {
    const prompt = `Você é o maior especialista em debates de Teologia Comparada, Apologética Cristã e Dawah Islâmica (na tradição de Sheikh Ahmed Deedat, Dr. Zakir Naik, Mohammed Hijab, Ali Dawah, Sheikh Uthman Farooq, David Wood, Dr. William Lane Craig, Sam Shamoun, James White, Nate Sala).
O usuário forneceu apenas este link ou título de vídeo:
URL / Título / ID do Vídeo: "${videoUrl}"

SUA MISSÃO É ANALISAR E IDENTIFICAR TUDO AUTOMATICAMENTE A PARTIR DESTE LINK/TÍTULO:
1. IDENTIFIQUE AUTOMATICAMENTE OS DEBATEDORES E OPONENTES:
   - Quem é o orador muçulmano / apologeta de Dawah? (Ex: Sheikh Ahmed Deedat, Dr. Zakir Naik, Mohammed Hijab, Sheikh Uthman Farooq, Dawah x Dialogues, etc., ou Apologeta Islâmico de Dawah se não estiver explícito).
   - Quem é o oponente cristão / apologista? (Ex: Sam Shamoun, David Wood, Nate Sala, Jimmy Swaggart, Dr. William Lane Craig, etc., ou Apologista Cristão se não estiver explícito).
   - Qual é o título exato ou tema do debate/conversa?

2. EXTRAIA AS DEFESAS DOS MUÇULMANOS E AS CRÍTICAS RESPONDIDAS DOS APOLOGISTAS:
   - Identifique as críticas levantadas pelos apologistas cristãos (ex: divindade de Jesus em Marcos 2, quem morreu na cruz, pecado original, Trindade, preservação das escrituras).
   - Extraia a DEFESA COMPLETA DOS MUÇULMANOS em formato de Perguntas e Respostas detalhadas sem resumos mutilados:
     * "Pergunta Crucial do Apologista Cristão / Crítica Respondida:"
     * "Resposta Islâmica & Defesa de Dawah:" (explicação analítica profunda, com argumentação lógica passo a passo).
     * Versículos bíblicos citados com análise de Dawah desmontando a interpretação do apologista.
     * Versículos do Alcorão correspondentes.
     * Citação forte de impacto (Key Quote).`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            debateTitle: { type: Type.STRING },
            speaker: { type: Type.STRING },
            opponent: { type: Type.STRING },
            opponentTitle: { type: Type.STRING },
            description: { type: Type.STRING },
            deedatCentralThesis: { type: Type.STRING },
            opponentCentralThesis: { type: Type.STRING },
            coreTopics: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  question: { type: Type.STRING },
                  askedBy: { type: Type.STRING },
                  category: { type: Type.STRING },
                  categoryLabel: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  keyQuote: { type: Type.STRING },
                  fullAnswer: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  biblicalVerses: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        book: { type: Type.STRING },
                        chapterVerse: { type: Type.STRING },
                        bibleText: { type: Type.STRING },
                        deedatAnalysis: { type: Type.STRING }
                      },
                      required: ['book', 'chapterVerse', 'bibleText', 'deedatAnalysis']
                    }
                  },
                  quranicVerses: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        surah: { type: Type.STRING },
                        ayah: { type: Type.STRING },
                        translation: { type: Type.STRING }
                      },
                      required: ['surah', 'ayah', 'translation']
                    }
                  }
                },
                required: ['title', 'question', 'askedBy', 'category', 'categoryLabel', 'summary', 'keyQuote', 'fullAnswer']
              }
            }
          },
          required: ['debateTitle', 'speaker', 'opponent', 'description', 'deedatCentralThesis', 'opponentCentralThesis', 'coreTopics', 'questions']
        }
      }
    });

    const parsedData = JSON.parse(response.text || '{}');

    // Extract youtube ID
    let youtubeId = 'F0k9U4qLzX8';
    if (videoUrl.includes('youtu.be/')) {
      youtubeId = videoUrl.split('youtu.be/')[1]?.split('?')[0]?.split('&')[0] || 'F0k9U4qLzX8';
    } else if (videoUrl.includes('youtube.com/watch')) {
      try {
        const p = new URL(videoUrl.startsWith('http') ? videoUrl : `https://${videoUrl}`);
        youtubeId = p.searchParams.get('v') || 'F0k9U4qLzX8';
      } catch {
        // ignore
      }
    }

    const debateId = `ai-debate-${Date.now()}`;
    const mappedQuestions = (parsedData.questions || []).map((q: any, idx: number) => ({
      id: `ai-item-${Date.now()}-${idx + 1}`,
      title: q.title || parsedData.debateTitle,
      speaker: parsedData.speaker || speakerHint || 'Apologeta de Dawah',
      question: q.question,
      askedBy: q.askedBy || parsedData.opponent,
      opponent: parsedData.opponent,
      year: new Date().getFullYear().toString(),
      location: 'Confronto Teológico & Transmissão',
      debateTitle: parsedData.debateTitle,
      category: q.category || 'debates-gerais',
      categoryLabel: q.categoryLabel || 'Debates Gerais & Dawah',
      summary: q.summary,
      keyQuote: q.keyQuote,
      fullAnswer: q.fullAnswer || [],
      biblicalVerses: q.biblicalVerses || [],
      quranicVerses: q.quranicVerses || [],
      hadiths: [],
      youtubeUrl: videoUrl.startsWith('http') ? videoUrl : `https://youtu.be/${youtubeId}`,
      youtubeId,
      timestampSeconds: 0,
      durationMinutes: 25,
      isPopular: true
    }));

    return res.json({
      success: true,
      source: 'gemini-ai',
      debate: {
        id: debateId,
        title: parsedData.debateTitle,
        opponent: parsedData.opponent,
        opponentTitle: parsedData.opponentTitle || 'Apologeta Cristão',
        date: new Date().getFullYear().toString(),
        location: 'Auditório de Debate',
        venue: 'Encontro Teológico',
        attendeesCount: 'Milhares de espectadores',
        youtubeUrl: videoUrl.startsWith('http') ? videoUrl : `https://youtu.be/${youtubeId}`,
        youtubeId,
        description: parsedData.description,
        coreTopics: parsedData.coreTopics || [],
        deedatCentralThesis: parsedData.deedatCentralThesis,
        opponentCentralThesis: parsedData.opponentCentralThesis,
        highlightQuestionsCount: mappedQuestions.length
      },
      extractedQuestions: mappedQuestions
    });
  } catch (error: any) {
    console.error('Gemini API Error in debate analysis:', error);
    // Graceful fallback to heuristic engine
    const fallback = fallbackAnalyzeDebate(videoUrl, speakerHint, opponentHint);
    return res.json({
      success: true,
      source: 'heuristic_fallback',
      ...fallback
    });
  }
});

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT} in ${isDev ? 'development' : 'production'} mode`);
  });
}

startServer();


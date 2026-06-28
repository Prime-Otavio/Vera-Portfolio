import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Tapera.module.css'

/* ─── DATA ─────────────────────────────────────────────────── */

const pains = [
  { icon: '⚡', title: 'Equipamento parado = paciente cancelado', desc: 'Cada hora com o equipo fora de uso é dinheiro perdido. Dentistas pagam caro por isso.' },
  { icon: '🔍', title: 'Medo de técnico desconhecido', desc: 'Quem garante que ele não vai piorar? Equipamento odontológico é caro e delicado.' },
  { icon: '💸', title: 'Orçamento surpresa', desc: 'Ninguém gosta de aprovar um valor e depois receber uma conta maior. Transparência é tudo.' },
  { icon: '🔁', title: '"Resolveu mas voltou a dar problema"', desc: 'Experiências ruins com assistências anteriores criam resistência de compra enorme.' },
  { icon: '🚨', title: 'Urgência máxima na crise', desc: 'Quem liga às 7h da manhã com 10 pacientes marcados quer resposta AGORA, não amanhã.' },
  { icon: '⚖️', title: 'Reparar ou comprar novo?', desc: 'Muitos dentistas não sabem se vale a pena. Quem responde isso com autoridade vende mais.' },
]

const deliverables = [
  { num: '01', title: 'Visita técnica diagnóstico', sub: 'Isca principal', color: '#1E88E5' },
  { num: '02', title: 'Laudo técnico detalhado', sub: 'Prova de autoridade', color: '#003B8E' },
  { num: '03', title: 'Orçamento transparente', sub: 'Reduz atrito', color: '#1E88E5' },
  { num: '04', title: 'Reparo com garantia documentada', sub: 'Core offer', color: '#003B8E' },
  { num: '05', title: 'Contrato de manutenção preventiva', sub: 'Recorrência / upsell', color: '#1E88E5' },
  { num: '06', title: 'Relatório técnico pós-atendimento', sub: 'Fidelização', color: '#003B8E' },
]

const leakages = [
  { stage: 'Awareness', problem: 'Ninguém sabe que a Tapera existe na região de Salto/Itu/Indaiatuba', fix: 'Conteúdo local + SEO + tráfego segmentado por CEP' },
  { stage: 'Consideração', problem: 'Chegam na página mas não encontram prova social, não ligam', fix: 'Depoimentos em vídeo, tempo de resposta, garantias explícitas' },
  { stage: 'Decisão', problem: 'Pedem orçamento mas não fecham (medo do preço surpresa)', fix: 'Visita diagnóstico gratuita + orçamento antes de começar' },
  { stage: 'Pós-venda', problem: '26 anos de clientes mas zero sistema de reativação', fix: 'Lista de WhatsApp + sequência de reativação a cada 6 meses' },
  { stage: 'Recorrência', problem: 'Vende reparo mas não vende manutenção preventiva (contrato)', fix: 'Oferta de plano anual no momento do pós-reparo' },
]

const funnels = {
  quente: {
    label: 'FUNIL QUENTE',
    tag: 'Já me conhece / cliente antigo',
    color: '#1E88E5',
    tagline: 'Reativar quem já confiou uma vez. É o ouro mais fácil.',
    stages: [
      {
        num: '01', name: 'ISCA', icon: '🧲',
        what: '"Revisão Gratuita para Clientes Tapera" — oferta exclusiva de reativação',
        why: 'Clientes antigos têm a barreira de confiança zerada. Só precisam de um motivo para ligar.',
        how: 'Mensagem WhatsApp personalizada: "Faz quanto tempo que o seu equipo não passa por uma revisão? Estamos passando pela região de [cidade] esta semana. Visita diagnóstica: sem custo, sem compromisso."',
        headline: '⚡ Seu equipo está funcionando 100%? A gente descobre de graça.',
      },
      {
        num: '02', name: 'ENTREGA', icon: '📦',
        what: 'Visita diagnóstica presencial. Laudo técnico no ato.',
        why: 'Quem vê o técnico de perto confia mais. O laudo vira prova de autoridade.',
        how: 'Técnico vai ao consultório, avalia todos os equipamentos, entrega checklist físico/digital. Zero pressão de venda.',
      },
      {
        num: '03', name: 'TRIPWIRE', icon: '🎯',
        what: '"Limpeza e Calibragem Preventiva" — R$ 120 por equipamento',
        why: 'Micro-compromisso financeiro que abre o relacionamento. Dentista gasta pouco e vê resultado imediato.',
        how: 'Apresentada no final da visita: "Identificamos 3 pontos de atenção. Posso resolver dois agora por R$ 120 cada, sem peças novas."',
      },
      {
        num: '04', name: 'EDUCAÇÃO', icon: '📚',
        what: 'Sequência de 3 mensagens WhatsApp nos 30 dias seguintes',
        why: 'Mantém a Tapera na cabeça do dentista sem ser invasivo.',
        how: 'Dia 7: dica de conservação do equipo. Dia 15: "você sabia que X% dos estragos graves acontecem por falta de manutenção?" Dia 30: oferta do plano preventivo.',
      },
      {
        num: '05', name: 'CORE OFFER', icon: '🔧',
        what: 'Reparo completo com garantia de 90 dias por escrito',
        why: '26 anos de experiência + garantia documentada = vende sem objeção.',
        how: 'Orçamento detalhado antes de começar. Assinatura do cliente. Garantia em papel na entrega.',
      },
      {
        num: '06', name: 'UPSELL', icon: '📈',
        what: '"Plano Tapera Preventivo" — R$ 297/mês (2 equipamentos)',
        why: 'Quem já reparou uma vez sabe o valor. O plano evita a crise.',
        how: 'Apresentado na entrega do equipamento reparado: "Para nunca mais passar por isso, temos o plano mensal. Vou te mostrar o que está incluso."',
      },
      {
        num: '07', name: 'FOLLOW-UP', icon: '🔄',
        what: 'Sequência de recuperação para quem não aceitou o upsell',
        why: 'Timing. Quem não quer agora pode querer em 3 meses.',
        how: 'Email 1 (dia 3): "Como está o seu equipo após o reparo?" Email 2 (dia 30): depoimento de cliente do plano. Email 3 (dia 90): "Seu próximo reparo pode ser de graça com o plano."',
      },
    ],
  },
  morno: {
    label: 'FUNIL MORNO',
    tag: 'Indicação / ouviu falar',
    color: '#003B8E',
    tagline: 'Chegou com uma recomendação. Precisa de prova, não de apresentação.',
    stages: [
      {
        num: '01', name: 'ISCA', icon: '🧲',
        what: '"Guia: O que fazer quando seu equipo odontológico quebra" — PDF gratuito',
        why: 'Quem foi indicado busca confirmação da autoridade. O guia entrega isso antes do contato comercial.',
        how: 'Link direto na bio do Instagram / mensagem WhatsApp: "Você pediu, eu fiz. Baixa o guia grátis e descubra os 5 erros que transformam um reparo simples em reforma cara."',
        headline: 'Seu equipo quebrou? Antes de chamar qualquer técnico, leia isso.',
      },
      {
        num: '02', name: 'ENTREGA', icon: '📦',
        what: 'PDF de 8 páginas + vídeo de 3 min mostrando o processo de diagnóstico',
        why: 'Conteúdo de qualidade cria reciprocidade. Quem recebe algo valioso se sente em dívida.',
        how: 'Entregue via WhatsApp ou link direto. Após 48h, mensagem automática: "Conseguiu baixar? Posso tirar alguma dúvida?"',
      },
      {
        num: '03', name: 'TRIPWIRE', icon: '🎯',
        what: '"Diagnóstico Tapera Express" — R$ 0 (visita gratuita com orçamento)',
        why: 'Para quem foi indicado, a barreira é zero. A visita gratuita elimina qualquer resistência restante.',
        how: 'CTA claro no guia e na conversa: "Quer saber exatamente o que seu equipamento precisa? Agendo uma visita ainda essa semana, sem custo e sem compromisso."',
      },
      {
        num: '04', name: 'EDUCAÇÃO', icon: '📚',
        what: '3 posts de carrossel no Instagram + 1 Reels mostrando um reparo real',
        why: 'O indicado pesquisa no Instagram antes de fechar. Precisa encontrar conteúdo de qualidade.',
        how: 'Carrossel 1: "5 sinais que seu equipo vai parar logo". Carrossel 2: "Reparar ou comprar? Como decidir". Reels: antes/depois de um equipo reformado.',
      },
      {
        num: '05', name: 'CORE OFFER', icon: '🔧',
        what: 'Reparo completo com garantia + laudo técnico entregue ao cliente',
        why: 'Documentação profissional diferencia de técnicos informais da concorrência.',
        how: 'Orçamento detalhado enviado via PDF (não só no WhatsApp). Aprovação digital. Prazo acordado.',
      },
      {
        num: '06', name: 'UPSELL', icon: '📈',
        what: '"Plano Tapera Preventivo" — desconto de 20% para novos contratos no primeiro mês',
        why: 'Urgência legítima: oferta só válida por 7 dias após o serviço.',
        how: '"Clientes do plano têm atendimento prioritário em menos de 4h. Vale muito mais do que esperar o problema aparecer."',
      },
      {
        num: '07', name: 'FOLLOW-UP', icon: '🔄',
        what: 'Sequência de 3 emails/WhatsApp para quem pediu orçamento mas não fechou',
        why: '80% das vendas acontecem entre o 5º e o 12º contato.',
        how: 'Msg 1 (dia 2): "Vi que você recebeu o orçamento. Posso esclarecer alguma dúvida?" Msg 2 (dia 7): depoimento de cliente. Msg 3 (dia 14): oferta de parcelamento.',
      },
    ],
  },
  frio: {
    label: 'FUNIL FRIO',
    tag: 'Nunca me viu / tráfego pago',
    color: '#00245C',
    tagline: 'Completo desconhecido. Precisa de atenção, confiança e urgência — nessa ordem.',
    stages: [
      {
        num: '01', name: 'ISCA', icon: '🧲',
        what: '"Calculadora: Reparar ou Comprar Novo?" — ferramenta interativa gratuita',
        why: 'Desperta curiosidade imediata. Todo dentista já teve essa dúvida. Gera lead sem falar de preço.',
        how: 'Anúncio no Instagram/Facebook segmentado para dentistas nas cidades alvo. Copy do anúncio: "Seu compressor parou de vez? Descubra em 2 minutos se vale mais reparar ou comprar novo — sem precisar ligar pra ninguém."',
        headline: 'Antes de gastar R$ 8.000 num equipamento novo, responda 4 perguntas.',
        headlines: [
          'Antes de gastar R$ 8.000 num equipamento novo, responda 4 perguntas.',
          'Seu equipo odontológico parou? Descubra em 2 min se tem conserto.',
          '26 anos consertando equipamentos odontológicos em Salto, Itu e Indaiatuba.',
        ],
      },
      {
        num: '02', name: 'ENTREGA', icon: '📦',
        what: 'Resultado personalizado da calculadora + recomendação + convite para diagnóstico',
        why: 'Entrega valor imediato. Já posiciona a Tapera como autoridade antes de qualquer conversa.',
        how: 'Resultado exibido na tela + PDF enviado via WhatsApp automaticamente. Técnico entra em contato em até 1h útil.',
      },
      {
        num: '03', name: 'TRIPWIRE', icon: '🎯',
        what: '"Diagnóstico Presencial Gratuito" — sem custo, sem compromisso, com laudo no ato',
        why: 'Para frio, a visita grátis remove a barreira de risco. Nada a perder.',
        how: 'Mensagem imediata: "Olá [nome], sou [técnico] da Tapera, 26 anos consertando equipamentos odontológicos em [cidade]. Vi sua resposta e quero entender melhor o problema. Posso ir ao seu consultório esta semana sem nenhum custo?"',
      },
      {
        num: '04', name: 'EDUCAÇÃO', icon: '📚',
        what: 'Sequência de conteúdo no Instagram por 21 dias antes da decisão',
        why: 'Frio precisa de mais prova social antes de confiar. Conteúdo consistente constrói isso.',
        how: 'Semana 1: quem é a Tapera (26 anos, autorizados Olsen e Evotech). Semana 2: cases de sucesso reais. Semana 3: conteúdo educativo sobre conservação de equipamentos.',
      },
      {
        num: '05', name: 'CORE OFFER', icon: '🔧',
        what: 'Reparo completo com orçamento aprovado antes + garantia de 90 dias + laudo técnico',
        why: 'Transparência total elimina o maior medo do público frio: "o que vou pagar no final?"',
        how: 'Apresentação do orçamento em 3 etapas: (1) diagnóstico, (2) aprovação do cliente, (3) execução. Zero surpresa.',
      },
      {
        num: '06', name: 'UPSELL', icon: '📈',
        what: '"Kit Proteção Total" = Plano Preventivo 12 meses + visita bônus semestral',
        why: 'Para quem estava frio e acabou de confiar, a oferta anual com bônus fecha mais fácil que mensal.',
        how: 'Copy: "Você já passou pelo sufoco de ter o consultório parado. O plano garante que isso nunca mais aconteça. E ainda tem uma visita extra inclusa."',
      },
      {
        num: '07', name: 'FOLLOW-UP', icon: '🔄',
        what: 'Sequência de 3 mensagens para recuperar leads que não agendaram diagnóstico',
        why: 'A maioria não fecha na primeira vez. O follow-up sistemático é o que separa quem vende de quem apenas atende.',
        how: 'Msg 1 (dia 3): prova social com depoimento de cliente da mesma cidade. Msg 2 (dia 10): conteúdo de valor + nova chamada. Msg 3 (dia 21): oferta especial com prazo real.',
      },
    ],
  },
}

const plan30 = [
  {
    week: 'Semana 1',
    label: 'Base e Perfis',
    days: 'Dias 1–7',
    tasks: [
      'Otimizar bio do Instagram e Facebook com as palavras-certas (equipo odontológico + cidades)',
      'Publicar foto profissional do técnico + 26 anos de experiência em destaque',
      'Ativar WhatsApp Business com mensagem de saudação automática',
      'Criar primeiro Reels: "Veja como eu recupero um equipo em 2 horas" (tutorial rápido)',
      'Postar 3 fotos de equipamentos já reparados com antes/depois',
    ],
  },
  {
    week: 'Semana 2',
    label: 'Isca e Primeira Conversão',
    days: 'Dias 8–14',
    tasks: [
      'Criar o PDF "O que fazer quando seu equipo quebra" (Canva Pro) e subir no Google Drive',
      'Publicar carrossel: "5 sinais que seu compressor odontológico vai parar"',
      'Disparar mensagem para os 2–3 clientes semanais com oferta de diagnóstico gratuito',
      'Ativar campanha de anúncios R$ 200 — segmentado para dentistas em Salto, Itu, Indaiatuba',
      'Criar Destaque no Instagram: "Depoimentos" e "Serviços"',
    ],
  },
  {
    week: 'Semana 3',
    label: 'Conteúdo e Autoridade',
    days: 'Dias 15–21',
    tasks: [
      'Publicar Reels mostrando um reparo de cadeira odontológica do início ao fim',
      'Criar carrossel: "Reparar ou comprar novo? Descubra em 4 passos"',
      'Pedir 1 depoimento em vídeo de um cliente satisfeito (incentivo: revisão grátis)',
      'Gravar Story: "26 anos consertando equipamentos — aqui está o que aprendi"',
      'Enviar follow-up para leads que pediram diagnóstico mas não agendaram',
    ],
  },
  {
    week: 'Semana 4',
    label: 'Conversão e Recorrência',
    days: 'Dias 22–30',
    tasks: [
      'Apresentar "Plano Tapera Preventivo" para clientes que já foram atendidos este mês',
      'Criar proposta visual do plano no Canva e enviar via WhatsApp',
      'Medir resultados: quantos leads vieram dos anúncios? Quantos fecharam?',
      'Ajustar a segmentação do anúncio com base nos resultados da semana 2',
      'Planejar conteúdo do mês 2 baseado no que gerou mais engajamento',
    ],
  },
]

const tools = [
  { name: 'WhatsApp Business', role: 'Canal principal de vendas e atendimento', free: true },
  { name: 'Instagram + Facebook', role: 'Geração de leads orgânico e pago', free: true },
  { name: 'Canva Pro', role: 'Criação de artes, PDFs e carrosséis', free: false, price: 'R$ 55/mês' },
  { name: 'Meta Ads', role: 'Anúncios segmentados por cidade e profissão', free: false, price: 'R$ 200 inicial' },
  { name: 'Google Meu Negócio', role: 'SEO local — aparecer no Google Maps', free: true },
  { name: 'Later / Buffer', role: 'Agendamento de posts (opcional)', free: true, price: 'versão gratuita' },
]

/* ─── HELPERS ──────────────────────────────────────────────── */

function FunnelStage({ stage, i, color }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`${styles.stage} ${open ? styles.stageOpen : ''}`}
      style={{ '--clr': color }}
      onClick={() => setOpen(!open)}
      data-cursor
    >
      <div className={styles.stageHeader}>
        <span className={styles.stageNum} style={{ background: color }}>{stage.num}</span>
        <span className={styles.stageIcon}>{stage.icon}</span>
        <span className={styles.stageName}>{stage.name}</span>
        <span className={styles.stageChevron}>{open ? '−' : '+'}</span>
      </div>
      {open && (
        <div className={styles.stageBody}>
          <div className={styles.stageRow}>
            <span className={styles.stageKey}>O QUE</span>
            <span className={styles.stageVal}>{stage.what}</span>
          </div>
          <div className={styles.stageRow}>
            <span className={styles.stageKey}>POR QUE</span>
            <span className={styles.stageVal}>{stage.why}</span>
          </div>
          <div className={styles.stageRow}>
            <span className={styles.stageKey}>COMO</span>
            <span className={styles.stageVal}>{stage.how}</span>
          </div>
          {stage.headline && (
            <div className={styles.headlineBox} style={{ borderColor: color }}>
              <span className={styles.headlineLabel}>HEADLINE</span>
              <p className={styles.headlineText}>"{stage.headline}"</p>
            </div>
          )}
          {stage.headlines && (
            <div className={styles.headlinesBox} style={{ borderColor: color }}>
              <span className={styles.headlineLabel}>3 VARIAÇÕES DE HEADLINE</span>
              {stage.headlines.map((h, i) => (
                <p key={i} className={styles.headlineText}>"{h}"</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function FunnelPanel({ id, funnel, active, setActive }) {
  const isActive = active === id
  return (
    <div className={`${styles.funnelPanel} ${isActive ? styles.funnelActive : ''}`}>
      <button
        className={styles.funnelTab}
        style={{ '--clr': funnel.color, borderColor: isActive ? funnel.color : 'transparent' }}
        onClick={() => setActive(isActive ? null : id)}
        data-cursor
      >
        <span className={styles.funnelTabLabel}>{funnel.label}</span>
        <span className={styles.funnelTabTag}>{funnel.tag}</span>
        <span className={styles.funnelTabChev}>{isActive ? '▲' : '▼'}</span>
      </button>

      {isActive && (
        <div className={styles.funnelContent}>
          <p className={styles.funnelTagline} style={{ color: funnel.color }}>{funnel.tagline}</p>
          <div className={styles.stages}>
            {funnel.stages.map((s, i) => (
              <FunnelStage key={s.num} stage={s} i={i} color={funnel.color} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── MAIN ─────────────────────────────────────────────────── */

export default function Tapera() {
  useReveal()
  const [activeF, setActiveF] = useState('quente')

  return (
    <div className={styles.page}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.logoBox}>
            <div className={styles.logoT}>T</div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>TAPERA</span>
              <span className={styles.logoSub}>Manutenção Odontológica</span>
            </div>
          </div>
          <div className={styles.heroTag}>
            <span className={styles.tagDot} />
            Arquitetura de Funil — RUSSEL Framework
          </div>
          <h1 className={`${styles.heroTitle} reveal`}>
            Funil de vendas para<br />
            <span className={styles.blue}>manutenção odontológica</span>
          </h1>
          <p className={`${styles.heroSub} reveal`}>
            26 anos de expertise. Zero sistema de conversão. Isso vai mudar agora.
            Mapeei cada vazamento, desenhei 3 funis completos e criei o plano de 30 dias
            para transformar 2–3 contatos semanais em uma máquina previsível de clientes.
          </p>
          <div className={`${styles.heroMeta} reveal`}>
            <div className={styles.metaItem}><span className={styles.metaNum}>3</span><span className={styles.metaLabel}>funis completos</span></div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}><span className={styles.metaNum}>21</span><span className={styles.metaLabel}>etapas detalhadas</span></div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}><span className={styles.metaNum}>30</span><span className={styles.metaLabel}>dias de execução</span></div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}><span className={styles.metaNum}>R$200</span><span className={styles.metaLabel}>investimento inicial</span></div>
          </div>
        </div>
        <div className={styles.gearBg} aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="78" stroke="#1E88E5" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.15" />
            <circle cx="100" cy="100" r="55" stroke="#003B8E" strokeWidth="1" opacity="0.1" />
            <circle cx="100" cy="100" r="32" fill="#003B8E" opacity="0.08" />
          </svg>
        </div>
      </section>

      {/* ── CONFIRMAÇÃO ─────────────────────────────────────── */}
      <section className={styles.confirm}>
        <div className={styles.inner}>
          <div className={`${styles.confirmBox} reveal`}>
            <span className={styles.confirmIcon}>✅</span>
            <div>
              <p className={styles.confirmText}>
                Elementos compreendidos, estou pronto.
              </p>
              <p className={styles.confirmSub}>
                1 Isca alinhada com dor · 2 Ponte de confiança · 3 Oferta irresistível + risco reverso · 4 Follow-up estratégico · 5 Upsell natural
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DORES DO PÚBLICO ─────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className="s-label reveal">diagnóstico do público</div>
          <h2 className="reveal">O que mantém o dentista<br /><em>acordado às 2h da manhã.</em></h2>
          <p className={`${styles.sectionSub} reveal`}>
            Antes de qualquer funil, entenda as dores reais. É daqui que saem as iscas, as headlines e as ofertas.
          </p>
          <div className={styles.painsGrid}>
            {pains.map((p, i) => (
              <div key={i} className={`${styles.painCard} reveal d${(i % 4) + 1}`}>
                <span className={styles.painIcon}>{p.icon}</span>
                <h3 className={styles.painTitle}>{p.title}</h3>
                <p className={styles.painDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTREGÁVEIS ─────────────────────────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <div className="s-label reveal">entregáveis do nicho</div>
          <h2 className="reveal">O que você vende<br /><em>além do conserto.</em></h2>
          <p className={`${styles.sectionSub} reveal`}>
            Cada entregável é uma oportunidade de funil. Mapeie bem para posicionar cada um no momento certo da jornada.
          </p>
          <div className={styles.delivGrid}>
            {deliverables.map((d, i) => (
              <div key={d.num} className={`${styles.delivCard} reveal d${(i % 4) + 1}`}>
                <div className={styles.delivNum} style={{ color: d.color }}>{d.num}</div>
                <div className={styles.delivTitle}>{d.title}</div>
                <div className={styles.delivSub} style={{ color: d.color }}>{d.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ETAPA 1: VAZAMENTOS ─────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className="s-label reveal">etapa 1</div>
          <h2 className="reveal">Mapeando os<br /><em>vazamentos.</em></h2>
          <p className={`${styles.sectionSub} reveal`}>
            Antes de construir o funil, precisamos saber onde o balde está furado.
            Identifiquei 5 pontos críticos de perda no negócio atual.
          </p>
          <div className={styles.leakTable}>
            {leakages.map((l, i) => (
              <div key={i} className={`${styles.leakRow} reveal d${(i % 4) + 1}`}>
                <div className={styles.leakStage}>
                  <span className={styles.leakNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.leakStageName}>{l.stage}</span>
                </div>
                <div className={styles.leakProblem}>
                  <span className={styles.leakLabel}>VAZAMENTO</span>
                  <p>{l.problem}</p>
                </div>
                <div className={styles.leakFix}>
                  <span className={styles.leakLabel}>SOLUÇÃO</span>
                  <p>{l.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ETAPA 2: OS 3 FUNIS ─────────────────────────────── */}
      <section className={styles.sectionAlt} id="funis">
        <div className={styles.inner}>
          <div className="s-label reveal">etapa 2</div>
          <h2 className="reveal">Os 3 funis<br /><em>completos.</em></h2>
          <p className={`${styles.sectionSub} reveal`}>
            Cada funil tem 7 etapas detalhadas. Clique para expandir e ver o que oferecer,
            por que funciona e como apresentar em cada momento da jornada.
          </p>
          <div className={styles.funnelsList}>
            {Object.entries(funnels).map(([id, f]) => (
              <FunnelPanel key={id} id={id} funnel={f} active={activeF} setActive={setActiveF} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MAPA VISUAL ─────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className="s-label reveal">mapa visual</div>
          <h2 className="reveal">Fluxo do funil<br /><em>esquemático.</em></h2>
          <div className={`${styles.mapWrap} reveal`}>
            <div className={styles.mapFlow}>
              {[
                { step: 'TRÁFEGO', sub: 'Meta Ads + Orgânico', icon: '📣', color: '#1E88E5' },
                { step: 'ISCA', sub: 'PDF / Ferramenta / Oferta', icon: '🧲', color: '#003B8E' },
                { step: 'LEAD', sub: 'WhatsApp capturado', icon: '👤', color: '#1E88E5' },
                { step: 'DIAGNÓSTICO', sub: 'Visita gratuita', icon: '🔍', color: '#003B8E' },
                { step: 'ORÇAMENTO', sub: 'Transparente + aprovação', icon: '📋', color: '#1E88E5' },
                { step: 'REPARO', sub: 'Core offer com garantia', icon: '🔧', color: '#003B8E' },
                { step: 'UPSELL', sub: 'Plano preventivo', icon: '📈', color: '#1E88E5' },
                { step: 'RECORRÊNCIA', sub: 'Cliente fidelizado', icon: '♾️', color: '#003B8E' },
              ].map((node, i, arr) => (
                <div key={i} className={styles.mapNode}>
                  <div className={styles.mapCircle} style={{ background: node.color }}>
                    <span className={styles.mapIcon}>{node.icon}</span>
                  </div>
                  <div className={styles.mapNodeText}>
                    <span className={styles.mapStep}>{node.step}</span>
                    <span className={styles.mapSub}>{node.sub}</span>
                  </div>
                  {i < arr.length - 1 && <div className={styles.mapArrow} style={{ background: node.color }} />}
                </div>
              ))}
            </div>

            <div className={styles.mapBranch}>
              <div className={styles.branchLabel}>Automações necessárias</div>
              <div className={styles.branchItems}>
                {[
                  'WhatsApp Business: saudação automática + catálogo de serviços',
                  'Mensagem de follow-up automática 48h após o diagnóstico',
                  'Lembrete de revisão semestral para clientes do plano',
                  'Sequência de 3 mensagens para leads que não fecharam',
                ].map((a, i) => (
                  <div key={i} className={styles.branchItem}>
                    <span className={styles.branchDot} style={{ background: i % 2 ? '#1E88E5' : '#003B8E' }} />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FERRAMENTAS ─────────────────────────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <div className="s-label reveal">ferramentas recomendadas</div>
          <h2 className="reveal">Stack mínimo para<br /><em>começar hoje.</em></h2>
          <div className={styles.toolsGrid}>
            {tools.map((t, i) => (
              <div key={i} className={`${styles.toolCard} reveal d${(i % 4) + 1}`}>
                <div className={styles.toolTop}>
                  <span className={styles.toolName}>{t.name}</span>
                  <span className={styles.toolBadge} style={{ background: t.free ? '#15803d' : '#003B8E' }}>
                    {t.free ? 'GRÁTIS' : t.price}
                  </span>
                </div>
                <p className={styles.toolRole}>{t.role}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.investBox} reveal`}>
            <div className={styles.investItem}>
              <span className={styles.investNum}>R$ 200</span>
              <span className={styles.investLabel}>investimento em anúncios (mês 1)</span>
            </div>
            <div className={styles.investDivider} />
            <div className={styles.investItem}>
              <span className={styles.investNum}>R$ 55</span>
              <span className={styles.investLabel}>Canva Pro (opcional)</span>
            </div>
            <div className={styles.investDivider} />
            <div className={styles.investItem}>
              <span className={styles.investNum}>R$ 255</span>
              <span className={styles.investLabel}>total mínimo para começar</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANO 30 DIAS ───────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className="s-label reveal">plano de 30 dias</div>
          <h2 className="reveal">Do zero ao primeiro<br /><em>cliente digital.</em></h2>
          <p className={`${styles.sectionSub} reveal`}>
            Passo a passo semanal para colocar o funil no ar com R$ 200 de investimento.
          </p>
          <div className={styles.plan}>
            {plan30.map((w, i) => (
              <div key={i} className={`${styles.planWeek} reveal d${i + 1}`}>
                <div className={styles.planWeekHeader}>
                  <span className={styles.planWeekNum}>{w.week}</span>
                  <span className={styles.planWeekLabel}>{w.label}</span>
                  <span className={styles.planWeekDays}>{w.days}</span>
                </div>
                <ul className={styles.planTasks}>
                  {w.tasks.map((t, j) => (
                    <li key={j} className={styles.planTask}>
                      <span className={styles.planCheck}>→</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAILS DE RECUPERAÇÃO ───────────────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <div className="s-label reveal">recuperação de leads</div>
          <h2 className="reveal">3 mensagens que<br /><em>reabrem a conversa.</em></h2>
          <p className={`${styles.sectionSub} reveal`}>
            Para leads que chegaram na oferta mas não fecharam ainda.
          </p>
          <div className={styles.emailsList}>
            {[
              {
                num: '01',
                day: 'Dia 3',
                subject: 'Oi [nome], ficou alguma dúvida?',
                body: `Oi [nome], tudo bem?

Vi que você recebeu o orçamento mas ainda não tivemos retorno.

Quero ter certeza que ficou tudo claro — às vezes o valor preocupa, às vezes é o prazo, às vezes é só o timing mesmo.

Me conta: o que te travou?

Estou aqui pra ajudar a decidir o melhor caminho — seja o reparo, seja uma consulta técnica pra entender melhor o problema.

[Técnico] — Tapera Manutenção Odontológica
26 anos cuidando dos seus equipamentos`,
                color: '#1E88E5',
              },
              {
                num: '02',
                day: 'Dia 7',
                subject: 'O que o Dr. [outro cliente] disse depois do reparo',
                body: `Oi [nome],

Ontem terminamos um atendimento na clínica do Dr. [X] aqui em [cidade].

O equipo estava parado há 5 dias — a clínica ficou sem atender.

Resolvemos em 4 horas. Garantia de 90 dias por escrito.

Ele me pediu pra compartilhar o que disse:

"Eu estava com medo de gastar mais ainda piorar. A Tapera foi transparente do começo ao fim. Recomendo sem hesitar."

Seu orçamento ainda está aqui quando você quiser. Posso reservar uma visita essa semana.

[Técnico]`,
                color: '#003B8E',
              },
              {
                num: '03',
                day: 'Dia 14',
                subject: 'Última chamada — e uma condição especial',
                body: `Oi [nome],

Vou ser direto: sei que você está ocupado e a decisão pode esperar.

Mas enquanto espera, o equipamento pode piorar — e o que hoje custa R$ X pode custar o dobro em 2 meses se um componente comprometido estressar outro.

Por isso, até sexta-feira, estou mantendo o orçamento que enviei e incluindo uma revisão gratuita de um segundo equipamento da sua clínica.

É minha forma de dizer: confio no serviço que entregamos.

Quer aproveitar? Me fala até lá.

[Técnico] — Tapera, 26 anos no ramo.`,
                color: '#1E88E5',
              },
            ].map((email, i) => (
              <div key={i} className={`${styles.emailCard} reveal`} style={{ '--clr': email.color }}>
                <div className={styles.emailHeader}>
                  <span className={styles.emailNum} style={{ background: email.color }}>{email.num}</span>
                  <div>
                    <div className={styles.emailDay}>{email.day}</div>
                    <div className={styles.emailSubject}>Assunto: {email.subject}</div>
                  </div>
                </div>
                <pre className={styles.emailBody}>{email.body}</pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.inner}>
          <div className={`${styles.ctaBox} reveal`}>
            <div className={styles.ctaGear} aria-hidden="true">⚙️</div>
            <h2 className={styles.ctaTitle}>
              26 anos de experiência.<br />
              <span style={{ color: '#1E88E5' }}>Agora com um sistema que escala.</span>
            </h2>
            <p className={styles.ctaSub}>
              A Tapera tem o ativo mais raro de qualquer negócio: confiança real, construída por décadas.
              O que faltava era um funil para transformar essa confiança em clientes previsíveis.
              <strong> Esse funil está pronto. É hora de implementar.</strong>
            </p>
            <a
              href="https://wa.me/5511940723507?text=Oi%2C%20vi%20o%20funil%20Tapera%20e%20quero%20começar%20a%20implementação."
              target="_blank" rel="noreferrer"
              className={styles.ctaBtn}
              data-cursor
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Vamos implementar juntos
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

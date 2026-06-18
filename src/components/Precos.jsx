import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Precos.module.css'

const WA_NUMBER = '5511940723507'

const plans = [
  {
    id: 'essencial',
    name: 'Site Essencial',
    desc: 'Uma landing page completa, com botão de WhatsApp, formulário de contato e SEO básico para aparecer no Google.',
    highlight: false,
    tag: null,
    delivery: '3 dias úteis',
    features: [
      { text: 'Landing page responsiva', ok: true },
      { text: 'Hero + CTA + contato', ok: true },
      { text: 'Design mobile first', ok: true },
      { text: 'WhatsApp direto', ok: true },
      { text: 'Paleta de cores personalizada', ok: true },
      { text: 'Entrega em código limpo', ok: true },
      { text: 'SEO básico', ok: true },
      { text: 'Eventos de analytics', ok: false },
      { text: 'Formulário integrado', ok: false },
      { text: 'Dashboard de leads', ok: false },
    ],
  },
  {
    id: 'profissional',
    name: 'Site Pro',
    desc: 'Site com várias seções, formulário com envio automático, analytics configurado e WhatsApp por serviço.',
    highlight: true,
    tag: 'mais escolhido',
    delivery: '7 dias úteis',
    features: [
      { text: 'Landing page multi-seção completa', ok: true },
      { text: 'Hero, sobre, serviços e contato', ok: true },
      { text: 'Design mobile first', ok: true },
      { text: 'WhatsApp por serviço', ok: true },
      { text: 'Paleta de cores personalizada', ok: true },
      { text: 'Entrega em código limpo', ok: true },
      { text: 'SEO básico', ok: true },
      { text: 'Eventos de analytics', ok: true },
      { text: 'Formulário completo', ok: true },
      { text: 'Dashboard de leads', ok: false },
    ],
  },
  {
    id: 'premium',
    name: 'Presença Completa',
    desc: 'Projeto completo: site, analytics detalhado, dashboard de leads e automação para planilha ou CRM.',
    highlight: false,
    tag: 'mais completo',
    delivery: 'a combinar',
    features: [
      { text: 'Projeto completo para captação', ok: true },
      { text: 'Design personalizado', ok: true },
      { text: 'Design mobile first', ok: true },
      { text: 'WhatsApp inteligente', ok: true },
      { text: 'Paleta de cores personalizada', ok: true },
      { text: 'Entrega em código limpo', ok: true },
      { text: 'SEO completo', ok: true },
      { text: 'Eventos de analytics', ok: true },
      { text: 'Dashboard de leads', ok: true },
      { text: 'Automação para planilha/CRM', ok: true },
    ],
  },
]

const faqs = [
  { q: 'Como funciona o processo?', a: 'Você escolhe o plano, entra em contato via WhatsApp, a gente agenda uma call rápida para entender o projeto e definir a paleta. Depois é só aguardar a entrega.' },
  { q: 'Posso parcelar?', a: 'Sim. Aceitamos pagamento no pix, cartão ou parcelado. Fale com a gente para detalhes.' },
  { q: 'O que são revisões?', a: 'Cada revisão é uma rodada de ajustes no design ou código após a primeira entrega. No plano Premium as revisões são ilimitadas até você aprovar.' },
  { q: 'Vocês fazem hospedagem?', a: 'Entregamos o código pronto para você hospedar. Se precisar de ajuda com deploy, a gente orienta sem custo extra.' },
  { q: 'Tenho uma ideia fora dos planos. E aí?', a: 'Fale com a gente. Todo projeto diferente recebe um orçamento personalizado. Não tem nada que não dá para fazer.' },
]

export default function Precos() {
  useReveal()
  const [openFaq, setOpenFaq] = useState(null)

  const openWA = (planName) => {
    const text = encodeURIComponent(`Olá! Tenho interesse no plano *${planName}* da vera. Pode me passar mais detalhes?`)
    const phone = WA_NUMBER === 'SEU_NUMERO_AQUI' ? '' : WA_NUMBER
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
  }

  return (
    <div className={styles.wrap}>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerInner}>
          <p className={`${styles.eye} reveal`}>Pacotes</p>
          <h1 className={`${styles.title} reveal`}>
            simples,<br /><span>transparente.</span>
          </h1>
          <p className={`${styles.sub} reveal`}>
            Ofertas fáceis de entender para vender sites, cardápios, dashboards, analytics e automações.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className={styles.plansSection}>
        <div className={styles.plansInner}>
          <div className={styles.plansGrid}>
            {plans.map((p, i) => (
              <div
                key={p.id}
                className={`${styles.planCard} ${p.highlight ? styles.planHighlight : ''} reveal`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {p.tag && (
                  <div className={`${styles.planTag} ${p.highlight ? styles.planTagGold : styles.planTagGray}`}>
                    {p.tag}
                  </div>
                )}

                <div className={styles.planTop}>
                  <p className={styles.planName}>{p.name}</p>
                  <p className={styles.planDelivery}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {p.delivery}
                  </p>
                  <p className={styles.planDesc}>{p.desc}</p>
                </div>

                <button
                  className={`${styles.planBtn} ${p.highlight ? styles.planBtnGold : styles.planBtnGhost}`}
                  onClick={() => openWA(p.name)}
                  data-cursor
                >
                  pedir orçamento
                </button>

                <ul className={styles.features}>
                  {p.features.map((f, fi) => (
                    <li key={fi} className={`${styles.feat} ${!f.ok ? styles.featNo : ''}`}>
                      {f.ok
                        ? <span className={styles.featOk}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                        : <span className={styles.featX}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                      }
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className={`${styles.custom} reveal`}>
            Também fazemos cardápio digital e dashboard separados.{' '}
            <button className={styles.customLink} onClick={() => openWA('Personalizado')} data-cursor>
              Fale com a gente para um orçamento personalizado →
            </button>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <p className={`${styles.faqEye} reveal`}>Dúvidas</p>
          <h2 className={`${styles.faqTitle} reveal`}>Perguntas frequentes</h2>

          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div key={i} className="reveal">
                <div className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
                  <button
                    className={styles.faqQ}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    data-cursor
                  >
                    {f.q}
                    <span className={styles.faqArrow}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </button>
                  <div className={styles.faqAWrap}>
                    <p className={styles.faqA}>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCta}>
        <div className={styles.bottomInner}>
          <p className={`${styles.bottomEye} reveal`}>Ainda com dúvida?</p>
          <h2 className={`${styles.bottomTitle} reveal`}>
            a gente resolve<br /><span>agora.</span>
          </h2>
          <button
            className={`${styles.bottomBtn} reveal`}
            onClick={() => openWA('Dúvida geral')}
            data-cursor
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            chamar no WhatsApp
          </button>
        </div>
      </section>
    </div>
  )
}

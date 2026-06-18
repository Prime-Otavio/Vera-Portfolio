import { useState, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Paletas.module.css'

const WA_NUMBER = '5511940723507'

const PALETTES = [
  // Luxo
  { id:1,  name:'Obsidian Gold',    cat:'Luxo',       colors:['#09090f','#c9a96e','#f2efe8','#1a1a24'] },
  { id:2,  name:'Noir Champagne',   cat:'Luxo',       colors:['#0a0a14','#e2c48a','#f8f5f0','#141420'] },
  { id:3,  name:'Dark Velvet',      cat:'Luxo',       colors:['#12101e','#b8860b','#f0ebe0','#1e1b2e'] },
  { id:4,  name:'Midnight Silk',    cat:'Luxo',       colors:['#080812','#d4af37','#f5f2ea','#10101a'] },
  { id:5,  name:'Royale Noir',      cat:'Luxo',       colors:['#0d0b18','#c0a060','#ede8dc','#181524'] },
  // Tech
  { id:6,  name:'Carbon Blue',      cat:'Tech',       colors:['#0d1117','#58a6ff','#f0f6ff','#161b22'] },
  { id:7,  name:'Deep Indigo',      cat:'Tech',       colors:['#0f0f23','#6366f1','#f1f5f9','#14142e'] },
  { id:8,  name:'Cyber Teal',       cat:'Tech',       colors:['#030f14','#14b8a6','#f0fdfa','#051c24'] },
  { id:9,  name:'Steel Gray',       cat:'Tech',       colors:['#111318','#94a3b8','#f1f5f9','#1a1e28'] },
  { id:10, name:'Night Electric',   cat:'Tech',       colors:['#050510','#818cf8','#eef2ff','#0a0a1a'] },
  // Natural
  { id:11, name:'Forest Dark',      cat:'Natural',    colors:['#0d1a0f','#4ade80','#f0fdf4','#152117'] },
  { id:12, name:'Earth & Oak',      cat:'Natural',    colors:['#1a1208','#a16207','#fefce8','#261b0c'] },
  { id:13, name:'Sage Noir',        cat:'Natural',    colors:['#0f1a14','#6ee7b7','#ecfdf5','#162018'] },
  { id:14, name:'Desert Night',     cat:'Natural',    colors:['#1a1006','#f59e0b','#fffbeb','#261800'] },
  { id:15, name:'Moss Stone',       cat:'Natural',    colors:['#0e1a0e','#65a30d','#f7fee7','#172417'] },
  // Bold
  { id:16, name:'Crimson Dark',     cat:'Bold',       colors:['#1a0505','#ef4444','#fff5f5','#260808'] },
  { id:17, name:'Volcanic',         cat:'Bold',       colors:['#120600','#f97316','#fff7ed','#1e0e00'] },
  { id:18, name:'Deep Violet',      cat:'Bold',       colors:['#0f0a1e','#8b5cf6','#faf5ff','#17103a'] },
  { id:19, name:'Hot Pink',         cat:'Bold',       colors:['#150a12','#f43f5e','#fff1f2','#220f1b'] },
  { id:20, name:'Electric Rose',    cat:'Bold',       colors:['#12060e','#e879f9','#fdf4ff','#1e0e1a'] },
  // Clean
  { id:21, name:'Pure Noir',        cat:'Clean',      colors:['#111111','#ffffff','#f5f5f5','#888888'] },
  { id:22, name:'Warm Paper',       cat:'Clean',      colors:['#f5f0e8','#1a1a1a','#ede5d8','#8b7355'] },
  { id:23, name:'Arctic White',     cat:'Clean',      colors:['#f8f9fa','#2c3e50','#eef0f2','#6c757d'] },
  { id:24, name:'Cream & Ash',      cat:'Clean',      colors:['#fdf8f0','#2d2926','#f0e8d8','#9e9080'] },
  { id:25, name:'Nordic',           cat:'Clean',      colors:['#f5f7fa','#1e293b','#e2e8f0','#64748b'] },
  // Criativo
  { id:26, name:'Aurora',           cat:'Criativo',   colors:['#030d1a','#c084fc','#faf5ff','#08152e'] },
  { id:27, name:'Neon Green',       cat:'Criativo',   colors:['#05100a','#22c55e','#f0fdf4','#0a1e12'] },
  { id:28, name:'Sunset',           cat:'Criativo',   colors:['#120800','#fb923c','#fff7ed','#1e1000'] },
  { id:29, name:'Ocean Deep',       cat:'Criativo',   colors:['#030a14','#0ea5e9','#f0f9ff','#051220'] },
  { id:30, name:'Cyber Purple',     cat:'Criativo',   colors:['#0a0010','#a855f7','#faf5ff','#100020'] },
]

const CATS = ['Todas', 'Luxo', 'Tech', 'Natural', 'Bold', 'Clean', 'Criativo']

export default function Paletas() {
  useReveal()
  const [cat, setCat]               = useState('Todas')
  const [selected, setSelected]     = useState(null)
  const [customPalette, setCustom]  = useState(['#c9a96e','#09090f','#f2efe8','#1a1a24'])
  const [isCustom, setIsCustom]     = useState(false)
  const [name, setName]             = useState('')
  const [phone, setPhone]           = useState('')
  const colorRefs                   = useRef([])

  const visible = cat === 'Todas' ? PALETTES : PALETTES.filter(p => p.cat === cat)

  const currentColors = isCustom
    ? customPalette
    : selected ? selected.colors : null

  const currentName = isCustom ? 'Personalizada' : selected?.name ?? ''

  const sendWhatsApp = () => {
    if (!name.trim() || !phone.trim()) {
      alert('Preencha seu nome e número.')
      return
    }
    const cols = currentColors?.join(', ') ?? 'sem paleta selecionada'
    const text = encodeURIComponent(
      `Olá! Sou ${name}, número ${phone}.\n\nVi o site da vera. e quero uma landing page com a paleta *${currentName}*: ${cols}.\n\nPode me ajudar?`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
  }

  const selectPalette = (p) => {
    setSelected(p)
    setIsCustom(false)
    setCustom([...p.colors])
  }

  const updateColor = (idx, val) => {
    const next = [...customPalette]
    next[idx] = val
    setCustom(next)
    if (!isCustom) setIsCustom(true)
  }

  return (
    <div className={styles.wrap}>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerInner}>
          <p className={`${styles.eye} reveal`}>Paletas</p>
          <h1 className={`${styles.title} reveal`}>
            a cor certa<br /><span>vende mais.</span>
          </h1>
          <p className={`${styles.sub} reveal`}>
            Escolha uma paleta pronta, ajuste as cores como quiser ou crie a sua do zero. Depois a gente apresenta 3 opções personalizadas pra você no WhatsApp.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className={styles.catBar}>
        <div className={styles.catInner}>
          {CATS.map(c => (
            <button
              key={c}
              className={`${styles.catBtn} ${cat === c ? styles.catActive : ''}`}
              onClick={() => setCat(c)} data-cursor
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <div className={styles.grid}>
            {visible.map((p, i) => (
              <div key={p.id} className="reveal" style={{ transitionDelay: `${(i % 6) * 0.05}s` }}>
                <div
                  className={`${styles.card} ${selected?.id === p.id && !isCustom ? styles.cardSelected : ''}`}
                  onClick={() => selectPalette(p)}
                  data-cursor
                >
                  <div className={styles.swatches}>
                    {p.colors.map((c, ci) => (
                      <div key={ci} className={styles.swatch} style={{ background: c }} />
                    ))}
                  </div>
                  <div className={styles.cardBottom}>
                    <div>
                      <p className={styles.cardName}>{p.name}</p>
                      <p className={styles.cardCat}>{p.cat}</p>
                    </div>
                    {selected?.id === p.id && !isCustom && (
                      <div className={styles.checkIcon}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customizer */}
      {(selected || isCustom) && (
        <section className={styles.customizer}>
          <div className={styles.custInner}>
            <div className={styles.custHeader}>
              <div>
                <p className={styles.custEye}>
                  {isCustom ? 'paleta personalizada' : `editando: ${selected?.name}`}
                </p>
                <p className={styles.custHint}>Clique em qualquer cor para ajustar</p>
              </div>
              <button
                className={styles.customBtn}
                onClick={() => { setIsCustom(true); setSelected(null) }}
                data-cursor
              >
                criar do zero
              </button>
            </div>

            <div className={styles.colorRow}>
              {customPalette.map((c, i) => (
                <div key={i} className={styles.colorItem}>
                  <div
                    className={styles.colorSwatch}
                    style={{ background: c }}
                    onClick={() => colorRefs.current[i]?.click()}
                    data-cursor
                  >
                    <span className={styles.editIcon}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </span>
                    <input
                      type="color"
                      ref={el => colorRefs.current[i] = el}
                      value={c}
                      onChange={e => updateColor(i, e.target.value)}
                      className={styles.colorInput}
                    />
                  </div>
                  <span className={styles.colorHex}>{c}</span>
                </div>
              ))}
            </div>

            <div className={styles.preview}>
              <p className={styles.previewLabel}>preview</p>
              <div className={styles.previewCard} style={{ background: customPalette[0] }}>
                <div className={styles.previewNav} style={{ borderBottom: `1px solid ${customPalette[3]}40` }}>
                  <div className={styles.previewLogo} style={{ color: customPalette[1] }}>marca.</div>
                  <div className={styles.previewLinks}>
                    {['sobre','serviços','contato'].map(l => (
                      <span key={l} style={{ color: customPalette[2], opacity: 0.6, fontSize: '0.6rem' }}>{l}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.previewBody}>
                  <div className={styles.previewHeadline} style={{ background: customPalette[1], borderRadius: 4, height: 12, width: '60%' }} />
                  <div className={styles.previewText} style={{ background: customPalette[2], borderRadius: 3, height: 8, width: '80%', opacity: 0.4, marginTop: 8 }} />
                  <div className={styles.previewText} style={{ background: customPalette[2], borderRadius: 3, height: 8, width: '65%', opacity: 0.4, marginTop: 5 }} />
                  <div className={styles.previewCta} style={{ background: customPalette[1], color: customPalette[0], borderRadius: 999, padding: '6px 16px', fontSize: '0.6rem', fontWeight: 600, display: 'inline-block', marginTop: 16 }}>
                    saiba mais
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Form */}
      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <div className={styles.formCard}>
            <div className={styles.formLeft}>
              <p className={styles.formEye}>Próximo passo</p>
              <h2 className={styles.formTitle}>
                receba 3 opções<br /><span>no seu WhatsApp.</span>
              </h2>
              <p className={styles.formSub}>
                A gente pega a sua paleta e cria 3 variações profissionais. Você escolhe ao vivo, em call, e a gente já explica como isso vai aumentar suas vendas.
              </p>
              {currentColors && (
                <div className={styles.formPalPreview}>
                  {currentColors.map((c, i) => (
                    <div key={i} style={{ background: c, width: 28, height: 28, borderRadius: 6 }} />
                  ))}
                  <span className={styles.formPalName}>{currentName}</span>
                </div>
              )}
            </div>
            <div className={styles.formRight}>
              <div className={styles.field}>
                <label className={styles.label}>Seu nome</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="João Silva"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Seu número (WhatsApp)</label>
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <button className={styles.formBtn} onClick={sendWhatsApp} data-cursor>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                enviar paleta no WhatsApp
              </button>
              <p className={styles.formNote}>Retornamos em até 24h com as 3 opções.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

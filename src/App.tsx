import { ArrowRight, Bot, CheckCircle2, ChevronRight, Globe2, LineChart, MessageCircle, Network, Rocket, ShieldCheck, Sparkles, Target, Workflow } from 'lucide-react'

const services = [
  ['Tráfego Pago', 'Campanhas estruturadas para gerar demanda e oportunidades reais.', Target],
  ['CRM com IA', 'Organize leads, histórico, etapas comerciais e inteligência no atendimento.', Network],
  ['Sites e Landing Pages', 'Experiências de conversão conectadas à estratégia comercial.', Globe2],
  ['WhatsApp Inteligente', 'Atendimento, qualificação, follow-up e continuidade de contexto.', MessageCircle],
  ['Automações', 'Processos conectados para reduzir tarefas manuais e acelerar respostas.', Workflow],
  ['Zahav IA', 'Agentes de IA para SDR, qualificação, suporte e apoio comercial.', Bot],
] as const

const segments = ['Clínicas odontológicas', 'Imobiliárias e corretores', 'Delivery e restaurantes', 'Supermercados e comércio local', 'Academias e esportes', 'Operações comerciais personalizadas']

const steps = [
  ['01', 'Diagnóstico', 'Entendemos oferta, público, processo comercial, gargalos e objetivos.'],
  ['02', 'Estratégia', 'Desenhamos a jornada de aquisição, atendimento e conversão.'],
  ['03', 'Implementação', 'Configuramos canais, CRM, automações, páginas e agentes de IA.'],
  ['04', 'Operação', 'A estrutura entra em funcionamento com processos conectados.'],
  ['05', 'Otimização', 'Acompanhamos dados, gargalos e oportunidades de evolução.'],
]

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Zahav Digital">
          <span className="brand-mark">Z</span>
          <span>ZAHAV <b>DIGITAL</b></span>
        </a>
        <nav>
          <a href="#solucoes">Soluções</a>
          <a href="#metodo">Como funciona</a>
          <a href="#ia">Zahav IA</a>
          <a href="#segmentos">Segmentos</a>
        </nav>
        <a className="btn btn-small" href="#contato">Agendar diagnóstico <ArrowRight size={16} /></a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16} /> Marketing + Tecnologia + Inteligência Artificial</div>
            <h1>Transforme atenção em vendas com uma operação conectada por <span>tecnologia e IA.</span></h1>
            <p className="lead">A Zahav integra tráfego, sites, WhatsApp, CRM, automações e agentes de IA para sua empresa captar, atender e converter melhor.</p>
            <div className="hero-actions">
              <a className="btn" href="#contato">Quero estruturar minha operação <ArrowRight size={18} /></a>
              <a className="btn secondary" href="#metodo">Ver como funciona <ChevronRight size={18} /></a>
            </div>
            <p className="hero-note">Você não precisa de mais ferramentas. <strong>Precisa que elas trabalhem juntas.</strong></p>
          </div>

          <div className="ecosystem-card" aria-label="Ecossistema Zahav">
            <div className="dashboard-top"><span></span><span></span><span></span><b>ECOSSISTEMA ZAHAV</b></div>
            <div className="flow-grid">
              {['Anúncios', 'Site / Landing Page', 'CRM', 'IA', 'WhatsApp', 'Agenda / Vendas'].map((item, index) => (
                <div className="flow-node" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>
                </div>
              ))}
            </div>
            <div className="signal-card"><LineChart size={26}/><div><span>Operação conectada</span><strong>Aquisição → Atendimento → Conversão</strong></div></div>
          </div>
        </section>

        <section className="statement section compact">
          <p>Não somos uma coleção de serviços soltos.</p>
          <h2>Construímos a infraestrutura comercial que conecta <span>marketing, atendimento e vendas.</span></h2>
        </section>

        <section className="section" id="solucoes">
          <div className="section-heading"><div><span className="kicker">SOLUÇÕES</span><h2>Uma estrutura completa para crescer com mais controle.</h2></div><p>Da primeira impressão ao fechamento, cada ponto da jornada é pensado para conversar com o próximo.</p></div>
          <div className="service-grid">
            {services.map(([title, text, Icon]) => (
              <article className="service-card" key={title}>
                <div className="icon-box"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p><span className="learn">Integrado ao ecossistema <ChevronRight size={15}/></span>
              </article>
            ))}
          </div>
        </section>

        <section className="section method" id="metodo">
          <div className="section-heading"><div><span className="kicker">IMPLEMENTAÇÃO</span><h2>Não entregamos um login e deixamos você descobrir sozinho.</h2></div><p>Configuramos o processo, conectamos os canais e colocamos a operação para funcionar.</p></div>
          <div className="timeline">
            {steps.map(([num, title, text]) => <div className="step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </section>

        <section className="section ai-section" id="ia">
          <div className="ai-visual">
            <div className="orb"><Bot size={48}/></div>
            <div className="ai-tags"><span>Qualificação</span><span>Follow-up</span><span>Agendamento</span><span>Suporte</span><span>Contexto</span></div>
          </div>
          <div className="ai-copy"><span className="kicker">ZAHAV IA</span><h2>IA que participa da operação. Não apenas responde perguntas.</h2><p>Agentes preparados para apoiar o comercial em diferentes momentos da jornada, mantendo contexto e direcionando oportunidades para o próximo passo.</p>
            <div className="check-list">
              {['Qualifica novos leads', 'Identifica interesse e contexto', 'Mantém continuidade no atendimento', 'Executa follow-up', 'Apoia agendamentos', 'Encaminha para atendimento humano quando necessário'].map(item => <div key={item}><CheckCircle2 size={18}/>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="section" id="segmentos">
          <div className="section-heading"><div><span className="kicker">SEGMENTOS</span><h2>Tecnologia adaptada ao processo de cada negócio.</h2></div><p>A arquitetura é personalizada conforme oferta, jornada comercial, equipe e canais da empresa.</p></div>
          <div className="segment-grid">{segments.map((s, i) => <div className="segment" key={s}><span>0{i+1}</span><strong>{s}</strong><ArrowRight size={18}/></div>)}</div>
        </section>

        <section className="section proof">
          <div><span className="kicker">RESULTADOS & CASES</span><h2>Prova real, sem métricas inventadas.</h2><p>Esta área está preparada para receber cases, números e depoimentos reais da Zahav conforme forem selecionados para publicação.</p></div>
          <div className="proof-placeholder"><ShieldCheck size={34}/><strong>Cases em preparação</strong><span>Espaço reservado para evidências verificáveis.</span></div>
        </section>

        <section className="section cta" id="contato">
          <div className="cta-glow"></div><span className="kicker">PRÓXIMO PASSO</span><h2>Sua empresa já gera atenção.<br/><span>A Zahav ajuda a transformar essa atenção em vendas.</span></h2><p>Estruture um processo comercial organizado, automatizado e mensurável.</p>
          <a className="btn" href="mailto:?subject=Quero%20agendar%20um%20diagn%C3%B3stico%20com%20a%20Zahav">Agendar diagnóstico <Rocket size={18}/></a>
          <small>O canal definitivo de contato será conectado quando os dados oficiais forem definidos.</small>
        </section>
      </main>

      <footer><div className="brand"><span className="brand-mark">Z</span><span>ZAHAV <b>DIGITAL</b></span></div><p>Marketing, tecnologia e inteligência artificial trabalhando juntos para transformar atenção em vendas.</p><span>© Zahav Digital</span></footer>
    </div>
  )
}

export default App

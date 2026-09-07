import { ArrowRight, Bot, CheckCircle2, ChevronRight, Globe2, LineChart, MessageCircle, Network, Rocket, ShieldCheck, Sparkles, Target, Workflow, Building2, Stethoscope, ShoppingCart, UtensilsCrossed, Dumbbell, BrainCircuit } from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const services = [
  ['Tráfego Pago', 'Campanhas estruturadas para gerar demanda e oportunidades reais.', Target],
  ['CRM com IA', 'Organize leads, histórico, etapas comerciais e inteligência no atendimento.', Network],
  ['Sites e Landing Pages', 'Experiências de conversão conectadas à estratégia comercial.', Globe2],
  ['WhatsApp Inteligente', 'Atendimento, qualificação, follow-up e continuidade de contexto.', MessageCircle],
  ['Automações', 'Processos conectados para reduzir tarefas manuais e acelerar respostas.', Workflow],
  ['Zahav IA', 'Agentes de IA para SDR, qualificação, suporte e apoio comercial.', Bot],
] as const

const segments = [
  ['Clínicas odontológicas', 'Captação, atendimento, qualificação e agenda conectados.', Stethoscope],
  ['Imobiliárias e corretores', 'Leads, imóveis, atendimento e follow-up em um mesmo fluxo.', Building2],
  ['Delivery e restaurantes', 'Campanhas, catálogo, atendimento e recompra.', UtensilsCrossed],
  ['Supermercados e comércio local', 'Alcance local, ofertas, CRM e relacionamento.', ShoppingCart],
  ['Academias e esportes', 'Captação, agenda, recorrência e comunicação.', Dumbbell],
  ['Operações personalizadas', 'Integrações e jornadas comerciais sob medida.', BrainCircuit],
] as const

const steps = [
  ['01', 'Diagnóstico', 'Entendemos oferta, público, processo comercial, gargalos e objetivos.'],
  ['02', 'Estratégia', 'Desenhamos a jornada de aquisição, atendimento e conversão.'],
  ['03', 'Implementação', 'Configuramos canais, CRM, automações, páginas e agentes de IA.'],
  ['04', 'Operação', 'A estrutura entra em funcionamento com processos conectados.'],
  ['05', 'Otimização', 'Acompanhamos dados, gargalos e oportunidades de evolução.'],
]

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [pathname])
  return null
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="site-shell">
    <header className="nav-wrap">
      <Link className="brand" to="/" aria-label="Zahav Digital"><span className="brand-mark">Z</span><span>ZAHAV <b>DIGITAL</b></span></Link>
      <nav>
        <NavLink to="/solucoes">Soluções</NavLink><NavLink to="/como-funciona">Como funciona</NavLink><NavLink to="/zahav-ia">Zahav IA</NavLink><NavLink to="/segmentos">Segmentos</NavLink><NavLink to="/sobre">Sobre</NavLink>
      </nav>
      <Link className="btn btn-small" to="/contato">Agendar diagnóstico <ArrowRight size={16}/></Link>
    </header>
    <main>{children}</main>
    <footer><Link className="brand" to="/"><span className="brand-mark">Z</span><span>ZAHAV <b>DIGITAL</b></span></Link><p>Marketing, tecnologia e inteligência artificial trabalhando juntos para transformar atenção em vendas.</p><span>© Zahav Digital</span></footer>
  </div>
}

function PageHero({ eyebrow, title, text }: { eyebrow:string; title:string; text:string }) {
  return <section className="section page-hero"><span className="kicker">{eyebrow}</span><h1>{title}</h1><p className="lead">{text}</p><Link className="btn" to="/contato">Agendar diagnóstico <ArrowRight size={18}/></Link></section>
}

function Home() {
  return <>
    <section className="hero section">
      <div className="hero-copy"><div className="eyebrow"><Sparkles size={16}/> Marketing + Tecnologia + Inteligência Artificial</div><h1>Transforme atenção em vendas com uma operação conectada por <span>tecnologia e IA.</span></h1><p className="lead">A Zahav integra tráfego, sites, WhatsApp, CRM, automações e agentes de IA para sua empresa captar, atender e converter melhor.</p><div className="hero-actions"><Link className="btn" to="/contato">Quero estruturar minha operação <ArrowRight size={18}/></Link><Link className="btn secondary" to="/como-funciona">Ver como funciona <ChevronRight size={18}/></Link></div><p className="hero-note">Você não precisa de mais ferramentas. <strong>Precisa que elas trabalhem juntas.</strong></p></div>
      <div className="ecosystem-card"><div className="dashboard-top"><span></span><span></span><span></span><b>ECOSSISTEMA ZAHAV</b></div><div className="flow-grid">{['Anúncios','Site / Landing Page','CRM','IA','WhatsApp','Agenda / Vendas'].map((item,index)=><div className="flow-node" key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div><div className="signal-card"><LineChart size={26}/><div><span>Operação conectada</span><strong>Aquisição → Atendimento → Conversão</strong></div></div></div>
    </section>
    <section className="statement section compact"><p>Não somos uma coleção de serviços soltos.</p><h2>Construímos a infraestrutura comercial que conecta <span>marketing, atendimento e vendas.</span></h2></section>
    <section className="section"><div className="section-heading"><div><span className="kicker">SOLUÇÕES</span><h2>Uma estrutura completa para crescer com mais controle.</h2></div><p>Da primeira impressão ao fechamento, cada ponto da jornada é pensado para conversar com o próximo.</p></div><div className="service-grid">{services.map(([title,text,Icon])=><article className="service-card" key={title}><div className="icon-box"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p><span className="learn">Integrado ao ecossistema <ChevronRight size={15}/></span></article>)}</div><div className="section-link"><Link to="/solucoes">Conhecer todas as soluções <ArrowRight size={16}/></Link></div></section>
    <section className="section ai-section"><div className="ai-visual"><div className="orb"><Bot size={48}/></div><div className="ai-tags"><span>Qualificação</span><span>Follow-up</span><span>Agendamento</span><span>Suporte</span><span>Contexto</span></div></div><div className="ai-copy"><span className="kicker">ZAHAV IA</span><h2>IA que participa da operação. Não apenas responde perguntas.</h2><p>Agentes preparados para apoiar o comercial em diferentes momentos da jornada.</p><div className="check-list">{['Qualifica novos leads','Identifica interesse e contexto','Mantém continuidade no atendimento','Executa follow-up','Apoia agendamentos','Encaminha para atendimento humano quando necessário'].map(i=><div key={i}><CheckCircle2 size={18}/>{i}</div>)}</div><Link className="text-link" to="/zahav-ia">Conhecer a Zahav IA <ArrowRight size={16}/></Link></div></section>
    <ClosingCta />
  </>
}

function Solutions() { return <><PageHero eyebrow="SOLUÇÕES" title="Tecnologia e marketing conectados ao processo comercial." text="Da aquisição ao relacionamento, desenhamos uma operação em que cada ferramenta tem uma função clara e trabalha conectada às demais."/><section className="section"><div className="service-grid">{services.map(([title,text,Icon])=><article className="service-card service-card-large" key={title}><div className="icon-box"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p><ul><li>Estratégia aplicada ao negócio</li><li>Configuração e implementação</li><li>Integração com a jornada comercial</li></ul></article>)}</div></section><ClosingCta/></> }

function HowItWorks() { return <><PageHero eyebrow="COMO FUNCIONA" title="Da estratégia à operação funcionando." text="A Zahav entra para organizar o processo, conectar os canais e implementar a estrutura necessária para transformar demanda em oportunidade comercial."/><section className="section"><div className="timeline timeline-v2">{steps.map(([n,t,x])=><div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{x}</p></div></div>)}</div><div className="implementation-note"><ShieldCheck size={30}/><div><strong>Implementação assistida</strong><p>Não entregamos um login e deixamos sua equipe descobrir sozinha. Configuramos o processo e colocamos a estrutura para funcionar.</p></div></div></section><ClosingCta/></> }

function ZahavAI() { return <><PageHero eyebrow="ZAHAV IA" title="Agentes de IA integrados ao seu processo comercial." text="Uma camada inteligente para qualificar, acompanhar, organizar contexto, apoiar agendamentos e acelerar o atendimento sem perder a possibilidade de intervenção humana."/><section className="section"><div className="feature-grid">{['SDR e qualificação','Contexto de conversa','Follow-up inteligente','Agendamento','Suporte e triagem','Handoff humano'].map((x,i)=><article className="feature-card" key={x}><span>0{i+1}</span><h3>{x}</h3><p>A IA atua dentro das regras, informações e objetivos definidos para a operação da empresa.</p></article>)}</div></section><section className="statement section compact"><p>IA aplicada ao processo.</p><h2>Mais do que responder mensagens: <span>entender contexto e conduzir o próximo passo.</span></h2></section><ClosingCta/></> }

function Segments() { return <><PageHero eyebrow="SEGMENTOS" title="Uma base tecnológica, adaptada ao jeito que cada empresa vende." text="Cada segmento possui jornada, objeções, agenda, ticket, produtos e regras diferentes. A Zahav estrutura a operação respeitando essas diferenças."/><section className="section"><div className="segment-cards">{segments.map(([name,text,Icon])=><article key={name}><div className="icon-box"><Icon size={24}/></div><h3>{name}</h3><p>{text}</p><Link to="/contato">Falar sobre este segmento <ArrowRight size={15}/></Link></article>)}</div></section><ClosingCta/></> }

function About() { return <><PageHero eyebrow="SOBRE A ZAHAV" title="Uma empresa de crescimento, tecnologia e inteligência artificial." text="A Zahav Digital atua na conexão entre aquisição, experiência digital, atendimento, CRM, automações e IA para construir operações comerciais mais organizadas."/><section className="section about-grid"><div><span className="kicker">NOSSA VISÃO</span><h2>O problema raramente é falta de ferramenta.</h2><p>Empresas acumulam anúncios, sites, WhatsApp, planilhas e sistemas que não conversam entre si. Nossa visão é transformar esse conjunto em uma operação coerente, com processo, dados e próximos passos claros.</p></div><div className="about-panel"><strong>O que orienta nosso trabalho</strong>{['Clareza antes de automação','Tecnologia a serviço da venda','Implementação prática','IA com contexto e objetivo','Evolução baseada na operação real'].map(i=><div key={i}><CheckCircle2 size={17}/>{i}</div>)}</div></section><ClosingCta/></> }

function Contact() { return <section className="section contact-page"><div><span className="kicker">CONTATO</span><h1>Vamos entender sua operação.</h1><p className="lead">Conte o que sua empresa vende, como os leads chegam hoje e onde estão os principais gargalos. A partir disso, estruturamos o diagnóstico inicial.</p><div className="contact-note"><ShieldCheck size={22}/><span>Nenhum número de WhatsApp ou e-mail fictício foi publicado. O canal oficial será conectado quando os dados da Zahav forem definidos.</span></div></div><form className="contact-form" onSubmit={(e)=>e.preventDefault()}><label>Nome<input placeholder="Seu nome"/></label><label>Empresa<input placeholder="Nome da empresa"/></label><label>Segmento<input placeholder="Ex.: clínica, imobiliária, restaurante"/></label><label>Principal objetivo<textarea rows={5} placeholder="Conte o que você quer melhorar na captação, atendimento ou vendas."/></label><button className="btn" type="button">Preparar diagnóstico <ArrowRight size={17}/></button><small>Formulário visual nesta versão. O envio será conectado ao canal/CRM oficial da Zahav na etapa de integração.</small></form></section> }

function ClosingCta() { return <section className="section cta"><div className="cta-glow"></div><span className="kicker">PRÓXIMO PASSO</span><h2>Sua empresa já gera atenção.<br/><span>Vamos transformar isso em uma operação comercial.</span></h2><p>Marketing, tecnologia e IA trabalhando como uma estrutura única.</p><Link className="btn" to="/contato">Agendar diagnóstico <Rocket size={18}/></Link></section> }

function App() {
  return <Layout><ScrollTop/><Routes><Route path="/" element={<Home/>}/><Route path="/solucoes" element={<Solutions/>}/><Route path="/como-funciona" element={<HowItWorks/>}/><Route path="/zahav-ia" element={<ZahavAI/>}/><Route path="/segmentos" element={<Segments/>}/><Route path="/sobre" element={<About/>}/><Route path="/contato" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></Layout>
}

export default App

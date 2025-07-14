'use client';

import Header from './Header';
import InicioSection from './InicioSection';
import ResumoComprovaSection from './ResumoComprovaSection';
import AgenciaSection from './AgenciaSection';
import EspecialidadesSection from './EspecialidadesSections'; // ✅ IMPORTAÇÃO
import ResultadosSection from './ResultadosSection';
import ComprovacaoSection from './ComprovacaoSection'; // ✅ IMPORTAÇÃO
import ServicosPreviewSection from './ServicosPreviewSection'; // ✅ IMPORTAÇÃO
import ServicesHighlightsSection from './ServicesHighlightsSection';
import ContatoSection from './ContatoSection'; // ✅ IMPORTAÇÃO
import DuvidasSection from './DuvidasSection';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Header />
      <InicioSection />
      <ResumoComprovaSection />
      <AgenciaSection />
      <EspecialidadesSection /> {/* ✅ INSERÇÃO */}
      <ResultadosSection />
      <ComprovacaoSection /> {/* ✅ INSERÇÃO */}
      <ServicosPreviewSection /> {/* ✅ INSERÇÃO */}
      <ServicesHighlightsSection /> {/* ✅ INSERÇÃO */}
      <ContatoSection />
      <DuvidasSection /> {/* ✅ INSERÇÃO */}
      {/* Footer deve ser a última seção para manter a estrutura correta */}
      <Footer />
      {/* Outras seções podem ser adicionadas aqui, como Contato, Blog, etc. */}
      {/* Exemplo: */}
      {/* <BlogSection /> */}
      {/* <ContatoSection /> */}
    </>
  );
}

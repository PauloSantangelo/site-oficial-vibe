'use client';

import Header from './Header';
import InicioSection from './InicioSection';
import AgenciaSection from './AgenciaSection';
import ResultadosSection from './ResultadosSection';
// Importaremos os demais depois: ResultadosSection, ServicosSection, ContatoSection

export default function Home() {
  return (
    <>
      <Header />
      <InicioSection />
      <AgenciaSection />
      <ResultadosSection />
      {/* <ResultadosSection /> */}
      {/* <ServicosSection /> */}
      {/* <ContatoSection /> */}
    </>
  );
}

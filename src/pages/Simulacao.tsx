
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { SimulacaoProvider, useSimulacao } from '@/contexts/SimulacaoContext';
import EtapasProgressBar from '@/components/simulacao/EtapasProgressBar';
import EtapaSelecaoItens from '@/components/simulacao/EtapaSelecaoItens';
import EtapaOrigem from '@/components/simulacao/EtapaOrigem';
import EtapaDestino from '@/components/simulacao/EtapaDestino';
import EtapaTipoEnvio from '@/components/simulacao/EtapaTipoEnvio';
import EtapaResumo from '@/components/simulacao/EtapaResumo';

const SimulacaoConteudo = () => {
  const { etapaAtual } = useSimulacao();
  
  return (
    <div>
      <EtapasProgressBar />
      
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        {etapaAtual === 1 && <EtapaSelecaoItens />}
        {etapaAtual === 2 && <EtapaOrigem />}
        {etapaAtual === 3 && <EtapaDestino />}
        {etapaAtual === 4 && <EtapaTipoEnvio />}
        {etapaAtual === 5 && <EtapaResumo />}
      </div>
    </div>
  );
};

const Simulacao = () => {
  return (
    <SimulacaoProvider>
      <PageLayout title="Simulação de Envio">
        <SimulacaoConteudo />
      </PageLayout>
    </SimulacaoProvider>
  );
};

export default Simulacao;

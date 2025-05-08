
import React from 'react';
import { useSimulacao } from '@/contexts/SimulacaoContext';

const EtapasProgressBar: React.FC = () => {
  const { etapaAtual } = useSimulacao();
  
  const etapas = [
    { numero: 1, nome: 'Itens' },
    { numero: 2, nome: 'Origem' },
    { numero: 3, nome: 'Destino' },
    { numero: 4, nome: 'Envio' },
    { numero: 5, nome: 'Pagamento' },
  ];

  return (
    <div className="w-full flex justify-center items-center space-x-2 my-4">
      {etapas.map((etapa) => (
        <React.Fragment key={etapa.numero}>
          <div className="flex items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                etapaAtual >= etapa.numero 
                  ? 'bg-shappi-green text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {etapa.numero}
            </div>
            {etapa.numero < etapas.length && (
              <div className={`h-1 w-12 ${
                etapaAtual > etapa.numero ? 'bg-shappi-green' : 'bg-gray-200'
              }`} />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EtapasProgressBar;

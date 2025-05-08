
import React from 'react';
import { useSimulacao } from '@/contexts/SimulacaoContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const EtapaOrigem: React.FC = () => {
  const { origem, setOrigem, setEtapaAtual } = useSimulacao();
  
  // Dados fictícios para seleção
  const paises = ['Angola', 'Portugal', 'Brasil', 'Moçambique'];
  const estados = {
    'Angola': ['Luanda', 'Benguela', 'Huambo'],
    'Portugal': ['Lisboa', 'Porto', 'Faro'],
    'Brasil': ['São Paulo', 'Rio de Janeiro', 'Bahia'],
    'Moçambique': ['Maputo', 'Beira', 'Nampula'],
  };
  const municipios = {
    'Luanda': ['Luanda', 'Viana', 'Cacuaco'],
    'Benguela': ['Benguela', 'Lobito', 'Catumbela'],
    'Huambo': ['Huambo', 'Caála', 'Longonjo'],
    'Lisboa': ['Lisboa', 'Cascais', 'Sintra'],
    'Porto': ['Porto', 'Gaia', 'Matosinhos'],
    'Faro': ['Faro', 'Albufeira', 'Lagos'],
    'São Paulo': ['São Paulo', 'Campinas', 'Santos'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
    'Bahia': ['Salvador', 'Feira de Santana', 'Ilhéus'],
    'Maputo': ['Maputo', 'Matola', 'Boane'],
    'Beira': ['Beira', 'Dondo', 'Búzi'],
    'Nampula': ['Nampula', 'Nacala', 'Angoche'],
  };
  
  const isFormValido = origem.pais && origem.estado && origem.municipio;
  
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">De Onde Será Enviado?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-shappi-green font-medium">País:</label>
          <Select
            value={origem.pais}
            onValueChange={(valor) => setOrigem({ ...origem, pais: valor, estado: '', municipio: '' })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o País" />
            </SelectTrigger>
            <SelectContent>
              {paises.map(pais => (
                <SelectItem key={pais} value={pais}>{pais}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-shappi-green font-medium">Estado/Província:</label>
          <Select
            value={origem.estado}
            onValueChange={(valor) => setOrigem({ ...origem, estado: valor, municipio: '' })}
            disabled={!origem.pais}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o Estado/Província" />
            </SelectTrigger>
            <SelectContent>
              {origem.pais && estados[origem.pais as keyof typeof estados]?.map(estado => (
                <SelectItem key={estado} value={estado}>{estado}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-shappi-green font-medium">Município:</label>
          <Select
            value={origem.municipio}
            onValueChange={(valor) => setOrigem({ ...origem, municipio: valor })}
            disabled={!origem.estado}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o município" />
            </SelectTrigger>
            <SelectContent>
              {origem.estado && municipios[origem.estado as keyof typeof municipios]?.map(municipio => (
                <SelectItem key={municipio} value={municipio}>{municipio}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline"
          onClick={() => setEtapaAtual(1)}
        >
          Voltar
        </Button>
        
        <Button 
          className="bg-shappi-green hover:bg-shappi-green/90"
          onClick={() => setEtapaAtual(3)}
          disabled={!isFormValido}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default EtapaOrigem;

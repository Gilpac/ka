
import React from 'react';
import { useSimulacao } from '@/contexts/SimulacaoContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const EtapaDestino: React.FC = () => {
  const { destino, setDestino, setEtapaAtual } = useSimulacao();
  
  // Dados fictícios para seleção
  const paises = ['Angola', 'Portugal', 'Brasil', 'Moçambique'];
  const estados = {
    'Angola': ['Luanda', 'Benguela', 'Huambo', 'Bengo'],
    'Portugal': ['Lisboa', 'Porto', 'Faro'],
    'Brasil': ['São Paulo', 'Rio de Janeiro', 'Bahia'],
    'Moçambique': ['Maputo', 'Beira', 'Nampula'],
  };
  const municipios = {
    'Luanda': ['Luanda', 'Viana', 'Cacuaco'],
    'Benguela': ['Benguela', 'Lobito', 'Catumbela'],
    'Huambo': ['Huambo', 'Caála', 'Longonjo'],
    'Bengo': ['Caxito', 'Dande', 'Bula Atumba'],
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
  
  const isFormValido = 
    destino.pais && 
    destino.estado && 
    destino.municipio && 
    destino.codigoPostal && 
    destino.pontoReferencia && 
    destino.nomeDestinatario && 
    destino.telefone;
  
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">Para onde deseja enviar?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-shappi-green font-medium">País:</label>
          <Select
            value={destino.pais}
            onValueChange={(valor) => setDestino({ ...destino, pais: valor, estado: '', municipio: '' })}
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
            value={destino.estado}
            onValueChange={(valor) => setDestino({ ...destino, estado: valor, municipio: '' })}
            disabled={!destino.pais}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o Estado/Província" />
            </SelectTrigger>
            <SelectContent>
              {destino.pais && estados[destino.pais as keyof typeof estados]?.map(estado => (
                <SelectItem key={estado} value={estado}>{estado}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-shappi-green font-medium">Município:</label>
          <Select
            value={destino.municipio}
            onValueChange={(valor) => setDestino({ ...destino, municipio: valor })}
            disabled={!destino.estado}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o município" />
            </SelectTrigger>
            <SelectContent>
              {destino.estado && municipios[destino.estado as keyof typeof municipios]?.map(municipio => (
                <SelectItem key={municipio} value={municipio}>{municipio}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="space-y-2">
          <label className="block text-shappi-green font-medium">Código Postal:</label>
          <Input 
            type="text" 
            placeholder="Insira o código postal" 
            value={destino.codigoPostal || ''}
            onChange={(e) => setDestino({ ...destino, codigoPostal: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-shappi-green font-medium">Ponto de referência:</label>
          <Input 
            type="text" 
            placeholder="Ex: Shopping Braga" 
            value={destino.pontoReferencia || ''}
            onChange={(e) => setDestino({ ...destino, pontoReferencia: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-shappi-green font-medium">Nome do Destinatário:</label>
          <Input 
            type="text" 
            placeholder="Nome completo" 
            value={destino.nomeDestinatario || ''}
            onChange={(e) => setDestino({ ...destino, nomeDestinatario: e.target.value })}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="block text-shappi-green font-medium">Número de Telefone:</label>
        <Input 
          type="tel" 
          placeholder="Ex: +351 912345678" 
          value={destino.telefone || ''}
          onChange={(e) => setDestino({ ...destino, telefone: e.target.value })}
        />
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline"
          onClick={() => setEtapaAtual(2)}
        >
          Voltar
        </Button>
        
        <Button 
          className="bg-shappi-green hover:bg-shappi-green/90"
          onClick={() => setEtapaAtual(4)}
          disabled={!isFormValido}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default EtapaDestino;

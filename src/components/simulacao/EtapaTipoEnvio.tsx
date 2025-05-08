
import React from 'react';
import { useSimulacao } from '@/contexts/SimulacaoContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const EtapaTipoEnvio: React.FC = () => {
  const { tipoEnvio, setTipoEnvio, setEtapaAtual, formatarValor } = useSimulacao();
  
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">Opções de Entrega e Seguro</h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg mb-4">Recolha</h3>
          <div className="flex items-center space-x-4">
            <Switch 
              id="recolha-switch"
              checked={tipoEnvio.recolha}
              onCheckedChange={(checked) => setTipoEnvio({ ...tipoEnvio, recolha: checked })}
            />
            <Label htmlFor="recolha-switch">
              {tipoEnvio.recolha ? 'Sim' : 'Não'}
            </Label>
          </div>
          {tipoEnvio.recolha && (
            <p className="text-sm text-gray-500 mt-2">
              Faremos a recolha do seu item no endereço de origem por uma taxa adicional de {formatarValor(250, 'kwanza')}.
            </p>
          )}
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg mb-4">Tipo de Envio</h3>
          <RadioGroup 
            value={tipoEnvio.tipoEnvio} 
            onValueChange={(value) => setTipoEnvio({ ...tipoEnvio, tipoEnvio: value as 'padrao' | 'express' | 'priority' })}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="padrao" id="padrao" />
              <Label htmlFor="padrao" className="flex flex-col">
                <span className="font-medium">Padrão</span>
                <span className="text-sm text-gray-500">7-10 dias úteis - {formatarValor(500, 'kwanza')}</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="express" id="express" />
              <Label htmlFor="express" className="flex flex-col">
                <span className="font-medium">Express</span>
                <span className="text-sm text-gray-500">3-5 dias úteis - {formatarValor(750, 'kwanza')}</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="priority" id="priority" />
              <Label htmlFor="priority" className="flex flex-col">
                <span className="font-medium">Prioritário</span>
                <span className="text-sm text-gray-500">1-2 dias úteis - {formatarValor(1250, 'kwanza')}</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-lg mb-4">Seguro</h3>
          <RadioGroup 
            value={tipoEnvio.seguro} 
            onValueChange={(value) => setTipoEnvio({ 
              ...tipoEnvio, 
              seguro: value as 'basico' | 'premium' | 'nenhum',
              valorSeguro: value === 'premium' ? 80 : (value === 'basico' ? 40 : 0)
            })}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nenhum" id="nenhum" />
              <Label htmlFor="nenhum" className="flex flex-col">
                <span className="font-medium">Sem seguro</span>
                <span className="text-sm text-gray-500">Sem cobertura adicional</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="basico" id="basico" />
              <Label htmlFor="basico" className="flex flex-col">
                <span className="font-medium">Básico</span>
                <span className="text-sm text-gray-500">Cobertura até 50% do valor declarado - 2% do valor</span>
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium" className="flex flex-col">
                <span className="font-medium">Premium</span>
                <span className="text-sm text-gray-500">Cobertura total do valor declarado - 5% do valor</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline"
          onClick={() => setEtapaAtual(3)}
        >
          Voltar
        </Button>
        
        <Button 
          className="bg-shappi-green hover:bg-shappi-green/90"
          onClick={() => setEtapaAtual(5)}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default EtapaTipoEnvio;

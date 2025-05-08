import React from 'react';
import { useSimulacao } from '@/contexts/SimulacaoContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const EtapaResumo: React.FC = () => {
  const { 
    itensSelecionados, 
    origem, 
    destino, 
    tipoEnvio,
    moedaSelecionada,
    setMoedaSelecionada,
    calcularSubtotalItens,
    calcularTaxaEnvio,
    calcularTaxaSeguro,
    calcularTotal,
    formatarValor,
    setEtapaAtual
  } = useSimulacao();
  
  const [showDialog, setShowDialog] = React.useState(false);
  
  const subtotalItens = calcularSubtotalItens();
  const taxaEnvio = calcularTaxaEnvio();
  const taxaSeguro = calcularTaxaSeguro();
  const total = calcularTotal();
  
  const moedas = [
    { id: 'kwanza', nome: 'Kwanza (KZ)' },
    { id: 'dolar', nome: 'Dólar (US$)' },
    { id: 'euro', nome: 'Euro (€)' },
    { id: 'reais', nome: 'Real (R$)' },
  ];

  const handleFinishOrder = () => {
    setShowDialog(true);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">Resumo do Envio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-shappi-green mb-2">Destino</h3>
          <p>{destino.pais}</p>
          <p>{destino.municipio}, {destino.estado}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-shappi-green mb-2">Recolha</h3>
          <p>{tipoEnvio.recolha ? 'Sim' : 'Não'}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-shappi-green mb-2">Tipo de Envio</h3>
          <p>
            {tipoEnvio.tipoEnvio === 'padrao' && 'Padrão'}
            {tipoEnvio.tipoEnvio === 'express' && 'Express'}
            {tipoEnvio.tipoEnvio === 'priority' && 'Prioritário'}
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-shappi-green mb-2">Seguro</h3>
          <p>
            {tipoEnvio.seguro === 'nenhum' && 'Sem seguro'}
            {tipoEnvio.seguro === 'basico' && 'Básico'}
            {tipoEnvio.seguro === 'premium' && 'Premium'}
            {tipoEnvio.seguro !== 'nenhum' && ` (${formatarValor(tipoEnvio.valorSeguro, 'kwanza')})`}
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">Itens Selecionados:</h3>
        <ul className="space-y-2">
          {itensSelecionados.map(itemSelecionado => (
            <li key={itemSelecionado.item.id} className="flex justify-between">
              <span>
                {itemSelecionado.item.nome} - {
                  itemSelecionado.item.medidaPor === 'quantidade' 
                    ? `${itemSelecionado.quantidade} unidades` 
                    : `${itemSelecionado.peso} kg`
                }
              </span>
              <span>
                {formatarValor(
                  itemSelecionado.item.medidaPor === 'quantidade'
                    ? itemSelecionado.item.precoPorUnidade * (itemSelecionado.quantidade || 0)
                    : itemSelecionado.item.precoPorUnidade * (itemSelecionado.peso || 0),
                  moedaSelecionada
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-green-300 mt-6">
        <div className="flex justify-between mb-2">
          <span>Subtotal de itens:</span>
          <span>{formatarValor(subtotalItens, moedaSelecionada)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Taxa de envio ({tipoEnvio.tipoEnvio}):</span>
          <span>{formatarValor(taxaEnvio, moedaSelecionada)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Taxa de seguro ({tipoEnvio.seguro}):</span>
          <span>{formatarValor(taxaSeguro, moedaSelecionada)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-4">
          <span>Total a pagar:</span>
          <span>{formatarValor(total, moedaSelecionada)}</span>
        </div>
        
        <div className="mt-4 flex justify-end">
          <div className="w-48">
            <Select
              value={moedaSelecionada}
              onValueChange={(valor) => setMoedaSelecionada(valor as 'kwanza' | 'dolar' | 'euro' | 'reais')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a moeda" />
              </SelectTrigger>
              <SelectContent>
                {moedas.map(moeda => (
                  <SelectItem key={moeda.id} value={moeda.id}>{moeda.nome}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
        <h3 className="font-semibold text-lg mb-2 text-center text-shappi-green">
          Dados Bancários Angola:
        </h3>
        <div className="text-center">
          <p><strong>Nome:</strong> HOURGLASS ANGOLA PRESTAÇÃO DE SERVIC</p>
          <p><strong>Nº da Conta -</strong> 336831655IO 0 01</p>
          <p><strong>IBAN:</strong> AO06 0055 0000 3683 1655 1018 0</p>
          <p><strong>Banco:</strong> Millennium Atlântico</p>
        </div>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
        <h3 className="font-semibold text-lg mb-2 text-center text-shappi-green">
          Dados Bancários de Portugal:
        </h3>
        <div className="text-center">
          <p><strong>Nome:</strong> HOURGLASS CONSULTING SERVICES LDA</p>
          <p><strong>Nº da Conta -</strong> 000607052967 23</p>
          <p><strong>IBAN:</strong> PT50 0007 0000 0060 7052 9672 3</p>
          <p><strong>SWIFT/BIC:</strong> BESCPTPL</p>
        </div>
      </div>
      
      <div className="mt-8">
        <label className="block mb-2">
          Carregar Comprovativo de Pagamento:
        </label>
        <div className="border rounded p-4 border-dashed border-gray-300 text-center cursor-pointer hover:bg-gray-50">
          <input
            type="file"
            className="hidden"
            id="comprovativo"
            accept="image/*,.pdf"
          />
          <label htmlFor="comprovativo" className="cursor-pointer">
            <p className="text-shappi-green">Escolher ficheiro</p>
            <p className="text-sm text-gray-500 mt-1">Nenhum ficheiro selecionado</p>
          </label>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline"
          onClick={() => setEtapaAtual(4)}
        >
          Voltar
        </Button>
        
        <Button 
          className="bg-shappi-green hover:bg-shappi-green/90"
          onClick={handleFinishOrder}
        >
          Finalizar Pedido
        </Button>
      </div>
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-shappi-green text-xl font-bold">Crie uma conta para continuar</DialogTitle>
            <DialogDescription>
              Para finalizar o seu pedido, é necessário criar uma conta ou iniciar sessão.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-4">
              A sua simulação foi guardada. Crie uma conta para continuar com o processo de envio e acompanhar os seus pedidos.
            </p>
          </div>
          <DialogFooter className="flex justify-center sm:justify-center gap-2">
            <Button
              className="bg-shappi-green hover:bg-shappi-green/90 w-full"
              onClick={() => window.location.href = "http://ka.free.nf/log/index.html"}
            >
              Criar Conta / Entrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EtapaResumo;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Minus, X } from 'lucide-react';
import { useSimulacao } from '@/contexts/SimulacaoContext';
import { ItemType } from '@/contexts/SimulacaoContext';

const EtapaSelecaoItens: React.FC = () => {
  const { 
    itensCatalogo, 
    itensSelecionados, 
    adicionarItem, 
    removerItem, 
    atualizarQuantidade, 
    atualizarPeso, 
    calcularSubtotalItens,
    formatarValor,
    setEtapaAtual
  } = useSimulacao();
  
  const [pesquisaCategoria, setPesquisaCategoria] = useState('');
  
  const itensFiltrados = pesquisaCategoria 
    ? itensCatalogo.filter(item => 
        item.nome.toLowerCase().includes(pesquisaCategoria.toLowerCase())
      )
    : itensCatalogo;
  
  const handleSelecionarItem = (item: ItemType) => {
    adicionarItem(item);
  };
  
  const isItemSelecionado = (itemId: string) => {
    return itensSelecionados.some(item => item.item.id === itemId);
  };
  
  const incrementarValor = (itemId: string, medidaPor: 'quantidade' | 'peso') => {
    const itemSelecionado = itensSelecionados.find(i => i.item.id === itemId);
    if (!itemSelecionado) return;
    
    if (medidaPor === 'quantidade') {
      const novaQtd = (itemSelecionado.quantidade || 0) + 1;
      atualizarQuantidade(itemId, novaQtd);
    } else {
      const novoPeso = (itemSelecionado.peso || 0) + 0.5;
      atualizarPeso(itemId, novoPeso);
    }
  };
  
  const decrementarValor = (itemId: string, medidaPor: 'quantidade' | 'peso') => {
    const itemSelecionado = itensSelecionados.find(i => i.item.id === itemId);
    if (!itemSelecionado) return;
    
    if (medidaPor === 'quantidade') {
      const novaQtd = Math.max(1, (itemSelecionado.quantidade || 0) - 1);
      atualizarQuantidade(itemId, novaQtd);
    } else {
      const novoPeso = Math.max(0.5, (itemSelecionado.peso || 0) - 0.5);
      atualizarPeso(itemId, novoPeso);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">O que gostaria de enviar?</h2>
        <p className="text-gray-600 mb-4">Selecione uma ou mais categorias</p>
        
        <Input
          type="text"
          placeholder="Pesquisar categoria..."
          value={pesquisaCategoria}
          onChange={(e) => setPesquisaCategoria(e.target.value)}
          className="mb-6"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {itensFiltrados.map((item) => (
            <div 
              key={item.id}
              className={`p-4 rounded-lg border ${
                isItemSelecionado(item.id) 
                  ? 'border-shappi-green bg-green-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              } cursor-pointer transition-all`}
              onClick={() => handleSelecionarItem(item)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{item.nome}</h3>
                <div 
                  className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                    isItemSelecionado(item.id) ? 'border-shappi-green text-shappi-green' : 'border-gray-300'
                  }`}
                >
                  {isItemSelecionado(item.id) && <div className="w-4 h-4 rounded-full bg-shappi-green" />}
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Obter estimativa por {item.medidaPor === 'quantidade' ? 'Unidade' : 'Quilo'}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {itensSelecionados.length > 0 && (
        <div className="mt-8">
          <h3 className="font-semibold text-xl mb-4">Finalize seus itens para envio:</h3>
          
          <div className="space-y-4 mb-6">
            {itensSelecionados.map(itemSelecionado => (
              <div 
                key={itemSelecionado.item.id} 
                className="border border-green-300 rounded-lg p-4 bg-white relative"
              >
                <button 
                  onClick={() => removerItem(itemSelecionado.item.id)}
                  className="absolute right-2 top-2 p-1 text-gray-400 hover:text-red-500"
                >
                  <X size={16} />
                </button>
                
                <h4 className="text-shappi-green font-medium">{itemSelecionado.item.nome}</h4>
                
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <span className="mr-2">
                      {itemSelecionado.item.medidaPor === 'quantidade' ? 'Qtd' : 'Kg'}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-md bg-shappi-green text-white hover:bg-shappi-green/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        decrementarValor(itemSelecionado.item.id, itemSelecionado.item.medidaPor);
                      }}
                    >
                      <Minus size={16} />
                    </Button>
                    
                    <span className="mx-3 font-semibold">
                      {itemSelecionado.item.medidaPor === 'quantidade' 
                        ? itemSelecionado.quantidade 
                        : itemSelecionado.peso
                      }
                    </span>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-md bg-shappi-green text-white hover:bg-shappi-green/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        incrementarValor(itemSelecionado.item.id, itemSelecionado.item.medidaPor);
                      }}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Preço:</div>
                    <div className="font-semibold">
                      {formatarValor(
                        itemSelecionado.item.medidaPor === 'quantidade'
                          ? itemSelecionado.item.precoPorUnidade * (itemSelecionado.quantidade || 0)
                          : itemSelecionado.item.precoPorUnidade * (itemSelecionado.peso || 0),
                        'kwanza'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="border border-dashed border-green-300 rounded-lg p-4 text-center cursor-pointer hover:bg-green-50">
              <Plus className="mx-auto text-shappi-green" />
              <span className="text-shappi-green font-medium">+ Adicione mais</span>
            </div>
          </div>
          
          <div className="font-bold text-xl mb-6">
            Preço Total: {formatarValor(calcularSubtotalItens(), 'kwanza')}
          </div>
          
          <div className="flex justify-end space-x-4">
            <Button 
              className="bg-shappi-green hover:bg-shappi-green/90"
              onClick={() => setEtapaAtual(2)}
            >
              Próximo
            </Button>
          </div>
        </div>
      )}
      
      {itensSelecionados.length === 0 && (
        <div className="flex justify-end mt-8">
          <Button 
            disabled
            className="bg-gray-300 cursor-not-allowed"
          >
            Próximo
          </Button>
        </div>
      )}
    </div>
  );
};

export default EtapaSelecaoItens;

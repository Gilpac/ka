
import React, { createContext, useContext, useState } from 'react';

export type ItemType = {
  id: string;
  nome: string;
  medidaPor: 'quantidade' | 'peso';
  precoPorUnidade: number;
};

export type SelectedItemType = {
  item: ItemType;
  quantidade?: number;
  peso?: number;
};

export type OrigemDestinoType = {
  pais: string;
  estado: string;
  municipio: string;
  codigoPostal?: string;
  pontoReferencia?: string;
  nomeDestinatario?: string;
  telefone?: string;
};

export type TipoEnvioType = {
  recolha: boolean;
  tipoEnvio: 'padrao' | 'express' | 'priority';
  seguro: 'basico' | 'premium' | 'nenhum';
  valorSeguro: number;
};

export type MoedaType = 'kwanza' | 'dolar' | 'euro' | 'reais';

export type TaxasCambioType = {
  kwanza: { dolar: number; euro: number; reais: number };
};

type SimulacaoContextType = {
  etapaAtual: number;
  setEtapaAtual: React.Dispatch<React.SetStateAction<number>>;
  
  // Etapa 1: Seleção de itens
  itensCatalogo: ItemType[];
  itensSelecionados: SelectedItemType[];
  adicionarItem: (item: ItemType) => void;
  removerItem: (itemId: string) => void;
  atualizarQuantidade: (itemId: string, quantidade: number) => void;
  atualizarPeso: (itemId: string, peso: number) => void;
  
  // Etapa 2: Origem
  origem: OrigemDestinoType;
  setOrigem: React.Dispatch<React.SetStateAction<OrigemDestinoType>>;
  
  // Etapa 3: Destino
  destino: OrigemDestinoType;
  setDestino: React.Dispatch<React.SetStateAction<OrigemDestinoType>>;
  
  // Etapa 4: Tipo de envio e seguro
  tipoEnvio: TipoEnvioType;
  setTipoEnvio: React.Dispatch<React.SetStateAction<TipoEnvioType>>;
  
  // Etapa 5: Resumo e pagamento
  moedaSelecionada: MoedaType;
  setMoedaSelecionada: React.Dispatch<React.SetStateAction<MoedaType>>;
  taxasCambio: TaxasCambioType;
  
  // Calculos
  calcularSubtotalItens: () => number;
  calcularTaxaEnvio: () => number;
  calcularTaxaSeguro: () => number;
  calcularTotal: () => number;
  converterValor: (valor: number, moedaDestino: MoedaType) => number;
  formatarValor: (valor: number, moeda: MoedaType) => string;
};

const SimulacaoContext = createContext<SimulacaoContextType | undefined>(undefined);

export const useSimulacao = () => {
  const context = useContext(SimulacaoContext);
  if (!context) {
    throw new Error('useSimulacao deve ser usado dentro de um SimulacaoProvider');
  }
  return context;
};

// Dados fictícios para o catálogo
const itensDisponiveis: ItemType[] = [
  { id: '1', nome: 'iPad/Tablets', medidaPor: 'quantidade', precoPorUnidade: 5000 },
  { id: '2', nome: 'Roupa', medidaPor: 'peso', precoPorUnidade: 1000 },
  { id: '3', nome: 'Sapatos', medidaPor: 'quantidade', precoPorUnidade: 2000 },
  { id: '4', nome: 'Telefone', medidaPor: 'quantidade', precoPorUnidade: 3000 },
  { id: '5', nome: 'Computador', medidaPor: 'quantidade', precoPorUnidade: 7000 },
  { id: '6', nome: 'Perfume', medidaPor: 'peso', precoPorUnidade: 2500 },
  { id: '7', nome: 'Consola', medidaPor: 'quantidade', precoPorUnidade: 6000 },
  { id: '8', nome: 'Streaming', medidaPor: 'quantidade', precoPorUnidade: 1500 },
];

// Taxas de câmbio fictícias
const taxasCambioIniciais = {
  kwanza: { dolar: 0.0012, euro: 0.0011, reais: 0.0062 }
};

export const SimulacaoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [etapaAtual, setEtapaAtual] = useState<number>(1);
  const [itensSelecionados, setItensSelecionados] = useState<SelectedItemType[]>([]);
  
  const [origem, setOrigem] = useState<OrigemDestinoType>({
    pais: '',
    estado: '',
    municipio: '',
  });
  
  const [destino, setDestino] = useState<OrigemDestinoType>({
    pais: '',
    estado: '',
    municipio: '',
  });
  
  const [tipoEnvio, setTipoEnvio] = useState<TipoEnvioType>({
    recolha: false,
    tipoEnvio: 'padrao',
    seguro: 'nenhum',
    valorSeguro: 0,
  });
  
  const [moedaSelecionada, setMoedaSelecionada] = useState<MoedaType>('kwanza');
  const [taxasCambio] = useState<TaxasCambioType>(taxasCambioIniciais);
  
  // Funções para manipular itens
  const adicionarItem = (item: ItemType) => {
    // Verificar se o item já existe
    const itemExistente = itensSelecionados.find(i => i.item.id === item.id);
    
    if (!itemExistente) {
      const novoItem: SelectedItemType = {
        item,
        quantidade: item.medidaPor === 'quantidade' ? 1 : undefined,
        peso: item.medidaPor === 'peso' ? 1 : undefined,
      };
      setItensSelecionados([...itensSelecionados, novoItem]);
    }
  };
  
  const removerItem = (itemId: string) => {
    setItensSelecionados(itensSelecionados.filter(i => i.item.id !== itemId));
  };
  
  const atualizarQuantidade = (itemId: string, quantidade: number) => {
    setItensSelecionados(
      itensSelecionados.map(item => 
        item.item.id === itemId ? { ...item, quantidade } : item
      )
    );
  };
  
  const atualizarPeso = (itemId: string, peso: number) => {
    setItensSelecionados(
      itensSelecionados.map(item => 
        item.item.id === itemId ? { ...item, peso } : item
      )
    );
  };
  
  // Funções de cálculo
  const calcularSubtotalItens = () => {
    return itensSelecionados.reduce((total, item) => {
      if (item.item.medidaPor === 'quantidade' && item.quantidade) {
        return total + (item.item.precoPorUnidade * item.quantidade);
      } else if (item.item.medidaPor === 'peso' && item.peso) {
        return total + (item.item.precoPorUnidade * item.peso);
      }
      return total;
    }, 0);
  };
  
  const calcularTaxaEnvio = () => {
    const taxaBase = 500; // Taxa base fictícia
    
    const multiplicadorTipoEnvio = {
      padrao: 1,
      express: 1.5,
      priority: 2.5,
    };
    
    const taxaRecolha = tipoEnvio.recolha ? 250 : 0;
    
    return taxaBase * multiplicadorTipoEnvio[tipoEnvio.tipoEnvio] + taxaRecolha;
  };
  
  const calcularTaxaSeguro = () => {
    if (tipoEnvio.seguro === 'nenhum') return 0;
    
    const subtotalItens = calcularSubtotalItens();
    const taxaSeguro = {
      basico: 0.02,  // 2% do valor
      premium: 0.05, // 5% do valor
    };
    
    return subtotalItens * taxaSeguro[tipoEnvio.seguro];
  };
  
  const calcularTotal = () => {
    return calcularSubtotalItens() + calcularTaxaEnvio() + calcularTaxaSeguro();
  };
  
  const converterValor = (valor: number, moedaDestino: MoedaType): number => {
    if (moedaDestino === 'kwanza') return valor;
    
    return valor * taxasCambio.kwanza[moedaDestino];
  };
  
  const formatarValor = (valor: number, moeda: MoedaType): string => {
    const simbolos = {
      kwanza: 'Kz',
      dolar: 'US$',
      euro: '€',
      reais: 'R$'
    };
    
    const valorConvertido = converterValor(valor, moeda);
    
    return `${simbolos[moeda]} ${valorConvertido.toFixed(2)}`;
  };
  
  const value = {
    etapaAtual,
    setEtapaAtual,
    
    itensCatalogo: itensDisponiveis,
    itensSelecionados,
    adicionarItem,
    removerItem,
    atualizarQuantidade,
    atualizarPeso,
    
    origem,
    setOrigem,
    
    destino,
    setDestino,
    
    tipoEnvio,
    setTipoEnvio,
    
    moedaSelecionada,
    setMoedaSelecionada,
    taxasCambio,
    
    calcularSubtotalItens,
    calcularTaxaEnvio,
    calcularTaxaSeguro,
    calcularTotal,
    converterValor,
    formatarValor,
  };
  
  return (
    <SimulacaoContext.Provider value={value}>
      {children}
    </SimulacaoContext.Provider>
  );
};


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Para quais países a Shappi envia?",
    answer: "A Shappi oferece soluções de envio para mais de 220 países e territórios em todo o mundo. Nossa rede global garante que seus pacotes cheguem ao destino de forma eficiente e segura."
  },
  {
    question: "Como posso rastrear meu envio?",
    answer: "Você pode rastrear facilmente seu envio fazendo login em sua conta Shappi e navegando até a seção 'Meus Envios'. Alternativamente, você pode usar o número de rastreamento fornecido em seu e-mail de confirmação em nossa página de rastreamento."
  },
  {
    question: "Quais são as tarifas de envio?",
    answer: "As tarifas de envio variam de acordo com o país de destino, dimensões do pacote, peso e método de envio selecionado. Para obter uma cotação precisa, basta inserir os detalhes do seu envio em nossa calculadora de envio antes de fazer a reserva."
  },
  {
    question: "Quanto tempo leva o envio internacional?",
    answer: "Os tempos de entrega variam dependendo do destino e do serviço selecionado. Os serviços expressos podem entregar em 1-3 dias úteis para os principais destinos internacionais, enquanto os serviços padrão geralmente levam de 5 a 10 dias úteis."
  },
  {
    question: "O seguro do pacote está disponível?",
    answer: "Sim, a Shappi oferece proteção opcional para seus envios. Você pode adicionar seguro durante o processo de reserva para proteger seus pacotes contra perda ou danos até o valor declarado."
  },
  {
    question: "Quais itens são proibidos para envio?",
    answer: "Os itens proibidos incluem, mas não se limitam a: materiais perigosos, substâncias ilegais, armas de fogo, moeda, e produtos perecíveis. Consulte nossa lista completa de itens proibidos antes de enviar para garantir a conformidade."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-white to-shappi-gray-light">
      <div className="shappi-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Encontre respostas para perguntas comuns sobre nossos serviços de envio internacional.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Betty Rafaela",
    title: "Proprietária de Pequeno Negócio",
    content: "A Kargoo transformou a maneira como envio produtos internacionalmente. O processo é simples, as tarifas são competitivas e meus clientes estão satisfeitos com os tempos rápidos de entrega.",
    image: "/order-approve.svg"
  },
  {
    name: "Wilson Bula",
    title: "Vendedor de E-commerce",
    content: "Como alguém que envia regularmente para vários países, a Kargoo tem sido um divisor de águas. O painel é fácil de usar e as atualizações de rastreamento são confiáveis.",
    image: "/order-approve.svg"
  },
  {
    name: "Justina Lopes",
    title: "Remetente Frequente",
    description: "Uso a Kargoo para enviar pacotes de cuidados para a família no exterior. Os preços transparentes e o excelente suporte ao cliente tornam o envio internacional livre de estresse.",
    image: "/order-approve.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="shappi-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes <span className="gradient-text">Dizem</span>
          </h2>
          <p className="text-lg text-gray-600">
            Milhares de indivíduos e empresas confiam na Kargoo para suas necessidades de envio internacional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm card-hover-effect">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content || testimonial.description}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

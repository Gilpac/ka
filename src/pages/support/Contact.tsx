
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Here you would typically send the form data to your backend
  };

  const officeLocations = [
    {
      city: "São Paulo",
      address: "Av. Paulista, 1000, Bela Vista\nSão Paulo - SP, 01310-100, Brasil",
      phone: "+55 11 3456-7890",
      email: "brasil@kargoo.com"
    },
    {
      city: "Lisboa",
      address: "Av. da Liberdade, 110\nLisboa, 1250-146, Portugal",
      phone: "+351 21 987-6543",
      email: "portugal@kargoo.com"
    },
    {
      city: "Miami",
      address: "100 Biscayne Blvd\nMiami, FL 33132, United States",
      phone: "+1 305-123-4567",
      email: "usa@kargoo.com"
    }
  ];

  return (
    <PageLayout title="Contate-nos">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-600 mb-10">
          Estamos aqui para ajudar. Entre em contato conosco por meio de qualquer um dos canais abaixo ou preencha o formulário.
        </p>
        
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Fale conosco</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-shappi-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-shappi-green" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Telefone</h3>
                  <p className="text-gray-600">+55 11 3456-7890</p>
                  <p className="text-gray-600 text-sm mt-1">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-shappi-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-shappi-green" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-600">contato@kargoo.com</p>
                  <p className="text-gray-600 text-sm mt-1">Respondemos em até 24h úteis</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-shappi-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-shappi-green" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Chat ao vivo</h3>
                  <p className="text-gray-600">Disponível em nosso site e app</p>
                  <p className="text-gray-600 text-sm mt-1">Todos os dias, 8h às 20h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nome completo</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Assunto</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detalhe sua mensagem aqui..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto bg-shappi-green hover:bg-shappi-green/90">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Nossos escritórios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-shappi-green mr-2" />
                  <h3 className="font-bold">{office.city}</h3>
                </div>
                <p className="text-gray-600 whitespace-pre-line mb-4">{office.address}</p>
                <div className="text-sm space-y-1">
                  <p><span className="font-semibold">Tel:</span> {office.phone}</p>
                  <p><span className="font-semibold">Email:</span> {office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;

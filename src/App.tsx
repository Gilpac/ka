
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Simulacao from "./pages/Simulacao";
import Transportadores from "./pages/Transportadores";

// Company pages
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";
import Press from "./pages/company/Press";
import Partners from "./pages/company/Partners";

// Services pages
import InternationalShipping from "./pages/services/InternationalShipping";
import ExpressDelivery from "./pages/services/ExpressDelivery";
import PackageInsurance from "./pages/services/PackageInsurance";
import BusinessSolutions from "./pages/services/BusinessSolutions";

// Support pages
import HelpCenter from "./pages/support/HelpCenter";
import Contact from "./pages/support/Contact";
import PrivacyPolicy from "./pages/support/PrivacyPolicy";
import TermsOfService from "./pages/support/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/simulacao" element={<Simulacao />} />
          <Route path="/transportadores" element={<Transportadores />} />
          
          {/* Company Routes */}
          <Route path="/sobre" element={<About />} />
          <Route path="/carreiras" element={<Careers />} />
          <Route path="/imprensa" element={<Press />} />
          <Route path="/parceiros" element={<Partners />} />
          
          {/* Services Routes */}
          <Route path="/envio-internacional" element={<InternationalShipping />} />
          <Route path="/entrega-expressa" element={<ExpressDelivery />} />
          <Route path="/seguro-pacotes" element={<PackageInsurance />} />
          <Route path="/solucoes-empresariais" element={<BusinessSolutions />} />
          
          {/* Support Routes */}
          <Route path="/central-ajuda" element={<HelpCenter />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<TermsOfService />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

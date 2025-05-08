
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  fullWidth?: boolean;
}

const PageLayout = ({ children, title, fullWidth = false }: PageLayoutProps) => {
  // Update the document title when the component mounts
  React.useEffect(() => {
    document.title = `${title} | Kargoo`;
    return () => {
      document.title = 'Kargoo';
    };
  }, [title]);

  // Add class to the body to identify that we're not on the home page
  React.useEffect(() => {
    document.body.classList.add('not-home');
    return () => {
      document.body.classList.remove('not-home');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className={`shappi-container py-10 ${fullWidth ? 'max-w-full' : ''}`}>
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;

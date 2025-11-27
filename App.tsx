import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { CURRICULUM } from './constants';
import { Section } from './types';
import { Menu, X, Terminal } from 'lucide-react';

function App() {
  // Default to the first section of the first chapter
  const [activeSection, setActiveSection] = useState<Section | null>(
    CURRICULUM[0]?.sections[0] || null
  );
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Calculate next section
  const getNextSection = (currentSection: Section | null): Section | null => {
    if (!currentSection) return null;

    let foundCurrent = false;
    for (const chapter of CURRICULUM) {
      for (const section of chapter.sections) {
        if (foundCurrent) {
          return section;
        }
        if (section.id === currentSection.id) {
          foundCurrent = true;
        }
      }
    }
    return null;
  };

  const nextSection = getNextSection(activeSection);

  const handleNextClick = () => {
    if (nextSection) {
      setActiveSection(nextSection);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      
      {/* Website Title Bar (Header) */}
      <header className="sticky top-0 z-50 w-full bg-emerald-900 text-white shadow-md h-16 flex-shrink-0">
        <div className="h-full max-w-[1920px] mx-auto px-4 md:px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-1 text-emerald-100 hover:text-white hover:bg-emerald-800 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo / Title */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center border border-emerald-600 shadow-sm">
                <Terminal size={18} className="text-emerald-100" />
              </div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white">
                완벽 프롬프트 가이드북
              </h1>
            </div>
          </div>

          <div className="hidden md:block text-sm text-emerald-200 font-medium">
            v1.0.0
          </div>
        </div>
      </header>

      <div className="flex flex-1 relative max-w-[1920px] mx-auto w-full">
        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden top-16"
            onClick={closeMobileMenu}
          />
        )}

        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection} 
          onSelectSection={setActiveSection}
          isOpen={isMobileMenuOpen}
          onCloseMobile={closeMobileMenu}
        />

        {/* Main Content */}
        <main className="flex-1 w-full transition-all duration-300 bg-white">
          {activeSection ? (
            <ContentArea 
              section={activeSection} 
              nextSection={nextSection}
              onNextClick={handleNextClick}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-gray-400 p-8 text-center">
              <div className="mb-4 text-6xl">👋</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">환영합니다!</h2>
              <p className="max-w-md">
                왼쪽 메뉴에서 학습하고 싶은 단계를 선택하여<br />프롬프트 엔지니어링 마스터 여정을 시작하세요.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
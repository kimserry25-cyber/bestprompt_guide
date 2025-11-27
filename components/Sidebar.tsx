import React, { useState, useEffect } from 'react';
import { CURRICULUM } from '../constants';
import { Section } from '../types';
import { ChevronRight, ChevronDown, Lock } from 'lucide-react';

interface SidebarProps {
  activeSection: Section | null;
  onSelectSection: (section: Section) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSelectSection, isOpen, onCloseMobile }) => {
  // Store expanded chapter IDs
  const [expandedChapters, setExpandedChapters] = useState<string[]>(['beginner']);

  // Automatically expand the chapter that contains the active section
  useEffect(() => {
    if (activeSection) {
      const activeChapter = CURRICULUM.find(chapter => 
        chapter.sections.some(section => section.id === activeSection.id)
      );
      if (activeChapter) {
        setExpandedChapters([activeChapter.id]);
      }
    }
  }, [activeSection]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId)
        ? [] // Accordion: Close if clicking the open one
        : [chapterId] // Accordion: Open the clicked one, close others
    );
  };

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0
        ${isOpen ? 'translate-x-0 top-16 h-[calc(100vh-4rem)] shadow-xl' : '-translate-x-full top-16 h-[calc(100vh-4rem)]'}
      `}
    >
      <div className="h-full flex flex-col overflow-hidden">
        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
          <div className="mb-4 px-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Curriculum
            </h3>
          </div>

          {CURRICULUM.map((chapter) => {
            const isExpanded = expandedChapters.includes(chapter.id);
            const hasActiveChild = chapter.sections.some(s => s.id === activeSection?.id);
            const isActiveChapter = hasActiveChild;

            return (
              <div key={chapter.id} className="mb-2">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold transition-colors duration-200
                    ${isActiveChapter ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700 hover:bg-gray-100'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <chapter.icon size={18} className={isActiveChapter ? 'text-emerald-600' : 'text-gray-400'} />
                    <span>{chapter.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </button>
                
                {/* Sub-menu (Sections) */}
                {isExpanded && (
                  <div className="mt-1 ml-4 pl-4 border-l-2 border-gray-100 space-y-1">
                    {chapter.sections.length > 0 ? (
                      chapter.sections.map((section) => {
                        const isActive = activeSection?.id === section.id;
                        return (
                          <button
                            key={section.id}
                            onClick={() => {
                              onSelectSection(section);
                              onCloseMobile();
                            }}
                            className={`
                              w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 block
                              ${isActive 
                                ? 'text-emerald-700 font-medium bg-white shadow-sm ring-1 ring-gray-100 border-l-2 border-emerald-500 rounded-l-none' 
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                              }
                            `}
                          >
                            {section.title}
                          </button>
                        );
                      })
                    ) : (
                      <div className="px-3 py-2 text-sm text-gray-400 italic flex items-center gap-2">
                        <Lock size={12} /> 콘텐츠 준비중
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex-shrink-0">
          <div className="text-xs text-gray-500 text-center">
            &copy; 2025 Prompt Masterclass
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
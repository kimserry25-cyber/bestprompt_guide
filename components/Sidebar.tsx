import React, { useState, useEffect } from 'react';
import { CURRICULUM } from '../constants';
import { Section, TableData } from '../types';
import { ChevronRight, ChevronDown, Lock, FileText } from 'lucide-react';

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

  const generateChapterHTML = (chapter: typeof CURRICULUM[0]) => {
    let htmlContent = '';

    chapter.sections.forEach(section => {
      htmlContent += `<h2 style="font-size:18.0pt;color:#059669;border-bottom:1px solid #cccccc;padding-bottom:5px;margin-top:30px;page-break-before:always">${section.title}</h2>`;
      htmlContent += `<p style="color:#666666;font-style:italic;margin-bottom:20px;">${section.description}</p>`;

      section.blocks.forEach(block => {
        switch (block.type) {
          case 'header':
            htmlContent += `<h3 style="font-size:14.0pt;color:#065f46;margin-top:20px;margin-bottom:10px;">${block.content}</h3>`;
            break;
          case 'sub-header':
            htmlContent += `<h4 style="font-size:12.0pt;color:#374151;font-weight:bold;margin-top:15px;margin-bottom:5px;">${block.content}</h4>`;
            break;
          case 'paragraph':
            const pText = (block.content as string).replace(/\n/g, '<br/>');
            htmlContent += `<p style="font-size:11.0pt;line-height:1.6;margin-bottom:10px;">${pText}</p>`;
            break;
          case 'list':
            if (Array.isArray(block.content)) {
              htmlContent += '<ul style="margin-bottom:10px;">' + block.content.map(item => `<li style="font-size:11.0pt;margin-bottom:5px;">${item}</li>`).join('') + '</ul>';
            }
            break;
          case 'code':
            const codeText = (block.content as string).replace(/</g, '&lt;').replace(/>/g, '&gt;');
            htmlContent += `
              <div style="background-color:#f8fafc;border:1px solid #e2e8f0;padding:15px;margin:15px 0;border-radius:5px;">
                <pre style="font-family:Consolas,monaco,monospace;font-size:10.0pt;white-space:pre-wrap;margin:0;color:#333;">${codeText}</pre>
              </div>`;
            break;
          case 'tip':
            htmlContent += `
              <div style="background-color:#eff6ff;border:1px solid #bfdbfe;padding:15px;margin:15px 0;border-left:5px solid #3b82f6;">
                <strong style="color:#1e3a8a;">💡 PRO TIP:</strong><br/>
                <span style="color:#1e40af;">${block.content}</span>
              </div>`;
            break;
          case 'warning':
            htmlContent += `
              <div style="background-color:#fffbeb;border:1px solid #fde68a;padding:15px;margin:15px 0;border-left:5px solid #d97706;">
                <strong style="color:#92400e;">⚠️ 주의사항:</strong><br/>
                <span style="color:#92400e;">${block.content}</span>
              </div>`;
            break;
          case 'table':
            const data = block.content as TableData;
            if (data && data.headers && data.rows) {
              htmlContent += '<table border="1" style="width:100%;border-collapse:collapse;margin:20px 0;border:1px solid #000;"><thead><tr>' + 
                data.headers.map(h => `<th style="background-color:#f3f4f6;padding:8px;text-align:left;font-size:10.0pt;">${h}</th>`).join('') + 
                '</tr></thead><tbody>';
              data.rows.forEach(row => {
                htmlContent += '<tr>' + row.map(c => `<td style="padding:8px;font-size:10.0pt;">${c}</td>`).join('') + '</tr>';
              });
              htmlContent += '</tbody></table>';
            }
            break;
        }
      });
    });

    return htmlContent;
  };

  const handleDownloadWord = (e: React.MouseEvent, chapter: typeof CURRICULUM[0]) => {
    e.stopPropagation();

    const innerHtml = generateChapterHTML(chapter);

    // Full HTML structure optimized for MS Word
    const fullHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${chapter.title}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          body { font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; }
          /* Ensure headers are not stripped */
          h1, h2, h3, h4, h5, h6 { mso-outline-level:0; } 
        </style>
      </head>
      <body lang=KO style='tab-interval:36.0pt'>
        <div class=Section1>
          <p style="text-align:center;margin-bottom:30px;">
            <span style="font-size:24.0pt;font-weight:bold;color:#064e3b;">${chapter.title}</span><br/>
            <span style="font-size:14.0pt;color:#666666;">2025 Prompt Masterclass by Designemer</span>
          </p>
          <hr size=2 width="100%" align=center color="#059669">
          ${innerHtml}
          <br clear=all style='mso-special-character:line-break;page-break-before:always'>
          <p style="text-align:center;font-size:9.0pt;color:#999999;margin-top:50px;">
            Prompt Engineering Masterclass | Generated on ${new Date().toLocaleDateString()}
          </p>
        </div>
      </body>
      </html>
    `;

    // Use application/vnd.ms-word for better compatibility
    const blob = new Blob(['\ufeff', fullHtml], {
        type: 'application/vnd.ms-word'
    });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Format filename safely
    const safeTitle = chapter.title.replace(/[^a-zA-Z0-9가-힣\s]/g, '').trim().replace(/\s+/g, '_');
    link.href = url;
    link.download = `${safeTitle}_Guide.doc`;
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
                <div 
                  className={`
                    w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer
                    ${isActiveChapter ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700 hover:bg-gray-100'}
                  `}
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <chapter.icon size={18} className={isActiveChapter ? 'text-emerald-600' : 'text-gray-400'} />
                    <span>{chapter.title}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => handleDownloadWord(e, chapter)}
                      className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-100 rounded-md transition-all"
                      title="Word 파일로 다운로드"
                    >
                      <FileText size={16} />
                    </button>
                    {isExpanded ? (
                      <ChevronDown size={16} className="text-gray-400 ml-1" />
                    ) : (
                      <ChevronRight size={16} className="text-gray-400 ml-1" />
                    )}
                  </div>
                </div>
                
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
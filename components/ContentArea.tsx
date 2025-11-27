import React from 'react';
import { Section, ContentBlock, TableData } from '../types';
import { Lightbulb, AlertTriangle, Copy, Check, ArrowRight } from 'lucide-react';

interface ContentAreaProps {
  section: Section;
  nextSection: Section | null;
  onNextClick: () => void;
}

const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
        <span className="text-xs font-medium text-gray-500 uppercase">{language || 'text'}</span>
        <button 
          onClick={handleCopy}
          className="p-1 hover:bg-gray-200 rounded transition-colors"
          title="코드 복사"
        >
          {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-gray-500" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-800 leading-relaxed whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};

const TableBlock: React.FC<{ data: TableData }> = ({ data }) => (
  <div className="my-6 overflow-hidden rounded-lg border border-gray-200 shadow-sm overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {data.headers.map((header, idx) => (
            <th 
              key={idx} 
              scope="col" 
              className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-100"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.rows.map((row, rowIdx) => (
          <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, cellIdx) => (
              <td key={cellIdx} className="px-6 py-4 text-sm text-gray-700 leading-snug">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'header':
      return <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 pb-2 border-b border-gray-100">{block.content as string}</h2>;
    
    case 'sub-header':
      return <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{block.content as string}</h3>;
    
    case 'paragraph':
      return <p className="text-gray-600 leading-relaxed mb-6 text-lg whitespace-pre-line">{block.content as string}</p>;
    
    case 'code':
      return <CodeBlock code={block.content as string} language={block.language} />;
    
    case 'table':
      return <TableBlock data={block.content as TableData} />;
    
    case 'tip':
      return (
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg flex gap-3">
          <Lightbulb className="text-blue-500 flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-blue-900 text-sm mb-1">PRO TIP</h4>
            <p className="text-blue-800 text-sm leading-relaxed">{block.content as string}</p>
          </div>
        </div>
      );
    
    case 'warning':
      return (
        <div className="my-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg flex gap-3">
          <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-amber-900 text-sm mb-1">주의사항</h4>
            <p className="text-amber-800 text-sm leading-relaxed">{block.content as string}</p>
          </div>
        </div>
      );

    case 'list':
      return (
        <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-600">
          {(block.content as string[]).map((item, idx) => (
            <li key={idx} className="pl-2">{item}</li>
          ))}
        </ul>
      );
    
    default:
      return null;
  }
};

const ContentArea: React.FC<ContentAreaProps> = ({ section, nextSection, onNextClick }) => {
  // Hide next button for Template sections
  const showNextButton = nextSection && !section.id.startsWith('tmpl-');

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16">
      <header className="mb-12">
        <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold rounded-full mb-4">
          CHAPTER: {section.id.toUpperCase()}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          {section.title}
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          {section.description}
        </p>
      </header>

      <article className="prose prose-slate max-w-none">
        {section.blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </article>

      {/* Next Lesson Button */}
      {showNextButton && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={onNextClick}
            className="group flex items-center gap-3 px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-brand-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span>다음 단계 학습하기: {nextSection!.title.split(':')[0]}</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <span>Last updated: November 2025</span>
        <span>by Designemer</span>
      </div>
    </div>
  );
};

export default ContentArea;
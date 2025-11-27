import React from 'react';

export type BlockType = 'paragraph' | 'header' | 'sub-header' | 'code' | 'tip' | 'warning' | 'list' | 'table';

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface ContentBlock {
  type: BlockType;
  content: string | string[] | TableData; // string for text/code, array for lists/tables
  language?: string; // for code blocks
}

export interface Section {
  id: string;
  title: string;
  description: string;
  blocks: ContentBlock[];
}

export interface Chapter {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  sections: Section[];
}
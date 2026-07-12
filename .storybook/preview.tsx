
import React, { useEffect, useLayoutEffect, useState } from 'react';
import type { Preview } from '@storybook/react-vite'
import {i18n}from 'jb-core/i18n';
import './index.css';

const preview: Preview = {
  parameters: {
    docs: {
      codePanel: true,
    },

    controls: {
      matchers: {
        //determine regex to show props controller with them
        color: /(background|color)$/i
      }
    },

    options: {
      storySort: (firstEntry, secondEntry) => {
        const topLevelOrder = ['Getting Started', 'Theme', 'Components', 'General'];
        const componentPageOrder = ['Overview', 'Readme', 'React Readme', 'Styling'];

        const normalizeStorySegment = (segment) =>
          segment
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/[-_]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();

        const getStoryImportBaseName = (importPath = '') =>
          importPath
            .split(/[\\/]/)
            .pop()
            ?.replace(/\.(stories\.)?(mdx|js|jsx|mjs|ts|tsx)$/, '') ?? '';

        const shouldAppendImportPathLeaf = (entry, titleParts) => {
          if (entry.type !== 'docs') {
            return false;
          }

          const importBaseName = getStoryImportBaseName(entry.importPath);
          const normalizedImportBaseName = normalizeStorySegment(importBaseName);
          const normalizedTitleLeaf = normalizeStorySegment(titleParts.at(-1) ?? '');

          return Boolean(importBaseName) && normalizedImportBaseName !== normalizedTitleLeaf;
        };

        const getStorySortPath = (entry) => {
          const titleParts = entry.title.split('/').filter(Boolean);

          if (shouldAppendImportPathLeaf(entry, titleParts)) {
            return [...titleParts, getStoryImportBaseName(entry.importPath)];
          }

          if (entry.type === 'story' && entry.name) {
            return [...titleParts, entry.name];
          }

          return titleParts;
        };

        const getStorySegmentRank = (segment, index) => {
          const normalizedSegment = normalizeStorySegment(segment);
          const orderedSegments = index === 0 ? topLevelOrder : componentPageOrder;
          const orderIndex = orderedSegments.findIndex((item) => normalizeStorySegment(item) === normalizedSegment);

          return orderIndex === -1 ? orderedSegments.length : orderIndex;
        };

        const firstPath = getStorySortPath(firstEntry);
        const secondPath = getStorySortPath(secondEntry);
        const getStoryPathPriority = (path) =>
          normalizeStorySegment(path[0] ?? '') === 'getting started' &&
          normalizeStorySegment(path[1] ?? '') === 'introduction'
            ? -1
            : 0;
        const firstPathPriority = getStoryPathPriority(firstPath);
        const secondPathPriority = getStoryPathPriority(secondPath);

        if (firstPathPriority !== secondPathPriority) {
          return firstPathPriority - secondPathPriority;
        }

        const maxLength = Math.max(firstPath.length, secondPath.length);

        for (let index = 0; index < maxLength; index += 1) {
          const firstSegment = firstPath[index] ?? '';
          const secondSegment = secondPath[index] ?? '';

          if (firstSegment === secondSegment) {
            continue;
          }

          const firstRank = getStorySegmentRank(firstSegment, index);
          const secondRank = getStorySegmentRank(secondSegment, index);

          if (firstRank !== secondRank) {
            return firstRank - secondRank;
          }

          return firstSegment.localeCompare(secondSegment, undefined, {
            numeric: true,
            sensitivity: 'base',
          });
        }

        return firstPath.length - secondPath.length;
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story,context)=>{
      const [key,setKey] = useState("initial")
      useEffect(()=>{
        if(document.documentElement.lang != context.globals.locale){
          i18n.addEventListener("localeChange",()=>{
            setKey(context.globals.locale);
          })
          if(context.globals.locale == 'fa-num'){
            document.documentElement.lang = 'fa';
            i18n.setLocale(new Intl.Locale('fa',{calendar: 'persian',numberingSystem:'arabext'}))
          }else{
            document.documentElement.lang = context.globals.locale;
          }
        }
      },[context.globals.locale])
      useLayoutEffect(()=>{
        if(document.documentElement.dir != context.globals.dir){
          document.documentElement.dir = context.globals.dir;
        }
      },[context.globals.dir]);
      
      return <Story key={key}/>
    },
  ],
  globalTypes:{
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fa', right: '🇮🇷', title: 'Farsi(Persian)' },
          { value: 'fa-num', right: '🇮🇷', title: 'Farsi with fa Numbers' },
        ],
      },
    },
    dir: {
      name: 'Dir',
      description: 'page direction',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'transfer',
        items: [
          { value: 'ltr', title: 'LTR' },
          { value: 'rtl', title: 'RTL' },
        ],
      },
    },
  }
}
export default preview;

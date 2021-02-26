import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'
import '../config/chefkoch-design-system.scss';

const customViewports = {
  bpxxxs: {
    name: 'Breakpoint xxxs (320px)',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  bpxxs: {
    name: 'Breakpoint xxs (360px)',
    styles: {
      height: '568px',
      width: '360px',
    },
    type: 'mobile',
  },
  bpxs: {
    name: 'Breakpoint xs (480px)',
    styles: {
      height: '568px',
      width: '480px',
    },
    type: 'mobile',
  },
  bps: {
    name: 'Breakpoint s (600px)',
    styles: {
      height: '568px',
      width: '600px',
    },
    type: 'mobile',
  },
  bpm: {
    name: 'Breakpoint m (1196px)',
    styles: {
      height: '800px',
      width: '1196px',
    },
    type: 'desktop',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1112px',
      width: '834px',
    },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop',
    styles: {
      height: '800px',
      width: '1280px',
    },
    type: 'desktop',
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: customViewports,
  },
  options: {
    storySort: {
      order: ['Foundation', 'Library', 'Example'],
    },
  },
  docs: {
    transformSource: (src, storyContext) => {
      const source = typeof storyContext.storyFn() === 'object'? storyContext.storyFn().outerHTML : storyContext.storyFn();
      return  prettier.format(source, {
        parser: 'html',
        plugins: [HTMLParser]
      });
    }
  }
}



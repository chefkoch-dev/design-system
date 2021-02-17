import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'
import '../config/chefkoch-design-system.scss';

const customViewports = {
  mobile1: {
    name: 'Small mobile',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  mobile2: {
    name: 'Large mobile',
    styles: {
      height: '896px',
      width: '580px',
    },
    type: 'mobile',
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
      return  prettier.format(storyContext.storyFn().outerHTML, {
        parser: 'html',
        plugins: [HTMLParser]
      });
    }
  }
}



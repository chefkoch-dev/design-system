
import { create } from '@storybook/theming';
import { version } from "../package.json";

export default create({
  base: 'light',
  brandTitle: `Chefkoch Design System ${version}`,
  brandUrl: 'https://chefkoch.de',
  brandImage: 'https://design.chefkoch.de/logo.svg',
});
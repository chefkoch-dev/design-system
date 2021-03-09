
import { create } from '@storybook/theming';
import { version } from "../package.json";
import logo from "../stories/assets/logo.png";

export default create({
  base: 'light',
  brandTitle: `Chefkoch Design System ${version}`,
  brandUrl: 'https://chefkoch.de',
  brandImage: logo,
});
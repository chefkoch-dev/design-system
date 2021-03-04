import { createButton } from './Button';
import mdx from './Button.mdx';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    mode: {
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary', 'danger', 'conversion'] },
    },
    disabled: { type: 'boolean'}
  },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
  label: 'Button 2',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  mode: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  mode: 'tertiary',
};

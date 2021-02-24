import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args, {argTypes}) => ({
    components: {Button},
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
  template: '<Button v-bind="args">{{args.text}}</Button>',
});

const defaultProps = {
  text: "ButtonText",
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps,
  primary: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultProps,
  secondary: true,
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  ...defaultProps,
  tertiary: true,
}

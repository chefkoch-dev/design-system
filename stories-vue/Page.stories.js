import Page from './Page';

export default {
  title: 'Example/Page',
    comopnent: Page,
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args, {argTypes}) => ({
    components: {Page},
    props: Object.keys(argTypes),
    template: '<Page v-bind="$props" />',
});

export const LoggedIn = Template.bind({});

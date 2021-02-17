// import '../components/globals.scss';
// import '../components/button-primary.scss';
// import '../components/button-secondary.scss';

export const createButton = ({
  label,
  mode,
}) => {
  const btn = document.createElement('button');
  btn.innerText = label;

  btn.className = ['ds-btn', `ds-btn-${mode}`].join(' ');

  return btn;
};

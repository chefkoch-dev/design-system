import '../components/button.scss';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'ds-btn-primary' : 'ds-btn-secondary';
  btn.className = ['ds-btn', `ds-btn-${size}`, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};

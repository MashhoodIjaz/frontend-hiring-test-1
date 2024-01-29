const colorStyles = {
  blue: 'bg-blue',
  primary: 'bg-primary',
};

const sizeStyles = {
  small: 'px-3 py-2',
  regular: 'px-4 py-3',
  large: 'px-10 py-4 text-lg',
};

const commonStyles = 'text-white rounded-sm leading-none';

type ButtonProps = {
  className?: string;
  color?: keyof typeof colorStyles;
  size?: keyof typeof sizeStyles;
  children: React.ReactNode;
};

export default function Button({
  className = '',
  color = 'primary',
  size = 'regular',
  children,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${colorStyles[color]} ${sizeStyles[size]} ${commonStyles} ${className}`}
    >
      {children}
    </button>
  );
}

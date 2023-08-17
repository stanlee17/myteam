import { ReactNode } from 'react';
import styles from './LinkButton.module.scss';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  to?: string;
  className?: string;
  children: ReactNode;
  button?: boolean;
}

const LinkButton = ({ children, to, className, button }: LinkButtonProps) => {
  return button ? (
    <button className={`${styles.linkButton} ${className}`}>{children}</button>
  ) : (
    <Link to={to!} className={`${styles.linkButton} ${className}`}>
      {children}
    </Link>
  );
};

export default LinkButton;

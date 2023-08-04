import { ReactNode } from 'react';
import styles from './LinkButton.module.scss';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  to: string;
  className?: string;
  children: ReactNode;
}

const LinkButton = ({ children, to, className }: LinkButtonProps) => {
  return (
    <Link to={to} className={`${styles.linkButton} ${className}`}>
      {children}
    </Link>
  );
};

export default LinkButton;

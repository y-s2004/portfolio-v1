import { Link } from 'react-router-dom'
import '../css/Header.css'

export default function HeaderLink({ children, href, onClick, className }) {
  const isExternal = href.startsWith('http')

  if (isExternal) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`header-link ${className ?? ''}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
  }

    return (
        <Link
            to={href}
            onClick={onClick}
            className={`header-link ${className ?? ''}`}
        >
            {children}
        </Link>
    )
}
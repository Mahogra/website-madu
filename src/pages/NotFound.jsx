import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center" style={{ padding: '4rem 1rem' }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        The page you are looking for does not exist.
      </p>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-md)',
          fontWeight: 'var(--font-weight-medium)'
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;

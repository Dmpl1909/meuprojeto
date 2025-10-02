/**
 * Componente Card reutilizável
 *
 * @param {string} className - Classes CSS adicionais para estender o estilo
 * @param {React.ReactNode} children - O conteúdo interno do cartão
 * @returns {JSX.Element} - O componente Card renderizado
 */

export default function Card({ className = '', children }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
}
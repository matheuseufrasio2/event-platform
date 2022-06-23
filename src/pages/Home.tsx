import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen flex-1 flex justify-center items-center">
      <Link className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors" to="/event">
        Ir para evento
      </Link>
    </div>
  );
}

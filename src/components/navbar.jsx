import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/create', label: 'Create Blog' },
   { path: '/bookmarks', label: 'Bookmarks' }
  ];

  return (
    <nav className="bg-gray-600 text-white py-4 px-8 flex justify-end items-center">
      
      <div className="flex space-x-6">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`hover:underline ${
              location.pathname === path ? 'font-semibold underline' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

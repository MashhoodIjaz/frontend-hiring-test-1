import Button from '../ui/Button';

export default function Header() {
  const isLoggedIn = false; // TODO

  return (
    <header className="px-20 h-20 py-4 flex items-center justify-between bg-white shadow-md">
      <img src="/logo.png" className="h-12 w-auto object-contain" alt="Turing Technologies Logo" />

      {isLoggedIn && (
        <Button size="large" className="">
          Logout
        </Button>
      )}
    </header>
  );
}

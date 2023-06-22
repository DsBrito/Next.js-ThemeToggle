
import ThemeToggle from "../components/ThemeToggle";

export default function IndexPage() {
  return (
    <div className="max-w-screen-md mx-auto">
      <header className="flex justify-between items-center p-8">
        <h1 className="text-xl">Dinatas Santos Brito</h1>
        <ThemeToggle />
      </header>

    </div>
  );
}



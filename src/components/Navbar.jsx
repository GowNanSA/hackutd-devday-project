import { ReactComponent as Logo } from '../assets/logo.svg';
function Navbar() {
    return (
        // navbar object, tags are the biggest for html
        <nav className="w-screen bg-secondary  p-4 text-2xl font-bold text-text-primary">
            <div className="flex gap-2">
                <Logo />
                <h1>Totally Legal and Legit Streaming Site</h1>
            </div>
        </nav>
    );
}

export default Navbar;

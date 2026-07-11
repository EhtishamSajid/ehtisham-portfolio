const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-2xl font-bold text-blue-600">
          Ehtisham Sajid
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">

          <li className="cursor-pointer hover:text-blue-600 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Skills
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Experience
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Projects
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Contact
          </li>

        </ul>

        <button
          className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
        >
          Resume
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
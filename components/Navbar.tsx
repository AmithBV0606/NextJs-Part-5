import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

export default function Navbar() {
  console.log(`Navbar rendered!!`);

  return (
    <div className="flex justify-between items-center mt-4 mx-10">
      <NavLinks />
      <NavSearch />
    </div>
  );
}
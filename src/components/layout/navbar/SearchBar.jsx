import { Search } from "lucide-react";

function SearchBar({ searchQuery, handleSearchChange, mobile = false }) {
  return (
    <div className={mobile ? "mobile-search" : "navbar-search"}>
      <Search size={20} strokeWidth={2} />

      <input
        type="text"
        placeholder="Search items and brands"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
import { useState } from "react";

function useNavbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ================================
  // Search
  // ================================

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // ================================
  // Desktop Category
  // ================================

  const handleCategoryEnter = (category) => {
    setActiveCategory(category);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  // ================================
  // Mobile Menu
  // ================================

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return {
    searchQuery,
    activeCategory,
    isMenuOpen,

    handleSearchChange,
    handleCategoryEnter,
    handleCategoryLeave,

    toggleMenu,
    closeMenu,
  };
}

export default useNavbar;
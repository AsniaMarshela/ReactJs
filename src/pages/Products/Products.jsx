import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/getAllProducts";
import ProductList from "../../components/ProductList/ProductList";
import Navbar from "../../components/Navbar/Navbar";
import RadioButton from "../../components/RadioButton/RadioButton";
import getAllProductCategories from "../../services/getAllProductCategories";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [radioButtonOpts, setRadioButtonOpts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = () => {
    let allProducts = getAllProducts();
    allProducts = allProducts.length > 0 ? allProducts : [];
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  };

  const fetchCategories = () => {
    const categories = getAllProductCategories();
    const categoryOptions = categories.map((category) => ({
      label: category.name,
      value: category.slug,
    }));
    setRadioButtonOpts([{ label: "All", value: "all" }, ...categoryOptions]);
  };

  const handleFilterChange = (selectedValue) => {
    let filtered = products;

    if (selectedValue !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === selectedValue.toLowerCase()
      );
    }

    const matchesSearch = filtered.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(matchesSearch);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    handleFilterChange("all");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar onSearchChange={handleSearchChange} />

      {/* Filter Section */}
      <div className="bg-[#F9F9F9] px-6 md:px-24 py-6 flex flex-col gap-6 mt-4">
        <h3 className="text-[#002F6C] text-xl font-semibold">Filter</h3>
        <div className="flex gap-4 flex-wrap">
          <RadioButton
            options={radioButtonOpts}
            defaultValue={"all"}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Product Section */}
      <section className="container mx-auto px-6 md:px-24 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductList products={filteredProducts} />
        </div>
      </section>
    </>
  );
}

export default Products;

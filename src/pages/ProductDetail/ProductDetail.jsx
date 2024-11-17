import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllProducts } from "../../services/getAllProducts";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const allProducts = getAllProducts();
    const foundProduct = allProducts.find((prod) => prod.slug === slug);
    setProduct(foundProduct || {});
  }, [slug]);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb & Title */}
      <div className="bg-[#F9F9F9] py-4 px-6 md:px-24 flex items-center gap-4">
        <Link to="/" className="text-[#002F6C] hover:underline">
          <FontAwesomeIcon icon={faArrowLeftLong} className="text-2xl" />
        </Link>
        <h4 className="text-xl md:text-2xl font-semibold text-[#002F6C]">
          {product.name ?? "Book Details"}
        </h4>
      </div>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-6 px-6 md:px-24 py-8 bg-white">
        {/* Book Image */}
        <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[500px]">
          <img
            src={product.imageUrl || "/placeholder-image.jpg"}
            alt={product.name || "No Name"}
            className="w-full h-auto rounded-md object-cover shadow-lg"
          />
        </div>

        {/* Book Info */}
        <div className="flex flex-col gap-4">
          {/* Price */}
          <span className="text-2xl font-bold text-[#002F6C]">
            {product.price > 0 ? formatToIDRCurrency(product.price) : "Not For Sale"}
          </span>

          {/* Stock Information */}
          {product.stock > 0 ? (
            <span
              className={`text-sm font-medium ${
                product.stock <= 25 ? "text-yellow-600" : "text-green-600"
              }`}
            >
              {product.stock <= 25 ? "Available, almost out of stock" : "In Stock"}
            </span>
          ) : (
            <span className="text-sm font-medium text-red-600">Out of Stock</span>
          )}

          {/* Category */}
          <span className="text-base text-gray-700">
            Category: <strong>{product.category || "Uncategorized"}</strong>
          </span>

          {/* Add to Cart Button */}
          <Button
            type="button"
            disabled={product.stock <= 0}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-md ${
              product.stock > 0
                ? "bg-[#002F6C] hover:bg-[#003F91] text-white"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
          >
            <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
            <span>Add to Cart</span>
          </Button>

          {/* Description */}
          <div className="mt-6">
            <h5 className="text-lg font-semibold text-[#002F6C]">Description</h5>
            <p className="text-gray-700">{product.description || "No description available."}</p>
          </div>

          {/* Additional Details */}
          <div className="mt-6">
            <h5 className="text-lg font-semibold text-[#002F6C]">Details</h5>
            <ul className="text-gray-700 list-disc ml-6">
            <li>
                <strong>Publisher:</strong> {product.publisher || "No stock information"}
              </li>
              <li>
                <strong>Stock:</strong> {product.stock || "No stock information"}
              </li>
              <li>
                <strong> ISBN :</strong> {product.isbn || "No genre information"}
              </li>
              <li>
                <strong>Author:</strong> {product.author || "No novelist information"}
              </li>
              <li>
                <strong>Pages:</strong> {product.pages || "No page information"}
              </li>
              <li>
                <strong>Language:</strong> {product.language || "No language information"}
              </li>
              <li>
                <strong>Weight:</strong> {product.weight || "No weight information"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

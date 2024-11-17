import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ""}
      className="flex flex-col max-w-[350px] w-full p-4 bg-white shadow-lg border border-gray-200 hover:border-[#E63946] hover:shadow-xl transition-all rounded-md"
    >
      {/* Product Image */}
      <img
        src={product?.imageUrl ?? ""}
        alt={product?.name ?? "No Title"}
        className="block w-full max-h-[300px] mb-4 object-cover rounded-md"
      />

      {/* Product Details */}
      <div className="flex flex-col gap-2">
        {/* Title with Ellipsis */}
        <h4
          className="font-semibold text-[18px] text-[#002F6C] truncate"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={product?.name ?? "No Title"} // Tooltip to show full title on hover
        >
          {product?.name ?? "No Title"}
        </h4>

        {/* Category */}
        <span className="block font-medium text-[14px] text-gray-500">
          {product?.category ?? "Uncategorized"}
        </span>

        {/* Price */}
        <span className="block font-bold text-[20px] text-[#E63946]">
          {product?.price > 0 ? formatToIDRCurrency(product.price) : "Not For Sale"}
        </span>

        {/* Stock Status & Button */}
        <div className="mt-4">
          {product.stock <= 0 ? (
            <p className="text-sm font-semibold text-center text-red-500">
              Out of Stock
            </p>
          ) : product.stock <= 25 ? (
            <>
              <p className="text-sm font-semibold text-center text-yellow-500">
                Almost Sold Out
              </p>
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#002F6C] text-white hover:bg-[#1D3557] rounded-md w-full"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to cart</span>
              </Button>
            </>
          ) : (
            <Button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#002F6C] text-white hover:bg-[#1D3557] rounded-md w-full"
            >
              <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
              <span>Add to cart</span>
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

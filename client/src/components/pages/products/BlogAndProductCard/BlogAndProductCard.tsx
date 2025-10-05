"use client";
import Image from "next/image";
import { apiBaseUrl } from "@/config/config";
import Link from "next/link";
import { TProduct } from "@/types";
import ProductDialog from "../ProductDialog/ProductDialog";



interface Product {
  product: TProduct;
}

const BlogAndProductCard: React.FC<Product> = ({ product }) => {
  const {
    _id,
    inventoryRef,
    inventoryType,
    name,
    description,
    thumbnailImage,
    slug,
  } = product;



  return (
    <div className="group  overflow-hidden mt-6">
      <div className="overflow-hidden">
        {/* Image */}
        <div className="w-full max-h-[40vh] lg:max-h-[50vh] xl:max-h-[50vh] md:w-1/2 float-left md:mr-4 mb-4 md:mb-0 relative aspect-square">
          <Link href={`product/${slug}`}>
            <Image
              src={apiBaseUrl + thumbnailImage}
              alt={name}
              fill
              className="object-cover rounded"
            />
          </Link>
        </div>

        {/* Text */}
        <div className="text-justify">
          <h2 className="font-bold text-xl md:text-3xl lg:text-4xl py-4 text-gray-900 hover:text-[#A67C52]">{name}</h2>
          <div className="text-lg text-gray-600 leading-relaxed">
            <div className="">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          {/* <Link
            href="/checkout"
            className="inline-block w-full sm:w-3/4 md:w-1/2 lg:w-2/5 text-center font-semibold text-white bg-gradient-to-r from-[#D4A373] to-[#A67C52] 
               rounded-lg shadow-lg hover:shadow-xl hover:from-[#CCD5AE] hover:to-[#B5A37D] transition-all duration-300 px-4 py-3"
          >
            Order Now
          </Link> */}
         <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5">
            <ProductDialog
              name={name}
              productRef={_id}
              thumbnailImage={thumbnailImage}
              inventoryRef={
                Array.isArray(inventoryRef) ? inventoryRef : [inventoryRef]
              }
              inventoryType={inventoryType}
              showOrderNow={true} 
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogAndProductCard;

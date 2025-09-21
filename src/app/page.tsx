import Image from "next/image";

import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  console.log(products);
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/banner.png"
            alt="leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vm"
            className="h-auto w-full"
          />
        </div>
        <ProductList products={products} title="Mais vendidos" />
        <div className="px-5">
          <Image
            src="/banner-1.png"
            alt="leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vm"
            className="h-auto w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

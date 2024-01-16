import Link from "next/link";
import ProductCart from "@/app/components/ProductCart";

export default function Home() {
  return (
    <main>
      <h1>Main page</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  );
}

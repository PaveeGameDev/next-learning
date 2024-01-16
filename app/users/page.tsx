import UserTable from "@/app/users/UserTable";
import Link from "next/link";
import { Suspense } from "react";
type Props = {
  searchParams: { sortOrder: "name" | "email" };
};
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};
export default UsersPage;

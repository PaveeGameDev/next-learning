import UserTable from "@/app/users/UserTable";
type Props = {
  searchParams: { sortOrder: "name" | "email" };
};
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};
export default UsersPage;

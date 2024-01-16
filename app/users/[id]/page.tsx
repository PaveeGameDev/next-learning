import { notFound } from "next/navigation";

type Props = {
  params: { id: number };
};

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
};
export default UserDetailPage;

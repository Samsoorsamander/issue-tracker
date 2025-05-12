import Pagination from "./components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <main>
      <Pagination
        pageSize={10}
        currentPage={parseInt(searchParams.page)}
        itemCount={200}
      />
    </main>
  );
}

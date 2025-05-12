import Pagination from "./components/Pagination";

export default async function Home() {
  return (
    <main>
      <Pagination pageSize={10} currentPage={20} itemCount={200} />
    </main>
  );
}

import { Table } from "@/components/Table";
import { Pagination } from "@/components/Pagination";
import { Loader } from "@/components/Loader";
import { Button } from "@/components/Button";
import { usePeople } from "@/hooks/usePeople";
import { peopleTableStyles as styles } from "./PeopleTable.styles";
import { TableColumn } from "@/components/Table/Table.types";

const columns: TableColumn[] = [
  { key: "name", header: "Name", render: (row) => row.name },
  { key: "mass", header: "Mass", render: (row) => row.mass },
  { key: "height", header: "Height", render: (row) => row.height },
  { key: "hair_color", header: "Hair color", render: (row) => row.hair_color },
  { key: "skin_color", header: "Skin color", render: (row) => row.skin_color },
];

export const PeopleTable = () => {
  const { data, isLoading, error, page, setPage, isFromCache, refetch } =
    usePeople();

  if (isLoading) {
    return <Loader label="Loading data…" />;
  }

  if (error) {
    return (
      <div className={styles.errorState}>
        <p className={styles.errorMessage}>{error}</p>
        <Button variant="secondary" onClick={refetch}>
          Retry
        </Button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div>
      {isFromCache && (
        <p className={styles.cacheBadge}>Showing cached results</p>
      )}
      <Table
        columns={columns}
        rows={data.results}
        getRowKey={(row) => row.url}
      />
      <Pagination
        page={page}
        hasNext={Boolean(data.next)}
        hasPrevious={Boolean(data.previous)}
        onPageChange={setPage}
      />
    </div>
  );
};

PeopleTable.displayName = "PeopleTable";

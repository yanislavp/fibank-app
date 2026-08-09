import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { Button } from "@/components/Button";
import { PeopleTable } from "@/features/people/PeopleTable";
import { tableViewStyles as styles } from "./TableView.styles";

export const TableView = () => {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <main className={styles.view}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Fibank</p>
          {username && <p className={styles.welcome}>Welcome, {username}</p>}
        </div>
        <Button variant="secondary" onClick={handleLogout}>
          Log out
        </Button>
      </header>
      <div className={styles.content}>
        <PeopleTable />
      </div>
    </main>
  );
};

TableView.displayName = "TableView";

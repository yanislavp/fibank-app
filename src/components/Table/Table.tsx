import { tableStyles as styles } from './Table.styles';
import { TableProps } from './Table.types';

export const Table = ({ columns, rows, getRowKey }: TableProps) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col" className={styles.th}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {rows.map((row) => (
            <tr key={getRowKey(row)} className={styles.tr}>
              {columns.map((col) => (
                <td key={col.key} data-label={col.header} className={styles.td}>
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.displayName = 'Table';

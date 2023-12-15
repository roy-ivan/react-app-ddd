import { ItemInterface } from "../../../../domain/item/item.interface";
import { useGetItemsQuery } from "../../../../infrastructure/item.api";
import styles from "./table.module.scss";

const ItemTable = () => {
  const { data, error, isLoading } = useGetItemsQuery(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if ("status" in error) {
      // const errMsg = "error" in error ? error.error : JSON.stringify(error.data);
      return <div>Something happens, please try later </div>;
    } else {
      return <div>Error: {error.message}</div>;
    }
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.cell}>Status</th>
            <th className={styles.cell}>Number</th>
            <th className={styles.cell}>Spec</th>
            <th className={styles.cell}>Rev</th>
            <th className={styles.cell}>Title</th>
            <th className={styles.cell}>Type</th>
            <th className={styles.cell}>Priority</th>
            <th className={styles.cell}>Package</th>
            <th className={styles.cell}>Count</th>
            <th className={styles.cell}>Due Date</th>
            <th className={styles.cell}>Responsive</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: ItemInterface) => (
            <tr key={item.id} className={styles.row}>
              <td className={styles.cell}>{item.status}</td>
              <td className={styles.cell}>{item.number}</td>
              <td className={styles.cell}>{item.spec}</td>
              <td className={styles.cell}>{item.rev}</td>
              <td className={styles.cell}>{item.title}</td>
              <td className={styles.cell}>{item.type}</td>
              <td className={styles.cell}>{item.priority}</td>
              <td className={styles.cell}>{item.package}</td>
              <td className={styles.cell}>
                <div>{item.count.primary}</div>
                <div>{item.count.secondary}</div>
              </td>
              <td className={styles.cell}>{item.dueDate}</td>
              <td className={styles.cell}>{item.responsive}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;

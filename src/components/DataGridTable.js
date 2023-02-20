import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../css/dataGridTable.module.css";
import { fill } from "lodash";

function DataGridTable({ endpoint }) {
  const [data, setData] = useState([]);
  const [hasImage, setHasImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // set loading to true before making the request

    const getData = async () => {
      await axios.get(endpoint).then((response) => {
        setData(response.data.drinks);
        setHasImage(
          endpoint ===
            "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );
        setIsLoading(false); // set loading to false after receiving the data
      });
    };

    getData();
  }, [endpoint]);

  // show loading indicator while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const rows = data.map((row, index) => {
    const newRow = {
      id: index + 1,
      ...row,
    };

    if (hasImage && newRow.strIngredient1) {
      newRow.image = `https://www.thecocktaildb.com/images/ingredients/${newRow.strIngredient1}-Small.png`;
    }

    return newRow;
  });

  const columns =
    data.length > 0
      ? Object.keys(data[0]).map((key) => ({
          field: key,
          headerName: key,
          width: 250,
        }))
      : [];

  if (hasImage) {
    columns.push({
      field: "image",
      headerName: "Image",
      sortable: false,
      width: 200,
      headerClassName: styles.header,
      renderCell: (params) => (
        <img
          src={params.row.image}
          alt={params.row.strIngredient1}
          style={{ width: fill }}
        />
      ),
    });
  }

  return (
    <div
      className={`${styles["data-grid-container"]}`}
      style={{ height: 800, width: fill }}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          className={styles.grid}
          cellClassName={styles.cell}
          rowHeight={100}
        />
      )}
    </div>
  );
}

export default DataGridTable;

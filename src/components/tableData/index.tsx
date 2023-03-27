import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import moment from "moment";
import { useEffect, useState } from "react";
import { commonTableStyles as styles } from "./styles";
import Checkbox from "@mui/material/Checkbox";
import { colorCode } from "utils/constants";
interface TableProps {
  tableData: any;
  handleBlockAction: any;
  handleDelete: any;
  ClientColumn: any;
  ActionList: any;
  listId: number;
  setFilteredData: any;
}
export default function TableComponent({
  tableData = [],
  handleBlockAction,
  handleDelete,
  ClientColumn,
  ActionList,
  listId,
  setFilteredData,
}: TableProps) {
  const [sort, setSort] = useState(false);
  const [dataSort, setDataSort] = useState(tableData);
  const [sortDate, setSortDate] = useState(false);
  const [sortEmail, setSortEmail] = useState(false);
  const [sortCity, setSortCity] = useState(false);

  useEffect(() => {
    setDataSort(tableData);
  }, [sortCity, sortEmail, sort, sortDate]);
  const handleActionClick = (type: string, id: any) => {
    if (type == "Delete") {
      handleDelete(id, listId);
    } else if (type === "Block") {
      handleBlockAction(id, listId);
    }
  };

  const handleSort = () => {
    const tempSort = sort;
    setSort(!tempSort);
  };
  useEffect(() => {
    let tableEntry = [...tableData];
    tableEntry?.sort(function (a: any, b: any) {
      if (
        a.client_name.toLocaleLowerCase() === b.client_name.toLocaleLowerCase()
      ) {
        return 0;
      }
      if (sort)
        return a.client_name.toLocaleLowerCase() >
          b.client_name.toLocaleLowerCase()
          ? 1
          : -1;
      return a.client_name.toLocaleLowerCase() >
        b.client_name.toLocaleLowerCase()
        ? -1
        : 1;
    });
    setFilteredData(tableEntry);
  }, [sort]);
  const handleCitySort = () => {
    const tempSort = sortCity;
    setSortCity(!tempSort);
  };
  useEffect(() => {
    let tableEntry = [...tableData];
    tableEntry?.sort(function (a: any, b: any) {
      if (a.city.toLocaleLowerCase() === b.city.toLocaleLowerCase()) {
        return 0;
      }
      if (sortCity)
        return a.city.toLocaleLowerCase() > b.city.toLocaleLowerCase() ? 1 : -1;
      return a.city.toLocaleLowerCase() > b.city.toLocaleLowerCase() ? -1 : 1;
    });
    setFilteredData(tableEntry);
  }, [sortCity]);

  const handleDateSort = () => {
    setSortDate(!sortDate);
  };

  const handleEmailSort = () => {
    const tempSort = sortEmail;
    setSortEmail(!tempSort);
  };
  useEffect(() => {
    let tableEntry = [...tableData];
    tableEntry?.sort(function (a: any, b: any) {
      if (
        a.client_email.toLocaleLowerCase() ===
        b.client_email.toLocaleLowerCase()
      ) {
        return 0;
      }
      if (sortEmail)
        return a.client_email.toLocaleLowerCase() >
          b.client_email.toLocaleLowerCase()
          ? 1
          : -1;
      return a.client_email.toLocaleLowerCase() >
        b.client_email.toLocaleLowerCase()
        ? -1
        : 1;
    });
    setFilteredData(tableEntry);
  }, [sortEmail]);

  useEffect(() => {
    let x;
    let tableEntry = [...tableData];
    tableEntry?.sort(function (first: any, second: any) {
      if (sortDate)
        return new Date(first.joined_on) > new Date(second.joined_on) ? 1 : -1;
      return new Date(first.joined_on) > new Date(second.joined_on) ? -1 : 1;
    });
    setFilteredData(tableEntry);
  }, [sortDate]);

  return (
    <>
      <TableContainer sx={{ border: "1px solid black" }}>
        <Table sx={styles.table}>
          <TableHead sx={{ ...styles.tableHeader }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>S.no</TableCell>
              {Object.values(ClientColumn).map(
                ({ name, sort, sortKey }: any, index: number) => {
                  return (
                    <TableCell key={index}>
                      {name}
                      {sort && sortKey === "date" ? (
                        <span>1</span>
                      ) : (
                        sort && <span>A</span>
                      )}
                      {sort && (
                        <SouthIcon
                          sx={styles.sortIcon}
                          onClick={
                            sortKey === "name"
                              ? handleSort
                              : sortKey === "email"
                              ? handleEmailSort
                              : sortKey === "city"
                              ? handleCitySort
                              : sortKey === "date"
                              ? handleDateSort
                              : () => {}
                          }
                        />
                      )}
                      {sort && sortKey === "date" ? (
                        <span>9</span>
                      ) : (
                        sort && <span>Z</span>
                      )}
                    </TableCell>
                  );
                }
              )}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.length > 0 &&
              tableData.map((row: any, index: any) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    sx={styles.row}
                    key={index}
                  >
                    <TableCell>
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: colorCode.itemBackground,
                            background: "transparent",
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell> {index + 1}</TableCell>
                    {Object.values(ClientColumn).map(
                      ({ key }: any, index: number) => {
                        if (key === "joined_on") {
                          return (
                            <TableCell key={index}>
                              {moment(row[key]).format("ll")}
                            </TableCell>
                          );
                        } else if (key === "account_status") {
                          return (
                            <TableCell key={index}>
                              <Button
                                variant="contained"
                                sx={{
                                  ...styles.statusBtn,
                                  backgroundColor:
                                    row.account_status === "Verified"
                                      ? colorCode.verifiedColor
                                      : row.account_status === "Rejected"
                                      ? colorCode.rejectedColor
                                      : colorCode.default,
                                  color:
                                    row.account_status === "Pending"
                                      ? colorCode.actionBtnColor
                                      : colorCode.default,
                                }}
                              >
                                {row.account_status}
                              </Button>
                            </TableCell>
                          );
                        } else {
                          return <TableCell key={index}>{row[key]}</TableCell>;
                        }
                      }
                    )}
                    <TableCell style={{ padding: 0 }}>
                      {ActionList.map((action: string, index: number) => {
                        return (
                          <Button
                            size="small"
                            key={index}
                            sx={styles.actionBtn}
                            onClick={() =>
                              handleActionClick(action, row.client_id)
                            }
                          >
                            {action === "Block"
                              ? row.block_status
                                ? "Unblock"
                                : !row.block_status
                                ? "Block"
                                : action
                              : action}
                          </Button>
                        );
                      })}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

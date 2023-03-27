import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { userListingStyles as styles } from "./styles";
import { Typography } from "@mui/material";
import MaterialUIPickers from "../datePicker";
import TableComponent from "../tableData";
import PaginationSection from "../pagination";

interface dataListingProps {
  searchTitle: string;
  setFilteredData: any;
  to: any;
  from: any;
  onChangeHandler: any;
  filteredData: any;
  handleDelete: any;
  handleBlockAction: any;
  rowsPerPage: number;
  handleChangeRowsPerPage: any;
  page: number;
  handlePageChange: any;
  setFrom: any;
  setTo: any;
  tablePage: number;
  handleTablePageChange: any;
  borderRequired: boolean;
  ClientColumn: any;
  ActionList: any;
  tableText?: string;
  totalCount?: number;
  listId: number;
  blockedClientClick?:any;
  handleFilterClick:any;
}

export default function DataListing({
  searchTitle,
  setFilteredData,
  to,
  from,
  onChangeHandler,
  filteredData,
  handleDelete,
  handleBlockAction,
  rowsPerPage,
  handleChangeRowsPerPage,
  page,
  handlePageChange,
  setFrom,
  setTo,
  tablePage,
  handleTablePageChange,
  borderRequired,
  ClientColumn,
  ActionList,
  tableText,
  totalCount,
  listId,
  blockedClientClick,
  handleFilterClick
}: dataListingProps) {
  return (
    <>
      <Box>
        <Box sx={borderRequired ? { border: "1px solid grey" } : {}}>
          {borderRequired && (
            <Typography sx={styles.tableTitle}>
              {tableText}
              {"\n"}
              <span>{totalCount} Total</span>
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: borderRequired ? "15px 0px 0px 30px" : 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: borderRequired ? "15px 0px 0px 30px" : 0,
              }}
            >
              <Box sx={styles.search}>
                <Box
                  id={listId.toString()}
                  component="input"
                  placeholder={searchTitle}
                  sx={styles.input}
                  onChange={onChangeHandler}
                />
                <SearchIcon sx={styles.icon} />
              </Box>
              <Box sx={styles.filterBtn} onClick={handleFilterClick} >
                <FilterAltIcon sx={styles.icon} />
                <Typography sx={{ color: "#fff" }}>Filter</Typography>
              </Box>
            </Box>
            {!borderRequired && (
              <Box sx={[styles.filterBtn, styles.blockedBtn]} onClick={blockedClientClick}>
                <Typography sx={{ color: "#fff" }}>Blocked Client</Typography>
              </Box>
            )}
          </Box>
          <Box sx={styles.date}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <Typography>From</Typography>
              <MaterialUIPickers
                setFilteredData={setFilteredData}
                filterData={filteredData}
                date={from}
                handleChange={setFrom}
              />
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>To</Typography>
                <MaterialUIPickers
                  setFilteredData={setFilteredData}
                  filterData={filteredData}
                  date={to}
                  handleChange={setTo}
                />
              </Box>
            </Box>
          </Box>
          <TableComponent
            listId={listId}
            tableData={filteredData}
            handleDelete={handleDelete}
            setFilteredData={setFilteredData}
            ClientColumn={ClientColumn}
            ActionList={ActionList}
            handleBlockAction={handleBlockAction}
          />
          {borderRequired && <Box sx={{ height: "30px" }}></Box>}
        </Box>
        <PaginationSection
          listId={listId}
          listData={filteredData}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleChangePage={handlePageChange}
          tablePage={tablePage}
          setTablePage={handleTablePageChange}
        />
      </Box>
    </>
  );
}

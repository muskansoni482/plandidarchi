import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import styles from "./style";
import TablePagination from "@mui/material/TablePagination";
interface PaginationProps {
  listData: any;
  handleChangePage: any;
  handleChangeRowsPerPage: any;
  rowsPerPage: any;
  page: any;
  tablePage: any;
  setTablePage: any;
  listId: number;
}
const PaginationSection = ({
  listData,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
  page,
  tablePage,
  setTablePage,
  listId,
}: PaginationProps) => {
  const totalRecords = Object.keys(listData)?.length || 0;
  const totalPages = Math.ceil(totalRecords / 10) || 1;
  return (
    <Box sx={styles.paginationContainer}>
      <Box sx={styles.pageContainer}>
        <Pagination
          count={totalPages}
          showFirstButton
          showLastButton
          page={page}
          onChange={(e,page)=>handleChangePage(e,page,listId.toString())}
        />
        <TablePagination
          component="div"
          count={totalRecords}
          page={tablePage}
          sx={styles.rowPerPageStyle}
          onPageChange={(e,page)=>setTablePage(e,page,listId.toString())}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e)=>handleChangeRowsPerPage(e,listId.toString())}
        />
      </Box>
    </Box>
  );
};

export default PaginationSection;

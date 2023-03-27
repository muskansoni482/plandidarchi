import DataListing from "components/dataListing";
import { useState, ChangeEvent, useEffect } from "react";
import {
  ActionList1,
  ActionList2,
  ActionList3,
  ClientColumn,
  ClientColumn2,
  ClientColumn3,
  PhotographerColumn,
} from "utils/constants";
import dayjs from "dayjs";
import LineSeparator from "components/lineseparator";
import { deepCopy } from "utils/validation";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, MenuItem, Typography } from "@mui/material";
import styles from "./style";
import SimpleModal from "components/modal/modal";
import ConfirmationContainer, { OkPopUp } from "components/pop-ups/confimation";
import {
  ClientResponse,
  useAddClientMutation,
  useDeleteClientMutation,
  useGetClientsQuery,
  useUpdateBlockStatusMutation,
} from "RTK/clientApi";

const DashBoard = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetClientsQuery();
  const [addClient, response] = useAddClientMutation();
  const [deleteClient] = useDeleteClientMutation();
  const [updateBlockStatus] = useUpdateBlockStatusMutation();

  const [selectedBox, setSelectedBox] = useState(0);
  const [searchField, setSearchField] = useState("");
  const [newClientSearch, setNewClientSearch] = useState("");
  const [newPhotographerSearch, setNewPhotographerSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [clientRowsPerPage, setClientRowsPerPage] = useState(10);
  const [photoRowsPerPage, setPhotoRowsPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState(data);
  const [blockedClientData, setBlockedClientData] = useState(data);
  const [newClientData, setNewClientData] = useState(data);
  const [newPhotographerData, setNewPhotographerData] = useState(data);
  const [from, setFrom] = useState(dayjs("2014-08-18T21:11:54"));
  const [to, setTo] = useState(dayjs("2023-08-18T21:11:54"));
  const [clientBegin, setClientBegin] = useState(dayjs("2014-08-18T21:11:54"));
  const [clientEnd, setClientEnd] = useState(dayjs("2023-08-18T21:11:54"));
  const [photoBegin, setPhotoBegin] = useState(dayjs("2014-08-18T21:11:54"));
  const [photoEnd, setPhotoEnd] = useState(dayjs("2023-08-18T21:11:54"));
  const [page, setPage] = useState(1);
  const [clientPage, setClientPage] = useState(1);
  const [photoPage, setPhotoPage] = useState(1);
  const [tablePage, setTablePage] = useState(0);
  const [clientTablePage, setClientTablePage] = useState(0);
  const [photoTablePage, setPhotoTablePage] = useState(0);
  const [blockedClientStatus, setBlockedClientStatus] = useState(false);
  const [payment, setPayment] = useState("10");
  const [popupOpen, setPopupOpen] = useState(false);

  const fieldObject = [
    {
      title: "City",
      fieldType: "dropdown",
      fieldPlaceholder: "Select City",
      key: "city",
    },
    {
      title: "Zipcode",
      fieldType: "text",
      fieldPlaceholder: "Select ZIP Code",
      key: "zip",
    },
  ];

  const handleActionOne = () => {
    console.log("hshakhk");
  };
  const handleActionTwo = () => {
    console.log("56546465757");
  };

  useEffect(() => {
    setFilteredData(data);
    setBlockedClientData(data);
    setNewClientData(data);
    setNewPhotographerData(data);
  }, [data]);

  useEffect(() => {
    let newFilteredData = blockedClientStatus ? data : data;
    if (searchField !== "") {
      newFilteredData = newFilteredData?.filter((data: ClientResponse) => {
        if (
          data.client_name.toLocaleLowerCase().includes(searchField) ||
          data.client_email.toLocaleLowerCase().includes(searchField)
        ) {
          return data;
        }
      });
    }
    if (!blockedClientStatus) {
      setFilteredData(newFilteredData);
    } else {
      setBlockedClientData(newFilteredData);
    }
  }, [searchField]);

  useEffect(() => {
    let newFilteredData = data;
    if (newClientSearch !== "") {
      newFilteredData = data?.filter((data: ClientResponse) => {
        if (
          data.client_name.toLocaleLowerCase().includes(newClientSearch) ||
          data.client_email.toLocaleLowerCase().includes(newClientSearch)
        ) {
          return data;
        }
      });
    }
    setNewClientData(newFilteredData);
  }, [newClientSearch]);

  useEffect(() => {
    let newFilteredData = data;
    if (newPhotographerSearch !== "") {
      newFilteredData = data?.filter((data: ClientResponse) => {
        if (
          data.client_name
            .toLocaleLowerCase()
            .includes(newPhotographerSearch) ||
          data.client_email.toLocaleLowerCase().includes(newPhotographerSearch)
        ) {
          return data;
        }
      });
    }
    setNewPhotographerData(newFilteredData);
  }, [newPhotographerSearch]);

  useEffect(() => {
    let finalData = blockedClientStatus ? data : data;
    const newFilteredData = finalData.filter(
      (data: any) =>
        dayjs(data.joined_on).isBefore(dayjs(to)) &&
        dayjs(data.joined_on).isAfter(dayjs(from))
    );
    if (!blockedClientStatus) {
      setFilteredData(newFilteredData);
    } else {
      setBlockedClientData(newFilteredData);
    }
  }, [from, to]);

  useEffect(() => {
    const newFilteredData = data?.filter(
      (data: any) =>
        dayjs(data.joined_on).isBefore(dayjs(clientEnd)) &&
        dayjs(data.joined_on).isAfter(dayjs(clientBegin))
    );
    setNewClientData(newFilteredData);
  }, [clientBegin, clientEnd]);

  useEffect(() => {
    const newFilteredData = data?.filter(
      (data: any) =>
        dayjs(data.joined_on).isBefore(dayjs(photoEnd)) &&
        dayjs(data.joined_on).isAfter(dayjs(photoBegin))
    );
    setNewPhotographerData(newFilteredData);
  }, [photoBegin, photoEnd]);

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
    pageId: string
  ) => {
    if (pageId === "1") {
      setTablePage(newPage - 1);
      setPage(newPage);
    } else if (pageId === "2") {
      setClientTablePage(newPage - 1);
      setClientPage(newPage);
    } else if (pageId === "3") {
      setPhotoTablePage(newPage - 1);
      setPhotoPage(newPage);
    }
  };

  const handleTablePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
    pageId: string
  ) => {
    if (pageId === "1") {
      setTablePage(newPage);
      setPage(newPage + 1);
    } else if (pageId === "2") {
      setClientTablePage(newPage);
      setClientPage(newPage + 1);
    } else if (pageId === "3") {
      setPhotoTablePage(newPage);
      setPhotoPage(newPage + 1);
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rowId: string
  ) => {
    if (rowId === "1") {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    } else if (rowId === "2") {
      setClientRowsPerPage(parseInt(event.target.value, 10));
      setClientPage(0);
    } else if (rowId === "3") {
      setPhotoRowsPerPage(parseInt(event.target.value, 10));
      setPhotoPage(0);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchField = e.target.value.toLocaleLowerCase();
    const listId = e.target.id;
    if (listId === "1") {
      setSearchField(newSearchField);
    } else if (listId === "2") {
      setNewClientSearch(newSearchField);
    } else if (listId === "3") {
      setNewPhotographerSearch(newSearchField);
    }
  };

  const handleDelete = (id: any, listId: number) => {
    const listOfData =
      listId === 1 && !blockedClientStatus
        ? filteredData
        : listId === 1 && blockedClientStatus
        ? blockedClientData
        : listId === 2
        ? newClientData
        : newPhotographerData;
    // const deleteData = listOfData?.filter((item: any) => item.client_id !== id);
    // if (listId === 1) {
    //   if (!blockedClientStatus) {
    //     setFilteredData(deleteData);
    //   } else {
    //     setBlockedClientData(deleteData);
    //   }
    // } else if (listId === 2) {
    //   setNewClientData(deleteData);
    // } else if (listId === 3) {
    //   setNewPhotographerData(deleteData);
    // }
    // let formData = {
    //   client_id: "9",
    //   booking_count: 12,
    //   client_name: "HIMANSHU",
    //   city: "Jabalpur",
    //   client_email: "ajhfgujhfjbc@gmail.com",
    //   joined_on: new Date("June 28, 2022 10:20:40"),
    //   account_type: "Business",
    //   block_status: 1,
    //   images_count: 9,
    //   account_status: "Rejected",
    // };
    // addClient(formData)
    //   .unwrap()
    //   .then(() => {})
    //   .then((error) => {
    //     console.log(error);
    //   });

    // let formData = {
    //   id,
    // };

    // deleteClient(formData)
    //   .unwrap()
    //   .then(() => {})
    //   .then((error) => {
    //     console.log(error);
    //   });
  };

  const handleBlockAction = (id: any, listId: number) => {
    const listOfData =
      listId === 1 && !blockedClientStatus
        ? deepCopy(filteredData)
        : listId === 1 && blockedClientStatus
        ? deepCopy(blockedClientData)
        : listId === 2
        ? deepCopy(newClientData)
        : deepCopy(newPhotographerData);

    // const dataIndex = listOfData.findIndex(
    //   (item: any) => item.client_id === id
    // );
    // listOfData[dataIndex].block_status =
    //   listOfData[dataIndex].block_status === 1 ? 0 : 1;
    // if (listId === 1) {
    //   if (!blockedClientStatus) {
    //     setFilteredData(listOfData);
    //   } else {
    //     setBlockedClientData(listOfData);
    //   }
    // } else if (listId === 2) {
    //   setNewClientData(listOfData);
    // } else if (listId === 3) {
    //   setNewPhotographerData(listOfData);
    // }
    let formData = {
      id,
    };

    updateBlockStatus(formData)
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  const handlePaymentChange = (event: SelectChangeEvent) => {
    setPayment(event.target.value);
  };

  return (
    <div>
      <SimpleModal isOpen={popupOpen} handleClose={() => setPopupOpen(false)}>
        <ConfirmationContainer>
          <OkPopUp
            fieldObject={fieldObject}
            title={"Filter"}
            actionOne={"Reset Filters"}
            actionTwo={"Apply Filters"}
            handleClose={() => setPopupOpen(false)}
            disable={true}
            popupMess={""}
            handleActionOne={handleActionOne}
            handleActionTwo={handleActionTwo}
            del={false}
          />
        </ConfirmationContainer>
      </SimpleModal>

      <Box sx={styles.ClientContainer}>
        <Box
          onClick={() => setSelectedBox(0)}
          sx={
            selectedBox === 0
              ? [styles.selectedBoxStyle, styles.leftBoxStyle]
              : [styles.rightBoxStyle, styles.boxStyle]
          }
        >
          <Typography sx={styles.textStyle}>
            Total Client
            <br /> 45.2K
          </Typography>
        </Box>
        <Box
          onClick={() => setSelectedBox(1)}
          sx={
            selectedBox === 1
              ? [styles.selectedBoxStyle, styles.rightBoxStyle]
              : [styles.rightBoxStyle, styles.boxStyle]
          }
        >
          <Typography sx={styles.textStyle}>
            Total Photographer
            <br />
            15.5K
          </Typography>
        </Box>
      </Box>
      <DataListing
        listId={1}
        searchTitle="Search by  Name, Email"
        filteredData={blockedClientStatus ? blockedClientData : filteredData}
        from={from}
        handleBlockAction={handleBlockAction}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleDelete={handleDelete}
        handleTablePageChange={handleTablePageChange}
        handlePageChange={handlePageChange}
        onChangeHandler={onChangeHandler}
        rowsPerPage={rowsPerPage}
        setFilteredData={
          blockedClientStatus ? setBlockedClientData : setFilteredData
        }
        handleFilterClick={setPopupOpen}
        setFrom={setFrom}
        setTo={setTo}
        to={to}
        tablePage={tablePage}
        page={page}
        borderRequired={false}
        ActionList={ActionList1}
        ClientColumn={selectedBox === 0 ? ClientColumn : PhotographerColumn}
        blockedClientClick={() => {
          setBlockedClientStatus(!blockedClientStatus);
          setSearchField("");
        }}
      />
      <LineSeparator width="100%" />
      <DataListing
        listId={2}
        searchTitle="Search by  Name, Email"
        filteredData={newClientData}
        from={clientBegin}
        handleBlockAction={handleBlockAction}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleDelete={handleDelete}
        handleTablePageChange={handleTablePageChange}
        handlePageChange={handlePageChange}
        onChangeHandler={onChangeHandler}
        rowsPerPage={clientRowsPerPage}
        setFilteredData={setFilteredData}
        handleFilterClick={setPopupOpen}
        setFrom={setClientBegin}
        setTo={setClientEnd}
        to={clientEnd}
        tablePage={clientTablePage}
        page={clientPage}
        borderRequired={true}
        ActionList={ActionList2}
        ClientColumn={ClientColumn2}
        tableText="New Client"
        totalCount={1050}
      />
      <DataListing
        listId={3}
        searchTitle="Search by  Name, Email"
        filteredData={newPhotographerData}
        from={photoBegin}
        handleBlockAction={handleBlockAction}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleDelete={handleDelete}
        handleTablePageChange={handleTablePageChange}
        handlePageChange={handlePageChange}
        onChangeHandler={onChangeHandler}
        rowsPerPage={photoRowsPerPage}
        setFilteredData={setFilteredData}
        setFrom={setPhotoBegin}
        handleFilterClick={setPopupOpen}
        setTo={setPhotoEnd}
        to={photoEnd}
        tablePage={photoTablePage}
        page={photoPage}
        borderRequired={true}
        ClientColumn={ClientColumn3}
        ActionList={ActionList3}
        tableText="New Photographer"
        totalCount={1050}
      />
      <LineSeparator width="100%" />
      <Box>
        <Typography sx={styles.tableTitle}>Quick stats</Typography>
        <Box sx={styles.statsContainer}>
          <Box sx={styles.statsBoxStyle}>
            <Select
              value={payment}
              onChange={handlePaymentChange}
              sx={styles.selectStyle}
              size="small"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="10">Over all</MenuItem>
            </Select>
            <Box
              component={"img"}
              src="assets/images/asset.png"
              sx={styles.statsImgStyle}
            ></Box>
            <Typography sx={{ ...styles.textStyle, ...styles.paymentText }}>
              <span> Total Payment</span>
              <span>$2,000,000</span>
            </Typography>
          </Box>
          <Box sx={styles.statsBoxStyle}>
            <Select
              value={payment}
              onChange={handlePaymentChange}
              sx={styles.selectStyle}
              size="small"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="10">Over all</MenuItem>
            </Select>
            <Box
              component={"img"}
              src="assets/images/asset.png"
              sx={styles.statsImgStyle}
            ></Box>
            <Typography sx={{ ...styles.textStyle, ...styles.paymentText }}>
              <span> Total Commission</span>
              <span>$400, 000</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default DashBoard;

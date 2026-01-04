import React, { useState, useMemo } from "react";

interface Column {
  accessor: string;
  Header: string;
}

export interface Events {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  venueId: number;
}

const columnData = [
  {
    accessor: "id",
    Header: "ID",
  },
  {
    accessor: "title",
    Header: "Title",
  },
  {
    accessor: "description",
    Header: "Description",
  },
];

interface TableProps {
  tableData: Events[];
}

function Table({ tableData }: TableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const handleSort = (key: string) => {
    let direction = "asc";
    if (key === "id") {
      // ID default is DESC, toggle to ASC
      direction =
        sortConfig?.key === key && sortConfig.direction === "desc"
          ? "asc"
          : "desc";
    } else {
      // Others default ASC, toggle to DESC
      direction =
        sortConfig?.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig) return tableData;
    return [...tableData].sort((a, b) => {
      // @ts-ignore
      const aValue = a[sortConfig.key];
      // @ts-ignore
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [tableData, sortConfig]);

  const tableHeader = () => {
    return columnData.map((column: Column, idx: number) => {
      return (
        <th
          key={idx}
          data-sortby={column.accessor}
          onClick={() => handleSort(column.accessor)}
        >
          {column.Header}
          <i
            className={`fa fa-fw fa-sort${
              sortConfig?.key === column.accessor
                ? sortConfig.direction === "asc"
                  ? "-asc"
                  : "-desc"
                : ""
            }`}
          ></i>
        </th>
      );
    });
  };

  const drawTableData = () => {
    return sortedData.map((event: Events, idx: number) => {
      return (
        <tr data-id={event.id} key={idx}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.description}</td>
        </tr>
      );
    });
  };

  return (
    <table>
      <thead>
        <tr>{tableHeader()}</tr>
      </thead>
      <tbody>{drawTableData()}</tbody>
    </table>
  );
}

export default Table;

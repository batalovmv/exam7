import * as React from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Person = {
  title: string;
  price: number;
  stock: number;
};

const defaultData: Person[] = [
  {
    title: "HDD Seagate 2TB",
    price: 200,
    stock: 20,
  },
  {
    title: "ADATA RAM 8GB",
    price: 120,
    stock: 50,
  },
  {
    title: "ASUS ZenBook",
    price: 1200,
    stock: 4,
  },
  {
    title: "Acer Predator",
    price: 1500,
    stock: 2,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("title", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.price, {
    id: "price",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Price</span>,
  }),
  columnHelper.accessor("stock", {
    header: () => "Stock",
    cell: (info) => info.renderValue(),
  }),
];

function Table() {
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = (keyName: string) => {
    const key: any = keyName;
    const copyData = structuredClone(data);
    const sorted = copyData.sort((item1: Person[], item2: Person[]) =>
      item1[key] > item2[key] ? 1 : -1
    );
    setData(sorted);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th onClick={() => rerender(header.id)} key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
}
export default Table;

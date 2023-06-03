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
  price: string;
  stock: number;
};

const defaultData: Person[] = [
  {
    title: "tanner",
    price: "linsley",
    stock: 24,
  },
  {
    title: "tandy",
    price: "miller",
    stock: 40,
  },
  {
    title: "joe",
    price: "dirte",
    stock: 45,
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
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor("stock", {
    header: () => "Stock",
    cell: (info) => info.renderValue(),
  }),
];

function Table() {
  const [data, setData] = React.useState(() => [...defaultData]);
  // const rerender = React.useReducer(() => ({}), {})[1];
  const rerender = () => {
    const key: any = "title";
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
                <th key={header.id}>
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
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
}
export default Table;

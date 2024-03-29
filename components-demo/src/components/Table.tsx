import * as React from "react";
import ReactDOM from "react-dom/client";
import Inputs from "./Inputs";

// import "./index.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Person = {
  title: string;
  price: number | string;
  stock: number | string;
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
    cell: (info) => <i>{info.renderValue()}</i>,
    header: () => <span>Price</span>,
  }),
  columnHelper.accessor("stock", {
    header: () => "Stock",
    cell: (info) => <i>{info.renderValue()}</i>,
  }),
];

function Table() {
  const [data, setData] = React.useState(() => [...defaultData]);
  const copyData = structuredClone(data);
  const addNewItem = (item: Person) => {
    if (item.title !== "" && item.price !== "" && item.stock !== "") {
      const found = data.filter((e) => e.title === item.title);
      if (found.length > 0) {
        copyData.forEach((element) => {
          if (element.title === item.title) {
            if (element.stock === "нет товара") {
              element.stock = Number(item.stock);
            } else {
              element.stock = Number(element.stock) + Number(item.stock);
            }
            element.price = item.price;
          }
        });
      } else {
        copyData.push(item);
      }
    } else if (item.title !== "" && item.price !== "" && item.stock === "") {
      const found = data.filter((e) => e.title === item.title);
      if (found.length > 0) {
        copyData.forEach((element) => {
          if (element.title === item.title) {
            if (element.stock === "нет товара") {
              element.stock = Number(item.stock);
            } else {
              element.stock = Number(element.stock) + Number(item.stock);
            }
            element.price = item.price;
          }
        });
      } else {
        copyData.push(item);
      }
    } else if (item.title !== "" && item.price === "" && item.stock !== "") {
      const found = data.filter((e) => e.title === item.title);
      if (found.length > 0) {
        copyData.forEach((element) => {
          if (element.title === item.title) {
            if (element.stock === "нет товара") {
              element.stock = Number(item.stock);
            } else {
              element.stock = Number(element.stock) + Number(item.stock);
            }
            element.price = element.price;
          }
        });
      } else {
        copyData.push(item);
      }
    } else {
      alert("Введены неправильные данные");
    }
    setData(copyData);
  };
  const rerender = (keyName: string) => {
    const key: any = keyName;
    const copyData = structuredClone(data);
    const sorted = copyData.sort((item1: Person[], item2: Person[]) =>
      item1[key] < item2[key] ? 1 : -1
    );
    setData(sorted);
  };
  const changeStock = (id: number) => {
    const copyData = structuredClone(data);
    if (copyData[id].stock === 1 || copyData[id].stock == "нет товара") {
      copyData[id].stock = "нет товара";
    } else {
      copyData[id].stock -= 1;
    }

    setData(copyData);
  };
  const setButton = (id: number) => {
    const copyData = structuredClone(data);
    if (copyData[id].stock === "нет товара") {
    } else {
      return (
        <button
          onClick={() => changeStock(Number(id))}
          className="reduce-button"
        ></button>
      );
    }
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const startTable = () => {
    if (defaultData.length === 0) {
      return <div className="no-products">Нет доступных товаров</div>;
    } else {
      return (
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

                {setButton(Number(row.id))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="p-2">
      {startTable()}

      <div className="h-4" />
      <Inputs addNewItem={addNewItem} />
    </div>
  );
}
export default Table;

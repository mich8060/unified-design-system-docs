import React from "react";
import "./_table.scss";
import type { TableProps } from "./Table.types";
/**
 * Table component for displaying tabular data
 * @param {array} columns - Array of column definitions
 * @param {array} data - Array of data rows
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the table element
 */
declare function Table({ columns, data, className, bodyWeight, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
/**
 * TableCell component - flexible cell that can render different content types
 * @param {string} type - Cell type: 'header' or 'cell'
 * @param {object} column - Column definition
 * @param {object} row - Row data (for data cells)
 * @param {number} rowIndex - Row index
 * @param {number} colIndex - Column index
 */
declare const TableCell: React.NamedExoticComponent<object>;
declare const MemoizedTable: typeof Table & {
    Cell: typeof TableCell;
};
export default MemoizedTable;

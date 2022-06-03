import { Component } from "solid-js";
import { styled } from "solid-styled-components";

const DivTable = styled("div")`
  display: table;
  width: 100%;
`;

const DivTableRow = styled("div")`
  display: table-row;
`;

const DivTableHeader = styled("div")`
  display: table-header-group;
  background-color: gray;
  font-weight: bold;
  font-size: 25px;
`;

const DivTableBody = styled("div")`
  display: table-row-group;
`;

const DivTableFooter = styled("div")`
  display: table-footer-group;
  background-color: gray;
  font-weight: bold;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.45);
`;

const DivCol = styled("div")`
  display: table-column;
`;

const DivTableHeaderCell = styled("div")`
  display: table-cell;
  padding: 10px;
  text-align: center;
  border-top: 1px solid black;
`;
const DivTableBodyCell = styled("div")`
  display: table-cell;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
`;

const DivTableFooterCell = styled("div")`
  display: table-cell;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid black;
`;

export const Table: Component = () => {
  return (
    <>
      <h1>Data Table</h1>
      <DivTable>
        <DivTableHeader>
          <DivTableHeaderCell>Header 1</DivTableHeaderCell>
          <DivTableHeaderCell>Header 2</DivTableHeaderCell>
        </DivTableHeader>

        <DivTableBody>
          <DivTableRow>
            <DivTableBodyCell>Cell 1-1</DivTableBodyCell>
            <DivTableBodyCell>Cell 2-1</DivTableBodyCell>
          </DivTableRow>
          <DivTableRow>
            <DivTableBodyCell>Cell 1-2</DivTableBodyCell>
            <DivTableBodyCell>Cell 2-2</DivTableBodyCell>
          </DivTableRow>
        </DivTableBody>

        <DivTableFooter>
          <DivTableFooterCell>Footer 1</DivTableFooterCell>
          <DivTableFooterCell>Footer 2</DivTableFooterCell>
        </DivTableFooter>
      </DivTable>
    </>
  );
};

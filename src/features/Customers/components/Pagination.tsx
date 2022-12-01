import { Component, JSXElement } from "solid-js";
interface Props {
  customersPerPage: number;
  totalCustomers: number;
  paginate: (number: number) => void;
}
const Pagination: ({
  customersPerPage,
  totalCustomers,
  paginate
}: Props) => JSXElement = ({ customersPerPage, totalCustomers, paginate}: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul class="pagination">
        {pageNumbers.map((number: number) => (
          <li id={number.toString()} class="paginationItem">
            <a onClick={() => paginate(number)} href="">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

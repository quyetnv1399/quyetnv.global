import React, { useState } from "react";

const Paginator = (props: any) => {

  const [page, setPage] = useState(0);

  const hasChangePage = (i:any) => {
    setPage(i)
  }

  const getPage = () => {
    let pages:any[] = [];
    for (let i = 0; i < props.totalPages; i++) {
      pages.push(<li className="page-item" onClick={() => hasChangePage(i)}><a className="page-link" href="#">{i+1}</a></li>);
    }

    return pages;
  };

  return (
    <>
      
    </>
  );
};

export default Paginator;

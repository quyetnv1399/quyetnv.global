import React, { useEffect, useState } from 'react'
import EmployeeView from './EmployeeView'
import { EmployeesApi } from '../../api/employeeApi';
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';

const Employee = () => {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const [param, setParam] = useState({});

  const [employee, setEmployee] = useState<any[]>([]);

  const [inputValue, setInputValue] = useState('');

  const [hasChange, setHasChange] = useState(false);
 
  const navigate = useNavigate();

  const { confirm } = Modal;

  const getEmployees = async () => {
   try {
    const res = await EmployeesApi.getAllEmp(page, pageSize, param);
    const { content, totalPages } = res.data;

    setEmployee(content);
    setTotalPages(totalPages);
   } catch (error) {
    console.log(error)
   }
  }

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
  }

  const handleKeyUp = (event:any) => {
    if (event.key === 'Enter') {
      search();
    }
  }

  const search = () => {
    setPage(0)
    setParam({params: {q: inputValue}})
  }

  const getPrevious = () => {
    return <li className={`page-item ${page === 0 ? 'disabled' : ''}`} onClick={() => page === 0 ? {} : setPage(page-1)}>
      <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
  }

  const getNext = () => {
    return <li className={`page-item ${page+1 === totalPages ? 'disabled' : ''}`} onClick={() => page+1 === totalPages ? {} : setPage(page+1)}>
      <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  }

  const getPage = () => {
    let pages:any[] = [];
    for (let i = 0; i < totalPages; i++) {
      let active = page === i ? "active" : "";
      pages.push(<li className={`page-item ${active}`} onClick={() => hasChangePage(i)}><a className="page-link" href="#">{i+1}</a></li>);
    }

    return pages;
  };

  const hasChangePage = (i:any) => {
    setPage(i)
  }

  const editEmployee = (item:any) => {
    navigate(`action/${item.id}`);
  }

  const showConfirm = (item:any) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      onOk() {
        deleteEmployee(item);
        setPage(0)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const deleteEmployee = async (item:any) => {
    await EmployeesApi.delete(item.id);
    alert("Delete Success");
  }

  useEffect(() => {
    getEmployees()
  }, [page,param]);

  return EmployeeView({employee, totalPages, getPage, getPrevious, getNext, handleKeyUp, handleInputChange, search, navigate, editEmployee, showConfirm})
}

export default Employee

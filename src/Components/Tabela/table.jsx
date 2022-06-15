import { Table } from 'antd';
import qs from 'qs';
import React, { useEffect, useState } from 'react';

//Schema//
const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: '20%',
    
    },
    
  {
    title: 'E-mail',
    dataIndex: 'email',
  },

  {
    title: 'Telefone',
    dataIndex: 'cell',
   
  
  }
];

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});


//Componente será exportado Layout
export function Tabela() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

//Consumindo API.
  const fetchData = (params = {}) => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setPagination({
          ...params.pagination,
          total: 200, 
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        });
      });
  };

  useEffect(() => {
    fetchData({
      pagination,
    });
  }, []);

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination: newPagination,
      ...filters,
    });
  };


	return (
		<Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
    />
	);
};


export default Tabela;
import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import perforamancestats from './perforamance-stats.json';



function Table() {
  //readFile();
  // const  data = [
  //     {
  //       sample: '1000',
  //       average: 602.3,
  //       median: '500',
  //     },
  //     {
  //       sample: 'Jane Doe',
  //       average: 30,
  //       median: 'Female',
  //     },
  //     // add more data here
  //   ];
  const columns = [
    {
      Header: 'Label',
      accessor: 'label',
    },
    {
      Header: 'Sample',
      accessor: 'sample',
    },
    {
      Header: 'Average',
      accessor: 'average',
    },
    {
      Header: 'Median',
      accessor: 'median',
    },
    {
      Header: 'p90',
      accessor: 'p90',
    },
    {
      Header: 'p95',
      accessor: 'p95',
    },
    {
      Header: 'p99',
      accessor: 'p99',
    },
    {
      Header: 'Minimum',
      accessor: 'minimum',
    },
    {
      Header: 'Maximum',
      accessor: 'maximum',
    },
    {
      Header: 'Median',
      accessor: 'median',
    },
    // add more columns here
  ];

  return (
    <ReactTable
      data={perforamancestats}
      columns={columns}
    />
  );
}




export default Table;

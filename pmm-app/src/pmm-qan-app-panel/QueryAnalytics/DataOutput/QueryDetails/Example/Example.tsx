import React, { useEffect, useState } from 'react';
import ExampleService from './Example.service';
import ReactJson from 'react-json-view';

// const getSQLExample = example => {};
//
const getJSONExample = example => <ReactJson src={example} />;
const Example = props => {
  const { filterBy, groupBy, periodStartFrom, periodStartTo, labels, tables } = props;
  const [examples, setExamples] = useState([]);
  useEffect(() => {
    const getExamples = async () => {
      const result = await ExampleService.getExample({
        filterBy: filterBy,
        groupBy: groupBy,
        periodStartFrom: periodStartFrom,
        periodStartTo: periodStartTo,
        labels: labels,
        tables: tables,
      });
      setExamples(result['query_examples']);
    };
    getExamples();
  }, []);

  return <div>{examples.length && examples.map(example => getJSONExample(example))}</div>;
};

export default Example;

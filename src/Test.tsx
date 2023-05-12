import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const csvData = await fetchCsv();
      Papa.parse(csvData, {
        complete: getData,
      });
    }

    fetchData();
  }, []);

  function fetchCsv() {
    return fetch('./access-array-data-with-indexes.txt').then(function (
      response,
    ) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder('utf-8');

      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  }

  function getData(result) {
    setData(result.data);
  }

  console.log(data);

  return <section className="data-controller">...</section>;
}

export default Test;

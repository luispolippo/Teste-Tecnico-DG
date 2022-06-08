import React, { useState } from 'react'
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Form loadingAtt={{loading, setLoading}} />
      <Table loadingAtt={{loading, setLoading}}/>
    </>
  )
}

export default Home;

import React from 'react';
import UserResult from '../Components/Users/UserResult';
import UserSerach from '../Components/Users/UserSerach';
import Alert from '../Components/Layout/Alert';

function Home() {
  return (
    <>
      <Alert />
      <UserSerach />
      <UserResult />
    </>
  )
}

export default Home

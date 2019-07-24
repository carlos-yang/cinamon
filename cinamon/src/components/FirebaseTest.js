import React from 'react';
import db from './config/firebaseInit';

const testData = [
  {
    id: 'john',
    name: 'gooo'
  }
];

const FirebaseTest = () => {
  const dbDate = db
    .collection('user')
    .doc('test-doc')
    .set(testData);
  return <div>{dbDate}</div>;
};

export default FirebaseTest;

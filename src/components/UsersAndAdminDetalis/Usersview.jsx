import React, { useState } from 'react';
import UserRecords from '../common/UserRecords';
import FilteSection from '../common/FilteSection';
import FilterButton from '../common/FilterButton'; // Import the new FilterButton

export default function Usersview() {
  const [clickhandler, setClickhandler] = useState(true); 
  const [filter, setfilter] = useState('');

  return (
    <>
      {/* Filter Button Component */}
      <FilterButton setClickhandler={setClickhandler} clickhandler={clickhandler} />

      {/* Filter Section */}
      <FilteSection
        clickhandler={clickhandler}
        filter={filter}
        setfilter={setfilter}
      />

      {/* User Records Table */}
      <UserRecords filter={filter} />
    </>
  );
}

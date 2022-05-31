import React, { useState } from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Loader } from 'rsuite';
import Navbar from './components/Navbar';
import { apiGet } from './misc/config';
import UserGrid from './components/UserGrid';
import { AppContainer, ShowMore } from './App.styled';

function App() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState({ currPage: 1, max_Page: 1 });
  const userDataPresent = userData.length !== 0;

  const getUserData = async currPage => {
    if (userData.length !== 0 && currPage === 1) {
      return;
    }
    setIsLoading(true);
    const users = await apiGet(currPage);
    setPage({ currPage, max_Page: users.total_pages });

    setIsLoading(false);
    setUserData([...userData, ...users.data]);
  };

  return (
    <AppContainer>
      <Navbar getUserData={getUserData} />
      {!isLoading && !userDataPresent && (
        <p className="center size-20 mt-2">
          Click on Get Users button to fetch data
        </p>
      )}
      {isLoading && (
        <Loader content="Loading data" size="md" speed="slow" center />
      )}
      {!isLoading && userData && <UserGrid userData={userData} />}
      {page.currPage < page.max_Page && userDataPresent && !isLoading && (
        <ShowMore className="load-more-div">
          <button
            className="load-more btn"
            type="button"
            onClick={() => getUserData(page.currPage + 1)}
          >
            More
          </button>
        </ShowMore>
      )}
    </AppContainer>
  );
}

export default App;

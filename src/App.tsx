import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserList } from './components/user-list/user-list';
import { Error } from './components/status-pages/error';
import { UserProfile } from './components/user-profile/user-profile';
import { Layout } from './helpers/layout';
import { Provider } from './components/hoc/context';

const App = () => {

  return (
    <Provider>
      <Routes>
        <Route path='/user/:id' element={<UserProfile />}></Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<UserList />}></Route>
          <Route path='designers' element={<UserList />}></Route>
          <Route path='analysts' element={<UserList />}></Route>
          <Route path='managers' element={<UserList />}></Route>
          <Route path='ios' element={<UserList />}></Route>
          <Route path='android' element={<UserList />}></Route>
          {/* <Route path='*' element={<Error />}></Route> */}

          <Route path='/404' element={<Error />} />
          <Route path='*' element={<Navigate replace to='/404' />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App;

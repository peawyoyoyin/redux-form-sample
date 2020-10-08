import { Classes, HTMLTable } from '@blueprintjs/core';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StoreState } from '../../store';
import { actionCreators } from '../../store/users/usersAction';
import { User } from '../../store/users/usersState';

function Home() {
  const history = useHistory();

  const users = useSelector<StoreState, User[] | null>(state => state.users.users);
  const dispatch = useDispatch();

  const onRowClick = React.useCallback((id: number) => {
    history.push(`/${id}`)
  }, [history]);

  React.useEffect(() => {
    dispatch(actionCreators.fetchUsers())
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <HTMLTable interactive={users !== null} width="80%">
        <colgroup>
          <col style={{ width: '5em' }}/>
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map(user => (
              <tr onClick={() => onRowClick(user.id)} key={user.id}>
                <td style={{ textAlign: 'right' }}>{user.id}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
              </tr>
            )) ?? (
              <tr>
                <td>
                  <p className={Classes.SKELETON}>0</p>
                </td>
                <td>
                  <p className={Classes.SKELETON}>0</p>
                </td>
                <td>
                  <p className={Classes.SKELETON}>0</p>
                </td>
                <td>
                  <p className={Classes.SKELETON}>0</p>
                </td>
              </tr>
            )
          }
        </tbody>
      </HTMLTable>
    </div>
  )
}

export default Home;

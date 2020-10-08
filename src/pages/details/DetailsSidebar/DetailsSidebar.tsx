import { Button, Callout, Classes, H6 } from '@blueprintjs/core';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { StoreState } from '../../../store';
import { actionCreators } from '../../../store/users/usersAction';
import { User } from '../../../store/users/usersState';
import { DetailsRouteParams } from '../Details';

function DetailsSidebar() {
  const users = useSelector<StoreState, User[] | null>(state => state.users.users);

  const { params } = useRouteMatch<DetailsRouteParams>();
  const selectedUserId = parseInt(params.id ?? '', 10);

  const loading = users === null;

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (users === null) {
      dispatch(actionCreators.fetchUsers());
    }
  }, [dispatch, users]);
  const history = useHistory();

  return (
    <div>
      <div style={{ paddingBottom: '1em' }}>
        <Button minimal onClick={() => history.push('/')}> &lt; Back </Button>
      </div>
      {
        loading ? (
          <>
            <Callout
              style={{ marginBottom: '0.5em', cursor: 'pointer' }}
            >
              <small className={loading ? Classes.SKELETON : undefined}>ID: 000</small>
              <H6 className={loading ? Classes.SKELETON : undefined}>firstName lastName</H6>
            </Callout>
            <Callout
              style={{ marginBottom: '0.5em', cursor: 'pointer' }}
            >
              <small className={loading ? Classes.SKELETON : undefined}>ID: 000</small>
              <H6 className={loading ? Classes.SKELETON : undefined}>firstName lastName</H6>
            </Callout>
          </>
        ) : (
            users?.map(user => (
              <Callout
                key={user.id}
                style={{ marginBottom: '0.5em', cursor: 'pointer' }}
                icon={null}
                intent={user.id === selectedUserId ? 'primary' : 'none'}
                onClick={() => history.push(`/${user.id}`)}
              >
                <small>ID: {user.id}</small>
                <H6>{`${user.firstName} ${user.lastName}`}</H6>
              </Callout>
            ))
          )
      }
    </div>
  )
}
export default DetailsSidebar;

import { H2, Tag, H6, Divider, Classes } from '@blueprintjs/core';
import * as React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { StoreState } from '../../../store';
import { UserDetail } from '../../../store/users/usersState';

const GenderTag = (props: { gender: 'M' | 'F' | undefined, loading?: boolean }) => {
  const { gender, loading } = props;

  let text;
  if (loading) {
    text = 'Loading'
  } else {
    switch (gender) {
      case 'M':
        text = 'Male';
        break;
      case 'F':
        text = 'Female';
        break;
      default:
        text = '';
        break;
    }
  }

  return (
    <Tag minimal className={loading ? Classes.SKELETON : undefined}>{text}</Tag>
  );
}

function DetailsHeader() {
  const userDetail = useSelector<StoreState, UserDetail | null>(state => state.users.userDetail, shallowEqual);
  const loading = userDetail === null;

  return (
    <>
      <div style={{ paddingLeft: '1.5em' }}>
        <H2>
          <span className={loading ? Classes.SKELETON : undefined}>
            {loading ? 'firstName lastName' : `${userDetail?.firstName} ${userDetail?.lastName}`}
          </span>
          &nbsp;<GenderTag gender={userDetail?.gender} loading={loading} />
        </H2>
        <H6>
            ID: <span className={loading ? Classes.SKELETON : undefined}>{userDetail?.id ?? '123'}</span>,
            Age: <span className={loading ? Classes.SKELETON : undefined}>{userDetail?.age ?? '99'}</span>
        </H6>
      </div>
      <Divider />
    </>
  );
}

export default DetailsHeader;

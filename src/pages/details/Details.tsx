import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { actionCreators } from '../../store/users/usersAction';
import DetailsFooter from './DetailsFooter';
import DetailsFormComponent from './DetailsForm';
import DetailsHeader from './DetailsHeader';
import DetailsSidebar from './DetailsSidebar';

export interface DetailsRouteParams {
  id?: string;
}

function Details() {
  const { params } = useRouteMatch<DetailsRouteParams>();
  const dispatch =  useDispatch();

  React.useEffect(() => {
    dispatch(actionCreators.fetchUserDetail({ id: parseInt(params.id ?? 'null', 10) ?? null }))
  }, [params.id, dispatch]);

  return (
    <div className="details-page" style={{ display: 'flex' }}>
      <div style={{ flex: 2 }}>
        <DetailsSidebar />
      </div>
      <div style={{ flex: 10, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <DetailsHeader />
        <DetailsFormComponent />
        <DetailsFooter />
      </div>
    </div>
  )
}

export default Details;

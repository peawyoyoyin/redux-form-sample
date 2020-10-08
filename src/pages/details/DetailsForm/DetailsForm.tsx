import * as React from 'react';
import { reduxForm } from 'redux-form';
import { Radio } from '@blueprintjs/core';
import ReduxFormInputGroup from '../../../components/redux-form/ReduxFormInputGroup';
import ReduxFormHTMLSelect from '../../../components/redux-form/ReduxFormHTMLSelect';
import ReduxFormRadioGroup from '../../../components/redux-form/ReduxFormRadioGroup';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store';
import ReduxFormNumericInput from '../../../components/redux-form/ReduxFormNumericInput';

function DetailsFormComponent() {
  const loading = useSelector<StoreState, boolean>(state => state.users.userDetail === null);

  return (
    <div style={{ maxWidth: '780px', marginTop: '1em', flex: 1 }}>
      <form>
        <div style={{ paddingLeft: '1.5em' }}>
          <div style={{ display: 'flex' }}>
            <ReduxFormInputGroup
              name="firstName"
              label="First Name"
              style={{ flex: 1, marginInlineEnd: '1em' }}
              loading={loading}
            />
            <ReduxFormInputGroup
              name="lastName"
              label="Last Name"
              style={{ flex: 1 }}
              loading={loading}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <ReduxFormNumericInput
              name="age"
              label="Age"
              style={{ flex: 1, marginInlineEnd: '1em' }}
              loading={loading}
            />
            <ReduxFormHTMLSelect
              name="gender"
              label="Gender"
              style={{ flex: 1 }}
              loading={loading}
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="">Not defined</option>
            </ReduxFormHTMLSelect>
          </div>
          <div style={{ display: 'flex'}}>
            <div style={{ flex: 1 }}>
              <ReduxFormRadioGroup
                name="level"
                label="Level"
                loading={loading}
              >
                <Radio label="Intern" value="intern" />
                <Radio label="Junior" value="junior" />
                <Radio label="Senior" value="senior" />
              </ReduxFormRadioGroup>
            </div>
          </div>
        </div>  
      </form>
    </div>
  )
}

export default connect((state: StoreState) => ({
  initialValues: {
    firstName: state.users.userDetail?.firstName,
    lastName: state.users.userDetail?.lastName,
    level: state.users.userDetail?.level,
    gender: state.users.userDetail?.gender,
    age: state.users.userDetail?.age
  }
}))(reduxForm({
  form: 'userDetails',
  enableReinitialize: true
})(DetailsFormComponent));

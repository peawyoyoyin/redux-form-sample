import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { Divider, Button } from '@blueprintjs/core';

type DetailsFooterProps = InjectedFormProps;

function DetailsFooter(props: DetailsFooterProps) {
  return (
    <div>
      <Divider />
      <div style={{ display: 'flex', height: '3.5em', padding: '0.5em', width: '100%', alignContent: 'center', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div>
            0 errors
          </div>
        </div>
        <div>
          <Button intent="primary" text="Save" disabled={!props.dirty} />
        </div>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'userDetails'
})(DetailsFooter);

import { Classes, FormGroup, HTMLSelect, IFormGroupProps, IHTMLSelectProps } from '@blueprintjs/core';
import * as React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { AdditionalCommonProps, ReduxFormCommonProps } from './common';

interface ReduxFormHTMLSelectOwnProps extends IFormGroupProps {
  selectProps?: IHTMLSelectProps;
}

type ReduxFormHTMLSelectProps = ReduxFormHTMLSelectOwnProps & ReduxFormCommonProps;

const renderField = (props: React.PropsWithChildren<WrappedFieldProps & ReduxFormHTMLSelectProps & AdditionalCommonProps>) => {
  const { input, children, selectProps, loading, ...rest } = props;

  return (
    <FormGroup {...rest}>
      <HTMLSelect className={loading ? Classes.SKELETON : undefined} {...selectProps} {...input}>
        {children}
      </HTMLSelect>
    </FormGroup>
  );
}

function ReduxFormHTMLSelect(props: React.PropsWithChildren<ReduxFormHTMLSelectProps>) {
  const { name, ...rest } = props;

  return (
    <Field name={name} component={renderField} {...rest} />
  );
}
export default ReduxFormHTMLSelect;

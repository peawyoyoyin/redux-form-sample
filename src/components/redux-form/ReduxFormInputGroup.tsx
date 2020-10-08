import { Classes, FormGroup, IFormGroupProps, InputGroup } from '@blueprintjs/core';
import * as React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { AdditionalCommonProps, ReduxFormCommonProps } from './common';

type ReduxFormInputGroupProps = IFormGroupProps & ReduxFormCommonProps;

const renderField = (props: WrappedFieldProps & IFormGroupProps & AdditionalCommonProps) => {
  const { input, loading,...rest } = props;

  return (
    <FormGroup {...rest} >
      <InputGroup className={loading ? Classes.SKELETON : undefined} id={input.name} {...input} />
    </FormGroup>
  );
}

function ReduxFormInputGroup(props: ReduxFormInputGroupProps) {
  const { name, ...rest } = props;

  return (
    <Field name={name} component={renderField} {...rest} />
  )
}
export default ReduxFormInputGroup;

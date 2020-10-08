import { Classes, FormGroup, IFormGroupProps, NumericInput } from '@blueprintjs/core';
import * as React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { AdditionalCommonProps, ReduxFormCommonProps } from './common';

type ReduxFormNumericInputProps = IFormGroupProps & ReduxFormCommonProps;

const renderField = (props: WrappedFieldProps & IFormGroupProps & AdditionalCommonProps) => {
  const { input, loading, ...rest } = props;

  return (
    <FormGroup {...rest}>
      <NumericInput className={loading ? Classes.SKELETON : undefined} id={input.name} {...input} />
    </FormGroup>
  )
}

function ReduxFormNumericInput(props: ReduxFormNumericInputProps) {
  const { name, ...rest } = props;

  return (
    <Field name={name} component={renderField} {...rest}/>
  )
}
export default ReduxFormNumericInput;

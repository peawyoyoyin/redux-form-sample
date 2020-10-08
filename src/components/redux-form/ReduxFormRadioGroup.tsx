import { Classes, IRadioGroupProps, RadioGroup } from '@blueprintjs/core';
import * as React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { ReduxFormCommonProps } from './common';

type ReduxFormRadioGroupProps = Omit<IRadioGroupProps, 'onChange'> & ReduxFormCommonProps;

function RadioComponent(props: React.PropsWithChildren<WrappedFieldProps & ReduxFormRadioGroupProps>) {
  const { input, children, loading,...rest } = props;

  const onChange = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
    input.onChange(e.currentTarget.value);
  }, [input]);

  return (
    <RadioGroup
      {...rest}
      selectedValue={input.value}
      onChange={onChange}
    >
      {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: loading ? Classes.SKELETON : undefined
          })
        }
        return child;
      })}
    </RadioGroup>
  )
}

function ReduxFormRadioGroup(props: React.PropsWithChildren<ReduxFormRadioGroupProps>) {
  const { name, ...rest } = props;

  return (
    <Field name={name} component={RadioComponent} {...rest} />
  );
}
export default ReduxFormRadioGroup;

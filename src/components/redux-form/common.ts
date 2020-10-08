export interface ReduxFormIntegrationProps {
  name: string;
}

export interface AdditionalCommonProps {
  loading?: boolean;
}

export type ReduxFormCommonProps = ReduxFormIntegrationProps & AdditionalCommonProps;

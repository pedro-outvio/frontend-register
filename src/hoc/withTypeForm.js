import { compose, withStateHandlers, withHandlers, withProps } from 'recompose';

const withTypeForm = compose(
  withProps(({ form }) => ({ numSteps: Object.keys(form).length })),
  withStateHandlers(
    {
      stepForm: 1,
    },
    {
      nextStepForm: ({ stepForm }) => () => ({ stepForm: stepForm + 1 }),
      activeStepForm: () => value => ({ stepForm: value }),
    },
  ),
  withHandlers({
    onCompleteField: ({ nextStepForm, numSteps, stepForm, updateField, submitForm }) => (
      name,
      value,
    ) => {
      updateField(name, value);

      if (stepForm + 1 > numSteps) {
        submitForm();
      } else {
        nextStepForm();
      }
    },
  }),
);

export default withTypeForm;

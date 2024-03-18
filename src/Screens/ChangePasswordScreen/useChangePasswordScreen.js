import {useState} from 'react';
import Schemas from '../../Utils/Validation';
const {default: useFormHook} = require('../../Hooks/UseFormHooks');
// const {default: Schemas} = require('../../Utils/Validation');

const useChangePasswordScreen = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.newPassword,
  );

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
  };
};

export default useChangePasswordScreen;

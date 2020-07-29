import React from 'react';
import Spinner from '../spinner/spinner.component';
//import { SpinnerContainer, SpinnerOverlay } from './with-spinner-styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
        return isLoading ? (<Spinner />) : (<WrappedComponent {...otherProps} />);
};
export default WithSpinner;
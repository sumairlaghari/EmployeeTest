import {showMessage} from 'react-native-flash-message';

export const errorMessage = description => {
  showMessage({
    type: 'danger',
    icon: 'auto',
    message: description?description:'Error',
    //description: description,
    floating: true,
    backgroundColor: 'red',
    style: {alignItems: 'center'},
    duration:5000,
  });
};

export const successMessage = description => {
  showMessage({
    type: 'success',
    icon:'auto',
    message: description?description:'Success',
    //description: description,
    floating: true,
    backgroundColor: '#039C8A',
    style: {alignItems: 'center'},
  });
};

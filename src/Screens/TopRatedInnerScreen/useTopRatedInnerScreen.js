import {useState} from 'react';

const useTopRatedInnerScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
  };

  return {toggleModal, modalVisible, setModalVisible};
};

export default useTopRatedInnerScreen;

import {useState} from 'react';

const useHomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
  };

  return {toggleModal, modalVisible, setModalVisible};
};

export default useHomeScreen;

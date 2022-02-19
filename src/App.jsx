import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
  Container,
  Section,
  ContactsList,
  Filter,
  Form,
  Modal,
  IconButton,
} from './components';
import { getContacts } from './redux/selectors';
import { ReactComponent as AddIcon } from './icons/add.svg';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(getContacts);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <ToastContainer />
      <IconButton onClick={toggleModal} aria-label="Добавить Contact">
        <AddIcon fill="white" width="30" height="30" />
      </IconButton>
      <Section title="Phonebook">
        {showModal && (
          <Modal onClose={toggleModal}>
            <Form onSave={toggleModal}></Form>
          </Modal>
        )}
      </Section>
      <Section title="Contacts">
        {contacts.length > 1 && <Filter />}
        <ContactsList contacts={contacts}></ContactsList>
      </Section>
    </Container>
  );
}

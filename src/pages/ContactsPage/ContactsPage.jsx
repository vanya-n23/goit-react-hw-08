import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { selectContacts, selectIsLoading, selectError } from '../../redux/contacts/contactsSelectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Контакти</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error}</p>}
      {contacts.length > 0 ? <ContactList /> : <p>Контактів поки що немає.</p>}
    </div>
  );
};

export default ContactsPage;
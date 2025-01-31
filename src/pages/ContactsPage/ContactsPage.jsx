import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectIsLoading, selectError } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import './ContactsPage.css'

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='con-cp'>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loadding...</p>}
      {error && <p>Error: {error}</p>}
      {contacts.length > 0 ? <ContactList /> : <p className='article-cp'>No contacts yet.</p>}
    </div>
  );
};

export default ContactsPage;
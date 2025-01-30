import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/Operations';
import { selectFilteredContacts } from '../../redux/contacts/contactsSelectors';
import toast from 'react-hot-toast';
import './ContactList.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure want to delete this contact?')) {
      dispatch(deleteContact(id));
      toast.success('Contacts deleted!');
    }
  };

  return (
    <ul className="list-con">
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <li key={id} className="contact-card">
            <p>
              {name}: <span>{number}</span>
            </p>
            <button className="con-btn" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        ))
      ) : (
        <p className="message">The list of your contacts are empty</p>
      )}
    </ul>
  );
};

export default ContactList;
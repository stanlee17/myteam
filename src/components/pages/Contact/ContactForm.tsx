import { useState } from 'react';
import styles from './Contact.module.scss';
import LinkButton from '../../common/LinkButton/LinkButton';

interface FormDataProps {
  name: string;
  email: string;
  companyName: string;
  title: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    email: '',
    companyName: '',
    title: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormDataProps>({
    name: '',
    email: '',
    companyName: '',
    title: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = {
      name: '',
      email: '',
      companyName: '',
      title: '',
      message: '',
    };

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email address is not valid';
    }

    if (!formData.companyName.trim()) {
      validationErrors.companyName = 'Company name is required';
    }

    if (!formData.title.trim()) {
      validationErrors.title = 'Title is required';
    }

    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }

    setErrors(validationErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className={
          errors.name
            ? `${styles.formControl} ${styles.error}`
            : `${styles.formControl}`
        }
        placeholder="Name"
        autoComplete="off"
        onChange={handleChange}
      />
      {errors.name && <span>{errors.name}</span>}

      <input
        type="email"
        name="email"
        className={
          errors.email
            ? `${styles.formControl} ${styles.error}`
            : `${styles.formControl}`
        }
        autoComplete="off"
        placeholder="Email Address"
        onChange={handleChange}
      />
      {errors.email && <span>{errors.email}</span>}

      <input
        type="text"
        name="companyName"
        className={
          errors.companyName
            ? `${styles.formControl} ${styles.error}`
            : `${styles.formControl}`
        }
        autoComplete="off"
        placeholder="Company Name"
        onChange={handleChange}
      />
      {errors.companyName && <span>{errors.companyName}</span>}

      <input
        type="text"
        name="title"
        className={
          errors.title
            ? `${styles.formControl} ${styles.error}`
            : `${styles.formControl}`
        }
        autoComplete="off"
        placeholder="Title"
        onChange={handleChange}
      />
      {errors.title && <span>{errors.title}</span>}

      <textarea
        name="message"
        className={
          errors.message
            ? `${styles.formControl} ${styles.error}`
            : `${styles.formControl}`
        }
        cols={20}
        rows={3}
        placeholder="Message"
        onChange={handleChange}
      />
      {errors.message && <span>{errors.message}</span>}

      <LinkButton className={styles.linkButton} button>
        Submit
      </LinkButton>
    </form>
  );
};

export default ContactForm;

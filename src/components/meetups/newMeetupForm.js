import { useRef } from 'react';

import Card from '../ui/card';
import classes from './newMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imgUrlRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImgUrl = imgUrlRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDesc = descRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImgUrl,
      address: enteredAddress,
      description: enteredDesc,
    };

    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imgUrlRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='address' ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea required rows='5' id='description' ref={descRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

import React from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(props) {
    return (
        <div>
            <Card >
                <form classname={classes.form}>
                    <div classname={classes.control}>
                        <label htmlFor="title">Meetup Title</label>
                        <input type="text" required id="title" />
                    </div>
                    <div classname={classes.control}>
                        <label htmlFor="image">Meetup Title</label>
                        <input type="url" required id="image" />
                    </div>
                    <div classname={classes.control}>
                        <label htmlFor="address">Meetup Address</label>
                        <input type="text" required id="address" />
                    </div>

                </form>
            </Card>
        </div>
    );
}

export default NewMeetupForm;
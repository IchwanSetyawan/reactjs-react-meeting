import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetup(props) {
    function addMeetupHandler(meetupData){
        fetch('https://react-meetups-38a1f-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'aplication/json'
            }
        });
    }

    return (
        <div>            
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    );
}

export default NewMeetup;
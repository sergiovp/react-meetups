import MeetupItem from '../components/meetups/MeetupItem';
import classes from './../components/meetups/MeetupList.module.css';

export default function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <ul className={classes.list}>
                {[...Array(7).keys()].map((_, index) => {
                    return <MeetupItem key={index} id={index} />;
                })}
            </ul>
        </section>
    );
}

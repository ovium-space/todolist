function CardFeed(props) {
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date(props.nowday);
    let isExpired = props.todoStatus; // Array object
    let ordinal;

    if (d.getDate() === 1 || d.getDate() === 21) {
        ordinal = "st";
    } else if (d.getDate() === 2 || d.getDate() === 22) {
        ordinal = "nd";
    } else if (d.getDate() === 3 || d.getDate() === 23) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    function checkfinish(data) {
        if (data.status === "expired") {
            return <li className='expired'><p className='text-white'>{data.name}</p></li>;

        } else if (data.status === "completed") {
            return <li className='completed'><p className='text-white'>{data.name}</p></li>;

        } else if (data.status === "running") {
            return <li className='running'><p className='text-white'>{data.name}</p></li>;
        }
    }
    
    return(
        <div>
            <p className='m-start-0 m-end-0 todocard-date'>{day[d.getDay()]}</p>
            <div className="number">
                <p className='m-start-0 m-end-0 ordinal'>{ordinal}</p>
                <p className='m-start-0 m-end-0 todocard-date'>{d.getDate()}</p>
            </div>
            <div>
                <ul>
                    {
                        isExpired.map((element) => checkfinish(element))
                    }
                </ul>
            </div>
        </div>
    );
}

export default CardFeed;
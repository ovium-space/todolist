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
            return <li className='expired'>{data.name}</li>;

        } else if (data.status === "completed") {
            return <li className='completed'>{data.name}</li>;

        } else if (data.status === "running") {
            return <li className='running'>{data.name}</li>;
        }
    }
    
    return(
        <div>
            <p className='m-0 date'>{day[d.getDay()]}</p>
            <div className="number">
                <p className='m-0 ordinal'>{ordinal}</p>
                <p className='m-0 date'>{d.getDate()}</p>
            </div>
            <div>
                <ul className="round">
                    {
                        isExpired.map(element => checkfinish(element))
                    }
                </ul>
            </div>
        </div>
    );
}

export default CardFeed;
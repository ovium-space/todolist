import '../styles/todoFeed.scss';
import CardFeed from './todoFeedCard';

function TodoFeed() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();

    let todolist1 = [
        {
            'name' : 'test1',
            'status' : 'expired'
        },
        {
            'name' : 'test2',
            'status' : 'completed',
        },
        {
            'name' : 'test3',
            'status' : 'running'
        }
    ];
    let todolist2 = [
        {
            'name' : 'test1',
            'status' : 'completed'
        },
        {
            'name' : 'test2',
            'status' : 'expired',
        },
    ];

    return (
        <div className='body'>
            <p className='title m-0'>User's To Do List</p>
            <div className='feed'>
                <div className='m c-2'>
                    <CardFeed nowday={new Date(year, month, day-2).getTime()} todoStatus={todolist1}/>
                </div>
                <div className='m c-1'>
                    <CardFeed nowday={new Date(year, month, day-1).getTime()} todoStatus={todolist2} />
                </div>
                <div className='m'>
                    <CardFeed nowday={new Date(year, month, day).getTime()} todoStatus={todolist2} />
                </div>
                <div className='m c-1'>
                    <CardFeed nowday={new Date(year, month, day+1).getTime()} todoStatus={todolist1} />
                </div>
                <div className='m c-2'>
                    <CardFeed nowday={new Date(year, month, day+2).getTime()} todoStatus={todolist2} />
                </div>    
            </div>
        </div>
    );
}

export default TodoFeed;
import '../style/homeUserList.scss';

function userList() {
    return(
        <div class='custom'>
            <div class='edge'>
                <div class='box'>
                    <label>User's To Do List</label>
                    <div class='card'>
                        <label>SATURDAY</label>
                        <div class='date'>
                            <label id='date-modify'>th</label>
                            <label id='date-number'>17</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default userList;
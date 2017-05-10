var UserRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.user.userName}</td>
                <td>
                    <a href={'mailto:' + this.props.user.email}>
                        {this.props.user.email}
                    </a>
                </td>
            </tr>
        );
    }
});

var UserList = React.createClass({
    getInitialState: function () {
        return {
            users: [
                {
                    id: 1,
                    userName: 'han1',
                    email: 'han1@gmail.com'
                },
                {
                    id: 2,
                    userName: 'han2',
                    email: 'han2@gmail.com'
                },
                {
                    id: 3,
                    userName: 'han3',
                    email: 'han3@gmail.com'
                }
            ]
        }
    },
    render: function () {
        var users = this.state.users.map(
            function (user) {
                return (
                    <UserRow user={user} key={user.id}/>
                )
            }
        );
        return (
            <table className="table table-bordered table-striped">
                <thead className="thead-inverse">
                <tr>
                    <th>User Name</th>
                    <th>Email Address</th>
                </tr>
                </thead>
                <tbody>
                {users}
                </tbody>
            </table>
        )
    }
});

ReactDOM.render(
    <UserList/>,
    document.getElementById('root')
)
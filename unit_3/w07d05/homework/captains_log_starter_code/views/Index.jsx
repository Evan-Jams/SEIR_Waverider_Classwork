const React = require('react');
// const Welcome = require('./Welcome.jsx')
const Default = require('./layouts/Default.jsx')

class Index extends React.Component {
    render() {
        return (
            <Default title="Captain's Log Home" page="Captain's Log">
                <a href="/logs/New">Create a New Log</a>
                <ul>
                    {
                        this.props.logs.map((log, i) => {
                            return (
                                <li key={i}>
                                    <a href={`/logs/${log.id}`}>
                                        { log.title }
                                    </a>
                                    <form class="" action={`/logs/${log.id}?_method=DELETE`} method="POST">
                                        <input type="submit" name="" value="DELETE"/>
                                    </form>
                                </li>
                            )
                        })
                    }

                </ul>

            </Default>
        )
    }
};

module.exports = Index;

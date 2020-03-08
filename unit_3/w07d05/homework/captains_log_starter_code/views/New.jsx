const React = require('react');
const Default = require('./layouts/Default.jsx');

class New extends React.Component {
    render() {
        return (
            <Default title="New Log Page" page="New Log">
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title" />
                    <br/>
                    Entry: <input type="text" name="entry" />
                    <br/>
                    Is Ship Broken?: <input type="checkbox" name="shipIsBroken" />
                    <br/>
                    <input type="submit" name="" value="Post Log"/>

                </form>
            </Default>
        )
    }
}

module.exports = New;

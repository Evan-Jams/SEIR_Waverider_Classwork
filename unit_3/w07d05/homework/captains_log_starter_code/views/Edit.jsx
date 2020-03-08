const React = require('react')
const Default = require('./layouts/Default')

class Edit extends React.Component {
    render() {
        return (
            <Default title="Log Edit Page" page="Edit Log">
                <form class="" action={`/logs/${this.props.log.id}?_method=PUT`} method="post">
                    <label for="title">Title</label>
                    <input type="text" name="title" defaultValue={`${this.props.log.title}`} />
                    <br/>
                    <label for="entry">Entry</label>
                    <input type="text" name="entry" defaultValue={`${this.props.log.entry}`}/>
                    <br/>
                    <div>
                      <label for="shipIsBroken">
                        <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />
                        <span>Ship Is Broken</span>
                      </label>
                    </div>
                    <br/>
                    <input type="submit" name="" value="Submit Log"/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit;

const React = require('react');
const Default = require('./layouts/Default')


class Show extends React.Component {
    render(){
        return (
            <Default title={`${this.props.log.title.toUpperCase()} Show Page`} page="Log Show Page">
                { this.props.log.title }
                <br/>
                { this.props.log.entry }.
                <br/>
                { this.props.log.shipIsBroken ? ` It is not ready to sail` : ` It is ready to sail` }
                <br/>
                <a href={`/logs/${this.props.log.id}/Edit`}>Edit Log</a>
            </Default>
        )
    }
}

module.exports = Show;

const React = require('react');
const Mission = require('./layouts/Mission.jsx')


class Adventurer extends React.Component {
    render() {
        const students = ['Cristi', 'Ric', 'Evan', 'Scott', 'William', 'Alfonso', 'Ben']
        return (
            <Mission title={this.props.title} mission={this.props.mission}>
                <h1>Hello My Name is { this.props.name } </h1>
                <ul>
                    <h2> These are my amazing students </h2>
                    {
                        students.map((student, key)=> {
                            return <li key={key}>{student}</li>
                        })
                    }
                </ul>
          </Mission>
      );
    }
}

module.exports = Adventurer;

import React, { Component } from 'react'
import Song from './Song'

class Playlist extends Component {
    render() {
        return (
            <main>
                <div>
                    <h3>Playlist 1</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Song</th>
                                <th>Arist</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.playlist.map((song, i) => {
                                    return (
                                        <Song song={song} key={ i } />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        )
    }
}

export default Playlist

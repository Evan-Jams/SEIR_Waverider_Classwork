import React from 'react';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import Rating from './components/Rating';

class App extends React.Component {
    render() {
        return (
            <div class="main-container">
                <Sidebar />
                <Reviews />
                <Rating />
                <div class="top" id="analysis">top</div>
                <div id="visitors">bottom</div>
            </div>
        )
    }
}

export default App;

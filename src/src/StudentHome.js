import React, { Component } from 'react';
import background from './Background.png';
import './StudentHome.css';

class StudentHomePage extends Component {
    render() {
        return (
            <div>
                <div class="left">
                    <ul class="lmenu">
                        <li class="items">Dashboard</li>
                        <li class="items">User Profile</li>
                        <li class="items">Log Out</li>
                    </ul>
                </div>
                <br class="clear" />
                <div class="center">
                    <ul>
                    </ul>
                </div>
            </div>
        );
    }
}

export default StudentHomePage;
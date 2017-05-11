import React from 'react';
import Minibasket from './Minibasket';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header container">
                <h2>Welcome to React</h2>
                <Minibasket/>
            </div>
        );
    }
}

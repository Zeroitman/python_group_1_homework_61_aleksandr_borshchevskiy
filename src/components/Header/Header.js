import React, {PureComponent} from 'react';
import './Header.css';

class Header extends PureComponent {
    render() {
        return (
            <div className="header">
                <p className="text-center p-3"><b>Жуть Юрского периода</b></p>
            </div>
        );
    }
}

export default Header;
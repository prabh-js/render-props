import React from 'react';
import Second from './Second';
import Third from './Third';

class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Passed as composition'
        }
    }
    render() {
        return (
            <div>
                From First Component
                <Second render={()=>(
                    <Third text={this.state.text} />
                )}/>
            </div>
        )
    }
}
export default First;
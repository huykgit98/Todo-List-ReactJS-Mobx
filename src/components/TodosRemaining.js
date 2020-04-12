// import React, { Component } from 'react';

// class TodoRemaining extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.remaining} items left
//             </div>
//         );
//     }
// }

// export default TodoRemaining;

import React from 'react';
import PropTypes from 'prop-types';

const TodoRemaining = (props) => {
    return (
        <div>
            {props.remaining} items left
        </div>
    );
};

TodoRemaining.propTypes = {
    remaining: PropTypes.number.isRequired,
 }

export default TodoRemaining;
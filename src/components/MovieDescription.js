import React from 'react';

class MovieDescription extends React.Component {

    constructor(props) {
        super(props);
        this.getParams();
    }

    render() {
        return (
            <div>
                MovieDescription
                <div>{}</div>
            </div>

        );
    }

    getParams() {
        console.log(this.props.getParams);
        return { id: this.props.getParams };
    }

}

export default MovieDescription;
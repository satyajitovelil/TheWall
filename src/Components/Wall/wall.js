import React from 'react';

import Brick from '../Brick/brick.js';

import "./style.css"

class Wall extends React.Component{

    constructor(props){
        super (props);
        this.state = {
            bricks: [1, 2, 3, 4, 5, 6]
        };
    }

    addMoreBricks = () => {
        const newBricks = [...this.state.bricks];
        newBricks.push(newBricks.length + 1)
        this.setState({
            bricks: newBricks
        })
    }

    render = () => {
        return (
            <div className = "wall-container">

                {this.state.bricks.map( (brick) => {
                    return <Brick key={brick} name={brick}/>
                }

                )
                }
            <button className="btn"  onClick={this.addMoreBricks}>Add Bricks</button>    
            </div>
        );
    };
}

export default Wall;
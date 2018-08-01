import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsm.photo/200',
        tags: ['Alex', 'Billy', 'Charlie', 'Delta', 'Elephant' ]
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return (<ul>
                    <li>
                      {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                    </li>
                </ul>);
    }

    handleIncrement(){
        console.log("Increased by one")
    }

    render() { 
        return (
        <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <h1>Hello World</h1>
            <button onClick={this.handleIncrement} className="btn btn-primary">Increasement</button>
            {this.renderTags()}
        </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary"
        return classes
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "zero": count;
    }
}

export default Counter;
import React, { Component } from "react";


import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    
    constructor() {
        super();
        
        this.state = {
            title: "another title",
            data : [
                {title: "apple"}, 
                {title: "orange"}, 
                {title: "lemon"}
            ]
        }
    }

    portfolioItems(){
        return this.state.data.map(item => {
            return <PortfolioItem title = {item.title}/>;
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                {this.portfolioItems()}
            </div>
        )
    }
}
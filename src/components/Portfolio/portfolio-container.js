import React, { Component } from "react";


import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {

    constructor() {
        super();

        this.state = {
            title: "another title",
            data: [
                { title: "apple", category: "sweet" },
                { title: "orange", category: "sweet" },
                { title: "lemon", category: "sour" }
            ]
        }
        this.handleClickFilter = this.handleClickFilter.bind(this);
    }

    handleClickFilter(filter) {
        this.setState({
            data: this.state.data.filter(el => {
                return el.category === filter
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />;
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>

                <button onClick={() => this.handleClickFilter('sour')}>sour</button>
                <button onClick={() => this.handleClickFilter('sweet')}>sweet</button>

                {this.portfolioItems()}
            </div>
        )
    }
}
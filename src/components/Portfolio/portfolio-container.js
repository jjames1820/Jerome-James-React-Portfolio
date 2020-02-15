import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {

    constructor() {
        super();

        this.state = {
            title: "another title",
            data: [
                { title: "Quip", category: "eCommerce", slug:"quip"},
                { title: "Eventbrite", category: "Scheduling", slug:"eventbrite" },
                { title: "Ministry Safe", category: "Enterprise", slug:"ministry-safe" },
                { title: "SwingAway", category: "eCommerce", slug:"swingaway" }
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
            return <PortfolioItem title={item.title} slug={item.slug} />;
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
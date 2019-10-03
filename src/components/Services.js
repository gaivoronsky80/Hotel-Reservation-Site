import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:'ut placerat orci nulla pellentesque dignissim enim sit amet venenatis'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'ut placerat orci nulla pellentesque dignissim enim sit amet venenatis'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:'ut placerat orci nulla pellentesque dignissim enim sit amet venenatis'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'ut placerat orci nulla pellentesque dignissim enim sit amet venenatis'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

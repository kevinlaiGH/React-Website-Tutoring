import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="http://i.imgur.com/c7dXoMy.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Excellent High School Teacher</h1>
                            <hr />
                            <p> Specialise in Mathematics | Physics | Chemistry |  Science </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>


                            </div>

                        </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
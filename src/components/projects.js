import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://rukminim1.flixcart.com/image/1408/1408/puzzle/7/c/y/gift-world-1-rubik-s-cube-3x3x3-puzzle-extra-smooth-high-speed-original-imaeg4bg5ssgxqgd.jpeg?q=90) center / cover' }}> Mathematics Foundation</CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It</CardText>
                        <CardActions border>
                            <Button colored>Lessons</Button>
                            <Button colored>Exercise</Button>
                            <Button colored>Quiz</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/*Project 2*/}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://rukminim1.flixcart.com/image/1408/1408/puzzle/7/c/y/gift-world-1-rubik-s-cube-3x3x3-puzzle-extra-smooth-high-speed-original-imaeg4bg5ssgxqgd.jpeg?q=90) center / cover' }}> Mathematics Foundation</CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It</CardText>
                        <CardActions border>
                            <Button colored>Lessons</Button>
                            <Button colored>Exercise</Button>
                            <Button colored>Quiz</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    {/*Project 3*/}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://rukminim1.flixcart.com/image/1408/1408/puzzle/7/c/y/gift-world-1-rubik-s-cube-3x3x3-puzzle-extra-smooth-high-speed-original-imaeg4bg5ssgxqgd.jpeg?q=90) center / cover' }}> Mathematics Foundation</CardTitle>
                        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It</CardText>
                        <CardActions border>
                            <Button colored>Lessons</Button>
                            <Button colored>Exercise</Button>
                            <Button colored>Quiz</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Physics
                </h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Chemistry</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is science</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Mathematics</Tab>
                    <Tab>Physics</Tab>
                    <Tab>Chemistry</Tab>
                    <Tab>Science</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Projects;
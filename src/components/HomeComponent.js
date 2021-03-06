import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg top src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md m-1">
                <RenderCard item={props.campsite} />
            </div>
            <div className="col-md m-1">
                <RenderCard item={props.promotion} />
            </div>
            <div className="col-md m-1">
                <RenderCard item={props.partner} />
            </div>
        </div>
    </div>
    );
}

export default Home;  
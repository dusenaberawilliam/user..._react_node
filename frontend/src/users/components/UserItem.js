import React from 'react';
import Avatar from '../../shared/components/UIElement/Avatar';
import Card from '../../shared/components/UIElement/Card';
import './UserItem.css';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        {/* <img src={props.image} alt={props.name} /> */}
                        <Avatar image={props.image} />
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>
                            {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
}

export default UserItem

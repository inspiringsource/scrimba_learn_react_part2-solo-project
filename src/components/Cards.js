import { Icon } from '@iconify/react';

export default function Cards(props) {
    return (
        <div className="card">
            <img src={`${props.coverImg}`} className="card--image" alt="SOMETHING" />
            <div className="card--stats">
                <div className="location">
                    <Icon className='locationIcon' icon="carbon:location-filled" color="red" inline={true} />
                    <h3>{props.location}</h3>
                </div>    
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>

            <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}

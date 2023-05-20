import './location.css';

export default function Location() {
    return (
        <div className="location">
            <input type="text" placeholder="Search location" />
            <img src="/map.png" alt="map" />
        </div>
    );
}

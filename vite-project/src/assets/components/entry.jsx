import './entry.css'

export default function FirstEntry() {
    return (
        <div className="entry-container">
            <img src="/mt fuji.jpeg" className="fuji-img" alt="mount fuji image" />
            
            <div className="text-section">
                <div className="loc-div">
                    <img src="/location.png" className="loc-img" alt="location icon img" />
                    <p className="country">Japan</p>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </div>

                <h1>Mount Fuji</h1>
                <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). <br />
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
    );
}

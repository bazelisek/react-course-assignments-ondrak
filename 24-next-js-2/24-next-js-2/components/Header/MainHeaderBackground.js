import classes from "./mainHeaderBackground.module.css";

export default function MainHeaderBackground() {
    return (
    <div className={classes["header-background"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
                offset="0%"
                style={{ stopColor: '#59453c', stopOpacity: '1' }}
            />
            <stop
                offset="100%"
                style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
            />
            </linearGradient>
        </defs>
        <path
            fill="url(#gradient)"
            d="M0,202L48,186C96,170,192,138,288,127.3C384,117,480,127,576,132.7C672,138,768,138,864,127.3C960,117,1056,95,1152,79.3C1248,63,1344,53,1392,47.3L1440,42L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
        </svg>
    </div>
    )
}
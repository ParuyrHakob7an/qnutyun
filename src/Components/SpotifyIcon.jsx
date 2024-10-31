function SpotifyIcon({ imageUrl, name, artists, }) {
    return (
        <div>
            <img src={imageUrl} alt="" />
            <h2>{name}</h2>
        </div>
    )
}

export default SpotifyIcon

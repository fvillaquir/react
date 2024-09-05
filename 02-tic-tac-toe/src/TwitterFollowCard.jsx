import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${userName}`}
                    alt={`Avatar of ${userName}`}
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    )
}
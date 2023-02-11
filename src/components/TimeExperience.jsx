import { experiences } from '../data/';

export const TimeExperience = () => {
    return (
        <ul className="timeline">
            {experiences.map(({ id, direction, title, date, description }) => (
                <li key={id}>
                    <div className={`direction-${direction}`}>
                        <div className="flag-wrapper">
                            <span className="hexa"></span>
                            <span className="flag">{title}</span>
                            <span className="time-wrapper">
                                <span className="time">{date}</span>
                            </span>
                        </div>
                        <div className="desc">{description}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

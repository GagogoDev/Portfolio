export const CardCourses = ({ data }) => {
    const { title, institution, date } = data;
    return (
        <div className="course-item">
            <span href="#" className="course-content">
                <div className="course-title fw-bold">{title}</div>

                <span className="course-info-text fw-bold">{institution}</span>

                <br />

                <span className="course-info-text fw-bold">{date}</span>
            </span>
        </div>
    );
};

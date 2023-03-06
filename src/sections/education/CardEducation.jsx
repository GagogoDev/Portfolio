export const CardEducation = ({ data }) => {
    const { title, institution, date } = data;
    return (
        <div className="col-12 col-md-5 card-education mt-1 mb-1">
            <p className="title-card-education m-0 mb-2 text-center">
                { title }
            </p>
            <p className="subtitle-card-education m-0 ps-2 text-start">
                { institution }
            </p>
            <p className="date-card-education m-0 ps-2 text-start">
                { date }
            </p>
        </div>
    );
};

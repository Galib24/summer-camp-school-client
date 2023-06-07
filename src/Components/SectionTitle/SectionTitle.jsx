

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-pink-500 mb-2">------{subHeading}------</p>
            <div className="divider"></div>
            <h3 className="text-4xl uppercase font-bold  py-4">{heading}</h3>
            <div className="divider"></div>
        </div>
    );
};

export default SectionTitle;
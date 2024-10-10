/* eslint-disable react/prop-types */
const SectionCard = ({ title, content }) => (
    <section className="bg-card p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-textPrimary hover:text-secondary transition duration-300">
            {title}
        </h2>
        <p className="mt-4 text-base">{content}</p>
    </section>
);

export default SectionCard;
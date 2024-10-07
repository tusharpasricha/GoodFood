import PropTypes from "prop-types";

export default function Button({ children }) {
  return (
    <>
      <button className="bg-white hover:bg-slate-100 text-primary  py-2 px-4 rounded-md shadow-sm text-[12px]">
        {children}
      </button>
    </>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
};

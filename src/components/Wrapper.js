import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        {children}
        <p>ewaru emmanuel</p>
      </div>
    </>
  );
};
export default Wrapper;

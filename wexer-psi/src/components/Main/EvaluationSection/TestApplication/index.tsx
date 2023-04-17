import TestAppBody from "./TestAppBody";
import TestAppHeader from "./TestAppHeader";

const TestApplication = () => {
  return (
    <>
      <div className="backScreen">
        <TestAppHeader />
        <hr />
        <TestAppBody />
      </div>
    </>
  );
};

export default TestApplication;

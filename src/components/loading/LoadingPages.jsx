import BarLoader from "react-spinners/BarLoader";

function LoadingPage({ loading }) {
  return (
    <div className="dark:bg-cs_dark relative flex h-screen flex-col items-center justify-center bg-base-100 py-16">
      <div className="mt-8 flex flex-col items-center ">
        <BarLoader width={200} loading={loading} color="#00B074" />
      </div>
    </div>
  );
}

export default LoadingPage;

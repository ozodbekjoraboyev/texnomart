import useMyStore from "./store";

function Ism() {
    const yosh = useMyStore((state) => {
      return state.baxrom;
    });
    return <div className="bg-amber-400">{yosh}</div>;
  }
  export default Ism
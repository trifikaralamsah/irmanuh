import Countdown from "react-countdown";

interface countdownInterface {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    completed: any
}

const CountdownDate = () => {
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({ days, hours, minutes, seconds, completed }:countdownInterface) => {
        if (completed) {
          return <Completionist />;
        } else {
          return (
            <div className="grid grid-cols-4 justify-items-center gap-4 mt-3 font-medium">
              <div className="border-2 border-slate-500 p-4 box-content shadow-2xl rounded-xl bg-white">
                <label>Hari</label>
                <p className="text-center border border-slate-400 rounded-md p-1">{days}</p>
              </div>
              <div className="border-2 border-slate-500 p-4 box-content shadow-2xl rounded-xl bg-white">
                <label>Jam</label>
                <p className="text-center border border-slate-400 rounded-md p-1">{hours}</p>
              </div>
              <div className="border-2 border-slate-500 p-4 box-content shadow-2xl rounded-xl bg-white">
                <label>Menit</label>
                <p className="text-center border border-slate-400 rounded-md p-1">{minutes}</p>
              </div>
              <div className="border-2 border-slate-500 p-4 box-content shadow-2xl rounded-xl bg-white">
                <label>Detik</label>
                <p className="text-center border border-slate-400 rounded-md p-1">{seconds}</p>
              </div>
            </div>
          );
        }
      };

  return (
    <div><Countdown date={1698411600000} renderer={renderer} /></div>
  )
}

export default CountdownDate
import {
  faAmbulance,
  faBaby,
  faBandAid,
  faLifeRing,
  faPiggyBank,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PolicyCards = () => {
  // - hospital/shield
  // - dps
  // - personal accident
  // - whole life plan (death, tpd, ci)
  // - term
  // - savings plan (short/long term)
  // - investment
  // - retirement
  // - Others (ladies plan, cancer plan, add ons, etc.)

  // https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package

  return (
    <>
      <div className="flex flex-wrap mx-[10%]">
        <div className="card w-1/4 bg-neutral text-neutral-content m-10">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faAmbulance} />
            </h2>
            <h2>Hospitalisation</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Details</button>
            </div>
          </div>
        </div>
        <div className="card w-1/4 bg-neutral text-neutral-content m-10">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faBaby} />
            </h2>
            <h2>Dependent's Protection Scheme</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Details</button>
            </div>
          </div>
        </div>

        <div className="card w-1/4 bg-neutral text-neutral-content m-10">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faBandAid} />
            </h2>
            <h2>Personal Accident</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Details</button>
            </div>
          </div>
        </div>

        <div className="card w-1/4 bg-neutral text-neutral-content m-10">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faLifeRing} />
            </h2>
            <h2>Whole Life Plan</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Details</button>
            </div>
          </div>
        </div>

        <div className="card w-1/4 bg-neutral text-neutral-content m-10">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faShieldAlt} />
            </h2>
            <h2>Term Plan</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Details</button>
            </div>
          </div>
        </div>
        <div className="card w-1/4 bg-neutral text-neutral-content m-10">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faPiggyBank} />
            </h2>
            <h2>Savings</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyCards;

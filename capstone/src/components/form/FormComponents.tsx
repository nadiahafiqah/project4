export const TextInput = ({
  label,
  name,
  value,
  required,
  handleInput,
}: InputField) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        name={name}
        className="input input-bordered w-full max-w-xs"
        onChange={handleInput}
        value={value}
        required={required}
      />
    </div>
  );
};

export const NumberInput = ({
  label,
  name,
  value,
  required,
  handleInput,
}: InputField) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="number"
        name={name}
        className="input input-bordered w-full max-w-xs"
        onChange={handleInput}
        value={value}
        required={required}
      />
    </div>
  );
};

export const DateInput = ({
  label,
  name,
  value,
  min,
  required,
  handleInput,
}: InputField) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="date"
        name={name}
        className="input input-bordered w-full max-w-xs"
        onChange={handleInput}
        value={value}
        min={min}
        required={required}
      />
    </div>
  );
};

export const SelectSex = ({
  label,
  name,
  value,
  min,
  required,
  handleInput,
}: InputField) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        className="select select-bordered border-slate-400"
        type="select"
        name={name}
        onChange={handleInput}
        value={value}
        min={min}
        required={required}
      >
        <option disabled selected>
          Select one
        </option>
        <option>Female</option>
        <option>Male</option>
      </select>
    </div>
  );
};

export const TextAreaInput = ({
  label,
  name,
  value,
  required,
  handleInput,
}: InputField) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text">{label} </span>
      </label>
      <textarea
        name={name}
        className="textarea textarea-bordered h-24"
        onChange={handleInput}
        value={value}
        required={required}
      ></textarea>
    </div>
  );
};

export const SelectCategory = ({
  label,
  name,
  value,
  min,
  required,
  handleInput,
}: InputField) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        className="select select-bordered border-slate-400"
        type="select"
        name={name}
        onChange={handleInput}
        value={value}
        min={min}
        required={required}
      >
        <option disabled selected>
          Select one
        </option>
        <option>Dependent's Protection Scheme</option>
        <option>Hospitalisation</option>
        <option>Personal Accident</option>
        <option>Savings</option>
        <option>Term</option>
        <option>Whole Life</option>
      </select>
    </div>
  );
};

export const UsernameInput = ({
  label,
  name,
  handleInput,
  required,
}: InputField) => {
  return (
    <div className="form-control w-full max-w-lg">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        name={name}
        className="input input-bordered w-full max-w-lg"
        onChange={handleInput}
        required={required}
      />
    </div>
  );
};

export const PasswordInput = ({
  label,
  name,
  handleInput,
  required,
}: InputField) => {
  return (
    <div className="form-control w-full max-w-lg">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="password"
        name={name}
        className="input input-bordered w-full max-w-lg"
        onChange={handleInput}
        required={required}
      />
    </div>
  );
};

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

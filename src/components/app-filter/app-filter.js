import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "star", label: "Сотрудники на повышение" },
    { name: "moreThen1000", label: "З/П больше 1000$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn btn-light" : "btn btn-outline-light";
    return (
      <button
        className={clazz}
        type="button"
        key={name}
        onClick={() => {
          props.onFilterSelect(name);
        }}
      >
        {label}
      </button>
    );
  });
  return (
    <div className="btn-group">
      {buttons}
      {/* <button className="btn btn-light" type="button">
        Все сотрудники
      </button>
      <button className="btn btn-outline-light" type="button">
        Сотрудники на повышение
      </button>
      <button className="btn btn-outline-light" type="button">
        З/П больше 1000$
      </button> */}
    </div>
  );
};

export default AppFilter;

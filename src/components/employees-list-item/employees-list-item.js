import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, increase, star, onToggleProp } = props;

  const classNames = (increase, star) => {
    let styles = "list-group-item d-flex justify-content-between";
    if (increase) {
      styles = styles + " increase";
    }
    if (star) {
      styles = styles + " like";
    }

    return styles;
  };

  return (
    <li className={classNames(increase, star)}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="star"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cokkie btn-sm"
          onClick={onToggleProp}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;

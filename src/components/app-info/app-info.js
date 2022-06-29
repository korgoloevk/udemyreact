import "./app-info.css";

const AppInfo = ({showEmployees, showIncrease}) => {

  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {showEmployees()}</h2>
      <h2>Премию получат: {showIncrease()}</h2>
    </div>
  );
};

export default AppInfo;

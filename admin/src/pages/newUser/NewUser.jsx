import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nowy Użytkownik</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nazwa Użytkownika</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Pełne imię</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Hasło</label>
          <input type="password" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Tel</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Adres</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Płeć</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Mężczyzna</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Kobieta</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Inne</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Aktywny</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Tak</option>
            <option value="no">Nie</option>
          </select>
        </div>
        <button className="newUserButton">Stwórz</button>
      </form>
    </div>
  );
}

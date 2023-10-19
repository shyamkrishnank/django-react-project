import LoginView from "./app/login/loginView"
import UserView from "./app/user/userView"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserlistView from "./app/userlist/UserlistView"
import EditView from "./app/edit/editView"
import UserHomeView from "./app/userHome/userHomeView"


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="signup" element={<UserView props={{name:'Sign up'}}/>} />
        <Route path="adduser" element={<UserView props={{name:'Add User'}}/>} />
        <Route path="login" element={<LoginView />} />
        <Route path="users" element={<UserlistView/>} />
        <Route path='edituser' element={<EditView />} />
        <Route path="home" element={<UserHomeView/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App

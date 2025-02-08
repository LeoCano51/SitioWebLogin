
function App() {

  return (
    <div class=" login-container">
        <h1>Login</h1>
        <form>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required></input>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <div class="password-container">
                    <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
                    <button type="button" id="togglePassword" class="toggle-Password">ojo</button>
                </div>
            </div>
            <button type="submit" class="login-button">login</button>
        </form>
    </div>
  )
}

export default App

function Login(){
    return(
        <div className="App"> 
        <h1>Login Form</h1>
          <label htmlFor="name">Name</label><br />
          <input type="text" placeholder='Enter name' required/><br />
          <label htmlFor="Email" >Email</label><br />
          <input type="email" placeholder='Enter your Email' required /><br />
          <label htmlFor="tel">Cont no:</label><br />
          <input type="tel" name="contact" id="tel" placeholder='Contact detail' required/><br />
          <label htmlFor="tel">password:</label><br />
          <input type="password" name="pass" id="tel" placeholder='Password detail' required/><br />
          <button type="submit">submit</button>
        </div>
    );
}
export default Login;
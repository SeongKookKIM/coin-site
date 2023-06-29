export default function Register() {
  return (
    <div className="register-form">
      <h4>회원가입</h4>
      <form action="/api/auth/signup" method="POST">
        <input type="text" name="name" placeholder="Name"></input>
        <input type="text" name="id" placeholder="Id"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="email" name="email" placeholder="E-mail"></input>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

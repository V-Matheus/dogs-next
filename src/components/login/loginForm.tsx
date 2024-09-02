import login from '@/actions/login';

export default async function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="text" placeholder="usuário" name="username" />
        <input type="password" placeholder="senha" name="password" />
        <button>Entrar</button>
      </form>
    </>
  );
}

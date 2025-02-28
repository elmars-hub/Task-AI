import Head from '@/components/Head';
import { SignIn } from '@clerk/clerk-react';

function LoginPage() {
  return (
    <>
      <Head title='Login to Tasky AI - Manage Your To-Do Lists and Projects' />

      <section>
        <div className='container flex justify-center'>
          <SignIn signUpUrl='/register' />
        </div>
      </section>
    </>
  );
}

export default LoginPage;

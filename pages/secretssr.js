
import BaseLayout from '@/components/layouts/baselayout'
import BasePage from '@/components/basepage';
// import { useGetUser } from '@/actions/user';
// import auth0 from '@/utils/auth0';
import { authorizeUser, withAuth } from '@/utils/auth0';

const SecretSSR = ({ user, title }) => {

  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>This is the Secret SSR page</h1>
        <h2>Hello {user && user.name}</h2>
        <h3>{title}</h3>
      </BasePage>
    </BaseLayout>
  )
}


// export const getServerSideProps = async ({ req, res }) => {
//   const user = await authorizeUser(req, res);

//   // console.log(session.user);
//   return {
//     props: { user }
//   }
// }

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({title: 'My new title'})
    }, 500)
  })
}

export const getServerSideProps = withAuth(async ({req, res}, user) => {
  const title = await getTitle();
  return title;
})();

export default SecretSSR

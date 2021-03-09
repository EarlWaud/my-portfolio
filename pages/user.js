
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/basepage';
import { useGetPostById } from '@/actions';
import { useRouter } from 'next/router'
import React from 'react';
import { useGetUser } from '@/actions/user';


// {
//   'https://myportfolio.com/roles': [ 'guest' ],
//   nickname: 'earlwaud',
//   name: 'earlwaud@yahoo.com',
//   picture: 'https://s.gravatar.com/avatar/0d5ed28dc2d0bb338b6fac8228ced218?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fea.png',
//   updated_at: '2021-03-09T16:05:55.042Z',
//   sub: 'auth0|60465c433f8473006f566f7d'
// }


const UserProfile = () => {
  const router = useRouter();
  // const { data: portfolio, error, loading } = useGetPostById(router.query.id);
  const { data: dataU, error: errorU, loading: loadingU } = useGetUser();
  
  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage>
      { loadingU && 
        <div className="alert">
          Loading data...
        </div>
      }
      { dataU &&
        <React.Fragment>
          <h1>{dataU.name}'s Profile</h1>
          <h2>Nickname: {dataU.nickname}</h2>
          <h2>Roles: {dataU[process.env.AUTH0_NAMESPACE + '/roles']}</h2>
          <hr />
          <img src={dataU.picture} />
        </React.Fragment>
      }
      { errorU &&
        <div className="alert alert-danger">
          {error.message}
        </div>
      }
      </BasePage>
    </BaseLayout>
  )
}


export default UserProfile;

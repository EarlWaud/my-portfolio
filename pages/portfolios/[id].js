
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/basepage';
// import { withRouter } from 'next/router';
import { useGetPostById } from '@/actions';
import { useRouter } from 'next/router'
import React from 'react';
import { useGetUser } from '@/actions/user';

const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetPostById(router.query.id);
  const { data: dataU, loading: loadingU } = useGetUser();
  
  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage>
      { loading && 
        <div className="alert">
          Loading data...
        </div>
      }
      { portfolio &&
        <React.Fragment>
          <h1>Portfolio:</h1>
          <h2>{portfolio.title}</h2>
          <h5>ID: {portfolio.id}</h5>
          <hr />
          <h3>{portfolio.body}</h3>
        </React.Fragment>
      }
      { error &&
        <div className="alert alert-danger">
          {error.message}
        </div>
      }
      </BasePage>
    </BaseLayout>
  )
}


export default Portfolio;


import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/basepage';
import Link from 'next/link';
import { useGetPosts } from '@/actions'
import { useGetUser } from '@/actions/user';

const fetcher = (url) => fetch(url).then(res => res.json());

const Portfolios = () => {
  const { data, error, loading } = useGetPosts();
  const { data: dataU, loading: loadingU } = useGetUser();


  const renderPosts = (posts) => {
    return posts.map(post =>
      <li key={post.id} style={{'fontSize': '20px'}}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          <a className="a-mylink">
            {post.title}
          </a>
        </Link>
      </li>
    )
  }

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage>
        <h1>Portfolios</h1>
        { loading && 
          <div className="alert">
            Loading data...
          </div>
        }
        { data &&
          <ul>
            {renderPosts(data)}
          </ul>
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


export default Portfolios;

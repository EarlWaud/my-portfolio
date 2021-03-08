
import BaseLayout from '@/components/layouts/baselayout'
import BasePage from '@/components/basepage';
import { useGetUser } from '@/actions/user';

const Blogs = () => {
  const { data, loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>This is the Blogs Page</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default Blogs;

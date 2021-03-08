
import BaseLayout from '@/components/layouts/baselayout'
import BasePage from '@/components/basepage';
import { useGetUser } from '@/actions/user';

const Cv = () => {

  const { data, loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>This is the Resume Page</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default Cv;

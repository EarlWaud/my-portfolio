
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/basepage';
import withAuth from '@/hoc/withauth';

const OnlyAdmin = ({user, loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>This is the Admins Only page</h1>
        <h2>Hello {user.name}</h2>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(OnlyAdmin)('admin');

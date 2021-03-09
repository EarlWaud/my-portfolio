
import { useGetUser } from '@/actions/user';
import Redirect from '@/components/shared/redirect';
import { isAuthorized } from '@/utils/auth0'

const withAuth = Component => role => {

  return props => {
    const { data, loading } = useGetUser();
    if (loading) {
      return <p>Loading data...</p>
    }

    if (!data) {
      return <Redirect ssr to="/api/v1/login" />;
    } else {
      if (role && !isAuthorized(data, role)) {
        return <Redirect ssr to="/api/v1/login" />;
      }
      return <Component user={data} loading={loading} {...props} />
    }
  }
}

export default withAuth;

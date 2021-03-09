

import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/basepage';
import withAuth from '@/hoc/withauth';

const Secret = ({user, loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
      <h1>I am Secret Page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(Secret)();


// High Order Component - HOC
// Simple function that take a compoent and 
// returns new component with some extended functionality

// one way...
// function withAuth(Component) {
//   return function (props) {
//     return <Component title="This is the Secret page" {...props} />
//   }
// }

// another way...
// const withAuth = (Component) => {
//   return props => {
//     return <Component title="This is the Secret page" {...props} />
//   }
// }

// cleaner way...
// const withAuth = (Component) => props => {
//   return <Component title="This is the Secret page" {...props} />
// }

// even cleaner way...
// const withAuth = (Component) => props =>
//   <Component title="This is the Secret page" {...props} />

// now we moved it to the hoc/withAuth.js

//export default withAuth(Secret)

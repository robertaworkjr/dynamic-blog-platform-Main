import Layout from '../components/layout'
import SignUpForm from '../components/signup-form'

export default function SignUp() {
  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sign Up for Personalized Insights</h1>
        <SignUpForm />
      </div>
    </Layout>
  )
}


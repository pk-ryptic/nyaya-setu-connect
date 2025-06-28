
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Scale, 
  Building, 
  Shield,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthSelection = () => {
  const userTypes = [
    {
      id: 'user',
      title: 'Citizen',
      description: 'File complaints and access government services',
      icon: User,
      color: 'from-blue-500 to-blue-600',
      features: ['File complaints', 'Track status', 'Get legal help']
    },
    {
      id: 'lawyer',
      title: 'Lawyer',
      description: 'Provide legal assistance and consultations',
      icon: Scale,
      color: 'from-purple-500 to-purple-600',
      features: ['Offer consultations', 'Manage cases', 'Pro bono services']
    },
    {
      id: 'employee',
      title: 'Government Employee',
      description: 'Handle and process citizen complaints',
      icon: Building,
      color: 'from-green-500 to-green-600',
      features: ['Process complaints', 'Update status', 'Generate reports']
    },
    {
      id: 'admin',
      title: 'Administrator',
      description: 'Manage platform and oversee operations',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      features: ['System management', 'User oversight', 'Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-block mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto">
              <Scale className="w-8 h-8 text-white" />
            </div>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Welcome to NyayaSetu
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose your role to get started with our comprehensive government services platform
          </p>
        </div>

        {/* User Type Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-2 pt-4">
                    <Link to={`/auth/${type.id}/login`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link to={`/auth/${type.id}/register`}>
                      <Button size="sm" className={`w-full bg-gradient-to-r ${type.color} hover:opacity-90`}>
                        Register
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <p className="text-gray-600">Or continue as guest with limited access</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/complaints">
              <Button variant="outline" className="px-6">
                File Complaint as Guest
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="px-6">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthSelection;

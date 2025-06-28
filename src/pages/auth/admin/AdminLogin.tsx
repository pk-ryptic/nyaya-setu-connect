
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight,
  Shield,
  ArrowLeft,
  Key
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    adminKey: ''
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate admin key format (example validation)
      if (formData.adminKey.length < 16) {
        throw new Error('Invalid administrator key');
      }

      await new Promise(resolve => setTimeout(resolve, 2500));
      
      toast({
        title: "Admin Access Granted",
        description: "Welcome to the Administrator Dashboard",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Access Denied",
        description: error instanceof Error ? error.message : "Invalid administrator credentials.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Administrator Access</h1>
          <p className="text-gray-600">System administration and management</p>
        </motion.div>

        <Card className="shadow-xl border-0 border-t-4 border-t-red-500">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-red-700">Secure Admin Login</CardTitle>
            <CardDescription>
              High-privilege access requires additional verification
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Administrator Username</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    placeholder="admin.username"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="adminKey">Administrator Key</Label>
                <div className="relative mt-1">
                  <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="adminKey"
                    type="password"
                    value={formData.adminKey}
                    onChange={(e) => handleInputChange('adminKey', e.target.value)}
                    placeholder="Enter administrator key"
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Unique administrator access key</p>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying Access...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Access Admin Panel</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </form>

            {/* Security Warnings */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-red-50 border border-red-200 rounded-lg p-3"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-red-600" />
                  <p className="text-sm text-red-800">
                    <strong>Security Alert:</strong> All admin activities are monitored and logged
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-amber-50 border border-amber-200 rounded-lg p-3"
              >
                <div className="flex items-center space-x-2">
                  <Key className="w-4 h-4 text-amber-600" />
                  <p className="text-sm text-amber-800">
                    Unauthorized access attempts will result in account suspension
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Support */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Issues with access?{' '}
                <Link to="/support" className="text-red-600 font-medium hover:underline">
                  Contact System Support
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <Link to="/auth">
            <Button variant="ghost" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Role Selection
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;

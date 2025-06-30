
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, EyeOff, Mail, Lock, Scale, Phone, User, ArrowLeft, Sparkles, ShieldCheck, FileText, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LawyerRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    barCouncilId: '',
    licenseNumber: '',
    specialization: '',
    experience: '',
    chamber: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lawyer registration:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  const specializations = [
    "Criminal Law",
    "Civil Law",
    "Corporate Law",
    "Family Law",
    "Labor Law",
    "Constitutional Law",
    "Tax Law",
    "Environmental Law",
    "Intellectual Property",
    "Human Rights"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <Link to="/auth" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to selection
          </Link>
          <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-800 border-purple-200">
            <Scale className="w-4 h-4 mr-2" />
            Legal Professional Registration
          </Badge>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-2xl">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Apply for Legal Access
              </CardTitle>
              <CardDescription className="text-gray-600">
                Join our network of verified legal professionals
              </CardDescription>
              <div className="flex items-center justify-center space-x-2 text-sm text-purple-600 bg-purple-50 px-3 py-2 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>All applications undergo verification</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="barCouncilId" className="text-sm font-medium text-gray-700">
                      Bar Council ID
                    </Label>
                    <div className="relative">
                      <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="barCouncilId"
                        type="text"
                        placeholder="Enter Bar Council ID"
                        value={formData.barCouncilId}
                        onChange={(e) => setFormData({...formData, barCouncilId: e.target.value})}
                        className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="licenseNumber" className="text-sm font-medium text-gray-700">
                      License Number
                    </Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="licenseNumber"
                        type="text"
                        placeholder="Enter license number"
                        value={formData.licenseNumber}
                        onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
                        className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                      Specialization
                    </Label>
                    <Select value={formData.specialization} onValueChange={(value) => setFormData({...formData, specialization: value})}>
                      <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                        <SelectValue placeholder="Select specialization" />
                      </SelectTrigger>
                      <SelectContent>
                        {specializations.map((spec) => (
                          <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                      Years of Experience
                    </Label>
                    <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-15">11-15 years</SelectItem>
                        <SelectItem value="15+">15+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="chamber" className="text-sm font-medium text-gray-700">
                      Chamber Address
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="chamber"
                        type="text"
                        placeholder="Enter chamber address"
                        value={formData.chamber}
                        onChange={(e) => setFormData({...formData, chamber: e.target.value})}
                        className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="pl-10 pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-transparent"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="pl-10 pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-transparent"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </motion.div>
              </form>

              <motion.div variants={itemVariants} className="text-center">
                <p className="text-gray-600">
                  Already registered?{' '}
                  <Link to="/auth/lawyer/login" className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
                    Sign In
                  </Link>
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LawyerRegister;

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Scale, 
  FileText, 
  Users, 
  Shield, 
  Phone, 
  Mail, 
  ChevronRight,
  Building,
  Car,
  Hospital,
  GraduationCap,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const services = [
    { icon: Car, title: "Railway Services", desc: "Track complaints about railway infrastructure and services" },
    { icon: Building, title: "Municipal Services", desc: "Report issues with local government and civic amenities" },
    { icon: Hospital, title: "Healthcare", desc: "Address concerns related to public healthcare facilities" },
    { icon: GraduationCap, title: "Education", desc: "Submit complaints about educational institutions and policies" }
  ];

  const stats = [
    { number: "50,000+", label: "Complaints Resolved" },
    { number: "1,200+", label: "Legal Consultations" },
    { number: "98%", label: "User Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-20"
      >
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
          <motion.div 
            variants={itemVariants}
            className="max-w-7xl mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Badge className="mb-4 px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                <Zap className="w-4 h-4 mr-2" />
                Revolutionizing Government Services
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                NyayaSetu
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Your gateway to comprehensive government services and legal assistance. 
              Submit complaints, track progress, and connect with legal professionals seamlessly.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/dashboard">
                <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/complaints">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-blue-50 transition-all duration-300">
                  File Complaint
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <motion.section 
          variants={itemVariants}
          className="py-16 px-4 bg-white/80 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          variants={itemVariants}
          className="py-20 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for all your government service needs and legal requirements
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-center leading-relaxed">
                        {service.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          variants={itemVariants}
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose NyayaSetu?
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Scale, title: "Legal Assistance", desc: "Connect with qualified lawyers and legal professionals" },
                    { icon: FileText, title: "Complaint Tracking", desc: "Real-time updates on your complaint status" },
                    { icon: Users, title: "Expert Support", desc: "24/7 customer support and guidance" },
                    { icon: Shield, title: "Secure Platform", desc: "Your data is protected with enterprise-grade security" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl p-8 shadow-2xl">
                  <div className="h-full bg-white rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Scale className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Justice for All</h3>
                      <p className="text-gray-600">Ensuring fair and transparent government services</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={itemVariants}
          className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8"
            >
              Join thousands of citizens who trust NyayaSetu for their government service needs
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/auth/register">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300">
                  Create Account
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                Contact Support
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Index;

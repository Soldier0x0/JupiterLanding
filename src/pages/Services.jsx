import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Cloud, Shield, Zap } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Development'],
      price: 'Starting at $5,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'iOS Development', 'Android Development', 'App Store Deployment'],
      price: 'Starting at $8,000'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that users love and businesses need.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $3,000'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS & Azure', 'DevOps', 'CI/CD Pipelines', 'Monitoring'],
      price: 'Starting at $2,000'
    },
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments and vulnerability testing.',
      features: ['Penetration Testing', 'Code Review', 'Security Training', 'Compliance'],
      price: 'Starting at $4,000'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your applications and improve user experience.',
      features: ['Performance Analysis', 'Database Optimization', 'Caching Strategies', 'CDN Setup'],
      price: 'Starting at $2,500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and technical requirements.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create a detailed project plan with timelines, milestones, and resource allocation.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Develop wireframes, prototypes, and visual designs that align with your brand.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Build your solution using modern technologies and best practices.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing to ensure quality, performance, and security.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'Deploy your solution and provide ongoing support and maintenance.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital world.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-6 flex-grow">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-zinc-300">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-teal-400 font-semibold mb-4">{service.price}</div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-zinc-400">How we bring your ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-800 to-zinc-900 border-teal-500/20">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let's discuss how we can help bring your vision to life with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get a Quote
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Call
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
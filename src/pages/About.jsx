import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';
import Card from '../components/Card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To create innovative solutions that empower businesses and individuals to achieve their goals through cutting-edge technology.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading platform that bridges the gap between complex technology and intuitive user experiences.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'We believe in transparency, innovation, and putting our users at the center of everything we do.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality products and services that exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Visionary leader with 15+ years in tech'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Technical architect and innovation driver'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Creative director focused on user experience'
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
            About <span className="gradient-text">Jupiter</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to creating the future of digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                Founded in 2020, Jupiter began as a vision to simplify complex technology and make it accessible to everyone. 
                What started as a small team of developers has grown into a comprehensive platform serving thousands of users worldwide.
              </p>
              <p>
                We believe that great technology should be invisible to the user. Our mission is to create tools that are 
                powerful yet simple, sophisticated yet intuitive, and always focused on solving real-world problems.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible, always keeping our users at the center of 
                everything we build.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Founded</span>
                  <span className="font-semibold">2020</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Team Size</span>
                  <span className="font-semibold">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Users</span>
                  <span className="font-semibold">10K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Countries</span>
                  <span className="font-semibold">25+</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-zinc-400">The principles that guide everything we do</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-zinc-400">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-zinc-400">The people behind Jupiter's success</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-teal-400 mb-3">{member.role}</p>
                <p className="text-zinc-400 text-sm">{member.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
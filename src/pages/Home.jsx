import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users, Star, CheckCircle, Trophy, Target, TrendingUp } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import ScoreCard from '../components/ScoreCard';
import AchievementBadge from '../components/AchievementBadge';
import InteractiveButton from '../components/InteractiveButton';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Track your digital footprint across social media, email, and web presence'
    },
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Get instant alerts when your personal data appears in data breaches'
    },
    {
      icon: Users,
      title: 'Privacy Insights',
      description: 'Understand how your personal information is being used online'
    }
  ];

  const stats = [
    { label: 'Data Sources Monitored', value: '50+', icon: Users, color: 'teal' },
    { label: 'Threats Detected', value: '1.2K', icon: Target, color: 'yellow' },
    { label: 'Privacy Score', value: '85%', icon: Star, color: 'purple' },
    { label: 'Response Time', value: '<2min', icon: TrendingUp, color: 'green' }
  ];

  const achievements = [
    {
      title: 'First Scan',
      description: 'Complete your first security scan',
      icon: Trophy,
      unlocked: true
    },
    {
      title: 'Threat Hunter',
      description: 'Detect your first security threat',
      icon: Zap,
      unlocked: true
    },
    {
      title: 'Privacy Guardian',
      description: 'Monitor 10+ data sources',
      icon: Users,
      unlocked: false,
      progress: 60
    },
    {
      title: 'Security Expert',
      description: 'Maintain 90%+ privacy score for 30 days',
      icon: Target,
      unlocked: false,
      progress: 30
    }
  ];

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      role: 'Privacy Advocate',
      content: 'Jupiter helped me discover my data was in 3 different breaches I never knew about. The monitoring is incredible.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      role: 'Digital Nomad',
      content: 'Finally, a tool that actually protects my personal information. The threat alerts saved me from identity theft.',
      rating: 5
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
          <h1 className="heading-primary mb-6">
            Monitor Your{' '}
            <span className="gradient-text">Digital Life</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
            A personal security monitoring dashboard that tracks your digital footprint, 
            monitors your online presence, and alerts you to potential security threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InteractiveButton size="lg" variant="gradient" successText="Welcome!">
              Get Started
            </InteractiveButton>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ScoreCard
                score={stat.value}
                label={stat.label}
                icon={stat.icon}
                color={stat.color}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">Your Achievements</h2>
          <p className="text-xl text-zinc-400">Track your progress and unlock rewards</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AchievementBadge {...achievement} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">Why Personal Security Matters</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Your personal data is constantly at risk. Jupiter gives you the tools to monitor, protect, and control your digital privacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">What Our Users Say</h2>
          <p className="text-xl text-zinc-400">Don't just take our word for it</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-zinc-400">{testimonial.role}</div>
                </div>
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
            <h2 className="heading-secondary mb-4">Take Control of Your Privacy</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Start monitoring your digital footprint today and protect yourself from data breaches and privacy threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveButton size="lg" variant="gradient" successText="Monitoring Started!">
                Start Monitoring
              </InteractiveButton>
              <Button variant="secondary" size="lg">
                View Demo
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
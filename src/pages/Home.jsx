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
      title: 'Instant Rewards',
      description: 'Earn cashback and points on every purchase, automatically'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your money is protected with the same security as major banks'
    },
    {
      icon: Users,
      title: 'Smart Insights',
      description: 'Get personalized tips to save more and spend smarter'
    }
  ];

  const stats = [
    { label: 'Happy Members', value: '2M+', icon: Users, color: 'teal' },
    { label: 'Rewards Earned', value: '$50M+', icon: Target, color: 'yellow' },
    { label: 'Credit Score Boost', value: '+85 pts', icon: Star, color: 'purple' },
    { label: 'Average Savings', value: '$2,400', icon: TrendingUp, color: 'green' }
  ];

  const achievements = [
    {
      title: 'First Purchase',
      description: 'Make your first purchase with Jupiter',
      icon: Trophy,
      unlocked: true
    },
    {
      title: 'Reward Collector',
      description: 'Earn your first $100 in rewards',
      icon: Zap,
      unlocked: true
    },
    {
      title: 'Credit Builder',
      description: 'Improve your credit score by 50+ points',
      icon: Users,
      unlocked: false,
      progress: 60
    },
    {
      title: 'Savings Master',
      description: 'Save $1,000 in your first year',
      icon: Target,
      unlocked: false,
      progress: 30
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      content: 'I\'ve saved over $2,000 this year just by using Jupiter\'s smart features. The rewards are amazing!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Freelance Designer',
      content: 'My credit score went up 80 points in 6 months. Jupiter made building credit so easy.',
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
            Your money,{' '}
            <span className="gradient-text">simplified</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
            The smart way to manage your finances, earn rewards, and build credit. 
            No hidden fees, no complicated terms. Just simple, beautiful money management.
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
          <h2 className="heading-secondary mb-4">Why Members Love Jupiter</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Join millions who are already saving more, earning rewards, and building better credit with Jupiter.
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
            <h2 className="heading-secondary mb-4">Ready to Start Saving?</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Join millions of members who are already earning rewards and building better credit with Jupiter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveButton size="lg" variant="gradient" successText="Welcome!">
                Join Jupiter
              </InteractiveButton>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
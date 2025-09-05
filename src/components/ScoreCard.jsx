import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap } from 'lucide-react';

const ScoreCard = ({ score, label, icon: Icon, color = 'teal' }) => {
  const colorClasses = {
    teal: 'from-teal-400 to-cyan-400',
    yellow: 'from-yellow-400 to-orange-400',
    purple: 'from-purple-400 to-pink-400',
    green: 'from-green-400 to-emerald-400'
  };

  return (
    <motion.div
      className="card card-hover text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[color]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-neumorphic-outset`}>
        <Icon className="text-white" size={32} />
      </div>
      <div className="text-3xl font-bold gradient-text mb-2">{score}</div>
      <div className="text-sm text-zinc-400">{label}</div>
    </motion.div>
  );
};

export default ScoreCard;
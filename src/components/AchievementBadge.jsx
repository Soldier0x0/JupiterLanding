import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Zap, Target } from 'lucide-react';

const AchievementBadge = ({ title, description, icon: Icon, unlocked = true, progress = 100 }) => {
  return (
    <motion.div
      className={`card ${unlocked ? 'achievement-card' : 'opacity-60'} relative overflow-hidden`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {unlocked && (
        <motion.div
          className="absolute top-2 right-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="text-green-400" size={20} />
        </motion.div>
      )}
      
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
          unlocked ? 'bg-white/20' : 'bg-zinc-700'
        }`}>
          <Icon className={unlocked ? 'text-white' : 'text-zinc-400'} size={24} />
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${unlocked ? 'text-white' : 'text-zinc-400'}`}>
            {title}
          </h3>
          <p className={`text-sm ${unlocked ? 'text-white/80' : 'text-zinc-500'}`}>
            {description}
          </p>
          {!unlocked && (
            <div className="mt-2 bg-zinc-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementBadge;
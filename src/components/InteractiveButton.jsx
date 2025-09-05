import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const InteractiveButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  successText = 'Success!',
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = async (e) => {
    setIsPressed(true);
    
    if (onClick) {
      await onClick(e);
    }
    
    // Simulate success state
    setTimeout(() => {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsPressed(false);
      }, 2000);
    }, 500);
  };

  const baseClasses = 'relative overflow-hidden rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950';
  
  const variants = {
    primary: 'bg-zinc-800 text-white shadow-neumorphic-outset hover:shadow-neumorphic-hover active:shadow-neumorphic-pressed focus:ring-teal-500',
    secondary: 'bg-zinc-700 text-zinc-200 shadow-neumorphic-outset hover:shadow-neumorphic-hover active:shadow-neumorphic-pressed focus:ring-zinc-500',
    gradient: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg hover:shadow-glow-teal focus:ring-teal-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      className={classes}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isPressed || isSuccess}
      {...props}
    >
      <motion.div
        className="flex items-center justify-center space-x-2"
        animate={{
          x: isSuccess ? -20 : 0,
          opacity: isSuccess ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
        {variant === 'primary' && <ArrowRight size={20} />}
      </motion.div>
      
      {isSuccess && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Check size={20} />
          <span className="ml-2">{successText}</span>
        </motion.div>
      )}
      
      {/* Ripple effect */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-2xl"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};

export default InteractiveButton;
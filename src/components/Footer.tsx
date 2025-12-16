import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="text-2xl tracking-tight">Gerda Lukosiute</div>
          <div className="text-sm text-muted-foreground">
            AI & ML Engineer
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and AI</span>
          </div>
          <div className="text-xs text-muted-foreground max-w-md mx-auto">
            This portfolio showcases my passion for ML&AI. 
            Built with React, Tailwind CSS, and a lot of enthusiasm for the future:)
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
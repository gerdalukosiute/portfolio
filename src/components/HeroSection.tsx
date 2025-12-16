import { motion } from "motion/react";
import {
  Download,
  Mail,
  ArrowRight,
  Award,
  Briefcase,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    window.open(
      "https://flowcv.com/resume/0aasudjt2pgk",
      "_blank",
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">
                Available for future opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Gerda Lukosiute
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6"
            >
              AI & ML Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            >
              AI & ML Engineer with a Bioinformatics background.
              Experienced in NLP, Computer Vision and
              predictive analytics.
            </motion.p>

            {/* Professional Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              {[
                {
                  icon: Briefcase,
                  text: "Interdisciplinary",
                },
                {
                  icon: Award,
                  text: "Research & Industry background",
                },
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-lg px-4 py-2 border"
                >
                  <highlight.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={downloadCV}
                variant="outline"
                size="lg"
                className="group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative"
            >
              {/* Main Profile Image */}
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden border-4 border-background shadow-2xl relative">
                <img
                  src="/profile.jpg"
                  alt="Gerda Lukosiute - AI & ML Engineer"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Tech Stack Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs"
                  >
                    Data
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs"
                  >
                    AI/ML
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs"
                  >
                    Bioinformatics
                  </Badge>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex gap-2">
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="text-xs text-muted-foreground mt-2 text-center">
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
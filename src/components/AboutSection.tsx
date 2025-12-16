import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
  Settings,
  Database,
  PieChart,
  FlaskConical,
} from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      name: "Machine Learning",
      icon: Brain,
      description:
        "Advanced ML algorithms and model optimization",
    },
    {
      name: "Deep Learning",
      icon: Brain,
      description:
        "Neural networks for Computer Vision applications",
    },
    {
      name: "Computer Vision",
      icon: Eye,
      description: "Image processing and visual recognition",
    },
    {
      name: "Natural Language Processing",
      icon: MessageSquare,
      description: "Text analysis and model fine-tuning",
    },
    {
      name: "Data Processing & Analytics",
      icon: Database,
      description: "Data processing and statistical analysis",
    },
    {
      name: "Bioinformatics",
      icon: FlaskConical,
      description:
        "Large-scale genomic data analysis and molecular modeling",
    },
    {
      name: "Data Visualization",
      icon: PieChart,
      description:
        "Interactive dashboards and analytical insights",
    },
    {
      name: "Research & Development",
      icon: FlaskConical,
      description:
        "Innovation and cutting-edge research applications",
    },
  ];

  const tools = [
    {
      category: "Programming Languages",
      items: ["Python", "C", "JavaScript (Vue)", "Go", "R"],
    },
    {
      category: "ML & DL",
      items: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn"],
    },
    {
      category: "NLP & LLMs",
      items: ["NLTK", "SpaCy", "LangChain", "BERTopic"],
    },
    {
      category: "Computer Vision",
      items: ["OpenCV", "gradCAM"],
    },
    {
      category: "Data Processing & Analytics",
      items: ["Pandas", "NumPy", "SciPy", "SQL"],
    },
    {
      category: "Data Visualization",
      items: ["Matplotlib", "Seaborn", "Plotly", "ggplot"],
    },
    {
      category: "MLOps & Deployment",
      items: ["MLflow", "Streamlit"],
    },
    {
      category: "Bioinformatics",
      items: [
        "WGCNA",
        "SWIMmeR",
        "DIAMOnD",
        "Saverunner",
        "BLAST",
        "ClustalW/Omega",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            AI & ML Engineer with a strong foundation in Data
            Analysis, AI, Computer Science and Bioinformatics. I
            Specialize in designing, developing, and optimizing
            ML solutions to complex problems in NLP, CV, and
            predictive analytics. Passionate about innovation,
            data-driven decision-making, and delivering
            impactful, business-focused AI solutions:)
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">
                  Professional Journey
                </h3>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="text-lg text-foreground mb-2">
                      AI & ML Engineer @ Unisys
                    </h4>
                    <p className="text-sm mb-2">
                      Oct 2025 – Current
                    </p>
                    <p>
                      Working on developing and implementing ML
                      solutions for real-world applications in
                      NLP projects. Gaining hands-on experience
                      with the complete ML pipeline from data
                      preprocessing to model deployment.
                      Developing text processing systems,
                      building predictive models for proactive
                      event monitoring and inference.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg text-foreground mb-2">
                      Research Internship @ Sapienza Immunology Lab
                    </h4>
                    <p className="text-sm mb-2">
                      Oct 2024 – Jul 2025
                    </p>
                    <p>
                      Applied data science/ML techniques to analyze
                      sc-RNA-seq gene expression data from colorectal tumors. 
                      Developed data visualizations
                      and used ML approaches to identify and extract cell populations, 
                      enhancing understanding of the subset differentiation/exhaustion characteristics.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg text-foreground mb-2">
                      Programming/Data Internship @ Devoro
                    </h4>
                    <p className="text-sm mb-2">
                      Aug 2023 – Sept 2023
                    </p>
                    <p>
                      Contributed to ongoing projects by refactoring codebases
                      and conducting testing. Developed a data pipeline to retrieve available vendor 
                      product data based on queries using their APIs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">
                  Education & Certifications
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg mb-1">
                      BSc Bioinformatics
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Sapienza University of Rome, Department of
                      Molecular Medicine
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      Graduated: 2025 • Grade: 109 / 110
                    </p>
                  </div>
                  <div className="pt-2">
                    <h5 className="text-md mb-3">
                      Soft Skills
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Communication",
                        "Problem Solving",
                        "Teamwork",
                        "Time Management",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills and Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Core Competencies - Compact Modern Design */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-4">
                  Core Competencies
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="group"
                    >
                      <div className="relative p-4 rounded-xl border border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-secondary/30 hover:shadow-md transition-all duration-300 cursor-pointer">
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div>
                            <h4 className="text-sm mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>

                        {/* Subtle hover effect overlay */}
                        <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">
                  Tools & Technologies
                </h3>
                <div className="space-y-6">
                  {tools.map((category, categoryIndex) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                        {category.category}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.items.map((tool) => (
                          <Badge
                            key={tool}
                            variant="secondary"
                            className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
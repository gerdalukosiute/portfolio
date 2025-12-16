import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  category: "ml" | "web" | "nlp" | "graduation";
}

export function ProjectsSection() {
  const projects: Project[] = [
    // DL & CV
    {
      id: "ml1",
      title: "Histopathological Breast Tissue Classifier",
      description:
        'Fine tuned & trained ResNet based CNNs across 4 magnfication levels and improved reported benchmarks for Kaggle "BreakHis" dataset',
      image:
        `${import.meta.env.BASE_URL}histo_slide.jpg`,
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Streamlit",
        "PyTorch",
      ],
      githubUrl: "https://github.com/gerdalukosiute/MILF1",
      category: "ml",
    },

    // NLP Projects
    {
      id: "nlp1",
      title: "Eur-Lex directive chatbot",
      description:
        "Built a chatbot that answers questions (and includes citations) about a specific EU directive.",
      image: `${import.meta.env.BASE_URL}chatbot_icon.jpg`,
      technologies: [
        "NLP",
        "LangChain",
        "Language Detection",
        "Streamlit",
      ],
      githubUrl: "TBA",
      category: "nlp",
    },

    // Web
    {
      id: "web1",
      title: "WASAText",
      description:
        "Whatsapp-like chat web application that allows users to engage in 1-on-1 or group conversations with reactions, images and replies.",
      image:
        `${import.meta.env.BASE_URL}web_app_icon.jpg`,
      technologies: [
        "Go",
        "REST",
        "JS",
        "Docker",
        "Vue.js",
        "SQLite",
      ],
      githubUrl: "https://github.com/gerdalukosiute/WASAText",
      category: "web",
    },

    // Graduation Project
    {
      id: "grad1",
      title:
        "Phenotypic Evaluation of Tumor-infiltrating ILC1/NK cells in Murine Models of CRC",
      description:
        "Identified target cell subsets from scRNAseq data. Investigated the phenotypic/functional distinction between ILC1 and NK immune cells. Discovered quantitative fluctuation of ILC1 in CRC stage progression.",
      image: `${import.meta.env.BASE_URL}ILC1_NK_umap.jpg`,
      technologies: [
        "ML",
        "Seurat",
        "R",
        "Clustering",
        "UMAP",
        "PCA",
      ],
      githubUrl:
        "https://github.com/gerdalukosiute/analysis_mCRC",
      category: "graduation",
    },
  ];

  const categories = [
    {
      id: "all",
      label: "All Projects",
      count: projects.length,
    },
    {
      id: "nlp",
      label: "NLP",
      count: projects.filter((p) => p.category === "nlp")
        .length,
    },
    {
      id: "web",
      label: "WEB",
      count: projects.filter((p) => p.category === "web")
        .length,
    },
    {
      id: "ml",
      label: "ML",
      count: projects.filter((p) => p.category === "ml").length,
    },
    {
      id: "graduation",
      label: "Graduation",
      count: projects.filter((p) => p.category === "graduation")
        .length,
    },
  ];

  const categoryRepositories = {
    ml: "https://github.com/gerdalukosiute",
    web: "https://github.com/gerdalukosiute",
    nlp: "https://github.com/gerdalukosiute",
    graduation: "https://github.com/gerdalukosiute",
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <CardContent className="flex-1 p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge
              variant="secondary"
              className="text-xs uppercase tracking-wide"
            >
              {project.category.toUpperCase()}
            </Badge>
          </div>

          <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 group/btn"
            asChild
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );

  const ViewMoreButton = ({
    category,
  }: {
    category: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="col-span-full flex justify-center mt-8"
    >
      <Button
        variant="outline"
        size="lg"
        className="group"
        asChild
      >
        <a
          href={
            categoryRepositories[
              category as keyof typeof categoryRepositories
            ]
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          View More Projects
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </Button>
    </motion.div>
  );

  const AllProjectsButton = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="col-span-full flex justify-center mt-8"
    >
      <Button
        variant="default"
        size="lg"
        className="group"
        asChild
      >
        <a
          href="https://github.com/gerdalukosiute"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          View All My Projects
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </Button>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-background to-secondary/30"
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
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Showcasing projects across machine learning, deep
            learning, computer vision, natural language
            processing and web development. Each project
            demonstrates hands-on implementation with real-world
            applications.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="inline-flex bg-muted/50 p-1 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm font-medium py-3 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span>{category.label}</span>
                    <Badge
                      variant="secondary"
                      className="text-xs px-2 py-0.5"
                    >
                      {category.count}
                    </Badge>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 12).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
              <AllProjectsButton />
            </div>
          </TabsContent>

          {["ml", "nlp", "web", "graduation"].map(
            (category) => (
              <TabsContent
                key={category}
                value={category}
                className="mt-0"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter(
                      (project) =>
                        project.category === category,
                    )
                    .map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                      />
                    ))}
                  <ViewMoreButton category={category} />
                </div>
              </TabsContent>
            ),
          )}
        </Tabs>
      </div>
    </section>
  );
}
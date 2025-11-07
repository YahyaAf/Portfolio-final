"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Download, Code, Database, Settings, Palette, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { 
  SiJavascript, SiReact, SiVuedotjs, SiAngular, SiTailwindcss, SiBootstrap,
  SiSpringboot, SiPhp, SiLaravel,
  SiMysql, SiPostgresql, SiMongodb, SiOracle,
  SiGit, SiDocker, SiGithubactions, SiJira, SiTrello, SiFigma
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    frontend: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
    backend: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    ],
    database: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Oracle", icon: SiOracle, color: "#F80000" },
    ],
    tools: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Trello", icon: SiTrello, color: "#0052CC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  }

  const projects = [
    {
      title: "FAKHAR.ma",
      description:
        "Site e-commerce moderne pour produits authentiques avec gestion complète CRUD, API REST Laravel et interface React.js responsive.",
      technologies: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "REST API"],
      github: "https://github.com/YahyaAf/FAKHAR.ma",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=600&fit=crop",
    },
    {
      title: "FutChampions",
      description:
        "Application de gestion et évaluation des joueurs de football avec système de notation dynamique et formation 4-3-3.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/YahyaAf/FutChampions",
      image: "/images/futchampions-logo.jpg",
    },
    {
      title: "Youdemy",
      description: "Plateforme d'apprentissage en ligne avec gestion des cours et des étudiants.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/YahyaAf/Youdemy",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    },
    {
      title: "CreateCV",
      description: "Générateur de CV interactif permettant de créer des CV professionnels personnalisés.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/YahyaAf/CreateCv",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    },
    {
      title: "HRMS",
      description: "Système de gestion des ressources humaines avec gestion des employés et des congés.",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/YahyaAf/hrms",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      title: "TakeUrTerrain",
      description: "Application de réservation de terrains de sport avec système de paiement intégré.",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
      github: "https://github.com/YahyaAf/TakeUrTerrain",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&h=400&fit=crop",
    },
  ]

  const experiences = [
    {
      year: "Juin 2025 - Août 2025",
      title: "Stagiaire Développeur - Digitalisation",
      company: "OCP Maintenance Solutions, Safi",
      description: "Participation au développement et à l'évolution d'une application de gestion des accès (Laravel, Vue.js, REST API, MySQL).",
      tasks: [
        "Mise en place de filtres dynamiques et validations sur les formulaires",
        "Amélioration de l'export des données (Excel, images, zip)",
        "Développement et finalisation du module « Ferrailles » comprenant plusieurs fonctionnalités de gestion (commandes, produits, historiques, dashboards)",
      ],
    },
    {
      year: "Avril 2024 - Mai 2024",
      title: "Stagiaire Développeur - Gestion des Tâches",
      company: "Commune de Chemaia, Safi",
      description: "Participation au développement d'une application de gestion des tâches avec Laravel.",
      tasks: [
        "Mise en place d'un système d'assignation des tâches : attribution d'une tâche à un employé spécifique",
        "Intégration d'un calendrier interactif pour visualiser les tâches et suivre leur avancement",
        "Gestion des états des tâches pour assurer le suivi et la réalisation des missions importantes",
      ],
    },
  ]

  const education = [
    {
      year: "2025 - Présent",
      title: "Licence Professionnelle en Génie Informatique (en cours)",
      institution: "École High Tech, Rabat",
      description: "Formation avancée en génie informatique avec spécialisation en développement logiciel et architecture système.",
    },
    {
      year: "2024 - Présent",
      title: "Apprenant en deuxième année de développement Full-Stack",
      institution: "YouCode | UM6P, Youssoufia",
      description: "Formation intensive en développement web moderne avec focus sur les technologies actuelles et les méthodologies agiles.",
    },
    {
      year: "2022 - 2024",
      title: "Technicien spécialisé en développement digital option Full-Stack",
      institution: "Institut spécialisé dans les nouvelles technologies de l'information et de la communication, Safi",
      description: "Formation complète en développement web front-end et back-end avec certification professionnelle.",
    },
    {
      year: "2021",
      title: "Baccalauréat en sciences physiques",
      institution: "Lycée Qualifiant El Qods, Echemmaia",
      description: "Diplôme du baccalauréat avec spécialisation en sciences physiques.",
    },
  ]

  const navigationItems = [
    { name: "À propos", id: "about" },
    { name: "Compétences", id: "skills" },
    { name: "Projets", id: "projects" },
    { name: "Expériences", id: "experience" },
    { name: "Formation", id: "education" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Modern Purple Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black -z-10" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-tr from-purple-900/5 via-transparent to-fuchsia-900/5 -z-10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      
      {/* Purple glow effects */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full filter blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="fixed top-1/2 right-1/3 w-72 h-72 bg-purple-500/8 rounded-full filter blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => scrollToSection("hero")}
            >
              YA
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`hover:text-purple-400 transition-colors duration-300 relative group ${
                    activeSection === item.id ? "text-purple-400" : "text-white"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-purple-400 transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-purple-400 bg-purple-400/10"
                      : "text-white hover:text-purple-400 hover:bg-purple-400/5"
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 animate-pulse"></div>
        </motion.div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Yahya
                </motion.span>
                <br />
                <motion.span
                  className="text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Afadisse
                </motion.span>
              </motion.h1>

              <motion.div
                className="text-lg lg:text-xl mb-6 h-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    "Développeur Full Stack Laravel/React",
                    3000, // Wait 3s
                    "Développeur Full Stack Java/Angular",
                    3000, // Wait 3s
                  ]}
                  wrapper="span"
                  speed={50}
                  className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold"
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p
                className="text-sm text-gray-400 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Curieux, motivé, capable de travailler aussi bien sur le front-end que le back-end avec des compétences
                solides dans les outils de gestion et les méthodologies agiles.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1bqH7fycX8KAS3pRHmYsVQ0F3ZEIfeVwR/view?usp=sharing",
                        "_blank",
                      )
                    }
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger CV
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, rotateY: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    onClick={() => scrollToSection("contact")}
                  >
                    Me contacter
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl"
                  whileHover={{
                    borderColor: "rgb(59 130 246 / 0.8)",
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src="/images/profile.jpg" alt="Yahya Afadisse" fill className="object-cover" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              À propos de moi
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-sm text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Je suis passionné par la création d'expériences web conviviales et engageantes, avec une solide maîtrise
              des technologies front-end et back-end. Actuellement étudiant en première année à YouCode, je suis
              désireux de mettre mes compétences au service de projets dynamiques. Toujours en quête de nouvelles
              opportunités pour élargir mon expertise, je m'engage à obtenir des résultats significatifs et à innover
              dans le domaine du développement web.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Compétences
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Front-End", icon: Palette, skills: skills.frontend, color: "from-purple-500 to-fuchsia-500" },
              { title: "Back-End", icon: Code, skills: skills.backend, color: "from-green-500 to-emerald-500" },
              {
                title: "Bases de données",
                icon: Database,
                skills: skills.database,
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Outils & Méthodologie",
                icon: Settings,
                skills: skills.tools,
                color: "from-purple-500 to-fuchsia-500",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 h-full">
                  <CardContent className="p-5">
                    <motion.div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-3`}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-4 text-white">{category.title}</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {category.skills.map((skill, skillIndex) => {
                        const IconComponent = skill.icon
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{
                              scale: 1.15,
                              y: -8,
                              rotate: [0, -5, 5, 0],
                            }}
                            className="group relative"
                          >
                            <motion.div
                              className="w-14 h-14 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-800/80"
                              whileHover={{
                                boxShadow: `0 10px 30px ${skill.color}40`,
                              }}
                            >
                              <IconComponent 
                                className="w-7 h-7 transition-all duration-300" 
                                style={{ color: skill.color }}
                              />
                            </motion.div>
                            {/* Tooltip */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
                            >
                              {skill.name}
                            </motion.div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mes Projets
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group shadow-lg hover:shadow-purple-500/25">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <motion.div whileHover={{ scale: 1.1, rotateZ: 2 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-56 object-cover"
                        />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </div>
                    <div className="p-5">
                      <motion.h3
                        className="text-lg font-semibold mb-2 text-white"
                        whileHover={{ color: "#60a5fa" }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-300 mb-3 text-xs leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(59, 130, 246, 0.3)",
                            }}
                            className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-xs border border-purple-500/30 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.div
                          whileHover={{ scale: 1.05, rotateY: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full shadow-lg hover:shadow-purple-500/25"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Expériences Professionnelles
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-fuchsia-400"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-10"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full border-4 border-black"
                    whileHover={{
                      scale: 1.5,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="ml-20">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        rotateY: 2,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 shadow-lg">
                        <CardContent className="p-5">
                          <motion.div className="text-xs text-purple-400 font-semibold mb-2" whileHover={{ scale: 1.05 }}>
                            {item.year}
                          </motion.div>
                          <motion.h3
                            className="text-lg font-semibold text-white mb-2"
                            whileHover={{ color: "#60a5fa" }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.title}
                          </motion.h3>
                          <div className="text-fuchsia-300 font-medium mb-2 text-sm">{item.company}</div>
                          <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.description}</p>
                          <ul className="space-y-1.5">
                            {item.tasks.map((task, taskIndex) => (
                              <motion.li
                                key={taskIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: taskIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start text-gray-300 text-xs"
                              >
                                <span className="text-purple-400 mr-2 mt-1">•</span>
                                <span>{task}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Formation
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-fuchsia-400"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-10"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full border-4 border-black"
                    whileHover={{
                      scale: 1.5,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="ml-20">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        rotateY: 2,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 shadow-lg">
                        <CardContent className="p-5">
                          <motion.div className="text-xs text-purple-400 font-semibold mb-2" whileHover={{ scale: 1.05 }}>
                            {item.year}
                          </motion.div>
                          <motion.h3
                            className="text-lg font-semibold text-white mb-2"
                            whileHover={{ color: "#60a5fa" }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.title}
                          </motion.h3>
                          <div className="text-gray-300 font-medium mb-2 text-sm">{item.institution}</div>
                          <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-base text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Intéressé par une collaboration ? N'hésitez pas à me contacter !
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "yahyaafadisse92@gmail.com",
                link: "mailto:yahyaafadisse92@gmail.com",
                color: "from-red-500 to-orange-500",
              },
              {
                icon: Phone,
                title: "Téléphone",
                value: "0694285418",
                link: "tel:0694285418",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                value: "yahya-afadisse",
                link: "https://www.linkedin.com/in/yahya-afadisse-236b022a9/",
                color: "from-purple-500 to-fuchsia-500",
              },
              {
                icon: Github,
                title: "GitHub",
                value: "YahyaAf",
                link: "https://github.com/YahyaAf",
                color: "from-purple-500 to-fuchsia-500",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card
                  className="bg-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/25"
                  onClick={() => window.open(contact.link, "_blank")}
                >
                  <CardContent className="p-5 text-center">
                    <motion.div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center mx-auto mb-3`}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <contact.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <motion.h3
                      className="text-base font-semibold text-white mb-1.5"
                      whileHover={{ color: "#60a5fa" }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.title}
                    </motion.h3>
                    <p className="text-gray-300 text-xs break-all">{contact.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-purple-500/20">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © 2024 Yahya Afadisse. Tous droits réservés.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

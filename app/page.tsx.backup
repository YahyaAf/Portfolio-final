"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Download, Code, Database, Settings, Palette, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

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
      const sections = ["hero", "about", "skills", "projects", "education", "contact"]
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
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 75 },
    ],
    backend: [
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 80 },
    ],
    database: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "SQL Server", level: 70 },
    ],
    tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 80 },
      { name: "Trello/Jira", level: 75 },
      { name: "Scrum", level: 70 },
    ],
  }

  const projects = [
    {
      title: "FAKHAR.ma",
      description:
        "Site e-commerce moderne pour produits authentiques avec gestion complète CRUD, API REST Laravel et interface React.js responsive.",
      technologies: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "REST API"],
      github: "https://github.com/YahyaAf/FAKHAR.ma",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "FutChampions",
      description:
        "Application de gestion et évaluation des joueurs de football avec système de notation dynamique et formation 4-3-3.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/YahyaAf/FutChampions",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Youdemy",
      description: "Plateforme d'apprentissage en ligne avec gestion des cours et des étudiants.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/YahyaAf/Youdemy",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "CreateCV",
      description: "Générateur de CV interactif permettant de créer des CV professionnels personnalisés.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/YahyaAf/CreateCv",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "HRMS",
      description: "Système de gestion des ressources humaines avec gestion des employés et des congés.",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/YahyaAf/hrms",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "TakeUrTerrain",
      description: "Application de réservation de terrains de sport avec système de paiement intégré.",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
      github: "https://github.com/YahyaAf/TakeUrTerrain",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const education = [
    {
      year: "2024 - Aujourd'hui",
      title: "Étudiant en 1ère année développement Full Stack",
      institution: "YouCode | UM6P, Youssoufia",
      description: "Formation intensive en développement web moderne avec focus sur les technologies actuelles.",
    },
    {
      year: "2022 - 2024",
      title: "Technicien spécialisé en développement digital option Full Stack",
      institution: "ISTA NTIC, Safi",
      description: "Formation complète en développement web front-end et back-end.",
    },
    {
      year: "2021",
      title: "Baccalauréat en sciences physiques",
      institution: "Lycée Qualifiant El Qods, Echemmaia",
      description: "Diplôme du baccalauréat avec spécialisation en sciences physiques.",
    },
  ]

  const navigationItems = [
    { name: "Accueil", id: "hero" },
    { name: "À propos", id: "about" },
    { name: "Compétences", id: "skills" },
    { name: "Projets", id: "projects" },
    { name: "Formation", id: "education" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      {/* Floating Elements */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-30 pointer-events-none z-10"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-40 right-32 w-6 h-6 bg-cyan-400 rounded-full opacity-20 pointer-events-none z-10"
        animate={{ scale: [1.5, 1, 1.5], rotate: [360, 180, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed bottom-32 left-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-40 pointer-events-none z-10"
        animate={{ scale: [1, 2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              YA
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`hover:text-blue-400 transition-colors duration-300 relative group ${
                    activeSection === item.id ? "text-blue-400" : "text-white"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
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
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-white hover:text-blue-400 hover:bg-blue-400/5"
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 animate-pulse"></div>
        </motion.div>

        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
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

              <motion.p
                className="text-xl lg:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Développeur Full Stack passionné
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Curieux, motivé, capable de travailler aussi bien sur le front-end que le back-end avec des compétences
                solides dans les outils de gestion et les méthodologies agiles.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1bqH7fycX8KAS3pRHmYsVQ0F3ZEIfeVwR/view?usp=sharing",
                        "_blank",
                      )
                    }
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger CV
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, rotateY: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
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
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-30"
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
                  className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl"
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
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              À propos de moi
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Compétences
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Front-End", icon: Palette, skills: skills.frontend, color: "from-blue-500 to-cyan-500" },
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
                color: "from-blue-500 to-cyan-500",
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
                <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">{skill.name}</span>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                              viewport={{ once: true }}
                              className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                              whileHover={{
                                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                                scale: 1.05,
                              }}
                            ></motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mes Projets
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group shadow-lg hover:shadow-blue-500/25">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <motion.div whileHover={{ scale: 1.1, rotateZ: 2 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </div>
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-semibold mb-3 text-white"
                        whileHover={{ color: "#60a5fa" }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
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
                            className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-md text-xs border border-blue-500/30 cursor-default"
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
                            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white w-full shadow-lg hover:shadow-blue-500/25"
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

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Formation
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"
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
                  className="relative flex items-start mb-12"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900"
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
                      <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 shadow-lg">
                        <CardContent className="p-6">
                          <motion.div className="text-sm text-blue-400 font-semibold mb-2" whileHover={{ scale: 1.05 }}>
                            {item.year}
                          </motion.div>
                          <motion.h3
                            className="text-xl font-semibold text-white mb-2"
                            whileHover={{ color: "#60a5fa" }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.title}
                          </motion.h3>
                          <div className="text-gray-300 font-medium mb-3">{item.institution}</div>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
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
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Intéressé par une collaboration ? N'hésitez pas à me contacter !
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Github,
                title: "GitHub",
                value: "YahyaAf",
                link: "https://github.com/YahyaAf",
                color: "from-blue-500 to-cyan-500",
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
                  className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/25"
                  onClick={() => window.open(contact.link, "_blank")}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center mx-auto mb-4`}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.h3
                      className="text-lg font-semibold text-white mb-2"
                      whileHover={{ color: "#60a5fa" }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.title}
                    </motion.h3>
                    <p className="text-gray-300 text-sm break-all">{contact.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-500/20">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-gray-400"
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

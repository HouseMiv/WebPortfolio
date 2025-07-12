"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Mail,
  MessageCircle,
  Youtube,
  Twitch,
  ExternalLink,
  Briefcase,
  Code,
  User,
  Trophy,
  Coffee,
  Gamepad2,
  BookOpen,
  Palette,
  Languages,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AuthorLandingPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [portfolioType, setPortfolioType] = useState<"code" | "design">("code")

  const translations = {
    ru: {
      nav: {
        about: "Обо мне",
        portfolio: "Портфолио",
        achievements: "Достижения",
      },
      hero: {
        greeting: "Привет, я",
        subtitle: "Full-Stack Developer & Designer создающий цифровые решения для будущего",
        coffeeLover: "Любитель кофе",
        gamingEnthusiast: "Геймер",
        openForCollaboration: "Открыт для сотрудничества",
      },
      about: {
        title: "Обо мне",
        subtitle: "Увлеченный разработчик, всегда готовый учиться и создавать потрясающие решения",
        currentWork: "В данный момент работаю над Nothing (но всегда в поиске интересных проектов)",
        learning: "Изучаю продвинутые backend решения и современные практики разработки",
        collaboration: "Ищу возможности для сотрудничества в open-source проектах",
        fact: "Факт: Я большой фанат игр и кофе ☕",
        experience: "Всегда готов учиться и получать интересный опыт",
        skillsTitle: "Навыки и технологии",
        languagesFrameworks: "Языки и фреймворки",
        frontendStyling: "Frontend и стилизация",
        toolsDatabases: "Инструменты и базы данных",
      },
      portfolio: {
        title: "Избранные работы",
        subtitle: "Недавние проекты и соревнования, демонстрирующие навыки разработки и решения задач",
        codeTab: "Код",
        designTab: "Дизайн",
        viewProject: "Посмотреть проект",
      },
      achievements: {
        title: "Недавние достижения",
        subtitle: "Сертификации, соревнования и образовательные программы, в которых я участвовал",
      },
      footer: {
        rights: "Все права защищены.",
      },
      buttons: {
        getInTouch: "Связаться",
        viewFullPortfolio: "Полное портфолио",
      },
    },
    en: {
      nav: {
        about: "About",
        portfolio: "Portfolio",
        achievements: "Achievements",
      },
      hero: {
        greeting: "Hi, I'm",
        subtitle: "Full-Stack Developer & Designer creating digital solutions for the future",
        coffeeLover: "Coffee Lover",
        gamingEnthusiast: "Gaming Enthusiast",
        openForCollaboration: "Open for collaboration",
      },
      about: {
        title: "About Me",
        subtitle: "Passionate developer always ready to learn and create amazing experiences",
        currentWork: "Currently working on Nothing (but always looking for interesting projects)",
        learning: "Learning advanced backend solutions and modern development practices",
        collaboration: "Looking to collaborate on open-source projects",
        fact: "Fact: I'm a big fan of gaming and coffee ☕",
        experience: "Always ready to learn and gain interesting experience",
        skillsTitle: "Skills & Technologies",
        languagesFrameworks: "Languages & Frameworks",
        frontendStyling: "Frontend & Styling",
        toolsDatabases: "Tools & Databases",
      },
      portfolio: {
        title: "Featured Work",
        subtitle: "Recent projects and competitions showcasing development and problem-solving skills",
        codeTab: "Code",
        designTab: "Design",
        viewProject: "View Project",
      },
      achievements: {
        title: "Recent Achievements",
        subtitle: "Certifications, competitions, and educational programs I've participated in",
      },
      footer: {
        rights: "All rights reserved.",
      },
      buttons: {
        getInTouch: "Get In Touch",
        viewFullPortfolio: "View Full Portfolio",
      },
    },
  }

  const t = translations[language]

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:housemiv@mail.ru",
      color: "hover:text-red-500",
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      href: "https://t.me/HouseMiv",
      color: "hover:text-blue-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@HouseMiv",
      color: "hover:text-red-600",
    },
    {
      name: "Twitch",
      icon: Twitch,
      href: "https://twitch.tv/HouseMiv",
      color: "hover:text-purple-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/HouseMiv",
      color: "hover:text-gray-300",
    },
  ]

  const codeProjects = [
    {
      title: language === "ru" ? "Решения для городской авиамобильности" : "Urban Air Mobility Solutions",
      description:
        language === "ru"
          ? "Цифровые и инженерные решения для развития городской авиамобильности (Aeroton 2024)"
          : "Digital and engineering solutions for urban air mobility development (Aeroton 2024)",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "Engineering", "Urban Mobility"],
      link: "#",
    },
    {
      title: language === "ru" ? "Инфраструктурные решения для ИИ" : "AI Infrastructure Solutions",
      description:
        language === "ru"
          ? "Инфраструктурные решения для реализации ИИ проектов (Чемпионат Газпром Нефть & ИТМО)"
          : "Infrastructure solutions for AI projects implementation (Gazprom Neft & ITMO Case Championship)",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["AI", "Infrastructure", "Python"],
      link: "#",
    },
    {
      title: language === "ru" ? "Продвинутые Python проекты" : "Advanced Python Projects",
      description:
        language === "ru"
          ? "Различные проекты, разработанные во время сертификации по продвинутому программированию на Python"
          : "Various projects developed during advanced Python programming certification",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "Backend", "Certification"],
      link: "#",
    },
  ]

  const designProjects = [
    {
      title: language === "ru" ? "Брендинг для стартапа" : "Startup Branding",
      description:
        language === "ru"
          ? "Полная разработка фирменного стиля для технологического стартапа"
          : "Complete brand identity design for tech startup",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Branding", "Logo Design", "Identity"],
      link: "#",
    },
    {
      title: language === "ru" ? "UI/UX мобильного приложения" : "Mobile App UI/UX",
      description:
        language === "ru"
          ? "Дизайн интерфейса для мобильного приложения фитнес-трекера"
          : "UI/UX design for fitness tracking mobile application",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Figma", "UI/UX", "Mobile"],
      link: "#",
    },
    {
      title: language === "ru" ? "Веб-дизайн платформы" : "Web Platform Design",
      description:
        language === "ru"
          ? "Современный дизайн веб-платформы для e-commerce решений"
          : "Modern web platform design for e-commerce solutions",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web Design", "E-commerce", "Responsive"],
      link: "#",
    },
  ]

  const skills = {
    languages: ["Python", "JavaScript", "TypeScript", "Go"],
    frontend: ["React", "Vue.js", "HTML5", "CSS3"],
    backend: ["Node.js", "Python", "Go"],
    tools: ["GitHub", "VS Code", "Figma", "Photoshop", "Premiere Pro", "After Effects"],
    databases: ["PostgreSQL", "MongoDB"],
    bots: ["Telegram Bots", "Discord Bots"],
  }

  const achievements = [
    {
      title:
        language === "ru"
          ? "Rukon - Сертификация по продвинутому программированию на Python"
          : "Rukon - Advanced Python Programming Certification",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title:
        language === "ru"
          ? "Aeroton 2024 - Решения для городской авиамобильности"
          : "Aeroton 2024 - Urban Air Mobility Solutions",
      icon: Trophy,
      color: "text-blue-500",
    },
    {
      title:
        language === "ru"
          ? "Чемпионат Газпром Нефть & ИТМО - Инфраструктура для ИИ"
          : "Gazprom Neft & ITMO Case Championship - AI Infrastructure",
      icon: Trophy,
      color: "text-green-500",
    },
    {
      title:
        language === "ru"
          ? "Be in IT - Участник образовательных программ"
          : "Be in IT - Educational Programs Participant",
      icon: BookOpen,
      color: "text-purple-500",
    },
  ]

  const currentProjects = portfolioType === "code" ? codeProjects : designProjects

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 border-gray-800">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <User className="h-6 w-6" />
              <span className="font-bold">Домик Мива</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="hover:text-white/80">
              {t.nav.about}
            </Link>
            <Link href="#portfolio" className="hover:text-white/80">
              {t.nav.portfolio}
            </Link>
            <Link href="#achievements" className="hover:text-white/80">
              {t.nav.achievements}
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
              className="hover:bg-gray-800"
            >
              <Languages className="h-4 w-4 mr-2" />
              {language === "ru" ? "EN" : "RU"}
            </Button>
            <Button asChild>
              <Link href="mailto:housemiv@mail.ru">{t.buttons.getInTouch}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Михаил Miv" />
              <AvatarFallback className="text-2xl">M</AvatarFallback>
            </Avatar>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                {t.hero.greeting} <span className="text-primary">Михаил "Miv"</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-gray-300 md:text-2xl">{t.hero.subtitle}</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <Coffee className="h-4 w-4" />
                  <span>{t.hero.coffeeLover}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Gamepad2 className="h-4 w-4" />
                  <span>{t.hero.gamingEnthusiast}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{t.hero.openForCollaboration}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover:bg-gray-800 hover:text-white bg-transparent border-gray-600"
                >
                  <Link href={link.href} className={`${link.color} transition-colors`}>
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.about.title}</h2>
                <p className="text-gray-300">{t.about.subtitle}</p>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-2">
                  <span>🔧</span>
                  <p>{t.about.currentWork}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span>📚</span>
                  <p>{t.about.learning}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span>🤝</span>
                  <p>{t.about.collaboration}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span>⚡</span>
                  <p>{t.about.fact}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span>🎯</span>
                  <p>{t.about.experience}</p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t.about.skillsTitle}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">{t.about.languagesFrameworks}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">{t.about.frontendStyling}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">{t.about.toolsDatabases}</h4>
                    <div className="flex flex-wrap gap-2">
                      {[...skills.tools, ...skills.databases, ...skills.bots].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/images/about-skills.png"
                alt="Skills and technologies"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4 text-center">
                    <Code className="mx-auto h-8 w-8 text-primary mb-2" />
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-gray-300">Technologies</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4 text-center">
                    <Trophy className="mx-auto h-8 w-8 text-primary mb-2" />
                    <div className="text-2xl font-bold">4+</div>
                    <div className="text-sm text-gray-300">Achievements</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.portfolio.title}</h2>
              <p className="mx-auto max-w-[600px] text-gray-300">{t.portfolio.subtitle}</p>

              {/* Portfolio Type Switcher */}
              <div className="flex justify-center space-x-2 mb-8">
                <Button
                  variant={portfolioType === "code" ? "default" : "outline"}
                  onClick={() => setPortfolioType("code")}
                  className="flex items-center space-x-2"
                >
                  <Code className="h-4 w-4" />
                  <span>{t.portfolio.codeTab}</span>
                </Button>
                <Button
                  variant={portfolioType === "design" ? "default" : "outline"}
                  onClick={() => setPortfolioType("design")}
                  className="flex items-center space-x-2"
                >
                  <Palette className="h-4 w-4" />
                  <span>{t.portfolio.designTab}</span>
                </Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-800 border-gray-700"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full">
                      <Link href={project.link}>
                        {t.portfolio.viewProject}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                className="hover:bg-gray-800 hover:text-white bg-transparent border-gray-600"
              >
                <Link href="https://your-portfolio-site.com" className="inline-flex items-center">
                  {t.buttons.viewFullPortfolio}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.achievements.title}</h2>
              <p className="mx-auto max-w-[600px] text-gray-300">{t.achievements.subtitle}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <achievement.icon className={`h-8 w-8 ${achievement.color} flex-shrink-0 mt-1`} />
                      <div>
                        <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-black border-gray-800">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="font-semibold">Домик Мива</span>
            </div>
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Михаил "Miv". {t.footer.rights}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-gray-800 hover:text-white"
                >
                  <Link href={link.href} className={`${link.color} transition-colors`}>
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

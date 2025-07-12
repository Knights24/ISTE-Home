"use client"

import { useEffect, useState, memo } from "react"
import FuturisticHeroBackground from "@/components/futuristic-hero-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  Mail,
  Phone,
  Globe,
  Award,
  BookOpen,
  Code,
  Zap,
  Clock,
  GraduationCap,
  Building,
  Star,
  Menu,
  X,
} from "lucide-react"
import { Fira_Code } from "next/font/google"

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
})

export default function TechClubHomepage() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false) // New state for header blur

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll listener for header blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust this threshold as needed
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  // Loading Component
  const LoadingScreen = memo(function LoadingScreen() {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-8 relative">
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-spin"></div>
            <div
              className="absolute inset-2 border-2 border-t-blue-400 rounded-full animate-spin"
              style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
            ></div>
            <div
              className="absolute inset-4 border-2 border-purple-400/50 rounded-full animate-spin"
              style={{ animationDuration: "2s" }}
            ></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 font-mono">TechClub Student Society</h2>
          <p className="text-blue-200 font-mono">Loading Experience...</p>
        </div>
      </div>
    )
  })

  // Header Component with Navigation
  const Header = memo(function Header({ isScrolled }: { isScrolled: boolean }) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 p-6 transition-all duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-md" : "bg-transparent"}`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg font-mono">TechClub</div>
              <div className="text-indigo-300 text-xs font-mono">Student Society</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`font-mono transition-colors ${activeSection === "about" ? "text-white" : "text-slate-300 hover:text-white"}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("committee")}
              className={`font-mono transition-colors ${activeSection === "committee" ? "text-white" : "text-slate-300 hover:text-white"}`}
            >
              Committee
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className={`font-mono transition-colors ${activeSection === "events" ? "text-white" : "text-slate-300 hover:text-white"}`}
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`font-mono transition-colors ${activeSection === "projects" ? "text-white" : "text-slate-300 hover:text-white"}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-mono transition-colors ${activeSection === "contact" ? "text-white" : "text-slate-300 hover:text-white"}`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 font-mono">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              Active
            </Badge>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Status Badge */}
          <div className="hidden md:block">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 font-mono">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              Active
            </Badge>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 p-6">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-white transition-colors text-left font-mono"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("committee")}
                className="text-slate-300 hover:text-white transition-colors text-left font-mono"
              >
                Committee
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-slate-300 hover:text-white transition-colors text-left font-mono"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-300 hover:text-white transition-colors text-left font-mono"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-300 hover:text-white transition-colors text-left font-mono"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
    )
  })

  // Hero Section
  const HeroSection = memo(function HeroSection() {
    return (
      <main id="home" className="relative z-10 flex items-center justify-center min-h-screen pt-24">
        {" "}
        {/* Added pt-24 */}
        <div className="text-center max-w-5xl mx-auto px-6">
          <Badge className="mb-6 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 font-mono">
            Student Technology Society
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-200 via-indigo-200 to-violet-200 bg-clip-text text-transparent font-mono">
              iste
            </span>
            <br />
            <span className="text-slate-300 font-mono text-4xl md:text-6xl">{"student chapter sal"}</span>
          </h1>

          <p className="text-xl md::text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Where artificial intelligence meets human creativity. Join us in building the next generation of
            technological solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-4 text-lg font-medium font-mono"
            >
              <Zap className="w-5 h-5 mr-2" />
              Join the Club
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent px-8 py-4 text-lg font-medium backdrop-blur-sm font-mono"
            >
              <Code className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "500+", label: "Members" },
              { icon: Code, value: "75+", label: "Projects" },
              { icon: Calendar, value: "50+", label: "Events" },
              { icon: Award, value: "25+", label: "Awards" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-900/50 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  if (stat.label === "Events") scrollToSection("events")
                  else if (stat.label === "Projects") scrollToSection("projects")
                  else if (stat.label === "Members") scrollToSection("committee")
                }}
              >
                <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                <div className="text-sm text-slate-400 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  })

  // About Section
  const AboutSection = memo(function AboutSection() {
    return (
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30 font-mono">Our Mission</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">About TechClub</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              TechClub is a student society dedicated to fostering innovation and excellence in technology, bridging the
              gap between academic learning and industry requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision",
                description:
                  "To be a global leader in technical education, fostering innovation and excellence in engineering and technology through cutting-edge research and development.",
                icon: Zap,
                color: "blue",
              },
              {
                title: "Mission",
                description:
                  "To enhance the quality of technical education through industry-academia collaboration, continuous learning, and hands-on project development.",
                icon: BookOpen,
                color: "purple",
              },
              {
                title: "Values",
                description:
                  "Excellence, Innovation, Integrity, and Collaboration in all our endeavors and initiatives, promoting ethical technology development.",
                icon: Award,
                color: "indigo",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center mb-4`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white font-mono">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  })

  // Committee Section
  const CommitteeSection = memo(function CommitteeSection() {
    const coreCommittee = [
      {
        name: "Dr. Rajesh Kumar",
        position: "Faculty Advisor",
        department: "Computer Science & Engineering",
        email: "rajesh.kumar@college.edu",
        phone: "+91 98765 43210",
        experience: "15 years",
        specialization: "AI & Machine Learning",
      },
      {
        name: "Prof. Priya Sharma",
        position: "Co-Faculty Advisor",
        department: "Electronics & Communication",
        email: "priya.sharma@college.edu",
        phone: "+91 98765 43211",
        experience: "12 years",
        specialization: "IoT & Embedded Systems",
      },
      {
        name: "Dr. Amit Patel",
        position: "Technical Mentor",
        department: "Information Technology",
        email: "amit.patel@college.edu",
        phone: "+91 98765 43212",
        experience: "10 years",
        specialization: "Cybersecurity & Blockchain",
      },
    ]

    const studentCommittee = [
      {
        name: "Arjun Mehta",
        position: "President",
        year: "Final Year",
        department: "Computer Science & Engineering",
        email: "arjun.mehta@student.edu",
        phone: "+91 87654 32109",
        gpa: "9.2",
        projects: "12",
      },
      {
        name: "Sneha Gupta",
        position: "Vice President",
        year: "Third Year",
        department: "Electronics & Communication",
        email: "sneha.gupta@student.edu",
        phone: "+91 87654 32108",
        gpa: "9.0",
        projects: "8",
      },
      {
        name: "Rahul Singh",
        position: "Technical Head",
        year: "Final Year",
        department: "Information Technology",
        email: "rahul.singh@student.edu",
        phone: "+91 87654 32107",
        gpa: "8.9",
        projects: "15",
      },
      {
        name: "Ananya Joshi",
        position: "Events Coordinator",
        year: "Third Year",
        department: "Computer Science & Engineering",
        email: "ananya.joshi@student.edu",
        phone: "+91 87654 32106",
        gpa: "9.1",
        projects: "6",
      },
      {
        name: "Vikram Rao",
        position: "Treasurer",
        year: "Final Year",
        department: "Electronics & Communication",
        email: "vikram.rao@student.edu",
        phone: "+91 87654 32105",
        gpa: "8.8",
        projects: "9",
      },
      {
        name: "Kavya Nair",
        position: "Secretary",
        year: "Second Year",
        department: "Information Technology",
        email: "kavya.nair@student.edu",
        phone: "+91 87654 32104",
        gpa: "9.3",
        projects: "4",
      },
    ]

    const departmentHeads = [
      {
        name: "Dr. Suresh Reddy",
        position: "Head of Department",
        department: "Computer Science & Engineering",
        email: "suresh.reddy@college.edu",
        phone: "+91 98765 43213",
        experience: "20 years",
        students: "450",
        faculty: "25",
      },
      {
        name: "Prof. Meera Jain",
        position: "Head of Department",
        department: "Electronics & Communication",
        email: "meera.jain@college.edu",
        phone: "+91 98765 43214",
        experience: "18 years",
        students: "380",
        faculty: "22",
      },
      {
        name: "Dr. Kiran Verma",
        position: "Head of Department",
        department: "Information Technology",
        email: "kiran.verma@college.edu",
        phone: "+91 98765 43215",
        experience: "16 years",
        students: "320",
        faculty: "18",
      },
      {
        name: "Prof. Ravi Gupta",
        position: "Head of Department",
        department: "Mechanical Engineering",
        email: "ravi.gupta@college.edu",
        phone: "+91 98765 43216",
        experience: "22 years",
        students: "280",
        faculty: "20",
      },
      {
        name: "Dr. Sunita Agarwal",
        position: "Head of Department",
        department: "Civil Engineering",
        email: "sunita.agarwal@college.edu",
        phone: "+91 98765 43217",
        experience: "19 years",
        students: "220",
        faculty: "16",
      },
    ]

    return (
      <section id="committee" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 font-mono">Leadership</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">Committee Structure</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet our dedicated team of faculty advisors, student leaders, and department heads who drive innovation
              and excellence.
            </p>
          </div>

          {/* Core Committee */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-3xl font-bold text-white font-mono">Core Committee</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {coreCommittee.map((member, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-mono">{member.name}</h4>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-2 font-mono">
                        {member.position}
                      </Badge>
                      <p className="text-slate-400 text-sm mb-4">{member.department}</p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-slate-300">
                        <Mail className="w-4 h-4 mr-2 text-indigo-400" />
                        <a href={`mailto:${member.email}`} className="hover:text-white transition-colors font-mono">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-4 h-4 mr-2 text-indigo-400" />
                        <span className="font-mono">{member.phone}</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Clock className="w-4 h-4 mr-2 text-indigo-400" />
                        <span className="font-mono">{member.experience} experience</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Star className="w-4 h-4 mr-2 text-indigo-400" />
                        <span className="font-mono">{member.specialization}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Committee */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <Users className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-3xl font-bold text-white font-mono">Student Committee</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {studentCommittee.map((member, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2 font-mono">{member.name}</h4>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-2 font-mono">
                        {member.position}
                      </Badge>
                      <p className="text-slate-400 text-sm font-mono">
                        {member.year} • {member.department}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-slate-300">
                        <Mail className="w-3 h-3 mr-2 text-purple-400" />
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-white transition-colors text-xs font-mono"
                        >
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-3 h-3 mr-2 text-purple-400" />
                        <span className="text-xs font-mono">{member.phone}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-slate-300">
                          <Star className="w-3 h-3 mr-1 text-purple-400" />
                          <span className="text-xs font-mono">GPA: {member.gpa}</span>
                        </div>
                        <div className="flex items-center text-slate-300">
                          <Code className="w-3 h-3 mr-1 text-purple-400" />
                          <span className="text-xs font-mono">{member.projects} projects</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Department Heads */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Building className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-3xl font-bold text-white font-mono">Department Heads</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentHeads.map((head, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2 font-mono">{head.name}</h4>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-2 font-mono">
                        {head.position}
                      </Badge>
                      <p className="text-slate-400 text-sm">{head.department}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-slate-300">
                        <Mail className="w-3 h-3 mr-2 text-green-400" />
                        <a
                          href={`mailto:${head.email}`}
                          className="hover:text-white transition-colors text-xs font-mono"
                        >
                          {head.email}
                        </a>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Phone className="w-3 h-3 mr-2 text-green-400" />
                        <span className="text-xs font-mono">{head.phone}</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Clock className="w-3 h-3 mr-2 text-green-400" />
                        <span className="text-xs font-mono">{head.experience} experience</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-slate-300">
                          <Users className="w-3 h-3 mr-1 text-green-400" />
                          <span className="text-xs font-mono">{head.students} students</span>
                        </div>
                        <div className="flex items-center text-slate-300">
                          <GraduationCap className="w-3 h-3 mr-1 text-green-400" />
                          <span className="text-xs font-mono">{head.faculty} faculty</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  })

  // Events Section
  const EventsSection = memo(function EventsSection() {
    const upcomingEvents = [
      {
        title: "Annual Technical Symposium 2024",
        date: "March 15-16, 2024",
        status: "upcoming",
        description: "Two-day technical conference featuring industry experts, workshops, and project exhibitions.",
        attendees: 500,
        venue: "Main Auditorium",
        registration: "Open",
      },
      {
        title: "AI/ML Workshop Series",
        date: "February 20-22, 2024",
        status: "upcoming",
        description: "Hands-on workshop on Machine Learning and Artificial Intelligence applications.",
        attendees: 100,
        venue: "Computer Lab",
        registration: "Open",
      },
      {
        title: "Industry Connect Webinar",
        date: "February 10, 2024",
        status: "upcoming",
        description: "Virtual session with industry professionals sharing insights on current trends.",
        attendees: 200,
        venue: "Online",
        registration: "Closed",
      },
    ]

    const pastEvents = [
      {
        title: "Hackathon 2023",
        date: "December 15-16, 2023",
        status: "completed",
        description: "48-hour coding challenge with innovative solutions to real-world problems.",
        attendees: 150,
        winner: "Team InnovateTech",
      },
      {
        title: "Technical Paper Presentation",
        date: "November 20, 2023",
        status: "completed",
        description: "Students presented research papers on emerging technologies.",
        attendees: 80,
        papers: 25,
      },
      {
        title: "Industry Visit - Tech Corp",
        date: "October 25, 2023",
        status: "completed",
        description: "Educational visit to leading technology company for practical exposure.",
        attendees: 60,
        duration: "Full Day",
      },
    ]

    return (
      <section id="events" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30 font-mono">Activities</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">Events</h2>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 font-mono">Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1 mb-4 lg:mb-0">
                        <div className="flex items-center space-x-4 mb-3">
                          <h4 className="text-xl font-semibold text-white font-mono">{event.title}</h4>
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 font-mono">
                            {event.status}
                          </Badge>
                          <Badge
                            variant={event.registration === "Open" ? "default" : "secondary"}
                            className="font-mono"
                          >
                            {event.registration}
                          </Badge>
                        </div>
                        <p className="text-slate-300 mb-3">{event.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="font-mono">{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span className="font-mono">{event.attendees} expected</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 font-mono">Past Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <CardTitle className="text-white text-lg font-mono">{event.title}</CardTitle>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30 font-mono">
                        {event.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-300">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span className="font-mono">{event.attendees} participants</span>
                      </div>
                      {event.winner && (
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span className="font-mono">Winner: {event.winner}</span>
                        </div>
                      )}
                      {event.papers && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-mono">{event.papers} papers presented</span>
                        </div>
                      )}
                      {event.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-mono">{event.duration}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  })

  // Projects Section
  const ProjectsSection = memo(function ProjectsSection() {
    const projects = [
      {
        title: "Smart City Initiative",
        description:
          "Developing a comprehensive smart city management system using IoT sensors, AI analytics, and real-time data processing.",
        image: "/placeholder.svg?height=100&width=100",
        tech: ["IoT", "AI", "React", "Node.js"],
        status: "In Progress",
        team: "12 members",
      },
      {
        title: "Autonomous Robotics Lab",
        description:
          "Building and programming autonomous robots for various applications including navigation, object detection, and task automation.",
        image: "/placeholder.svg?height=100&width=100",
        tech: ["Python", "ROS", "Computer Vision", "Arduino"],
        status: "Active",
        team: "8 members",
      },
      {
        title: "Cybersecurity Framework",
        description:
          "Developing a comprehensive cybersecurity framework with threat detection, vulnerability assessment, and incident response.",
        image: "/placeholder.svg?height=100&width=100",
        tech: ["Python", "Blockchain", "Machine Learning", "Cryptography"],
        status: "Completed",
        team: "6 members",
      },
      {
        title: "Quantum Computing Research",
        description:
          "Exploring quantum algorithms and their applications in solving complex computational problems and optimization.",
        image: "/placeholder.svg?height=100&width=100",
        tech: ["Qiskit", "Python", "Mathematics", "Physics"],
        status: "Research Phase",
        team: "4 members",
      },
      {
        title: "Blockchain Voting System",
        description:
          "Creating a secure, transparent, and decentralized voting system using blockchain technology for democratic processes.",
        image: "/placeholder.svg?height=100&width=100",
        tech: ["Solidity", "Web3", "React", "Ethereum"],
        status: "Testing",
        team: "10 members",
      },
      {
        title: "AR/VR Learning Platform",
        description:
          "Developing an immersive learning platform using augmented and virtual reality for enhanced educational experiences.",
        image: "/placeholder.svg?height=100&width=100",
        tech: ["Unity", "C#", "ARCore", "Oculus SDK"],
        status: "Beta",
        team: "15 members",
      },
    ]

    return (
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30 font-mono">Innovations</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">Projects</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge projects that push the boundaries of technology and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 font-mono">{project.title}</h4>
                    <Badge
                      className={`mb-3 font-mono ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-300 border-green-500/30"
                          : project.status === "In Progress"
                            ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                            : project.status === "Active"
                              ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                              : project.status === "Testing"
                                ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                : project.status === "Beta"
                                  ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                                  : "bg-slate-500/20 text-slate-300 border-slate-500/30"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-slate-300 mb-4 text-sm">{project.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-slate-400 text-sm">
                      <Users className="w-4 h-4 mr-2 text-indigo-400" />
                      <span className="font-mono">{project.team}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-slate-600 text-slate-400 font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  })

  // Contact Section
  const ContactSection = memo(function ContactSection() {
    return (
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30 font-mono">Get in Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">Contact</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { label: "Email", value: "techclub@college.edu", icon: Mail },
                  { label: "Phone", value: "+91 12345 67890", icon: Phone },
                  { label: "Address", value: "Engineering College Campus, City", icon: MapPin },
                  { label: "Website", value: "www.techclub.edu", icon: Globe },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 font-mono">{contact.label}</div>
                      <div className="text-white font-mono">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono">Send Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-300 mb-2 font-mono">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none font-mono"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-2 font-mono">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none font-mono"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2 font-mono">Subject</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none font-mono"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2 font-mono">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none font-mono"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-mono">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  })

  // Footer
  const Footer = memo(function Footer() {
    return (
      <footer className="py-12 px-6 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-md">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-300 font-mono">TechClub Student Society</span>
            </div>
            <div className="text-slate-400 text-sm font-mono">© 2024 TechClub. All rights reserved.</div>
          </div>
        </div>
      </footer>
    )
  })

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className={`min-h-screen text-white overflow-x-hidden relative ${firaCode.variable}`}>
      <FuturisticHeroBackground />

      <div className="relative z-10">
        <Header isScrolled={isScrolled} />
        <HeroSection />
        <AboutSection />
        <CommitteeSection />
        <EventsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-slate-400">
          <div className="text-xs font-mono">SCROLL</div>
          <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"></div>
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}

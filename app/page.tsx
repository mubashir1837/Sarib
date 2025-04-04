import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Briefcase } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceCard from "@/components/experience-card"
import CertificationCard from "@/components/certification-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-900 to-black text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-purple-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-purple-400"><Briefcase/></span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-purple-400">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-purple-400">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-purple-400">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-purple-400">
              Experience
            </Link>
            <Link href="#certifications" className="text-sm font-medium transition-colors hover:text-purple-400">
              Certifications
            </Link>
            <Link href="#education" className="text-sm font-medium transition-colors hover:text-purple-400">
              Education
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/saribmanzoor/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:42313041@ncb.qau.edu.pk">
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-purple-300 sm:text-5xl xl:text-6xl/none">
                    Sarib Manzoor
                  </h1>
                  <p className="max-w-[600px] text-purple-200 md:text-xl">
                    Bioinformatician | C++ & Python Developer | Software Project Manager
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://www.linkedin.com/in/saribmanzoor/" target="_blank" rel="noopener noreferrer">
                    <Button className="group bg-purple-600 hover:bg-purple-700">
                      Connect on LinkedIn
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-900/30">
                      View Projects
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-full border border-purple-600 bg-black md:w-[400px]">
                  <Image
                    src="/hero.png"
                    alt="Sarib Manzoor"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-purple-900/30 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-300 sm:text-4xl md:text-5xl">About Me</h2>
              <div className="mx-auto max-w-[700px] space-y-4 text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <p>
                  As a Bioinformatics student at the National Center for Bioinformatics, Quaid-e-Azam University,
                  Islamabad, I am captivated by the fusion of biology, computer science, mathematics, and statistics.
                  With a solid foundation in Python and C++, I am actively honing my skills in data structures and
                  algorithms to address real-world challenges in biological data analysis.
                </p>
                <p>
                  My expertise includes computational drug design (molecular docking), RNA-seq analysis, and sequence
                  alignment algorithms for both pairwise and multiple sequence alignments. I am particularly excited
                  about the transformative potential of quantum computing in advancing bioinformatics.
                </p>
                <p>
                  I am passionate about bridging the gap between raw data and actionable insights, viewing each dataset
                  as a puzzle, every algorithm as a tool, and each project as a step toward innovative solutions in
                  biological and health sciences. I thrive on tackling complex challenges and am eager to explore
                  collaborative, forward-thinking approaches to drive progress in bioinformatics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-300 sm:text-4xl md:text-5xl">Projects</h2>
              <p className="mx-auto max-w-[700px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Historical Weather Forecasting System"
                description="A system developed in C++ that analyzes historical weather data to predict future weather patterns."
                tags={["C++", "Data Analysis", "Forecasting"]}
                imageUrl="/weather.png"
                projectUrl="#"
              />
              <ProjectCard
                title="Contact Management System"
                description="A comprehensive contact management solution built with C++ using object-oriented programming principles."
                tags={["C++", "OOP", "Data Management"]}
                imageUrl="/contact.jpeg"
                projectUrl="#"
              />
              <ProjectCard
                title="File Compression & Decompression"
                description="A program implementing the Run-Length Encoding (RLE) algorithm for efficient file compression and decompression."
                tags={["C++", "Algorithms", "Data Compression"]}
                imageUrl="/file.png"
                projectUrl="#"
              />
              <ProjectCard
                title="Multi-Threaded Web Server"
                description="A server capable of handling multiple HTTPS requests simultaneously using socket programming and multi-threading concepts."
                tags={["C++", "Socket Programming", "Multi-threading"]}
                imageUrl="/web-server.png"
                projectUrl="#"
              />
              <ProjectCard
                title="RNA-seq Analysis Pipeline"
                description="A bioinformatics pipeline for analyzing RNA sequencing data to identify gene expression patterns."
                tags={["Python", "Bioinformatics", "Data Analysis"]}
                imageUrl="/rna.png"
                projectUrl="#"
              />
              <ProjectCard
                title="Molecular Docking Tool"
                description="A computational tool for predicting the binding orientation of small molecules to their target proteins."
                tags={["Python", "Molecular Modeling", "Drug Design"]}
                imageUrl="/dock.jpeg"
                projectUrl="#"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-purple-900/30 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-300 sm:text-4xl md:text-5xl">Skills</h2>
              <p className="mx-auto max-w-[700px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I've developed expertise in various technologies and methodologies throughout my career.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <div className="mb-10">
                <h3 className="mb-4 text-xl font-semibold text-purple-300">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="C++" />
                  <SkillBadge name="Python" />
                  <SkillBadge name="R" />
                  <SkillBadge name="SQL" />
                  <SkillBadge name="Bash" />
                </div>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 text-xl font-semibold text-purple-300">Bioinformatics</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Sequence Alignment" />
                  <SkillBadge name="RNA-seq Analysis" />
                  <SkillBadge name="Molecular Docking" />
                  <SkillBadge name="Phylogenetics" />
                  <SkillBadge name="Structural Bioinformatics" />
                  <SkillBadge name="Genomics" />
                </div>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 text-xl font-semibold text-purple-300">Project Management</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Project Planning" />
                  <SkillBadge name="Software Project Management" />
                  <SkillBadge name="Agile Methodologies" />
                  <SkillBadge name="Team Coordination" />
                  <SkillBadge name="Resource Allocation" />
                </div>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 text-xl font-semibold text-purple-300">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Git" />
                  <SkillBadge name="BLAST" />
                  <SkillBadge name="PyMOL" />
                  <SkillBadge name="Jupyter Notebooks" />
                  <SkillBadge name="BioPython" />
                  <SkillBadge name="Linux" />
                </div>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 text-xl font-semibold text-purple-300">Data Analysis</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Statistical Analysis" />
                  <SkillBadge name="Data Visualization" />
                  <SkillBadge name="Machine Learning" />
                  <SkillBadge name="Big Data" />
                  <SkillBadge name="Data Mining" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-300 sm:text-4xl md:text-5xl">
                Experience
              </h2>
              <p className="mx-auto max-w-[700px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My professional journey and the roles I've held throughout my career.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl space-y-8">
              <ExperienceCard
                title="Ambassador"
                company="Tech Fest Gala"
                period="November 2024 - December 2024"
                description="Served as an ambassador for the Tech Fest Gala, promoting technological innovation and facilitating connections between participants and industry professionals."
                technologies={["Event Management", "Networking", "Technology Promotion"]}
              />
              <ExperienceCard
                title="C++ Developer"
                company="Digital Empowerment Network"
                period="August 2024"
                description="In this 4-week internship, I learned the core concepts of OOP while working with classes, objects, and functions. Developed projects including a Historical Weather Forecasting System, Contact Management System, File Compression & Decompression program using RLE algorithm, and a Multi-Threaded Web Server to handle multiple HTTPS requests simultaneously using socket programming."
                technologies={["C++", "OOP", "Socket Programming", "Multi-threading", "Algorithms"]}
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="bg-purple-900/30 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-300 sm:text-4xl md:text-5xl">
                Certifications
              </h2>
              <p className="mx-auto max-w-[700px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Professional certifications and courses I've completed to enhance my skills and knowledge.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl grid grid-cols-1 gap-6 md:grid-cols-2">
              <CertificationCard
                title="Project Management"
                issuer="LinkedIn Learning"
                date="2023"
                description="Comprehensive training in project management methodologies, tools, and best practices."
              />
              <CertificationCard
                title="C++ Basics: Selection and Iteration"
                issuer="LinkedIn Learning"
                date="2023"
                description="Fundamental concepts of C++ programming with a focus on selection statements and iteration structures."
              />
              <CertificationCard
                title="Linear Algebra for Machine Learning and Data Science"
                issuer="Coursera"
                date="2023"
                description="Essential linear algebra concepts and their applications in machine learning and data science."
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-300 sm:text-4xl md:text-5xl">Education</h2>
              <p className="mx-auto max-w-[700px] text-purple-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My academic background and educational qualifications.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="rounded-lg border border-purple-700 bg-purple-900/20 p-6">
                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-purple-300">Bachelor of Science - BS, Bioinformatics</h3>
                    <p className="text-purple-200">Quaid-i-Azam University, Islamabad</p>
                  </div>
                  <div className="text-sm font-medium text-purple-400">October 2023 - July 2027</div>
                </div>
                <p className="text-purple-100">
                  Studying at the National Center for Bioinformatics, focusing on the intersection of biology, computer
                  science, mathematics, and statistics. Developing expertise in computational biology, genomics, and
                  bioinformatics tools and methodologies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-800 py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-center text-sm leading-loose text-purple-300 md:text-left">
              © {new Date().getFullYear()} Sarib Manzoor. All rights reserved.
            </p>
            <p className="text-center text-sm leading-loose text-purple-300 md:text-left flex items-center gap-1">
              Made with <span className="text-red-500">❤</span> by
              <Link
                href="https://www.linkedin.com/in/mubashirali3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 hover:underline ml-1"
              >
                Mubashir Ali
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/saribmanzoor/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:42313041@ncb.qau.edu.pk">
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


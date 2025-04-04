import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export default function ExperienceCard({ title, company, period, description, technologies }: ExperienceCardProps) {
  return (
    <Card className="border-l-4 border-l-purple-500 bg-purple-900/20 border-purple-700">
      <CardHeader>
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <CardTitle className="text-purple-300">{title}</CardTitle>
            <CardDescription className="text-purple-200">{company}</CardDescription>
          </div>
          <div className="text-sm font-medium text-purple-400">{period}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-purple-100">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-purple-800 text-purple-200 hover:bg-purple-700">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


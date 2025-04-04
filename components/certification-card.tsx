import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  description: string
}

export default function CertificationCard({ title, issuer, date, description }: CertificationCardProps) {
  return (
    <Card className="bg-purple-900/20 border-purple-700 hover:shadow-md transition-all">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-purple-300">{title}</CardTitle>
          <div className="flex justify-between items-center">
            <CardDescription className="text-purple-200">{issuer}</CardDescription>
            <span className="text-sm font-medium text-purple-400">{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-purple-100">{description}</p>
      </CardContent>
    </Card>
  )
}


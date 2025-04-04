import { Badge } from "../components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="px-3 py-1 text-sm font-medium border-purple-700 text-purple-200 hover:bg-purple-800/50"
    >
      {name}
    </Badge>
  )
}


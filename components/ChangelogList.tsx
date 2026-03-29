import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Bug, Sparkles, Zap } from "lucide-react"
import { FormatDistanceToNow } from "./FromatDistanceToNow"

const categoryConfig = {
  new_feature: {
    label: 'New Feature',
    icon: Sparkles,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  },
  improvement: {
    label: 'Improvement',
    icon: Zap,
    color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  },
  bug_fix: {
    label: 'Bug Fix',
    icon: Bug,
    color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
}
export type ChangelogEntry = {
  id: string
  createdAt: Date
  title: string
  content: string
  category: "new_feature" | "improvement" | "bug_fix"
  projectId: string
  user: {
    id: string
    name: string
    image: string | null
    usersProjects: {
      role: "ADMIN" | "MEMBER"
    }[]
  } | null
}

interface ChangelogListProps {
  entries: ChangelogEntry[],
}

export function ChangelogList({ entries}: ChangelogListProps) {

  return (
    <Accordion type="multiple" className="space-y-4"
      value={[entries[0].id]}
    >
      {entries.map((entry) => {
        const config = categoryConfig[entry.category] || categoryConfig.new_feature
        const Icon = config.icon
        const user = entry.user
        const userRole = user?.usersProjects?.[0]?.role

        return (
          <AccordionItem
            key={entry.id}
            value={entry.id}
            className="border rounded-lg bg-card overflow-hidden"
          >
            <div className="relative">
              <AccordionTrigger className="w-full px-2 py-2 pr-12 hover:no-underline hover:bg-muted/50 transition-colors text-left">
                <div className="flex flex-col items-start gap-2 w-full">
                  <Badge className={config.color}>
                    <Icon className="h-3 w-3 mr-1" />
                    {config.label}
                  </Badge>
                  <span className="font-semibold sm:text-xl wrap-break-word w-full">{entry.title}</span>
                </div>
              </AccordionTrigger>
            </div>

            <AccordionContent className="px-4 pb-6 pt-2 h-full">
              {/* Author and date info */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                {user ? (
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={user.image ?? undefined} />
                      <AvatarFallback className="text-xs">
                        {user.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{user.name}</span>
                    {userRole && (
                      <Badge variant="outline" className="text-xs capitalize">
                        {userRole.toLowerCase()}
                      </Badge>
                    )}
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">Anonymous</span>
                )}
                <time className="text-xs text-muted-foreground" dateTime={entry.createdAt.toString()}>
                  <FormatDistanceToNow createdAt={entry.createdAt} />
                </time>

              </div>

              {/* Changelog content */}
              <div
                className="prose prose-sm dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: entry.content }}
              />
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

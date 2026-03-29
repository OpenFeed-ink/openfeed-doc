import { Logo } from '../Logo/Logo'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo withName />
            </div>
            <p className="text-sm text-muted-foreground">Open source feedback for growing products.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</a></li>
              <li><a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Developers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/OpenFeed-ink/openfeed" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              <li><Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><a href="https://www.npmjs.com/package/@openfeed-ink/widget" className="text-muted-foreground hover:text-foreground transition-colors">npm package</a></li>
              <li><Link href="/docs/self-hosting" className="text-muted-foreground hover:text-foreground transition-colors">Self-hosting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms_of_service_and_privacy_policy" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><a href="https://www.linkedin.com/in/ali-amer22" className="text-muted-foreground hover:text-foreground transition-colors">Linkedin</a></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Built with ❤️ by The OpenFeed Team</p>
          <p className="mt-1">© {new Date().getFullYear()} OpenFeed. AGPL-3.0 Licensed.</p>
        </div>
      </div>
    </footer>
  )
}

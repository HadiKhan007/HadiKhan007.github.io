#!/bin/bash

echo "╔════════════════════════════════════════════════════════════╗"
echo "║         PORTFOLIO DEPLOYMENT - QUICK DEPLOY                ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "This will commit and push all changes to deploy your fixed portfolio."
echo ""
echo "Changes to be deployed:"
echo "  • Dynamic routing for all 7 projects"
echo "  • WebP images (60-94% smaller)"
echo "  • Fixed 'View Details' buttons"
echo ""
read -p "Do you want to deploy now? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo ""
  echo "📦 Adding files..."
  git add .
  
  echo "💾 Committing changes..."
  git commit -m "Fix: Add dynamic routing and optimize images with WebP

- Created dynamic route for all project detail pages
- Converted all images to WebP format (60-94% size reduction)
- Fixed 'View Details' buttons for all 7 projects
- Updated sitemap to include all project URLs
- Consolidated project data structure

All projects now working: billionpound, spotswap, tijarat, winrate, fgs, fibber-ai, spendsail"
  
  echo "🚀 Pushing to GitHub..."
  git push origin main
  
  echo ""
  echo "╔════════════════════════════════════════════════════════════╗"
  echo "║                   DEPLOYMENT STARTED!                      ║"
  echo "╚════════════════════════════════════════════════════════════╝"
  echo ""
  echo "✅ Changes pushed to GitHub"
  echo "⏳ GitHub Actions is building your site..."
  echo "🌐 Your site will be live in 2-3 minutes at:"
  echo "   https://hadikhan007.github.io/"
  echo ""
  echo "📝 Next steps:"
  echo "   1. Wait 2-3 minutes"
  echo "   2. Visit your site"
  echo "   3. Clear browser cache (Cmd+Shift+R)"
  echo "   4. Test 'View Details' buttons"
  echo ""
else
  echo ""
  echo "❌ Deployment cancelled"
  echo ""
  echo "To deploy manually later, run:"
  echo "  git add ."
  echo "  git commit -m 'Fix: Add dynamic routing and WebP images'"
  echo "  git push origin main"
  echo ""
fi

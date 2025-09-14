@echo off
echo Starting deployment process...

cd /d "C:\Users\shahm\OneDrive\Desktop\New folder (2)\fanora"

echo Initializing git repository...
git init

echo Adding all files...
git add .

echo Committing changes...
git commit -m "Add Supabase authentication and RLS security"

echo Setting up remote repository...
git remote add origin https://github.com/shahmirzaidi1/fanora.git

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo Deployment complete! Check your Vercel dashboard.
pause

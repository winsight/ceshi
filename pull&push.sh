cd "Github repo"
cd ceshi
now=$(date "+%Y-%m-%d")
git add .
git commit -m "$now"
git pull
git push
exec /bin/zsh
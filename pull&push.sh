cd "Github repo"
cd ceshi
now=$(date "+%Y-%m-%d")
git add .
git commit -m "$now"
git push
exec /bin/zsh
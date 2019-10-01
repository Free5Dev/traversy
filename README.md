# -----------------------BASIC COMMANDS-----------------
## git version 
$git --version
## Initialize local Git Repository
$git init 
## git config username
$git config --global user.name 'mon username'
## git config email
$git config --global user.email 'monemail@gmail.com'
## Add File(s) To Index
$git add .
## Checkout Status of Working Tree 
$git status
## Commit changes In index 
$git commit -m "message repository" 
## Push To Remote Repository
> $git remote add origin lienDeRemoteGit
> $git push -u origin nomBranche(par defaut master)
## Clone Repository Into A New Directory
$git clone lienDeClonage 
## git checkout branch and switch 
$git checkout -b nomBranch 
## git merge 
$git merge nomBranch

## git cached 
$git rm --cached nomFichier 
# --------------------INSTALLING GIT -------------------
## Lunix (Debian)
$sudo apt-get install git 
## Lunix (Fedora)
$sudo yum install git 
## Mac 
[Lien de téléchargement pour **Mac**](http://git-scm.com/download/mac)
## Windows 
[Lien de téléchargement pour **Windows**](http://git-scm.com/download/win)

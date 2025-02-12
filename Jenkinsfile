pipeline {
    agent any
    tools{
        nodejs 'nodejs'
    }
    
    stages {
        stage("Installation") {
            steps {
                git url : "https://github.com/manavchit/9.1cj.git", branch : "main"
                bat "npm install --verbose -omit=optional"
            }
        }
        stage("npm run Build"){
            steps{
                
                bat "npm run build"
            }
        }
        
        stage("Testing"){
            steps{
                bat "npm test -- --passWithNoTests"
            }
        }
        
        stage("Code Analysis"){
            steps{
                bat "npx eslint src"
            }
        }
        
       
    
    }
}

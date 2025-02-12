pipeline {
    agent any
    tools{
        nodejs 'nodejs'
    }
    
    stages {
        stage("Install") {
            steps {
                git url : "https://github.com/moksh07b/Jenkins-pipeline.git", branch : "main"
                bat "npm install --verbose -omit=optional"
            }
        }
        stage("Build"){
            steps{
                
                bat "npm run build"
            }
        }
        
        stage("Test"){
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

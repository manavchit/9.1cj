
pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
    }
    
    stages {
        stage("Setup Dependencies") {
            steps {
                git branch: "main", url: "https://github.com/manavchit/9.1cj.git"
                bat "npm install --verbose --omit=optional"
            }
        }
        
        stage("Build Project") {
            steps {
                bat "npm run build"
            }
        }
        
        stage("Run Tests") {
            steps {
                bat "npm test -- --passWithNoTests"
            }
        }
        
        stage("Static Code Analysis") {
            steps {
                bat "npx eslint src"
            }
        }
    }
}
